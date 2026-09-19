"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

export default function GalleryTeaser() {
  const { t } = useI18n();

  return (
    <section id="gallery" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker={t("gallery.kicker")}
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
        />

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="brick aspect-square relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-chrome-500/10 via-transparent to-chrome-500/5" />
              <div className="absolute inset-0 flex items-center justify-center text-chrome-500 text-xs font-mono">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="absolute bottom-2 left-3 text-xs text-chrome-500 font-mono">
                {t("gallery.empty")}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm text-chrome-200 hover:text-chrome-50 transition"
          >
            {t("gallery.viewAll")}
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
