"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import type { CadSheet as Sheet } from "@/lib/cad";

const INK = "#1b2230";

export default function CadSheet({ sheet, accent }: { sheet: Sheet; accent: string }) {
  const { lang } = useI18n();
  const [active, setActive] = useState<number | null>(null);
  const [cx, cy, cw, ch] = sheet.crop ?? [0, 0, sheet.w, sheet.h];
  const r = Math.max(cw, ch) * 0.026;
  const stroke = Math.max(cw, ch) * 0.0028;

  const L = {
    sheet: lang === "fr" ? "Planche" : "Sheet",
    view: lang === "fr" ? "Vue" : "View",
    material: lang === "fr" ? "Matière" : "Material",
    author: lang === "fr" ? "Auteur" : "Author",
    ref: lang === "fr" ? "Rep." : "Ref.",
    name: lang === "fr" ? "Désignation" : "Description",
  };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="grid gap-6 lg:grid-cols-[1.35fr_1fr] items-start"
    >
      {/* Feuille de mise en plan */}
      <div className="relative bg-[#eef1f5] p-3 sm:p-4" style={{ color: INK }}>
        <div className="border-2 p-2" style={{ borderColor: INK }}>
          <svg
            viewBox={`${cx} ${cy} ${cw} ${ch}`}
            className="w-full h-auto block"
            role="img"
            aria-label={sheet.title[lang]}
          >
            <image href={sheet.src} x={0} y={0} width={sheet.w} height={sheet.h} />
            {sheet.callouts.map((c, i) => {
              const on = active === null || active === i;
              return (
                <g
                  key={i}
                  opacity={on ? 1 : 0.25}
                  style={{ transition: "opacity 0.2s" }}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <line x1={c.x} y1={c.y} x2={c.bx} y2={c.by} stroke={INK} strokeWidth={stroke} />
                  <circle cx={c.x} cy={c.y} r={r * 0.22} fill={INK} />
                  <circle
                    cx={c.bx}
                    cy={c.by}
                    r={r}
                    fill={active === i ? accent : "#ffffff"}
                    stroke={INK}
                    strokeWidth={stroke * 1.2}
                  />
                  <text
                    x={c.bx}
                    y={c.by}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={r * 1.15}
                    fontWeight={700}
                    fontFamily="JetBrains Mono, ui-monospace, monospace"
                    fill={INK}
                  >
                    {i + 1}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Cartouche */}
          <div
            className="mt-2 grid grid-cols-[auto_1fr_1fr] text-[10px] sm:text-[11px] font-mono border-t-2"
            style={{ borderColor: INK }}
          >
            <div className="row-span-2 flex flex-col items-center justify-center px-3 border-r-2" style={{ borderColor: INK }}>
              <span className="uppercase tracking-widest opacity-70">{L.sheet}</span>
              <span className="text-2xl font-bold leading-none mt-1">{sheet.id}</span>
            </div>
            <div className="col-span-2 px-2 py-1.5 border-b font-bold uppercase tracking-wide text-[11px] sm:text-xs" style={{ borderColor: INK }}>
              {sheet.title[lang]}
            </div>
            <div className="px-2 py-1.5 border-r" style={{ borderColor: INK }}>
              <span className="opacity-60">{L.view} : </span>
              {sheet.view[lang]}
            </div>
            <div className="px-2 py-1.5">
              <span className="opacity-60">{L.author} : </span>BAILLY E.
            </div>
            <div className="col-span-3 px-2 py-1.5 border-t" style={{ borderColor: INK }}>
              <span className="opacity-60">{L.material} : </span>
              {sheet.material[lang]}
            </div>
          </div>
        </div>
      </div>

      {/* Nomenclature et explication */}
      <figcaption>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs" style={{ color: accent }}>
            {sheet.id}
          </span>
          <h3 className="font-display font-semibold text-2xl text-chrome-50">{sheet.title[lang]}</h3>
        </div>
        <p className="mt-3 text-chrome-300 leading-relaxed">{sheet.caption[lang]}</p>

        <table className="mt-5 w-full text-sm border-collapse">
          <thead>
            <tr className="text-[10px] uppercase tracking-widest text-chrome-500 font-mono">
              <th className="text-left font-normal pb-2 w-12">{L.ref}</th>
              <th className="text-left font-normal pb-2">{L.name}</th>
            </tr>
          </thead>
          <tbody>
            {sheet.callouts.map((c, i) => (
              <tr
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="border-t border-white/5 cursor-default transition-colors hover:bg-white/[0.03]"
              >
                <td className="py-2 align-top">
                  <span
                    className="inline-flex w-6 h-6 items-center justify-center rounded-full font-mono text-xs border"
                    style={{
                      borderColor: accent,
                      color: active === i ? "#0a0c10" : accent,
                      background: active === i ? accent : "transparent",
                    }}
                  >
                    {i + 1}
                  </span>
                </td>
                <td className="py-2 text-chrome-200 leading-snug">{c.label[lang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </figcaption>
    </motion.figure>
  );
}
