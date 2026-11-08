"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { cadSheets, sketches } from "@/lib/cad";
import CadSheet from "./CadSheet";
import CariesPrinciple from "./CariesPrinciple";

const ACCENT = "#f87171";

export default function CariesDesign() {
  const { lang } = useI18n();
  const fr = lang === "fr";

  return (
    <div className="space-y-24">
      <Block
        title={fr ? "Le principe" : "How it works"}
        intro={
          fr
            ? "La dent traverse un disque consommable : la couronne baigne dans le milieu cariogène, les racines dans le milieu nutritif. Le disque, pincé entre le couvercle et la cuve, est la seule frontière entre les deux."
            : "The tooth goes through a consumable disc: the crown sits in the cariogenic medium, the roots in the nutrient medium. The disc, clamped between lid and vessel, is the only boundary between them."
        }
      >
        <CariesPrinciple accent={ACCENT} />
      </Block>

      <Block
        title={fr ? "Des croquis à la CAO" : "From sketches to CAD"}
        intro={
          fr
            ? "Les premières idées ont été posées à la main : coupes, vue de dessus du disque, emplacement des clips. Elles ont ensuite été traduites pièce par pièce sous SolidWorks."
            : "The first ideas were drawn by hand: cross-sections, top view of the disc, clip locations. They were then turned into parts in SolidWorks, one by one."
        }
      >
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {sketches.map((s, i) => (
            <motion.figure
              key={s.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="brick overflow-hidden"
            >
              <img src={s.src} alt={s.caption[lang]} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <figcaption className="p-3 text-xs text-chrome-400 leading-snug">
                <span className="font-mono mr-1" style={{ color: ACCENT }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.caption[lang]}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Block>

      <Block
        title={fr ? "Mises en plan commentées" : "Annotated drawings"}
        intro={
          fr
            ? "Chaque planche reprend une vue CAO avec ses repères et sa nomenclature. Survolez un repère ou une ligne du tableau pour isoler l'élément."
            : "Each sheet shows a CAD view with its reference marks and parts list. Hover a mark or a table row to isolate the element."
        }
      >
        <div className="space-y-20">
          {cadSheets.map((s) => (
            <CadSheet key={s.id} sheet={s} accent={ACCENT} />
          ))}
        </div>
      </Block>
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
