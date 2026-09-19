"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

const GROUP_META = [
  { key: "bio", color: "#4ade80", icon: "🧬" },
  { key: "code", color: "#818cf8", icon: "⌨" },
  { key: "cao", color: "#facc15", icon: "◇" },
  { key: "fab", color: "#fb923c", icon: "⚙" },
  { key: "data", color: "#f472b6", icon: "📊" },
  { key: "embed", color: "#22d3ee", icon: "▤" },
  { key: "soft", color: "#c084fc", icon: "✱" },
] as const;

export default function Skills() {
  const { t, dict } = useI18n();

  return (
    <section id="skills" className="relative py-32 border-t border-white/5 overflow-hidden">
      <div
        className="absolute right-0 top-32 w-[420px] h-[420px] rounded-full opacity-30 blur-2xl pointer-events-none hidden lg:block"
        style={{
          backgroundImage: "url('/images/neuron.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "screen",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker={t("skills.kicker")}
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUP_META.map((meta, i) => {
            const group = dict.skills.groups[meta.key];
            return (
              <motion.div
                key={meta.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="brick brick-hover rounded-2xl p-6 relative overflow-hidden"
              >
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-[0.07] blur-2xl"
                  style={{ background: meta.color }}
                />
                <div className="relative flex items-start justify-between mb-4">
                  <div>
                    <div
                      className="text-xs font-mono uppercase tracking-widest mb-1"
                      style={{ color: meta.color }}
                    >
                      {meta.icon} {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display font-semibold text-lg text-chrome-50">
                      {group.name}
                    </h3>
                  </div>
                </div>
                <ul className="relative space-y-1.5 text-sm text-chrome-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className="inline-block w-1 h-1 rounded-full"
                        style={{ background: meta.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
