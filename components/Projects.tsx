"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";
import { projectOrder } from "@/lib/projects";

const CARD_KEYS = [
  { key: "mobilis", slug: "mobilis" },
  { key: "biomemory", slug: "biomemory" },
  { key: "vic2d", slug: "vic2d" },
  { key: "symbiosuits", slug: "symbiosuits" },
  { key: "calendrier", slug: "calendrier-bti" },
  { key: "arcade", slug: "arcade-online" },
  { key: "safescreen", slug: "safe-screen" },
] as const;

export default function Projects() {
  const { t, dict } = useI18n();

  return (
    <section id="projects" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker={t("projects.kicker")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CARD_KEYS.map((c, i) => {
            const card = dict.projects.cards[c.key];
            const meta = projectOrder.find((p) => p.slug === c.slug);
            const isRnd = card.tag === "R&D";
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <Link
                  href={`/projects/${c.slug}`}
                  className="group block brick brick-hover p-6 h-full relative overflow-hidden"
                >
                  <div
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.08] blur-3xl"
                    style={{ background: meta?.accent }}
                  />
                  <div className="relative flex items-center justify-between mb-6">
                    <span
                      className="tag"
                      style={{
                        color: meta?.accent,
                        borderColor: `${meta?.accent}33`,
                        background: `${meta?.accent}0d`,
                      }}
                    >
                      <span className="dot" style={{ color: meta?.accent }} />
                      {isRnd ? t("projects.tagRnd") : t("projects.tagCode")}
                    </span>
                    <span className="text-xs font-mono text-chrome-500">
                      {String(i + 1).padStart(2, "0")} / 07
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-2xl text-chrome-50">
                    {card.title}
                  </h3>
                  <div className="text-sm text-chrome-400 mt-1">{card.subtitle}</div>
                  <p className="text-sm text-chrome-300 mt-4 leading-relaxed">
                    {card.summary}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-chrome-200 group-hover:text-chrome-50 transition">
                    {t("projects.viewProject")}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
