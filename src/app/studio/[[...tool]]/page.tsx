import type { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { hasSanityConfig } from "@/sanity/lib/env";

export const metadata: Metadata = {
  title: "NodeVera Blog Studio",
};

export default function StudioPage() {
  if (!hasSanityConfig) {
    return (
      <main className="min-h-screen bg-navy-950 px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-300">
            Sanity Setup Required
          </p>
          <h1 className="mt-4 text-3xl font-black">Blog Studio is not connected yet.</h1>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Add NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and
            NEXT_PUBLIC_SANITY_API_VERSION to your environment variables, then
            restart the development server.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
