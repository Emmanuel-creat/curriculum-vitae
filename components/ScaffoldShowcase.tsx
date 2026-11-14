"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const ACCENT = "#2dd4bf";
const IMG = "/images/scaffold-studio";

type Img = { src: string; fr: string; en: string };

export default function ScaffoldShowcase() {
  const { lang } = useI18n();
  const fr = lang === "fr";

  const checks = [
    { v: "< 1 %", l: fr ? "écart sur l'écoulement de Poiseuille entre deux plaques" : "error on Poiseuille flow between two plates" },
    { v: "0,4 %", l: fr ? "écart sur le réseau de sphères de Sangani et Acrivos" : "error on the Sangani and Acrivos sphere array" },
    { v: "0,004 %", l: fr ? "écart entre le calcul sur carte graphique et sur processeur" : "gap between GPU and CPU results" },
    { v: "196 / 4,5 µM", l: fr ? "oxygène minimal au coeur, perfusion contre culture statique" : "minimum core oxygen, perfusion versus static culture" },
  ];

  const castro = [
    { k: fr ? "Schwarz D / gyroïde" : "Schwarz D / gyroid", ref: "1,18", ss: "1,29" },
    { k: fr ? "Schwarz P / gyroïde" : "Schwarz P / gyroid", ref: "0,71", ss: "0,78" },
  ];

  const views: Img[] = [
    { src: `${IMG}/ui-epaisseur.jpg`, fr: "Carte d'épaisseur locale et mesures en direct", en: "Local thickness map and live measures" },
    { src: `${IMG}/ui-perfusion.jpg`, fr: "Perfusion : particules, lignes de courant et perméabilité", en: "Perfusion: particles, streamlines and permeability" },
    { src: `${IMG}/cisaillement-coupe.jpg`, fr: "Cisaillement pariétal en coupe", en: "Wall shear stress in section" },
    { src: `${IMG}/vol-dans-les-pores.jpg`, fr: "Mode vol à travers les pores", en: "Fly mode through the pores" },
  ];

  return (
    <div className="space-y-20">
      <Block
        title={fr ? "La vidéo" : "The video"}
        intro={
          fr
            ? "Tournée entièrement dans l'application, avec son propre studio de rendu : chaque image est calculée puis codée en H.264, sans montage 3D externe."
            : "Shot entirely inside the app, with its own render studio: every frame is computed then encoded in H.264, with no external 3D tool."
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="brick overflow-hidden"
        >
          <video
            className="w-full h-auto block bg-black"
            src="/videos/scaffold-studio.mp4"
            poster={`${IMG}/video-poster.jpg`}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
        </motion.div>
      </Block>

      <Block
        title={fr ? "L'application" : "The app"}
        intro={
          fr
            ? "Réglages à gauche, scaffold au centre, mesures à droite. Chaque changement relance le maillage et les calculs dans des workers, sans bloquer l'interface. Tout tourne dans le navigateur, en local, et l'application s'installe pour fonctionner hors ligne."
            : "Settings on the left, scaffold in the centre, measures on the right. Each change re-runs meshing and computations in workers without freezing the interface. Everything runs locally in the browser, and the app installs to work offline."
        }
      >
        <Figure img={{ src: `${IMG}/ui-defaut.jpg`, fr: "Interface de Scaffold Studio, version 1.8", en: "Scaffold Studio interface, version 1.8" }} lang={lang} />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {views.map((v) => (
            <Figure key={v.src} img={v} lang={lang} />
          ))}
        </div>
      </Block>

      <Block
        title={fr ? "Validation" : "Validation"}
        intro={
          fr
            ? "Un outil de conception ne vaut que par ses chiffres. Les solveurs sont vérifiés par des tests automatiques sur des solutions analytiques, puis comparés à une étude publiée sur trois TPMS à 70 % de porosité (Castro et al., Materials, 2019)."
            : "A design tool is only as good as its numbers. Solvers are checked by automated tests against analytical solutions, then compared with a published study on three TPMS at 70 % porosity (Castro et al., Materials, 2019)."
        }
      >
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {checks.map((c) => (
            <Stat key={c.v} value={c.v} label={c.l} />
          ))}
        </div>
        <div className="mt-6 brick overflow-hidden">
          <div className="grid grid-cols-3 text-[10px] uppercase tracking-[0.2em] font-mono text-chrome-500 px-4 py-3 border-b border-white/5">
            <span>{fr ? "Rapport de rigidité" : "Stiffness ratio"}</span>
            <span>Castro 2019</span>
            <span>Scaffold Studio</span>
          </div>
          {castro.map((r) => (
            <div key={r.k} className="grid grid-cols-3 px-4 py-3 text-sm border-b border-white/5 last:border-0">
              <span className="text-chrome-200">{r.k}</span>
              <span className="text-chrome-400 font-mono">{r.ref}</span>
              <span className="font-mono" style={{ color: ACCENT }}>{r.ss}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-chrome-400">
          {fr
            ? "Même ordre des rigidités que l'étude (Schwarz D, puis gyroïde, puis Schwarz P), en mode feuillet."
            : "Same stiffness ranking as the study (Schwarz D, then gyroid, then Schwarz P), in sheet mode."}
        </p>
      </Block>
    </div>
  );
}

function Figure({ img, lang }: { img: Img; lang: "fr" | "en" }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="brick overflow-hidden flex flex-col"
    >
      <img src={img.src} alt={img[lang]} loading="lazy" className="w-full h-auto block bg-ink-900" />
      <figcaption className="p-3 text-xs text-chrome-400">{img[lang]}</figcaption>
    </motion.figure>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="brick p-5">
      <div className="font-display font-semibold text-2xl md:text-3xl" style={{ color: ACCENT }}>
        {value}
      </div>
      <div className="mt-2 text-sm text-chrome-300 leading-snug">{label}</div>
    </div>
  );
}

function Block({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-px" style={{ background: ACCENT }} />
        <h2 className="text-xs uppercase tracking-[0.3em] font-mono" style={{ color: ACCENT }}>
          {title}
        </h2>
      </div>
      <p className="text-lg text-chrome-200 leading-relaxed max-w-4xl mb-8">{intro}</p>
      {children}
    </section>
  );
}
