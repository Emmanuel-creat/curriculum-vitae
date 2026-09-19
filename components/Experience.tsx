"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  const { t, dict } = useI18n();
  const items = dict.experience.items;

  return (
    <section id="experience" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker={t("experience.kicker")} title={t("experience.title")} />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-chrome-500 via-chrome-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block flex-1" />
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-ink-900 border-2 border-chrome-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-chrome-100" />
                  </div>
                </div>
                <div className="flex-1 pb-2">
                  <ExperienceCard item={item as any} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  item,
}: {
  item: { when: string; role: string; org: string; desc: string; href?: string };
}) {
  const inner = (
    <div className="brick brick-hover p-6">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <div className="text-xs font-mono uppercase tracking-widest text-chrome-500">
          {item.when}
        </div>
        {item.href && (
          <span className="text-xs text-accent">→ détails</span>
        )}
      </div>
      <h3 className="font-display font-semibold text-xl text-chrome-50 mt-2">
        {item.role}
      </h3>
      <div className="text-sm text-chrome-400 mt-1">{item.org}</div>
      <p className="text-sm text-chrome-300 mt-3 leading-relaxed">{item.desc}</p>
    </div>
  );

  return item.href ? (
    <Link href={item.href} className="block">
      {inner}
    </Link>
  ) : (
    inner
  );
}
