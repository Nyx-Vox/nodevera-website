import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_FIELD_LENGTH = 2000;
const MAX_BODY_SIZE_BYTES = 50 * 1024;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_RATE_LIMIT_ENTRIES = 1000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanText(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanSubject(value: string) {
  return value.replace(/[\r\n]/g, " ").slice(0, 120);
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function pruneRateLimitStore(now: number) {
  if (rateLimitStore.size < MAX_RATE_LIMIT_ENTRIES) {
    return;
  }

  for (const [ip, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(ip);
    }
  }
}

function isRateLimited(ip: string) {
  const now = Date.now();
  pruneRateLimitStore(now);

  const entry = rateLimitStore.get(ip);

  if (!entry || entry.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return false;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);

  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

async function readJsonBody(request: Request) {
  const rawBody = await request.text();
  const bodySize = new TextEncoder().encode(rawBody).length;

  if (bodySize > MAX_BODY_SIZE_BYTES) {
    throw new Error("BODY_TOO_LARGE");
  }

  try {
    return JSON.parse(rawBody || "{}");
  } catch {
    throw new Error("INVALID_JSON");
  }
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          message: "Too many submissions. Please try again later.",
        },
        {
          status: 429,
        }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("CONTACT_FORM_CONFIG_ERROR", "Missing RESEND_API_KEY");

      return NextResponse.json(
        {
          message: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      console.error(
        "CONTACT_FORM_CONFIG_ERROR",
        "Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL"
      );

      return NextResponse.json(
        {
          message: "Contact email settings are missing.",
        },
        {
          status: 500,
        }
      );
    }

    let body: Record<string, unknown>;

    try {
      body = await readJsonBody(request);
    } catch (error) {
      const message = error instanceof Error ? error.message : "INVALID_BODY";

      return NextResponse.json(
        {
          message:
            message === "BODY_TOO_LARGE"
              ? "The submitted message is too large."
              : "Invalid request body.",
        },
        {
          status: message === "BODY_TOO_LARGE" ? 413 : 400,
        }
      );
    }

    const name = cleanText(body.name, 120);
    const company = cleanText(body.company, 160);
    const email = cleanText(body.email, 160).toLowerCase();
    const phone = cleanText(body.phone, 80);
    const service = cleanText(body.service, 120);
    const message = cleanText(body.message, MAX_FIELD_LENGTH);
    const website = cleanText(body.website, 120);
    const consultationType = cleanText(body.consultationType, 160);
    const packageName = cleanText(body.packageName, 160);
    const businessType = cleanText(body.businessType, 160);
    const preferredMode = cleanText(body.preferredMode, 120);
    const urgency = cleanText(body.urgency, 120);

    // Honeypot spam protection. Real users will not fill this hidden field.
    if (website) {
      return NextResponse.json(
        {
          message: "Message received.",
        },
        {
          status: 200,
        }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message: "Please provide your name, email, and message.",
        },
        {
          status: 400,
        }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          message: "Please provide a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const safeSubject = cleanSubject(service || "Website Contact");
    const subject = `New NodeVera Inquiry - ${safeSubject}`;

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Not provided");
    const safeService = escapeHtml(service || "Not provided");
    const safeConsultationType = escapeHtml(consultationType || "Not provided");
    const safePackageName = escapeHtml(packageName || "Not provided");
    const safeBusinessType = escapeHtml(businessType || "Not provided");
    const safePreferredMode = escapeHtml(preferredMode || "Not provided");
    const safeUrgency = escapeHtml(urgency || "Not provided");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const html = `
      <div style="font-family: Arial, sans-serif; background: #f8fafc; padding: 24px;">
        <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 18px; overflow: hidden; border: 1px solid #e2e8f0;">
          <div style="background: #06142b; padding: 24px;">
            <h1 style="margin: 0; color: #ffffff; font-size: 22px;">New NodeVera Website Inquiry</h1>
            <p style="margin: 8px 0 0; color: #67e8f9;">Securing Businesses. Building Trust.</p>
          </div>

          <div style="padding: 24px;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Company:</strong> ${safeCompany}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Phone:</strong> ${safePhone}</p>
            <p><strong>Service Needed:</strong> ${safeService}</p>
            <p><strong>Consultation Type:</strong> ${safeConsultationType}</p>
            <p><strong>Package Interest:</strong> ${safePackageName}</p>
            <p><strong>Business Type:</strong> ${safeBusinessType}</p>
            <p><strong>Preferred Mode:</strong> ${safePreferredMode}</p>
            <p><strong>Timeline:</strong> ${safeUrgency}</p>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

            <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
            <p style="line-height: 1.7; color: #334155;">${safeMessage}</p>
          </div>
        </div>
      </div>
    `;

    const text = `
New NodeVera Website Inquiry

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Service Needed: ${service || "Not provided"}
Consultation Type: ${consultationType || "Not provided"}
Package Interest: ${packageName || "Not provided"}
Business Type: ${businessType || "Not provided"}
Preferred Mode: ${preferredMode || "Not provided"}
Timeline: ${urgency || "Not provided"}

Message:
${message}
    `;

    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (result.error) {
      console.error("CONTACT_FORM_RESEND_ERROR", result.error);

      return NextResponse.json(
        {
          message: "Unable to send message right now.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        message: "Message sent successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("CONTACT_FORM_ERROR", error);

    return NextResponse.json(
      {
        message: "Unable to send your message right now.",
      },
      {
        status: 500,
      }
    );
  }
}
