"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { symbiosuitsSheets } from "@/lib/symbiosuits";
import CadSheet from "./CadSheet";

const ACCENT = "#fb923c";

const STL = [
  { file: "symbiosuits_exosquelette_debout.stl", fr: "Assemblage complet (debout)", en: "Full assembly (standing)", kb: 866 },
  { file: "ceinture.stl", fr: "Ceinture ventrale", en: "Waist belt", kb: 26 },
  { file: "unite_controle.stl", fr: "Unité de contrôle", en: "Control unit", kb: 1 },
  { file: "batterie.stl", fr: "Batterie", en: "Battery", kb: 1 },
  { file: "support_hanche.stl", fr: "Support de hanche", en: "Hip bracket", kb: 45 },
  { file: "articulation_hanche.stl", fr: "Articulation de hanche", en: "Hip joint", kb: 25 },
  { file: "segment_cuisse.stl", fr: "Segment de cuisse (rail, manchette, actionneur)", en: "Thigh segment (rail, cuff, actuator)", kb: 125 },
  { file: "articulation_genou.stl", fr: "Articulation de genou", en: "Knee joint", kb: 21 },
  { file: "segment_jambe.stl", fr: "Segment de jambe (rail, manchette, actionneur)", en: "Shank segment (rail, cuff, actuator)", kb: 144 },
  { file: "articulation_cheville.stl", fr: "Articulation de cheville", en: "Ankle joint", kb: 14 },
  { file: "semelle.stl", fr: "Semelle instrumentée", en: "Instrumented sole", kb: 44 },
];

