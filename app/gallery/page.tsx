"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { projectOrder } from "@/lib/projects";
import SectionHeader from "@/components/SectionHeader";

const R_AND_D = ["mobilis", "biomemory", "vic2d", "symbiosuits"] as const;

export default function GalleryPage() {
  const { t, dict } = useI18n();

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker={t("gallery.kicker")}
          title={t("gallery.title")}
          subtitle={t("gallery.subtitle")}
        />

        <div className="space-y-24 mt-16">
          {R_AND_D.map((slug) => {
            const meta = projectOrder.find((p) => p.slug === slug)!;
            const cardKey =
              slug === "mobilis"
                ? "mobilis"
                : slug === "biomemory"
                  ? "biomemory"
                  : slug === "vic2d"
                    ? "vic2d"
                    : "symbiosuits";
            const card = dict.projects.cards[cardKey];
            return (
              <section key={slug}>
                <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
                  <div>
                    <div
                      className="text-xs font-mono uppercase tracking-widest mb-2"
                      style={{ color: meta.accent }}
                    >
                      · {card.subtitle}
                    </div>
                    <h2 className="font-display font-semibold text-3xl md:text-4xl text-chrome-50">
                      {card.title}
                    </h2>
                  </div>
                  <Link
                    href={`/projects/${slug}`}
                    className="text-sm text-chrome-300 hover:text-chrome-50 transition inline-flex items-center gap-2"
                  >
                    Voir le projet →
                  </Link>
                </div>

                <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.4, delay: i * 0.03 }}
                      className="brick rounded-xl aspect-square relative overflow-hidden group"
                    >
                      <div
                        className="absolute inset-0 opacity-[0.08]"
                        style={{
                          background: `radial-gradient(circle at 30% 30%, ${meta.accent}, transparent 60%)`,
                        }}
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <div
                          className="text-2xl font-mono mb-2"
                          style={{ color: `${meta.accent}55` }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="text-[10px] text-chrome-500 uppercase tracking-widest">
                          {t("gallery.empty")}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
