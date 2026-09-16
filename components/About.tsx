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

        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 text-chrome-200 text-base md:text-lg leading-relaxed">
            <p>{t("about.body")}</p>
            <p>{t("about.body2")}</p>
          </div>

          <div className="md:col-span-2">
            <div className="brick rounded-2xl p-6 space-y-4">
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
