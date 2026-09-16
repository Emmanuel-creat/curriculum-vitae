"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { useEffect, useState } from "react";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-br from-chrome-100 to-chrome-500 rounded-md rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <div className="absolute inset-1 bg-ink-950 rounded-sm rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-sm text-chrome-100">
              EB
            </div>
          </div>
          <span className="font-display font-semibold text-sm tracking-wide hidden sm:block">
            Emmanuel Bailly
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          <NavLink href="/#about">{t("nav.about")}</NavLink>
          <NavLink href="/#skills">{t("nav.skills")}</NavLink>
          <NavLink href="/#experience">{t("nav.experience")}</NavLink>
          <NavLink href="/#projects">{t("nav.projects")}</NavLink>
          <NavLink href="/gallery">{t("nav.gallery")}</NavLink>
          <NavLink href="/#contact">{t("nav.contact")}</NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition"
            aria-label="Toggle language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-chrome-300 hover:text-chrome-50 transition-colors"
    >
      {children}
    </Link>
  );
}