export default function SymbiosuitsDesign() {
  const { lang } = useI18n();
  const fr = lang === "fr";

  const renders = [
    { src: "/images/symbiosuits/rendu-marche.jpg", fr: "En phase de marche : hanche droite fléchie, genou en flexion", en: "Walking: right hip flexed, knee bent" },
    { src: "/images/symbiosuits/rendu-face.jpg", fr: "Vue de face", en: "Front view" },
    { src: "/images/symbiosuits/rendu-dos.jpg", fr: "Vue arrière : unité de contrôle et batterie", en: "Back view: control unit and battery" },
    { src: "/images/symbiosuits/rendu-genou.jpg", fr: "Gros plan sur les articulations de genou", en: "Close-up of the knee joints" },
  ];

  const specs = [
    { v: "≈ 3,5 kg", ven: "≈ 3.5 kg", l: fr ? "masse totale visée" : "target total mass" },
    { v: "8 à 12 h", ven: "8 to 12 h", l: fr ? "d'autonomie visée" : "target runtime" },
    { v: "< 50 ms", l: fr ? "de temps de réponse de la commande" : "control response time" },
    { v: "0 à 120 %", ven: "0 to 120%", l: fr ? "niveau d'assistance réglable" : "adjustable assistance level" },
  ];

  const model = [
    { v: "10", l: fr ? "pièces modélisées, toutes en volumes fermés" : "modelled parts, all closed solids" },
    { v: "1003 mm", l: fr ? "de hauteur, de la semelle au boîtier" : "tall, from sole to housing" },
    { v: "430 × 384", l: fr ? "mm d'encombrement au sol" : "mm footprint" },
    { v: "3", l: fr ? "articulations par jambe : hanche, genou, cheville" : "joints per leg: hip, knee, ankle" },
  ];

  return (
    <div className="space-y-24">
      <Block
        title={fr ? "Le concept en 3D" : "The concept in 3D"}
        intro={
          fr
            ? "Reprise du projet en 2026 : à partir d'un schéma de principe, j'ai modélisé un exosquelette des membres inférieurs complet. Chaque pièce est paramétrée (axes articulaires, longueurs de segments, diamètres des manchettes) et exportée en STL."
            : "Picking the project back up in 2026: from a principle sketch, I modelled a complete lower-limb exoskeleton. Every part is parametric (joint axes, segment lengths, cuff diameters) and exported as STL."
        }
      >
        <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <Figure img={renders[0]} lang={lang} tall />
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-1 lg:grid-rows-3">
            {renders.slice(1).map((r) => (
              <Figure key={r.src} img={r} lang={lang} />
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {model.map((m, i) => (
            <Stat key={i} value={m.v} label={m.l} />
          ))}
        </div>
      </Block>

      <Block
        title={fr ? "Boucle de commande" : "Control loop"}
        intro={
          fr
            ? "L'assistance suit une boucle fermée : les capteurs mesurent le mouvement, des algorithmes d'assistance prédictive anticipent la phase de marche, puis la commande ajuste l'effort des actionneurs."
            : "Assistance follows a closed loop: sensors measure motion, predictive assistance algorithms anticipate the gait phase, then the controller adjusts actuator effort."
        }
      >
        <ControlLoop fr={fr} />
      </Block>

      <Block
        title={fr ? "Objectifs de conception" : "Design targets"}
        intro={
          fr
            ? "Valeurs cibles fixées pour le dimensionnement. Elles restent à valider sur prototype."
            : "Target values used for sizing. They remain to be validated on a prototype."
        }
      >
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {specs.map((s, i) => (
            <Stat key={i} value={!fr && s.ven ? s.ven : s.v} label={s.l} />
          ))}
        </div>
      </Block>

      <Block
        title={fr ? "Mises en plan commentées" : "Annotated drawings"}
        intro={
          fr
            ? "Rendus et vues orthogonales cotées tirés du modèle 3D. Survolez un repère ou une ligne du tableau pour isoler l'élément."
            : "Renders and dimensioned orthographic views taken from the 3D model. Hover a mark or a table row to isolate the element."
        }
      >
        <div className="space-y-20">
          {symbiosuitsSheets.map((s) => (
            <CadSheet key={s.id} sheet={s} accent={ACCENT} />
          ))}
        </div>
      </Block>

      <Block
        title={fr ? "Fichiers STL" : "STL files"}
        intro={
          fr
            ? "Le modèle est téléchargeable : l'assemblage complet et chaque pièce séparément (côté droit, la jambe gauche est symétrique). Unités en millimètres."
            : "The model can be downloaded: the full assembly and each part on its own (right side, the left leg is mirrored). Units in millimetres."
        }
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {STL.map((f) => (
            <a
              key={f.file}
              href={`/models/symbiosuits/${f.file}`}
              download
              className="brick brick-hover p-4 flex items-center gap-4 min-w-0"
            >
              <span className="w-10 h-10 flex-shrink-0 inline-flex items-center justify-center border border-white/10" style={{ color: ACCENT }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
                  <path d="M12 12l8-4.5M12 12L4 7.5M12 12v9" />
                </svg>
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm text-chrome-100 truncate">{fr ? f.fr : f.en}</span>
                <span className="block text-xs font-mono text-chrome-500 truncate">{f.file}</span>
              </span>
              <span className="text-xs font-mono text-chrome-400">{f.kb} Ko</span>
            </a>
          ))}
        </div>
      </Block>
    </div>
  );
}

function Figure({ img, lang, tall }: { img: { src: string; fr: string; en: string }; lang: "fr" | "en"; tall?: boolean }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="brick overflow-hidden flex flex-col"
    >
      <div className={`relative bg-[#eef1f5] ${tall ? "aspect-[4/5]" : "aspect-[4/3] lg:aspect-auto lg:flex-1"}`}>
        <img src={img.src} alt={img[lang]} loading="lazy" className="absolute inset-0 w-full h-full object-contain" />
      </div>
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

function ControlLoop({ fr }: { fr: boolean }) {
  const box = "#161a22";
  const line = "#5b6377";
  const t = "#e5e9f0";
  const s = "#7c8598";
  const nodes = [
    { x: 30, title: fr ? "Capteurs" : "Sensors", sub: fr ? "angle, effort, semelle" : "angle, force, sole" },
    { x: 290, title: fr ? "Assistance prédictive" : "Predictive assistance", sub: fr ? "détection de la phase de marche" : "gait phase detection" },
    { x: 550, title: fr ? "Commande" : "Control", sub: fr ? "effort des actionneurs" : "actuator effort" },
  ];
  return (
    <div className="brick p-4 sm:p-6 overflow-x-auto">
      <svg viewBox="0 0 800 230" className="w-full min-w-[560px] h-auto" role="img" aria-label={fr ? "Boucle de commande" : "Control loop"}>
        <defs>
          <marker id="la" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0L10 5L0 10z" fill={ACCENT} />
          </marker>
        </defs>
        {nodes.map((n, i) => (
          <g key={i}>
            <rect x={n.x} y={30} width={220} height={84} fill={box} stroke={i === 1 ? ACCENT : line} strokeWidth={1.5} />
            <text x={n.x + 110} y={66} textAnchor="middle" fill={t} fontSize={17} fontWeight={600}>{n.title}</text>
            <text x={n.x + 110} y={90} textAnchor="middle" fill={s} fontSize={13}>{n.sub}</text>
          </g>
        ))}
        <line x1={250} y1={72} x2={286} y2={72} stroke={ACCENT} strokeWidth={2} markerEnd="url(#la)" />
        <line x1={510} y1={72} x2={546} y2={72} stroke={ACCENT} strokeWidth={2} markerEnd="url(#la)" />
        <path d="M660 114 V180 H140 V118" fill="none" stroke={ACCENT} strokeWidth={2} strokeDasharray="6 5" markerEnd="url(#la)" />
        <rect x={300} y={166} width={200} height={28} fill="#0a0c10" />
        <text x={400} y={185} textAnchor="middle" fill={s} fontSize={13}>
          {fr ? "mouvement du porteur" : "wearer's motion"}
        </text>
      </svg>
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
