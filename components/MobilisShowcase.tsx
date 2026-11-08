"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const ACCENT = "#4ade80";
const IMG = "/images/mobilis";

type Img = { src: string; fr: string; en: string; light?: boolean };

export default function MobilisShowcase() {
  const { lang } = useI18n();
  const fr = lang === "fr";

  const parts = [
    { n: "1", fr: "Poignée à trois anneaux", en: "Three-ring handle", mfr: "TPU flexible imprimé", men: "Printed flexible TPU" },
    { n: "2", fr: "Bandes élastiques", en: "Elastic bands", mfr: "Caoutchouc naturel et synthétique", men: "Natural and synthetic rubber" },
    { n: "3", fr: "Molette de réglage de la tension", en: "Tension adjustment wheel", mfr: "PLA imprimé", men: "Printed PLA" },
    { n: "4", fr: "Bracelet d'avant-bras", en: "Forearm cuff", mfr: "PLA, rembourrage mousse polyester", men: "PLA, polyester foam padding" },
    { n: "5", fr: "Sangles de maintien", en: "Holding straps", mfr: "Tissu nylon", men: "Nylon webbing" },
    { n: "6", fr: "Boucle à échelle et coques", en: "Ladder lock buckle and cases", mfr: "Polymère, cuir", men: "Polymer, leather" },
  ];

  const context = [
    { v: "17,5 %", ven: "17.5%", l: fr ? "des fractures touchent le poignet (Candela et al., 2022)" : "of fractures involve the wrist (Candela et al., 2022)" },
    { v: "66° → 24°", l: fr ? "de flexion, avant et après immobilisation (Dillingham et al., 2011)" : "of flexion, before and after immobilisation (Dillingham et al., 2011)" },
    { v: "68° → 25°", l: fr ? "d'extension, avant et après immobilisation" : "of extension, before and after immobilisation" },
    { v: fr ? "Classe I" : "Class I", l: fr ? "dispositif médical selon le règlement (UE) 2017/745" : "medical device under Regulation (EU) 2017/745" },
  ];

  const tension = [
    { v: "8 à 14 Nm", ven: "8 to 14 Nm", l: fr ? "moment maximal de flexion-extension chez l'homme (5 à 9 Nm chez la femme)" : "maximum flexion-extension moment in men (5 to 9 Nm in women)" },
    { v: "20 %", ven: "20%", l: fr ? "de ce moment maximal, charge retenue pour une rééducation précoce" : "of that maximum, the load used for early rehabilitation" },
    { v: "115 mm", l: fr ? "bras de levier poignet-main moyen chez l'homme (107 mm chez la femme)" : "mean wrist-to-hand lever arm in men (107 mm in women)" },
    { v: "≈ 9 à 24 N", ven: "≈ 9 to 24 N", l: fr ? "force à fournir par les élastiques, ordre de grandeur" : "force the bands must provide, order of magnitude" },
  ];

  const results = [
    { v: "p = 0,008", ven: "p = 0.008", l: fr ? "baisse de la vitesse angulaire en extension en mode résistance (médiane ≈ 66 → 51 °/s)" : "drop in extension angular speed in resistance mode (median ≈ 66 → 51 °/s)" },
    { v: fr ? "Non significatif" : "Not significant", l: fr ? "écarts d'amplitude articulaire, avec ou sans dispositif (p de 0,22 à 0,95)" : "range of motion differences with or without the device (p from 0.22 to 0.95)" },
    { v: fr ? "Excellent" : "Excellent", l: fr ? "score d'utilisabilité F-SUS, au-delà de 80 sur 100" : "F-SUS usability score, above 80 out of 100" },
    { v: "n = 8", l: fr ? "volontaires sains analysés" : "healthy volunteers analysed" },
  ];

  return (
    <div className="space-y-24">
      <Block
        title={fr ? "Le dispositif" : "The device"}
        intro={
          fr
            ? "Un bracelet d'avant-bras porte une molette qui règle la tension de bandes élastiques reliées à une poignée tenue dans la main. Selon le sens de montage, les élastiques aident le mouvement du poignet (assistance) ou s'y opposent (résistance) : un seul dispositif couvre toute la rééducation."
            : "A forearm cuff carries a wheel that sets the tension of elastic bands linked to a handle held in the hand. Depending on how it is fitted, the bands help the wrist move (assistance) or oppose it (resistance): one device covers the whole rehabilitation."
        }
      >
        <Figure img={{ src: `${IMG}/dispositif-cao.jpg`, fr: "Modèle CAO annoté du dispositif Mobilis", en: "Annotated CAD model of the Mobilis device", light: true }} lang={lang} wide />
        <div className="mt-6 brick overflow-hidden">
          <div className="grid grid-cols-[2.5rem_1fr_1fr] text-[10px] uppercase tracking-[0.2em] font-mono text-chrome-500 px-4 py-3 border-b border-white/5">
            <span>{fr ? "Rep." : "Ref."}</span>
            <span>{fr ? "Élément" : "Part"}</span>
            <span>{fr ? "Matière" : "Material"}</span>
          </div>
          {parts.map((p) => (
            <div key={p.n} className="grid grid-cols-[2.5rem_1fr_1fr] gap-2 px-4 py-3 text-sm border-b border-white/5 last:border-0">
              <span className="font-mono" style={{ color: ACCENT }}>{p.n}</span>
              <span className="text-chrome-100">{fr ? p.fr : p.en}</span>
              <span className="text-chrome-400">{fr ? p.mfr : p.men}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block
        title={fr ? "Contexte clinique" : "Clinical context"}
        intro={
          fr
            ? "La fracture du poignet est l'une des plus fréquentes. Après plusieurs semaines de plâtre, l'amplitude articulaire chute de plus de moitié, et la rééducation dépend beaucoup de l'assiduité du patient à la maison. Les orthèses du marché aident surtout la préhension, peu la rééducation du poignet lui-même."
            : "Wrist fractures are among the most common. After several weeks in a cast, the range of motion drops by more than half, and rehabilitation relies heavily on how consistently patients exercise at home. Devices on the market mostly assist grip, rarely the rehabilitation of the wrist itself."
        }
      >
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {context.map((s, i) => (
            <Stat key={i} value={!fr && s.ven ? s.ven : s.v} label={s.l} />
          ))}
        </div>
        <div className="mt-4">
          <Figure img={{ src: `${IMG}/contexte-fractures.jpg`, fr: "Prévalence des fractures du poignet et perte d'amplitude après immobilisation", en: "Wrist fracture prevalence and range-of-motion loss after immobilisation", light: true }} lang={lang} wide />
        </div>
      </Block>

      <Block
        title={fr ? "Dimensionnement des élastiques" : "Sizing the bands"}
        intro={
          fr
            ? "La tension est calculée à partir de la physiologie : on prend 20 % du moment maximal du poignet, on le convertit en force au niveau de la main (F = M / L), puis on en déduit l'allongement à donner aux élastiques (Δl = F / k)."
            : "Tension is derived from physiology: take 20% of the wrist's maximum moment, convert it into a force at the hand (F = M / L), then deduce how far the bands must stretch (Δl = F / k)."
        }
      >
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {tension.map((s, i) => (
            <Stat key={i} value={!fr && s.ven ? s.ven : s.v} label={s.l} />
          ))}
        </div>
        <div className="mt-4 brick p-5 sm:p-6 grid gap-4 sm:grid-cols-3 text-center font-mono">
          {[
            ["F = M / L", fr ? "moment → force à la main" : "moment → force at the hand"],
            ["F = k × Δl", fr ? "loi de l'élastique" : "band stiffness"],
            ["Δl = F / k", fr ? "allongement à régler à la molette" : "stretch set with the wheel"],
          ].map(([f, l]) => (
            <div key={f}>
              <div className="text-xl text-chrome-100">{f}</div>
              <div className="mt-1 text-xs text-chrome-500 font-sans">{l}</div>
            </div>
          ))}
        </div>
      </Block>

      <Block
        title={fr ? "Simulation numérique" : "Numerical simulation"}
        intro={
          fr
            ? "Les pièces imprimées ont été vérifiées par éléments finis sous SolidWorks : déplacement du bracelet en PLA, contraintes dans la poignée en TPU, puis tenue en fatigue du TPU d'après une loi de Basquin."
            : "The printed parts were checked by finite elements in SolidWorks: displacement of the PLA cuff, stress in the TPU handle, then TPU fatigue life using a Basquin law."
        }
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Figure img={{ src: `${IMG}/simulation-anneau.jpg`, fr: "Bracelet en PLA (E ≈ 2 GPa) : déplacement maximal inférieur à 1 mm", en: "PLA cuff (E ≈ 2 GPa): maximum displacement under 1 mm", light: true }} lang={lang} />
          <Figure img={{ src: `${IMG}/simulation-poignee.jpg`, fr: "Poignée en TPU (E ≈ 30 MPa) : contrainte de von Mises maximale ≈ 7,6 MPa", en: "TPU handle (E ≈ 30 MPa): maximum von Mises stress ≈ 7.6 MPa", light: true }} lang={lang} />
          <Figure img={{ src: `${IMG}/simulation-fatigue.jpg`, fr: "Durée de vie en fatigue de la poignée", en: "Handle fatigue life", light: true }} lang={lang} />
          <Figure img={{ src: `${IMG}/courbe-fatigue-tpu.jpg`, fr: "Courbe de Wöhler du TPU 95A imprimé (σa = C × Nf^b)", en: "S-N curve of printed TPU 95A (σa = C × Nf^b)", light: true }} lang={lang} />
        </div>
      </Block>

      <Block
        title={fr ? "Étude expérimentale" : "Experimental study"}
        intro={
          fr
            ? "Question de recherche : dans quelle mesure ce dispositif modulable d'assistance et de résistance peut-il améliorer la rééducation du poignet ? Des volontaires sains ont réalisé des flexions et extensions sans dispositif, puis avec, en mode assistance et en mode résistance, dans un ordre aléatoire. Une caméra et trois marqueurs réfléchissants mesuraient l'amplitude et la vitesse angulaire ; un questionnaire F-SUS évaluait l'utilisabilité."
            : "Research question: to what extent can this modular assistance and resistance device improve wrist rehabilitation? Healthy volunteers performed flexions and extensions without the device, then with it in assistance and resistance modes, in random order. A camera and three reflective markers measured range of motion and angular speed; an F-SUS questionnaire assessed usability."
        }
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <Figure img={{ src: `${IMG}/protocole.jpg`, fr: "Protocole : 10 flexions, 5 min de repos, 10 extensions, par condition", en: "Protocol: 10 flexions, 5 min rest, 10 extensions, per condition", light: true }} lang={lang} />
          <Figure img={{ src: `${IMG}/marqueurs.jpg`, fr: "Position des marqueurs pour la mesure des angles", en: "Marker placement for angle measurement", light: true }} lang={lang} />
        </div>
      </Block>

      <Block
        title={fr ? "Résultats" : "Results"}
        intro={
          fr
            ? "Sur des sujets sains, l'amplitude ne change pas de façon significative : les participants n'étaient pas limités au départ. En revanche, le mode résistance ralentit nettement l'extension, signe que le dispositif sollicite bien le système neuromusculaire. Les participants l'ont jugé très facile à utiliser."
            : "In healthy subjects, range of motion does not change significantly: participants were not restricted to begin with. However, resistance mode clearly slows extension, showing the device does engage the neuromuscular system. Participants found it very easy to use."
        }
      >
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {results.map((s, i) => (
            <Stat key={i} value={!fr && s.ven ? s.ven : s.v} label={s.l} />
          ))}
        </div>
        <div className="mt-4 grid gap-4 items-start lg:grid-cols-[2fr_1fr]">
          <Figure img={{ src: `${IMG}/resultats-amplitude.jpg`, fr: "Amplitude maximale : sans dispositif contre assistance et résistance", en: "Maximum range of motion: no device versus assistance and resistance", light: true }} lang={lang} wide />
          <Figure img={{ src: `${IMG}/resultats-vitesse.jpg`, fr: "Vitesse angulaire : sans dispositif contre résistance", en: "Angular speed: no device versus resistance", light: true }} lang={lang} wide />
        </div>
        <div className="mt-4">
          <Figure img={{ src: `${IMG}/resultats-fsus.jpg`, fr: "Score d'utilisabilité F-SUS (Gronier et Baudet, 2021)", en: "F-SUS usability score (Gronier and Baudet, 2021)", light: true }} lang={lang} wide />
        </div>
      </Block>

      <Block
        title={fr ? "Limites et perspectives" : "Limitations and outlook"}
        intro={
          fr
            ? "L'échantillon reste petit et homogène (8 sujets jeunes et sains, aucun patient en rééducation) et un seul niveau de tension a été testé. La suite prévue : mesurer l'activation musculaire par électromyographie sur les fléchisseurs et extenseurs du carpe, explorer plusieurs niveaux de charge, optimiser le dispositif, puis le valider en clinique."
            : "The sample is small and homogeneous (8 young healthy subjects, no patients in rehabilitation) and only one tension level was tested. Planned next steps: measure muscle activation by electromyography on the wrist flexors and extensors, explore several load levels, optimise the device, then validate it clinically."
        }
      >
        <div className="grid gap-4 items-start lg:grid-cols-[1.64fr_1.77fr]">
          <Figure img={{ src: `${IMG}/emg.jpg`, fr: "Emplacements EMG prévus : FCR et ECRL", en: "Planned EMG sites: FCR and ECRL", light: true }} lang={lang} wide />
          <Figure img={{ src: `${IMG}/planning.jpg`, fr: "Planning du projet, de septembre à mars", en: "Project schedule, September to March", light: true }} lang={lang} wide />
        </div>
        <p className="mt-6 text-sm text-chrome-400 max-w-4xl">
          {fr
            ? "Normes prises en compte : ISO 13485 (qualité), ISO 14971 (gestion des risques), ISO 12100 (sécurité des machines), ISO 10993 (biocompatibilité)."
            : "Standards considered: ISO 13485 (quality), ISO 14971 (risk management), ISO 12100 (machine safety), ISO 10993 (biocompatibility)."}
        </p>
      </Block>
    </div>
  );
}

function Figure({ img, lang, tall, wide }: { img: Img; lang: "fr" | "en"; tall?: boolean; wide?: boolean }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="brick overflow-hidden flex flex-col h-full"
    >
      <div className={`relative ${img.light ? "bg-white" : "bg-ink-900"} ${tall ? "aspect-[3/4]" : wide ? "" : "aspect-[4/3]"}`}>
        <img
          src={img.src}
          alt={img[lang]}
          loading="lazy"
          className={wide ? "w-full h-auto block" : `absolute inset-0 w-full h-full ${img.light ? "object-contain p-2" : "object-cover"}`}
        />
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
