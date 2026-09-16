"use client";

import { useI18n } from "@/lib/i18n";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          kicker={t("contact.kicker")}
          title={t("contact.title")}
          subtitle={t("contact.body")}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl">
          <ContactCard
            label={t("contact.email")}
            value="emmanuelbaillyem@gmail.com"
            href="mailto:emmanuelbaillyem@gmail.com"
            icon="✉"
          />
          <ContactCard
            label={t("contact.call")}
            value="+33 6 22 53 87 18"
            href="tel:+33622538718"
            icon="☎"
          />
          <ContactCard
            label={t("contact.linkedin")}
            value="/emmanuel-bailly"
            href="https://www.linkedin.com/in/emmanuel-bailly-929012286/"
            icon="in"
          />
          <ContactCard
            label={t("contact.github")}
            value="@Emmanuel-creat"
            href="https://github.com/Emmanuel-creat"
            icon="◉"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="brick brick-hover rounded-2xl p-6 group block"
    >
      <div className="text-xl mb-3 text-chrome-300">{icon}</div>
      <div className="text-xs uppercase tracking-widest text-chrome-500 mb-1">
        {label}
      </div>
      <div className="text-sm font-medium text-chrome-100 break-all group-hover:text-chrome-50 transition">
        {value}
      </div>
    </a>
  );
}
