"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

const INDEX = [
  { n: "01", label: "Mobilis", href: "/projects/mobilis" },
  { n: "02", label: "BioMemory", href: "/projects/biomemory" },
  { n: "03", label: "VIC2D", href: "/projects/vic2d" },
  { n: "04", label: "Symbiosuits", href: "/projects/symbiosuits" },
  { n: "05", label: "Calendrier BTI", href: "/projects/calendrier-bti" },
  { n: "06", label: "Arcade Online", href: "/projects/arcade-online" },
  { n: "07", label: "Safe Screen", href: "/projects/safe-screen" },
];

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/dna.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/70 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
      <div className="absolute top-24 left-0 right-0 h-px bg-white/5" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 pt-32 pb-16 min-h-[100vh] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex items-center"
        >
          <div className="grid md:grid-cols-[1fr_auto] gap-10 w-full items-center">
            <div>
              <div className="tag mb-8 !rounded-none border-l-2 !border-l-accent-bio !border-r-0 !border-t-0 !border-b-0 !bg-transparent px-3 py-1.5">
                <span className="dot dot-pulse text-accent-bio" />
                <span className="font-mono uppercase tracking-widest text-[11px] text-chrome-100">
                  {t("hero.badge")}
                </span>
              </div>

              <h1 className="font-display font-bold tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.9] uppercase">
                <span className="chrome-text">{t("hero.titleLine1")}</span>
                <br />
                <span className="text-chrome-50">{t("hero.titleLine2")}</span>
              </h1>

              <div className="mt-8 max-w-xl border-l-2 border-white/20 pl-5">
                <p className="text-base md:text-lg text-chrome-300 leading-relaxed">
                  {t("hero.subtitle")}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-0 items-stretch">
                <Link
                  href="#projects"
                  className="group inline-flex items-center gap-3 bg-chrome-50 text-ink-950 px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-white transition-all"
                >
                  {t("hero.ctaPrimary")}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 px-8 py-4 text-sm font-medium uppercase tracking-widest text-chrome-100 transition"
                >
                  {t("hero.ctaSecondary")}
                </Link>
              </div>
            </div>

            <nav
              aria-label="Projects index"
              className="hidden md:flex flex-col items-end gap-3 pr-2 border-r border-white/10 pr-6"
            >
              {INDEX.map((item, i) => (
                <Link
                  key={item.n}
                  href={item.href}
                  className={`group flex items-center gap-4 font-mono text-sm tracking-widest transition-all ${
                    i === 0
                      ? "text-chrome-50"
                      : "text-chrome-500 hover:text-chrome-200"
                  }`}
                >
                  <span className="text-[11px] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                  <span
                    className={`transition-all ${
                      i === 0 ? "text-2xl font-semibold" : "text-sm"
                    }`}
                  >
                    {item.n}
                  </span>
                  <span
                    className={`h-px transition-all ${
                      i === 0 ? "w-10 bg-chrome-50" : "w-3 bg-chrome-500"
                    }`}
                  />
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {[
            {
              tag: "R&D",
              n: "01",
              title: "Mobilis",
              sub: "Orthèse de rééducation",
              href: "/projects/mobilis",
              color: "#4ade80",
            },
            {
              tag: "R&D",
              n: "02",
              title: "BioMemory",
              sub: "Stockage moléculaire",
              href: "/projects/biomemory",
              color: "#22d3ee",
            },
            {
              tag: "Code",
              n: "05",
              title: "Calendrier BTI",
              sub: "Planning M2 BTI",
              href: "/projects/calendrier-bti",
              color: "#818cf8",
            },
          ].map((card) => (
            <Link
              key={card.n}
              href={card.href}
              className="group px-5 py-5 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-chrome-400">
                  {card.tag} · {card.n}
                </span>
                <span
                  className="w-1.5 h-1.5"
                  style={{ background: card.color }}
                />
              </div>
              <div className="font-display font-semibold text-lg text-chrome-50 mb-0.5">
                {card.title}
              </div>
              <div className="text-xs text-chrome-400 flex items-center justify-between">
                {card.sub}
                <span className="text-chrome-300 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
