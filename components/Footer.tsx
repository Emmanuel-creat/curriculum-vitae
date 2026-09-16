"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-chrome-100 to-chrome-500 rounded-lg rotate-45" />
                <div className="absolute inset-1 bg-ink-950 rounded-md rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-chrome-100">
                  EB
                </div>
              </div>
              <div>
                <div className="font-display font-semibold">Emmanuel Bailly</div>
                <div className="text-xs text-chrome-400">{t("footer.role")}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-chrome-500 mb-3">
              {t("nav.contact")}
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:emmanuelbaillyem@gmail.com"
                  className="text-chrome-200 hover:text-chrome-50"
                >
                  emmanuelbaillyem@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+33622538718" className="text-chrome-200 hover:text-chrome-50">
                  +33 6 22 53 87 18
                </a>
              </li>
              <li className="text-chrome-400">Marseille, France</li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-chrome-500 mb-3">Web</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/emmanuel-bailly-929012286/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-chrome-200 hover:text-chrome-50"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Emmanuel-creat"
                  target="_blank"
                  rel="noreferrer"
                  className="text-chrome-200 hover:text-chrome-50"
                >
                  GitHub ↗
                </a>
              </li>
              <li>
                <Link href="/gallery" className="text-chrome-200 hover:text-chrome-50">
                  {t("nav.gallery")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-chrome-500">
          <div>
            © {year} Emmanuel Bailly · {t("footer.rights")}
          </div>
          <div className="font-mono">{t("footer.built")}</div>
        </div>
      </div>
    </footer>
  );
}
