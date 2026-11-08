"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";
import { galleryImages } from "@/lib/gallery";

const TEASER = Object.values(galleryImages).flat().slice(0, 8);

export default function GalleryTeaser() {
  const { t, lang } = useI18n();

  return (
    <section id="gallery" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker={t("gallery.kicker")}
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
        />

        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => {
            const img = TEASER[i];
            if (img) {
              return (
                <Link
                  key={img.src}
                  href="/gallery"
                  className="brick brick-hover aspect-square relative overflow-hidden group"
                  aria-label={img.alt[lang]}
                >
                  <img
                    src={img.src}
                    alt={img.alt[lang]}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full transition duration-500 group-hover:scale-[1.04] ${
                      img.kind === "cad" ? "object-contain bg-[#eef1f5] p-3" : "object-cover"
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink-950/90 to-transparent opacity-0 group-hover:opacity-100 transition">
                    <div className="text-xs text-chrome-100 leading-snug">{img.alt[lang]}</div>
                  </div>
                </Link>
              );
            }
            return (
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
            );
          })}
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
