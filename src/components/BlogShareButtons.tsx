"use client";

import { useState } from "react";
import { Check, Copy, MessageCircle, Share2 } from "lucide-react";

type BlogShareButtonsProps = {
  title: string;
  url: string;
};

export default function BlogShareButtons({ title, url }: BlogShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  async function nativeShare() {
    if (!navigator.share) {
      await copyLink();
      return;
    }

    try {
      await navigator.share({
        title,
        url,
      });
    } catch {
      // User cancelled share sheet.
    }
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-600">
        Share this article
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={nativeShare}
          className="inline-flex items-center gap-2 rounded-full bg-navy-950 px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-cyan-500"
        >
          <Share2 className="h-4 w-4" />
          Share
        </button>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600"
        >
          <span className="text-sm font-black">in</span>
          LinkedIn
        </a>

        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>

        <button
          type="button"
          onClick={copyLink}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 transition hover:border-cyan-300 hover:text-cyan-600"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}
