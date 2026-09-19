"use client";

import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { t, dict } = useI18n();
  const qf = dict.about.quickfacts;

  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader kicker={t("about.kicker")} title={t("about.title")} />

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6 space-y-5 text-chrome-200 text-base md:text-lg leading-relaxed">
            <p>{t("about.body")}</p>
            <p>{t("about.body2")}</p>
          </div>

          <div className="md:col-span-3">
            <div className="brick rounded-2xl overflow-hidden aspect-[3/4] relative group">
              <img
                src="/images/iris.jpg"
                alt="Iris — regard curieux"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-[10px] uppercase tracking-widest text-chrome-300 font-mono">
                  · Observation
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="brick rounded-2xl p-5 space-y-4 h-full">
              <QuickFact label="📍" value={qf.location} />
              <QuickFact label="🎓" value={qf.study} />
              <QuickFact label="🔍" value={qf.available} />
              <QuickFact label="🛠" value={qf.stack} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 text-sm">
      <span className="text-lg">{label}</span>
      <span className="text-chrome-200 font-medium">{value}</span>
    </div>
  );
}
