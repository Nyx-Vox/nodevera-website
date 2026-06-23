import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NodeVera on WhatsApp"
      className="floating-whatsapp group fixed bottom-5 right-5 z-50 hidden items-center gap-3 rounded-full border border-cyan-300/30 bg-navy-950 px-5 py-4 text-sm font-black text-white shadow-2xl shadow-navy-950/25 transition hover:-translate-y-1 hover:bg-cyan-500 hover:text-white md:inline-flex"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300 transition group-hover:bg-white/10">
        <MessageCircle className="h-5 w-5" />
      </span>

      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}