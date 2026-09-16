"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Lang, Dict } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dict: Dict;
};

const I18nContext = createContext<Ctx | null>(null);

function get(obj: any, path: string): string {
  return path.split(".").reduce((acc, k) => (acc ? acc[k] : undefined), obj) ?? path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lang") as Lang | null;
      if (saved === "fr" || saved === "en") setLangState(saved);
      else {
        const nav = navigator.language?.toLowerCase() || "";
        setLangState(nav.startsWith("en") ? "en" : "fr");
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {}
  };

  const dict = translations[lang];
  const t = (key: string) => get(dict, key);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dict }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
