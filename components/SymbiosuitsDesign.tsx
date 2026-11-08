"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { symbiosuitsSheets } from "@/lib/symbiosuits";
import CadSheet from "./CadSheet";

const ACCENT = "#fb923c";


export default function SymbiosuitsDesign() {
  const { lang } = useI18n();
  const fr = lang === "fr";

  const renders = [
    { src: "/images/symbiosuits/rendu-marche.jpg", fr: "En phase de marche : hanche droite fléchie, genou en flexion", en: "Walking: right hip flexed, knee bent" },
    { src: "/images/symbiosuits/rendu-iso.jpg", fr: "Vue d'ensemble", en: "Overview" },
    { src: "/images/symbiosuits/rendu-dos.jpg", fr: "Vue arrière : pack dorsal et vérins de cheville", en: "Back view: back pack and ankle actuators" },
    { src: "/images/symbiosuits/rendu-eclate.jpg", fr: "Vue éclatée des sous-ensembles", en: "Exploded view of the sub-assemblies" },
  ];
  const details = [
    { src: "/images/symbiosuits/rendu-hanche.jpg", fr: "Moteur de hanche sur son support ajouré", en: "Hip motor on its lightened bracket" },
    { src: "/images/symbiosuits/rendu-genou.jpg", fr: "Genou : moteur, genouillère blindée, bras en treillis", en: "Knee: motor, armored cap, truss strut" },
    { src: "/images/symbiosuits/rendu-mollet.jpg", fr: "Vérins de cheville à soufflet, derrière les mollets", en: "Bellows ankle actuators behind the calves" },
    { src: "/images/symbiosuits/rendu-pack.jpg", fr: "Pack dorsal : batterie, unité de contrôle, câblage", en: "Back pack: battery, control unit, cabling" },
    { src: "/images/symbiosuits/rendu-botte.jpg", fr: "Bottes renforcées et articulations de cheville", en: "Reinforced boots and ankle joints" },
  ];

  const specs = [
    { v: "≈ 3,5 kg", ven: "≈ 3.5 kg", l: fr ? "masse totale visée" : "target total mass" },
    { v: "8 à 12 h", ven: "8 to 12 h", l: fr ? "d'autonomie visée" : "target runtime" },
    { v: "< 50 ms", l: fr ? "de temps de réponse de la commande" : "control response time" },
    { v: "0 à 120 %", ven: "0 to 120%", l: fr ? "niveau d'assistance réglable" : "adjustable assistance level" },
  ];

  const model = [
    { v: "200+", l: fr ? "pièces modélisées, toutes en volumes fermés" : "modelled parts, all closed solids" },
    { v: "1159 mm", l: fr ? "de hauteur, de la semelle à la poignée du pack" : "tall, from sole to pack handle" },
    { v: "534 × 423", l: fr ? "mm d'encombrement au sol" : "mm footprint" },
    { v: "3", l: fr ? "actionneurs par jambe : hanche, genou, cheville" : "actuators per leg: hip, knee, ankle" },
  ];

  return (
    <div className="space-y-24">
      <Block
        title={fr ? "Le concept en 3D" : "The concept in 3D"}
        intro={
          fr
            ? "Pendant le projet, à partir d'un schéma de principe, j'ai modélisé un exosquelette des membres inférieurs complet et détaillé. Les blindages épousent la morphologie du porteur, les bras en treillis portent trois actionneurs par jambe, et chaque pièce (visserie, sangles, câblage compris) est paramétrée."
            : "During the project, from a principle sketch, I modelled a complete, detailed lower-limb exoskeleton. The armor follows the wearer's body, truss struts carry three actuators per leg, and every part (fasteners, straps and cabling included) is parametric."
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
        <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-5">
          {details.map((r) => (
            <Figure key={r.src} img={r} lang={lang} cover />
          ))}
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

    </div>
  );
}

function Figure({ img, lang, tall, cover }: { img: { src: string; fr: string; en: string }; lang: "fr" | "en"; tall?: boolean; cover?: boolean }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="brick overflow-hidden flex flex-col"
    >
      <div className={`relative bg-gradient-to-b from-[#d5d8dc] to-[#9fa4aa] ${tall ? "aspect-[4/5]" : cover ? "aspect-square" : "aspect-[4/3] lg:aspect-auto lg:flex-1"}`}>
        <img src={img.src} alt={img[lang]} loading="lazy" className={`absolute inset-0 w-full h-full ${cover ? "object-cover" : "object-contain"}`} />
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
