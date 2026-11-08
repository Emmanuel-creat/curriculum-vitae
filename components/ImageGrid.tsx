"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import type { GalleryImage } from "@/lib/gallery";
import SafeImg from "./SafeImg";

export default function ImageGrid({ images, accent }: { images: GalleryImage[]; accent: string }) {
  const { lang } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (o + d + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open === null ? null : images[open];

  return (
    <>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: Math.min(i, 8) * 0.03 }}
            className="brick brick-hover aspect-square relative overflow-hidden group text-left"
            aria-label={img.alt[lang]}
          >
            <div className="absolute inset-0 flex items-center justify-center" style={{ color: `${accent}55` }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <path d="M8 3c8 4 8 14 0 18M16 3c-8 4-8 14 0 18M9 7h6M8.5 12h7M9 17h6" />
              </svg>
            </div>
            <SafeImg
              src={img.src}
              alt={img.alt[lang]}
              loading="lazy"
              className={`absolute inset-0 w-full h-full transition duration-500 group-hover:scale-[1.04] ${
                img.kind === "cad" ? "object-contain bg-[#eef1f5] p-3" : "object-cover"
              }`}
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink-950/90 via-ink-950/60 to-transparent opacity-0 group-hover:opacity-100 transition">
              <div className="text-xs text-chrome-100 leading-snug">{img.alt[lang]}</div>
              {img.credit && <div className="text-[10px] text-chrome-400 mt-1">© {img.credit}</div>}
            </div>
            <div className="absolute top-2 left-2 text-[10px] font-mono px-1.5 py-0.5 bg-ink-950/70" style={{ color: accent }}>
              {String(i + 1).padStart(2, "0")}
            </div>
          </motion.button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] bg-ink-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-10"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt[lang]}
        >
          <SafeImg
            key={current.src}
            src={current.src}
            alt={current.alt[lang]}
            className={`max-w-full max-h-[78vh] object-contain ${current.kind === "cad" ? "bg-[#eef1f5] p-4" : ""}`}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 text-sm text-chrome-200 text-center max-w-2xl">
            <span className="font-mono mr-2" style={{ color: accent }}>
              {String((open ?? 0) + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
            {current.alt[lang]}
            {current.credit && <span className="text-chrome-500"> · © {current.credit}</span>}
          </div>
          <div className="mt-4 flex gap-3" onClick={(e) => e.stopPropagation()}>
            <NavButton label={lang === "fr" ? "Précédente" : "Previous"} onClick={() => step(-1)} d="M15 6l-6 6 6 6" />
            <NavButton label={lang === "fr" ? "Fermer" : "Close"} onClick={close} d="M6 6l12 12M18 6L6 18" />
            <NavButton label={lang === "fr" ? "Suivante" : "Next"} onClick={() => step(1)} d="M9 6l6 6-6 6" />
          </div>
        </div>
      )}
    </>
  );
}

function NavButton({ label, onClick, d }: { label: string; onClick: () => void; d: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="brick brick-hover w-11 h-11 inline-flex items-center justify-center text-chrome-100"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
    </button>
  );
}
