// Planches générées depuis le modèle 3D de l'exosquelette (coordonnées en pixels des images).
import type { CadSheet } from "./cad";

export const symbiosuitsSheets: CadSheet[] = [
  {
    "id": "A",
    "src": "/images/symbiosuits/rendu-iso.jpg",
    "w": 1200,
    "h": 1500,
    "crop": [
      225,
      188,
      975,
      1251
    ],
    "title": {
      "fr": "Vue d'ensemble",
      "en": "Overview"
    },
    "view": {
      "fr": "Perspective",
      "en": "Perspective"
    },
    "material": {
      "fr": "Alliage léger, carbone, composites",
      "en": "Light alloy, carbon, composites"
    },
    "caption": {
      "fr": "L'exosquelette complet porté sur les membres inférieurs, silhouette du porteur en transparence. Une ceinture porte l'électronique et l'énergie, deux jambes articulées transmettent l'assistance aux hanches, aux genoux et aux chevilles.",
      "en": "The full lower-limb exoskeleton, with the wearer shown as a transparent silhouette. A belt carries electronics and power, two articulated legs transmit assistance to hips, knees and ankles."
    },
    "callouts": [
      {
        "x": 500,
        "y": 267,
        "bx": 294,
        "by": 267,
        "label": {
          "fr": "Unité de contrôle : analyse du mouvement, assistance adaptative",
          "en": "Control unit: motion analysis, adaptive assistance"
        }
      },
      {
        "x": 380,
        "y": 305,
        "bx": 294,
        "by": 372,
        "label": {
          "fr": "Batterie (autonomie visée : 8 à 12 h)",
          "en": "Battery (target runtime: 8 to 12 h)"
        }
      },
      {
        "x": 699,
        "y": 315,
        "bx": 294,
        "by": 478,
        "label": {
          "fr": "Ceinture ventrale : maintien et répartition des efforts",
          "en": "Waist belt: support and load distribution"
        }
      },
      {
        "x": 448,
        "y": 381,
        "bx": 294,
        "by": 583,
        "label": {
          "fr": "Articulation de hanche, modulaire et réglable",
          "en": "Hip joint, modular and adjustable"
        }
      },
      {
        "x": 432,
        "y": 528,
        "bx": 294,
        "by": 688,
        "label": {
          "fr": "Actionneur électrique d'assistance de hanche",
          "en": "Electric hip assist actuator"
        }
      },
      {
        "x": 458,
        "y": 564,
        "bx": 294,
        "by": 794,
        "label": {
          "fr": "Manchette de cuisse",
          "en": "Thigh cuff"
        }
      },
      {
        "x": 452,
        "y": 819,
        "bx": 294,
        "by": 899,
        "label": {
          "fr": "Articulation de genou, amplitude réglable",
          "en": "Knee joint, adjustable range"
        }
      },
      {
        "x": 443,
        "y": 931,
        "bx": 294,
        "by": 1004,
        "label": {
          "fr": "Actionneur de cheville : stabilité et propulsion",
          "en": "Ankle actuator: stability and push-off"
        }
      },
      {
        "x": 465,
        "y": 1234,
        "bx": 294,
        "by": 1234,
        "label": {
          "fr": "Articulation de cheville",
          "en": "Ankle joint"
        }
      },
      {
        "x": 613,
        "y": 1335,
        "bx": 294,
        "by": 1339,
        "label": {
          "fr": "Semelle instrumentée : adaptation au sol",
          "en": "Instrumented sole: ground adaptation"
        }
      }
    ]
  },
  {
    "id": "B",
    "src": "/images/symbiosuits/plan-profil.jpg",
    "w": 1200,
    "h": 1500,
    "crop": [
      126,
      108,
      898,
      1328
    ],
    "title": {
      "fr": "Vue de profil cotée",
      "en": "Dimensioned side view"
    },
    "view": {
      "fr": "Profil droit",
      "en": "Right side"
    },
    "material": {
      "fr": "Cotes en mm",
      "en": "Dimensions in mm"
    },
    "caption": {
      "fr": "Les trois axes articulaires sont alignés sur ceux du porteur : hanche à 900 mm, genou à 500 mm, cheville à 95 mm du sol. Les actionneurs sont placés à l'arrière des segments pour dégager l'avant de la jambe.",
      "en": "The three joint axes match the wearer's: hip at 900 mm, knee at 500 mm, ankle at 95 mm from the ground. Actuators sit behind the segments to keep the front of the leg free."
    },
    "callouts": [
      {
        "x": 425,
        "y": 177,
        "bx": 195,
        "by": 177,
        "label": {
          "fr": "Unité de contrôle : analyse du mouvement, assistance adaptative",
          "en": "Control unit: motion analysis, adaptive assistance"
        }
      },
      {
        "x": 606,
        "y": 261,
        "bx": 955,
        "by": 261,
        "label": {
          "fr": "Articulation de hanche, modulaire et réglable",
          "en": "Hip joint, modular and adjustable"
        }
      },
      {
        "x": 554,
        "y": 417,
        "bx": 195,
        "by": 417,
        "label": {
          "fr": "Actionneur électrique d'assistance de hanche",
          "en": "Electric hip assist actuator"
        }
      },
      {
        "x": 606,
        "y": 445,
        "bx": 955,
        "by": 445,
        "label": {
          "fr": "Manchette de cuisse",
          "en": "Thigh cuff"
        }
      },
      {
        "x": 606,
        "y": 707,
        "bx": 955,
        "by": 707,
        "label": {
          "fr": "Articulation de genou, amplitude réglable",
          "en": "Knee joint, adjustable range"
        }
      },
      {
        "x": 559,
        "y": 841,
        "bx": 195,
        "by": 841,
        "label": {
          "fr": "Actionneur de cheville : stabilité et propulsion",
          "en": "Ankle actuator: stability and push-off"
        }
      },
      {
        "x": 617,
        "y": 886,
        "bx": 955,
        "by": 886,
        "label": {
          "fr": "Manchette de jambe",
          "en": "Shank cuff"
        }
      },
      {
        "x": 606,
        "y": 1159,
        "bx": 955,
        "by": 1159,
        "label": {
          "fr": "Articulation de cheville",
          "en": "Ankle joint"
        }
      },
      {
        "x": 466,
        "y": 1198,
        "bx": 195,
        "by": 1198,
        "label": {
          "fr": "Talonnette de maintien",
          "en": "Heel cup"
        }
      },
      {
        "x": 740,
        "y": 1254,
        "bx": 955,
        "by": 1264,
        "label": {
          "fr": "Semelle instrumentée : adaptation au sol",
          "en": "Instrumented sole: ground adaptation"
        }
      }
    ]
  },
  {
    "id": "C",
    "src": "/images/symbiosuits/plan-face.jpg",
    "w": 1200,
    "h": 1500,
    "crop": [
      106,
      49,
      987,
      1416
    ],
    "title": {
      "fr": "Vue de face cotée",
      "en": "Dimensioned front view"
    },
    "view": {
      "fr": "Face",
      "en": "Front"
    },
    "material": {
      "fr": "Cotes en mm",
      "en": "Dimensions in mm"
    },
    "caption": {
      "fr": "Vue de face : les rails passent sur le côté extérieur de chaque jambe, les manchettes enveloppent la cuisse et la jambe. L'entraxe des membres est de 200 mm.",
      "en": "Front view: rails run along the outer side of each leg, cuffs wrap the thigh and shank. The limbs are 200 mm apart."
    },
    "callouts": [
      {
        "x": 611,
        "y": 194,
        "bx": 1024,
        "by": 194,
        "label": {
          "fr": "Ceinture ventrale : maintien et répartition des efforts",
          "en": "Waist belt: support and load distribution"
        }
      },
      {
        "x": 378,
        "y": 219,
        "bx": 175,
        "by": 219,
        "label": {
          "fr": "Support de hanche",
          "en": "Hip bracket"
        }
      },
      {
        "x": 378,
        "y": 262,
        "bx": 175,
        "by": 324,
        "label": {
          "fr": "Articulation de hanche, modulaire et réglable",
          "en": "Hip joint, modular and adjustable"
        }
      },
      {
        "x": 390,
        "y": 464,
        "bx": 175,
        "by": 464,
        "label": {
          "fr": "Manchette de cuisse",
          "en": "Thigh cuff"
        }
      },
      {
        "x": 400,
        "y": 580,
        "bx": 175,
        "by": 580,
        "label": {
          "fr": "Rail de cuisse en alliage léger",
          "en": "Light-alloy thigh rail"
        }
      },
      {
        "x": 378,
        "y": 752,
        "bx": 175,
        "by": 752,
        "label": {
          "fr": "Articulation de genou, amplitude réglable",
          "en": "Knee joint, adjustable range"
        }
      },
      {
        "x": 411,
        "y": 948,
        "bx": 175,
        "by": 948,
        "label": {
          "fr": "Manchette de jambe",
          "en": "Shank cuff"
        }
      },
      {
        "x": 390,
        "y": 1248,
        "bx": 175,
        "by": 1248,
        "label": {
          "fr": "Articulation de cheville",
          "en": "Ankle joint"
        }
      },
      {
        "x": 488,
        "y": 1352,
        "bx": 175,
        "by": 1354,
        "label": {
          "fr": "Semelle instrumentée : adaptation au sol",
          "en": "Instrumented sole: ground adaptation"
        }
      }
    ]
  },
  {
    "id": "D",
    "src": "/images/symbiosuits/plan-dos.jpg",
    "w": 1200,
    "h": 1500,
    "crop": [
      107,
      49,
      986,
      1416
    ],
    "title": {
      "fr": "Vue arrière cotée",
      "en": "Dimensioned back view"
    },
    "view": {
      "fr": "Arrière",
      "en": "Back"
    },
    "material": {
      "fr": "Cotes en mm",
      "en": "Dimensions in mm"
    },
    "caption": {
      "fr": "De dos, on retrouve l'unité de contrôle au centre de la ceinture, la batterie sur la hanche droite et les actionneurs le long des segments.",
      "en": "From the back: the control unit at the centre of the belt, the battery on the right hip and the actuators along the segments."
    },
    "callouts": [
      {
        "x": 589,
        "y": 170,
        "bx": 176,
        "by": 170,
        "label": {
          "fr": "Unité de contrôle : analyse du mouvement, assistance adaptative",
          "en": "Control unit: motion analysis, adaptive assistance"
        }
      },
      {
        "x": 840,
        "y": 186,
        "bx": 1024,
        "by": 186,
        "label": {
          "fr": "Batterie (autonomie visée : 8 à 12 h)",
          "en": "Battery (target runtime: 8 to 12 h)"
        }
      },
      {
        "x": 371,
        "y": 188,
        "bx": 176,
        "by": 275,
        "label": {
          "fr": "Ceinture ventrale",
          "en": "Waist belt"
        }
      },
      {
        "x": 338,
        "y": 262,
        "bx": 176,
        "by": 380,
        "label": {
          "fr": "Articulation de hanche gauche",
          "en": "Left hip joint"
        }
      },
      {
        "x": 802,
        "y": 433,
        "bx": 1024,
        "by": 433,
        "label": {
          "fr": "Actionneur électrique d'assistance de hanche",
          "en": "Electric hip assist actuator"
        }
      },
      {
        "x": 797,
        "y": 899,
        "bx": 1024,
        "by": 899,
        "label": {
          "fr": "Actionneur de cheville : stabilité et propulsion",
          "en": "Ankle actuator: stability and push-off"
        }
      }
    ]
  },
  {
    "id": "E",
    "src": "/images/symbiosuits/plan-dessus.jpg",
    "w": 1200,
    "h": 1100,
    "crop": [
      7,
      52,
      1193,
      1001
    ],
    "title": {
      "fr": "Vue de dessus cotée",
      "en": "Dimensioned top view"
    },
    "view": {
      "fr": "Dessus",
      "en": "Top"
    },
    "material": {
      "fr": "Cotes en mm",
      "en": "Dimensions in mm"
    },
    "caption": {
      "fr": "Encombrement au sol : la ceinture elliptique suit le bassin, les semelles débordent vers l'avant pour la propulsion.",
      "en": "Footprint: the elliptical belt follows the pelvis, the soles extend forward for push-off."
    },
    "callouts": [
      {
        "x": 581,
        "y": 281,
        "bx": 68,
        "by": 281,
        "label": {
          "fr": "Ceinture ventrale : maintien et répartition des efforts",
          "en": "Waist belt: support and load distribution"
        }
      },
      {
        "x": 796,
        "y": 281,
        "bx": 1165,
        "by": 281,
        "label": {
          "fr": "Semelle instrumentée : adaptation au sol",
          "en": "Instrumented sole: ground adaptation"
        }
      },
      {
        "x": 967,
        "y": 539,
        "bx": 1165,
        "by": 539,
        "label": {
          "fr": "Manchette de cuisse",
          "en": "Thigh cuff"
        }
      },
      {
        "x": 1021,
        "y": 706,
        "bx": 1165,
        "by": 706,
        "label": {
          "fr": "Batterie (autonomie visée : 8 à 12 h)",
          "en": "Battery (target runtime: 8 to 12 h)"
        }
      },
      {
        "x": 581,
        "y": 887,
        "bx": 68,
        "by": 887,
        "label": {
          "fr": "Unité de contrôle : analyse du mouvement, assistance adaptative",
          "en": "Control unit: motion analysis, adaptive assistance"
        }
      }
    ]
  },
  {
    "id": "F",
    "src": "/images/symbiosuits/plan-genou.jpg",
    "w": 1000,
    "h": 1000,
    "crop": [
      231,
      0,
      678,
      1000
    ],
    "title": {
      "fr": "Détail de l'articulation du genou",
      "en": "Knee joint detail"
    },
    "view": {
      "fr": "Profil, détail",
      "en": "Side, detail"
    },
    "material": {
      "fr": "Alliage léger, carbone",
      "en": "Light alloy, carbon"
    },
    "caption": {
      "fr": "Le genou concentre la mesure et l'assistance : un capteur d'angle et d'effort renseigne l'unité de contrôle, une butée limite l'amplitude, les actionneurs de hanche et de cheville viennent s'ancrer de part et d'autre.",
      "en": "The knee combines sensing and assistance: an angle and force sensor feeds the control unit, an end stop limits the range, hip and ankle actuators anchor on each side."
    },
    "callouts": [
      {
        "x": 583,
        "y": 111,
        "bx": 853,
        "by": 111,
        "label": {
          "fr": "Rail de cuisse en alliage léger",
          "en": "Light-alloy thigh rail"
        }
      },
      {
        "x": 408,
        "y": 167,
        "bx": 287,
        "by": 167,
        "label": {
          "fr": "Tige de l'actionneur de hanche",
          "en": "Hip actuator rod"
        }
      },
      {
        "x": 611,
        "y": 428,
        "bx": 853,
        "by": 428,
        "label": {
          "fr": "Capteur d'angle et d'effort",
          "en": "Angle and force sensor"
        }
      },
      {
        "x": 528,
        "y": 500,
        "bx": 287,
        "by": 500,
        "label": {
          "fr": "Articulation de genou, amplitude réglable",
          "en": "Knee joint, adjustable range"
        }
      },
      {
        "x": 422,
        "y": 556,
        "bx": 287,
        "by": 570,
        "label": {
          "fr": "Butée mécanique de fin de course",
          "en": "Mechanical end stop"
        }
      },
      {
        "x": 411,
        "y": 833,
        "bx": 287,
        "by": 833,
        "label": {
          "fr": "Actionneur de cheville : stabilité et propulsion",
          "en": "Ankle actuator: stability and push-off"
        }
      }
    ]
  }
];
