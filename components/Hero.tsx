"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Sparkle from "./Sparkle";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-90 hidden lg:block">
        <Sparkle size={520} />
      </div>
      <div className="absolute right-20 top-40 pointer-events-none opacity-40 lg:hidden">
        <Sparkle size={220} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="tag mb-6">
            <span className="dot text-accent-bio" />
            {t("hero.badge")}
          </div>

          <h1 className="font-display font-semibold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
            <span className="chrome-text">{t("hero.titleLine1")}</span>
            <br />
            <span className="text-chrome-50">{t("hero.titleLine2")}</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-chrome-300 max-w-2xl leading-relaxed">
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

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-sm text-chrome-400">
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
