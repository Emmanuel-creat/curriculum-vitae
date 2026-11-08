"use client";

import { useI18n } from "@/lib/i18n";

// Schéma de principe dessiné : une dent, deux milieux isolés par un disque consommable.
export default function CariesPrinciple({ accent }: { accent: string }) {
  const { lang } = useI18n();
  const fr = lang === "fr";
  const T = {
    m2: fr ? "Milieu 2 : cuve cariogène" : "Medium 2: cariogenic chamber",
    m2s: fr ? "accès libre 3 fois par jour" : "open access 3 times a day",
    disc: fr ? "Disque consommable" : "Consumable disc",
    discs: fr ? "semi-rigide + enveloppe latex" : "semi-rigid + latex envelope",
    m1: fr ? "Milieu 1 : cuve racinaire" : "Medium 1: root chamber",
    m1s: fr ? "2 fois par semaine, échange gazeux" : "twice a week, gas exchange",
    crown: fr ? "Couronne et lésion" : "Crown and lesion",
    lid: fr ? "Couvercle à cheminée" : "Chimney lid",
    clip: fr ? "Clip" : "Snap fit",
    roots: fr ? "Racines" : "Roots",
    port: fr ? "Injection / éjection" : "Injection / ejection",
    access: fr ? "Manipulation" : "Handling",
    gas: fr ? "Gaz" : "Gas",
    title: fr
      ? "Schéma de principe : une dent, deux milieux parfaitement isolés"
      : "Working principle: one tooth, two fully isolated media",
  };

  const label = "#e5e9f0";
  const sub = "#7c8598";
  const wall = "#a4adbf";

  return (
    <figure className="brick p-4 sm:p-6">
      <div className="overflow-x-auto">
      <svg viewBox="0 0 860 540" className="w-full min-w-[640px] h-auto" role="img" aria-label={T.title}>
        <defs>
          <pattern id="bact" width="22" height="18" patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="2.2" fill="#f59e0b" opacity="0.8" />
            <circle cx="15" cy="13" r="1.6" fill="#f59e0b" opacity="0.6" />
          </pattern>
          <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill={accent} />
          </marker>
          <marker id="arrg" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#22d3ee" />
          </marker>
        </defs>

        {/* Milieu 2 dans la cheminée */}
        <rect x="290" y="88" width="140" height="112" fill="#f59e0b" opacity="0.16" />
        <rect x="290" y="88" width="140" height="112" fill="url(#bact)" />
        <line x1="290" y1="88" x2="430" y2="88" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5 4" />

        {/* Milieu 1 dans la cuve */}
        <rect x="210" y="234" width="300" height="196" fill="#22d3ee" opacity="0.14" />
        <line x1="210" y1="250" x2="510" y2="250" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="5 4" />

        {/* Cuve basse */}
        <path d="M200 214 V440 H520 V214" fill="none" stroke={wall} strokeWidth="10" strokeLinejoin="round" />

        {/* Disque consommable + enveloppe latex */}
        <rect x="203" y="200" width="314" height="34" rx="8" fill="#e8b98a" />
        <rect x="209" y="205" width="302" height="24" rx="5" fill="#3b5bdb" />

        {/* Couvercle à cheminée */}
        <path
          d="M285 50 V190 H185 V262 M435 50 V190 H535 V262"
          fill="none"
          stroke="#cbd5e1"
          strokeWidth="10"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path d="M185 262 h12 M535 262 h-12" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" />

        {/* Dent : couronne, collet, racines */}
        <path
          d="M318 200 C312 170 308 140 312 118 C316 100 330 96 340 104 C348 96 372 96 380 104 C390 96 404 100 408 118 C412 140 408 170 402 200 Z"
          fill="#f4f1e8"
          stroke="#c9c2ad"
          strokeWidth="2"
        />
        <path
          d="M326 200 V236 C326 270 332 320 342 352 C346 362 352 358 352 346 C352 310 354 270 360 246 C366 270 368 310 368 346 C368 358 374 362 378 352 C388 320 394 270 394 236 V200 Z"
          fill="#ece4cf"
          stroke="#c9c2ad"
          strokeWidth="2"
        />
        {/* Lésion carieuse */}
        <path d="M322 128 C330 118 344 122 344 134 C344 146 330 150 324 144 C319 139 318 133 322 128 Z" fill="#b91c1c" opacity="0.9" />
        <circle cx="333" cy="134" r="4" fill="#7f1d1d" />

        {/* Pressions */}
        <text x="415" y="188" fontSize="15" fontFamily="JetBrains Mono, monospace" fill="#f59e0b" textAnchor="end" fontWeight="700">P2</text>
        <text x="495" y="420" fontSize="15" fontFamily="JetBrains Mono, monospace" fill="#22d3ee" textAnchor="end" fontWeight="700">P1</text>

        {/* Port injection / éjection + échange gazeux */}
        <rect x="452" y="440" width="18" height="34" fill={wall} />
        <line x1="461" y1="520" x2="461" y2="482" stroke="#22d3ee" strokeWidth="2.5" markerEnd="url(#arrg)" markerStart="url(#arrg)" />
        <text x="480" y="508" fontSize="15" fill={label}>{T.port}</text>
        <path d="M232 470 q8 -8 0 -16 q-8 -8 0 -16" fill="none" stroke="#22d3ee" strokeWidth="2" markerEnd="url(#arrg)" />
        <path d="M252 470 q8 -8 0 -16 q-8 -8 0 -16" fill="none" stroke="#22d3ee" strokeWidth="2" markerStart="url(#arrg)" />
        <text x="270" y="470" fontSize="14" fill={sub}>{T.gas}</text>

        {/* Accès par la cheminée */}
        <line x1="360" y1="6" x2="360" y2="44" stroke={accent} strokeWidth="2.5" markerEnd="url(#arr)" markerStart="url(#arr)" />
        <text x="374" y="28" fontSize="14" fill={sub}>{T.access}</text>

        {/* Légendes à droite */}
        <g fontSize="16">
          <line x1="432" y1="130" x2="560" y2="110" stroke={sub} strokeWidth="1" />
          <text x="566" y="108" fill={label} fontWeight="600">{T.m2}</text>
          <text x="566" y="128" fill={sub} fontSize="14">{T.m2s}</text>

          <line x1="514" y1="217" x2="560" y2="217" stroke={sub} strokeWidth="1" />
          <text x="566" y="214" fill={label} fontWeight="600">{T.disc}</text>
          <text x="566" y="234" fill={sub} fontSize="14">{T.discs}</text>

          <line x1="500" y1="330" x2="560" y2="330" stroke={sub} strokeWidth="1" />
          <text x="566" y="327" fill={label} fontWeight="600">{T.m1}</text>
          <text x="566" y="347" fill={sub} fontSize="14">{T.m1s}</text>
        </g>

        {/* Légendes à gauche */}
        <g fontSize="16" textAnchor="end">
          <line x1="324" y1="136" x2="180" y2="136" stroke={sub} strokeWidth="1" />
          <text x="174" y="141" fill={label} fontWeight="600">{T.crown}</text>

          <line x1="283" y1="70" x2="180" y2="70" stroke={sub} strokeWidth="1" />
          <text x="174" y="75" fill={label} fontWeight="600">{T.lid}</text>

          <line x1="186" y1="250" x2="150" y2="250" stroke={sub} strokeWidth="1" />
          <text x="144" y="255" fill={label} fontWeight="600">{T.clip}</text>

          <line x1="344" y1="330" x2="180" y2="370" stroke={sub} strokeWidth="1" />
          <text x="174" y="375" fill={label} fontWeight="600">{T.roots}</text>
        </g>
      </svg>
      </div>
      <figcaption className="mt-3 text-sm text-chrome-400 text-center">{T.title}</figcaption>
    </figure>
  );
}
