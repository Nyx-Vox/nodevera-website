import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanText(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, 2000);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = cleanText(body.name);
    const company = cleanText(body.company);
    const email = cleanText(body.email);
    const phone = cleanText(body.phone);
    const service = cleanText(body.service);
    const message = cleanText(body.message);
    const website = cleanText(body.website);

    // Honeypot spam protection
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

    if (!process.env.RESEND_API_KEY) {
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
      return NextResponse.json(
        {
          message: "Contact email settings are missing.",
        },
        {
          status: 500,
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

    const subject = `New NodeVera Inquiry - ${service || "Website Contact"}`;

    const html = `
      <div style="font-family: Arial, sans-serif; background: #f8fafc; padding: 24px;">
        <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 18px; overflow: hidden; border: 1px solid #e2e8f0;">
          <div style="background: #06142b; padding: 24px;">
            <h1 style="margin: 0; color: #ffffff; font-size: 22px;">New NodeVera Website Inquiry</h1>
            <p style="margin: 8px 0 0; color: #67e8f9;">Securing Businesses. Building Trust.</p>
          </div>

          <div style="padding: 24px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Service Needed:</strong> ${service || "Not provided"}</p>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

            <p style="margin-bottom: 8px;"><strong>Message:</strong></p>
            <p style="line-height: 1.7; color: #334155;">${message.replace(
              /\n/g,
              "<br />"
            )}</p>
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
      return NextResponse.json(
        {
          message: result.error.message || "Unable to send message.",
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