"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="tag mb-6">
              <span className="dot text-accent-bio" />
              {t("hero.badge")}
            </div>

            <h1 className="font-display font-semibold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.95]">
              <span className="chrome-text">{t("hero.titleLine1")}</span>
              <br />
              <span className="text-chrome-50">{t("hero.titleLine2")}</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-chrome-300 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-chrome-50 text-ink-950 px-6 py-3 text-sm font-medium hover:bg-white transition-all shadow-glow"
              >
                {t("hero.ctaPrimary")}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 hover:border-white/30 px-6 py-3 text-sm font-medium text-chrome-100 transition"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-chrome-400">
              <div className="flex items-center gap-2">
                <span className="dot text-accent" />
                {t("hero.role")}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-chrome-500">·</span>
                {t("hero.focus")}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-[3/4] w-full">
              <div className="absolute -inset-8 bg-accent-embed/10 blur-3xl rounded-[3rem]" />
              <div className="absolute -inset-2 bg-gradient-to-br from-accent-embed/40 via-transparent to-accent-bio/20 rounded-[2.25rem] blur-md" />
              <div className="brick rounded-[2rem] overflow-hidden h-full relative">
                <img
                  src="/images/dna.jpg"
                  alt="ADN — bio-ingénierie"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="tag !bg-ink-950/60 !border-white/20 backdrop-blur-md">
                    <span className="dot text-accent-embed" />
                    Bio-engineering
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-chrome-300 bg-ink-950/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                    01/07
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-chrome-500 text-xs uppercase tracking-widest">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          scroll ↓
        </motion.div>
      </div>
    </section>
  );
}
