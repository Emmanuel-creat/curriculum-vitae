"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const ACCENT = "#f472b6";
const IMG = "/images/vic2d";

type Img = { src: string; fr: string; en: string };

const code: Img[] = [
  { src: `${IMG}/code-video.jpg`, fr: "Étape 1 : la vidéo d'essai découpée en images PNG", en: "Step 1: the test video split into PNG frames" },
  { src: `${IMG}/code-template.jpg`, fr: "Étape 2 : les réglages écrits dans le projet Vic-2D", en: "Step 2: settings written into the Vic-2D project" },
  { src: `${IMG}/code-projet.jpg`, fr: "Étape 3 : image de référence et images déformées", en: "Step 3: reference and deformed images" },
  { src: `${IMG}/code-pipeline.jpg`, fr: "Étape 4 : corrélation lancée en mode batch", en: "Step 4: correlation run in batch mode" },
  { src: `${IMG}/code-export.jpg`, fr: "Étape 5 : export CSV et champs de déplacement", en: "Step 5: CSV export and displacement fields" },
  { src: `${IMG}/code-interface.jpg`, fr: "L'interface construite onglet par onglet", en: "The interface built tab by tab" },
];

export default function Vic2dShowcase() {
  const { lang } = useI18n();
  const fr = lang === "fr";

  const stats = [
    { v: "21", l: fr ? "options de Vic-2D pilotées depuis l'interface" : "Vic-2D options driven from the interface" },
    { v: "6", l: fr ? "onglets : presets, images, calibration, caractéristiques, corrélation, post-analyse" : "tabs: presets, images, calibration, features, correlation, post-analysis" },
    { v: "1 clic", l: fr ? "pour lancer la corrélation complète et l'export" : "to run the full correlation and export" },
    { v: "~3 000", l: fr ? "lignes de Python" : "lines of Python" },
  ];

  return (
    <div className="space-y-20">
      <Block
        title={fr ? "Le Corrélateur Automatique" : "The Automatic Correlator"}
        intro={
          fr
            ? "Un logiciel en Python, avec une interface CustomTkinter, qui se branche sur Vic-2D. L'utilisateur charge la vidéo de l'essai, choisit ses réglages à la souris, et le programme écrit lui-même le projet Vic-2D, lance la corrélation et range les résultats."
            : "A Python application with a CustomTkinter interface that plugs into Vic-2D. The user loads the test video, picks settings with the mouse, and the program writes the Vic-2D project itself, runs the correlation and files the results."
        }
      >
        <Figure img={{ src: `${IMG}/chaine.jpg`, fr: "La chaîne complète, de la vidéo aux résultats", en: "The full pipeline, from video to results" }} lang={lang} />
        <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.v} value={s.v} label={s.l} />
          ))}
        </div>
      </Block>

      <Block
        title={fr ? "L'interface" : "The interface"}
        intro={
          fr
            ? "Une fenêtre principale pour la vidéo et le lancement, une fenêtre d'options rangée en onglets. Chaque onglet a son bouton d'aide qui explique les réglages en langage clair : subset, step, critère de corrélation, filtrage, tenseur de déformation."
            : "A main window for the video and the run, an options window organised in tabs. Each tab has a help button that explains the settings in plain words: subset, step, correlation criterion, filtering, strain tensor."
        }
      >
        <Figure img={{ src: `${IMG}/interface.jpg`, fr: "Fenêtre principale et fenêtre d'options, recréées d'après le code", en: "Main window and options window, recreated from the code" }} lang={lang} />
      </Block>

      <Block
        title={fr ? "Le principe de la corrélation d'images" : "How image correlation works"}
        intro={
          fr
            ? "L'éprouvette porte un mouchetis. Vic-2D découpe la zone d'intérêt en petits carrés (subsets) espacés d'un pas (step), retrouve chacun d'eux sur les images suivantes et en déduit le champ de déplacement, puis les déformations. Le logiciel permet de régler ces paramètres visuellement, en superposant le subset et la grille sur l'image de référence."
            : "The specimen carries a speckle pattern. Vic-2D splits the area of interest into small squares (subsets) spaced by a step, finds each of them in the following frames and derives the displacement field, then the strains. The software lets the user tune these settings visually, by overlaying the subset and grid on the reference image."
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Figure img={{ src: `${IMG}/principe-subset.jpg`, fr: "Zone d'intérêt, subset et step sur le mouchetis", en: "Area of interest, subset and step on the speckle" }} lang={lang} />
          <Figure img={{ src: `${IMG}/principe-champ.jpg`, fr: "Champ de déplacement et déformation (illustration, données synthétiques)", en: "Displacement field and strain (illustration, synthetic data)" }} lang={lang} />
        </div>
      </Block>

      <Block
        title={fr ? "Le code" : "The code"}
        intro={
          fr
            ? "Les passages clés du programme, mis en forme pour la lecture. Chaque étape de la chaîne correspond à une fonction : découpage vidéo avec OpenCV, réécriture du fichier project.xml avec lxml, lancement de Vic2D.exe en ligne de commande et lecture des résultats avec VicPy."
            : "Key passages of the program, formatted for reading. Each pipeline step maps to one function: video splitting with OpenCV, rewriting project.xml with lxml, running Vic2D.exe from the command line and reading results with VicPy."
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          {code.map((c) => (
            <Figure key={c.src} img={c} lang={lang} />
          ))}
        </div>
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
