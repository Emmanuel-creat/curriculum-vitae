"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import SafeImg from "./SafeImg";
import { biomemoryImages } from "@/lib/gallery";

const ACCENT = "#22d3ee";
const IMAGES = biomemoryImages.slice(0, 6);

export default function BiomemoryShowcase() {
  const { lang } = useI18n();
  const fr = lang === "fr";

  const stats = [
    { value: "×1 000 000", label: fr ? "de données par unité de volume, face aux supports physiques" : "more data per unit volume than physical media" },
    { value: "150 ans", valueEn: "150 years", label: fr ? "de conservation, sans recopie ni maintenance" : "of retention, with no rewriting or upkeep" },
    { value: "0 W", label: fr ? "d'énergie pour conserver les données au repos" : "of power to keep data at rest" },
    { value: "2021", label: fr ? "spin-off de Sorbonne Université et du CNRS, Paris" : "spin-off of Sorbonne University and CNRS, Paris" },
  ];

  const steps = [
    { title: fr ? "Encoder" : "Encode", text: fr ? "Les 0 et 1 deviennent des séquences de A, C, G et T." : "0s and 1s become sequences of A, C, G and T.", icon: <IconEncode /> },
    { title: fr ? "Écrire" : "Write", text: fr ? "L'ADN est synthétisé par voie enzymatique." : "DNA is synthesized enzymatically.", icon: <IconWrite /> },
    { title: fr ? "Conserver" : "Store", text: fr ? "Hors ligne, à l'abri, sans énergie." : "Offline, protected, with no power.", icon: <IconStore /> },
    { title: fr ? "Relire" : "Read", text: fr ? "Séquençage, correction d'erreurs, fichier reconstruit." : "Sequencing, error correction, file rebuilt.", icon: <IconRead /> },
  ];

  return (
    <div className="space-y-24">
      <Block title={fr ? "BioMemory en bref" : "BioMemory at a glance"}>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="brick p-5"
            >
              <div className="font-display font-semibold text-3xl md:text-4xl" style={{ color: ACCENT }}>
                {!fr && s.valueEn ? s.valueEn : s.value}
              </div>
              <div className="mt-2 text-sm text-chrome-300 leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-xs text-chrome-500">
          {fr ? "Chiffres publiés par BioMemory sur biomemory.com." : "Figures published by BioMemory on biomemory.com."}
        </p>
      </Block>

      <Block title={fr ? "Le principe" : "How it works"}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="brick p-5 relative">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 inline-flex items-center justify-center border border-white/10" style={{ color: ACCENT }}>
                  {s.icon}
                </span>
                <span className="font-mono text-xs text-chrome-500">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="mt-4 font-display font-semibold text-lg text-chrome-50">{s.title}</div>
              <div className="mt-1 text-sm text-chrome-300 leading-snug">{s.text}</div>
            </div>
          ))}
        </div>
      </Block>

      <Block title={fr ? "En images" : "In pictures"}>
        <div className="brick p-5 mb-8 flex gap-4 items-start border-l-2" style={{ borderLeftColor: ACCENT }}>
          <span className="flex-shrink-0 mt-0.5" style={{ color: ACCENT }}>
            <IconLock />
          </span>
          <p className="text-sm text-chrome-200 leading-relaxed">
            {fr
              ? "Les images, rendus et plans de mon travail sont confidentiels et ne peuvent pas être publiés. Les visuels ci-dessous proviennent du site officiel de BioMemory et illustrent l'univers de l'entreprise."
              : "The images, renders and drawings of my work are confidential and cannot be published. The visuals below come from BioMemory's official website and illustrate the company's world."}
          </p>
        </div>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <SiteImage key={img.src} src={img.src} alt={img.alt[lang]} index={i} />
          ))}
        </div>
        <p className="mt-4 text-xs text-chrome-500">
          {fr ? "Crédits images : BioMemory, " : "Image credits: BioMemory, "}
          <a href="https://www.biomemory.com" target="_blank" rel="noreferrer" className="underline hover:text-chrome-300">
            biomemory.com
          </a>
        </p>
      </Block>
    </div>
  );
}

function SiteImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [failed, setFailed] = useState(false);
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="brick overflow-hidden"
    >
      <div className="aspect-[4/3] relative bg-ink-800">
        {!failed ? (
          <SafeImg
            src={src}
            alt={alt}
            loading="lazy"
            onFail={() => setFailed(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-chrome-500" style={{ color: `${ACCENT}66` }}>
            <IconHelix />
          </div>
        )}
      </div>
      <figcaption className="p-3 text-xs text-chrome-400 leading-snug">{alt}</figcaption>
    </motion.figure>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-px" style={{ background: ACCENT }} />
        <h2 className="text-xs uppercase tracking-[0.3em] font-mono" style={{ color: ACCENT }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

const svg = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function IconEncode() {
  return (
    <svg {...svg}>
      <path d="M4 6h3M4 12h3M4 18h3" />
      <path d="M10 6h1.5M10 12h1.5M10 18h1.5" />
      <path d="M15 4c3 2.7 3 5.3 0 8s-3 5.3 0 8M20 4c-3 2.7-3 5.3 0 8s3 5.3 0 8" />
    </svg>
  );
}
function IconWrite() {
  return (
    <svg {...svg}>
      <path d="M8 3v6l-4 9a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-4-9V3" />
      <path d="M7 3h10M6.5 14h11" />
    </svg>
  );
}
function IconStore() {
  return (
    <svg {...svg}>
      <rect x="4" y="10" width="16" height="11" rx="1" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <path d="M12 14v3" />
    </svg>
  );
}
function IconRead() {
  return (
    <svg {...svg}>
      <path d="M3 17l4-6 4 4 4-8 6 10" />
      <path d="M3 21h18" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg {...svg} width={20} height={20}>
      <rect x="4" y="10" width="16" height="11" rx="1" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.5" r="1.3" />
    </svg>
  );
}
function IconHelix() {
  return (
    <svg {...svg} width={48} height={48} strokeWidth={1.2}>
      <path d="M8 3c8 4 8 14 0 18M16 3c-8 4-8 14 0 18" />
      <path d="M9 7h6M8.5 12h7M9 17h6" />
    </svg>
  );
}
