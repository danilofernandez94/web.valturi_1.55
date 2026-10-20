const FAMILY_META = {
  panas: {
    label: "Panas",
    order: 1
  },
  linos: {
    label: "Linos",
    order: 2
  },
  cuerinas: {
    label: "Cuerinas",
    order: 3
  },
  cuero: {
    label: "Cuero vacuno",
    order: 4
  },
  texturas: {
    label: "Texturas especiales",
    order: 5
  }
};
const APPLICATIONS = {
  tapiceria: {
    title: "Tapicería",
    eyebrow: "Para muebles y piezas de interior",
    description: "Panas, linos, cuerinas, cuero vacuno y texturas seleccionadas para renovar sillones, sillas, respaldos y piezas a medida.",
    status: "19 colecciones disponibles",
    families: [
      "panas",
      "linos",
      "cuerinas",
      "cuero",
      "texturas"
    ],
    image: "assets/applications/tapiceria.webp"
  },
  cortineria: {
    title: "Cortinería",
    eyebrow: "Caída, luz y textura",
    description: "Gazas, tejidos, tusor y blackout. Distintas transparencias, texturas y caídas para cada ambiente.",
    status: "Colecciones en preparación",
    families: [],
    image: "assets/applications/cortineria.webp"
  },
  exterior: {
    title: "Exterior",
    eyebrow: "Materiales para intemperie",
    description: "Cuerinas outdoor y lonas pensadas para proyectos donde importan resistencia, mantenimiento y comportamiento al exterior.",
    status: "Colecciones en preparación",
    families: [],
    image: "assets/applications/exterior.webp"
  }
};
const UPCOMING = {
  cortineria: [
    [
      "Gazas",
      "Opciones de transparencia, suavidad y movimiento."
    ],
    [
      "Tejidos",
      "Texturas con más cuerpo para equilibrar luz y presencia."
    ],
    [
      "Tusor",
      "Lecturas livianas y pesadas para distintos ambientes."
    ],
    [
      "Blackout",
      "Control de luz y privacidad con resolución visual cuidada."
    ]
  ],
  exterior: [
    [
      "Cuerinas outdoor",
      "Superficies de fácil mantenimiento para uso exterior."
    ],
    [
      "Lonas",
      "Texturas y colores para espacios al aire libre. Muestrarios en preparación."
    ]
  ]
};
const MATERIAL_COLLECTIONS = [
  {
    id: "pana-panne",
    title: "Pana Panne",
    shortName: "Panne",
    family: "panas",
    application: "tapiceria",
    description: "Pana de tacto suave y efecto marmolado, muy elegida para tapicería y cortinería.",
    intro: "Pana Panne es una colección de tacto suave, semiopaca y con presencia visual marcada. Su lectura cambia levemente con la luz y el sentido de la trama, por eso la biblioteca busca mostrar color y textura con la mayor fidelidad posible.",
    tags: [
      "Pana",
      "Tapicería",
      "Cortinería",
      "Efecto marmolado"
    ],
    specs: [
      [
        "Familia",
        "Pana"
      ],
      [
        "Composición",
        "100% poliéster"
      ],
      [
        "Ancho",
        "1,45 m"
      ],
      [
        "Peso",
        "540 g por metro lineal"
      ],
      [
        "Tratamiento",
        "Proceso antimancha · repelencia a líquidos"
      ],
      [
        "Colores cargados",
        "16"
      ]
    ],
    uses: [
      "Sillones",
      "Sillas",
      "Respaldos",
      "Almohadones",
      "Cortinas",
      "Piezas a medida"
    ],
    colors: [
      {
        name: "Azul",
        main: "assets/materials/pana-panne/azul-main.webp",
        detail: "assets/materials/pana-panne/azul-detail.webp"
      },
      {
        name: "Borravino",
        main: "assets/materials/pana-panne/borravino-main.webp",
        detail: "assets/materials/pana-panne/borravino-detail.webp"
      },
      {
        name: "Dulce de leche",
        main: "assets/materials/pana-panne/dulce-de-leche-main.webp",
        detail: "assets/materials/pana-panne/dulce-de-leche-detail.webp"
      },
      {
        name: "Fucsia",
        main: "assets/materials/pana-panne/fucsia-main.webp",
        detail: "assets/materials/pana-panne/fucsia-detail.webp"
      },
      {
        name: "Gamuza",
        main: "assets/materials/pana-panne/gamuza-main.webp",
        detail: "assets/materials/pana-panne/gamuza-detail.webp"
      },
      {
        name: "Gris",
        main: "assets/materials/pana-panne/gris-main.webp",
        detail: "assets/materials/pana-panne/gris-detail.webp"
      },
      {
        name: "Jade",
        main: "assets/materials/pana-panne/jade-main.webp",
        detail: "assets/materials/pana-panne/jade-detail.webp"
      },
      {
        name: "Lima",
        main: "assets/materials/pana-panne/lima-main.webp",
        detail: "assets/materials/pana-panne/lima-detail.webp"
      },
      {
        name: "Natural",
        main: "assets/materials/pana-panne/natural-main.webp",
        detail: "assets/materials/pana-panne/natural-detail.webp"
      },
      {
        name: "Negro",
        main: "assets/materials/pana-panne/negro-main.webp",
        detail: "assets/materials/pana-panne/negro-detail.webp"
      },
      {
        name: "Oceano",
        main: "assets/materials/pana-panne/oceano-main.webp",
        detail: "assets/materials/pana-panne/oceano-detail.webp"
      },
      {
        name: "Orange",
        main: "assets/materials/pana-panne/orange-main.webp",
        detail: "assets/materials/pana-panne/orange-detail.webp"
      },
      {
        name: "Perla",
        main: "assets/materials/pana-panne/perla-main.webp",
        detail: "assets/materials/pana-panne/perla-detail.webp"
      },
      {
        name: "Rojo",
        main: "assets/materials/pana-panne/rojo-main.webp",
        detail: "assets/materials/pana-panne/rojo-detail.webp"
      },
      {
        name: "Verde inglés",
        main: "assets/materials/pana-panne/verde-ingles-main.webp",
        detail: "assets/materials/pana-panne/verde-ingles-detail.webp"
      },
      {
        name: "Violeta",
        main: "assets/materials/pana-panne/violeta-main.webp",
        detail: "assets/materials/pana-panne/violeta-detail.webp"
      }
    ],
    performanceNote: "Esta colección cuenta con proceso antimancha. La ficha queda preparada para sumar una prueba visual de repelencia cuando el material esté documentado en uso."
  },
  {
    id: "pana-thor",
    title: "Pana Thor",
    shortName: "Thor",
    family: "panas",
    application: "tapiceria",
    description: "Pana de lectura más mate y trama visible, con una paleta compacta pensada para interior.",
    intro: "Pana Thor reúne tonos sobrios y cálidos con una textura visible que aporta profundidad sin perder elegancia. La selección está pensada para tapicería interior y para quienes buscan una pana menos brillante.",
    tags: [
      "Pana",
      "Textura visible",
      "Interior"
    ],
    specs: [
      [
        "Familia",
        "Pana"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Lectura visual",
        "Mate · trama visible"
      ],
      [
        "Colores cargados",
        "9"
      ]
    ],
    uses: [
      "Sillas",
      "Sillones",
      "Sofás",
      "Respaldos",
      "Almohadones"
    ],
    colors: [
      {
        name: "Alga",
        main: "assets/materials/pana-thor/alga-main.webp",
        detail: "assets/materials/pana-thor/alga-detail.webp"
      },
      {
        name: "Azul",
        main: "assets/materials/pana-thor/azul-main.webp",
        detail: "assets/materials/pana-thor/azul-detail.webp"
      },
      {
        name: "Bronce",
        main: "assets/materials/pana-thor/bronce-main.webp",
        detail: "assets/materials/pana-thor/bronce-detail.webp"
      },
      {
        name: "Dijon",
        main: "assets/materials/pana-thor/dijon-main.webp",
        detail: "assets/materials/pana-thor/dijon-detail.webp"
      },
      {
        name: "Gamuza",
        main: "assets/materials/pana-thor/gamuza-main.webp",
        detail: "assets/materials/pana-thor/gamuza-detail.webp"
      },
      {
        name: "Gris Oscuro",
        main: "assets/materials/pana-thor/gris-oscuro-main.webp",
        detail: "assets/materials/pana-thor/gris-oscuro-detail.webp"
      },
      {
        name: "Gris",
        main: "assets/materials/pana-thor/gris-main.webp",
        detail: "assets/materials/pana-thor/gris-detail.webp"
      },
      {
        name: "Natural",
        main: "assets/materials/pana-thor/natural-main.webp",
        detail: "assets/materials/pana-thor/natural-detail.webp"
      },
      {
        name: "Topo",
        main: "assets/materials/pana-thor/topo-main.webp",
        detail: "assets/materials/pana-thor/topo-detail.webp"
      }
    ]
  },
  {
    id: "pana-hulk",
    title: "Pana Hulk",
    shortName: "Hulk",
    family: "panas",
    application: "tapiceria",
    description: "Pana de tacto suave y presencia cálida, ideal para interiores contemporáneos.",
    intro: "Pana Hulk combina suavidad al tacto, una lectura cálida del color y una textura pareja. Funciona muy bien en proyectos de interior donde se busca confort visual y una superficie agradable al uso diario.",
    tags: [
      "Pana",
      "Suave al tacto",
      "Interior"
    ],
    specs: [
      [
        "Familia",
        "Pana"
      ],
      [
        "Composición",
        "100% poliéster"
      ],
      [
        "Ancho",
        "1,40 m"
      ],
      [
        "Peso",
        "380 g"
      ],
      [
        "Temporada sugerida",
        "Otoño · invierno"
      ],
      [
        "Colores cargados",
        "12"
      ]
    ],
    uses: [
      "Sillas",
      "Sillones",
      "Sofás",
      "Respaldos",
      "Almohadones"
    ],
    colors: [
      {
        name: "Azul",
        main: "assets/materials/pana-hulk/azul-main.webp",
        detail: "assets/materials/pana-hulk/azul-detail.webp"
      },
      {
        name: "Bronce",
        main: "assets/materials/pana-hulk/bronce-main.webp",
        detail: "assets/materials/pana-hulk/bronce-detail.webp"
      },
      {
        name: "Dijon",
        main: "assets/materials/pana-hulk/dijon-main.webp",
        detail: "assets/materials/pana-hulk/dijon-detail.webp"
      },
      {
        name: "Ivory",
        main: "assets/materials/pana-hulk/ivory-main.webp",
        detail: "assets/materials/pana-hulk/ivory-detail.webp"
      },
      {
        name: "Latte",
        main: "assets/materials/pana-hulk/latte-main.webp",
        detail: "assets/materials/pana-hulk/latte-detail.webp"
      },
      {
        name: "Musgo",
        main: "assets/materials/pana-hulk/musgo-main.webp",
        detail: "assets/materials/pana-hulk/musgo-detail.webp"
      },
      {
        name: "Mustang",
        main: "assets/materials/pana-hulk/mustang-main.webp",
        detail: "assets/materials/pana-hulk/mustang-detail.webp"
      },
      {
        name: "Nickel",
        main: "assets/materials/pana-hulk/nickel-main.webp",
        detail: "assets/materials/pana-hulk/nickel-detail.webp"
      },
      {
        name: "Ónix",
        main: "assets/materials/pana-hulk/onix-main.webp",
        detail: "assets/materials/pana-hulk/onix-detail.webp"
      },
      {
        name: "Piedra",
        main: "assets/materials/pana-hulk/piedra-main.webp",
        detail: "assets/materials/pana-hulk/piedra-detail.webp"
      },
      {
        name: "Stone",
        main: "assets/materials/pana-hulk/stone-main.webp",
        detail: "assets/materials/pana-hulk/stone-detail.webp"
      },
      {
        name: "Verde Inglés",
        main: "assets/materials/pana-hulk/verde-ingles-main.webp",
        detail: "assets/materials/pana-hulk/verde-ingles-detail.webp"
      }
    ]
  },
  {
    id: "pana-velutti",
    title: "Pana Velutti",
    shortName: "Velutti",
    family: "panas",
    application: "tapiceria",
    description: "Pana con paleta equilibrada entre neutros, azules y tonos tierra, pensada para tapicería interior.",
    intro: "Pana Velutti ofrece una lectura suave del color y una superficie agradable al tacto. La colección combina tonos neutros con azules y acentos más cálidos para adaptarse a distintos estilos de interior.",
    tags: [
      "Pana",
      "Tapicería",
      "Paleta equilibrada"
    ],
    specs: [
      [
        "Familia",
        "Pana"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "10"
      ]
    ],
    uses: [
      "Sillones",
      "Sillas",
      "Respaldos",
      "Piezas a medida"
    ],
    colors: [
      {
        name: "Almond",
        main: "assets/materials/pana-velutti/almond-main.webp",
        detail: "assets/materials/pana-velutti/almond-detail.webp"
      },
      {
        name: "Chinchilla",
        main: "assets/materials/pana-velutti/chinchilla-main.webp",
        detail: "assets/materials/pana-velutti/chinchilla-detail.webp"
      },
      {
        name: "Gris oscuro",
        main: "assets/materials/pana-velutti/gris-oscuro-main.webp",
        detail: "assets/materials/pana-velutti/gris-oscuro-detail.webp"
      },
      {
        name: "Ocean",
        main: "assets/materials/pana-velutti/ocean-main.webp",
        detail: "assets/materials/pana-velutti/ocean-detail.webp"
      },
      {
        name: "Park blue",
        main: "assets/materials/pana-velutti/park-blue-main.webp",
        detail: "assets/materials/pana-velutti/park-blue-detail.webp"
      },
      {
        name: "Roca",
        main: "assets/materials/pana-velutti/roca-main.webp",
        detail: "assets/materials/pana-velutti/roca-detail.webp"
      },
      {
        name: "Seco",
        main: "assets/materials/pana-velutti/seco-main.webp",
        detail: "assets/materials/pana-velutti/seco-detail.webp"
      },
      {
        name: "Ultramar",
        main: "assets/materials/pana-velutti/ultramar-main.webp",
        detail: "assets/materials/pana-velutti/ultramar-detail.webp"
      },
      {
        name: "White",
        main: "assets/materials/pana-velutti/white-main.webp",
        detail: "assets/materials/pana-velutti/white-detail.webp"
      },
      {
        name: "Yellow",
        main: "assets/materials/pana-velutti/yellow-main.webp",
        detail: "assets/materials/pana-velutti/yellow-detail.webp"
      }
    ]
  },
  {
    id: "pana-velvet",
    title: "Pana Velvet",
    shortName: "Velvet",
    family: "panas",
    application: "tapiceria",
    description: "Pana con una paleta amplia de neutros, tierras, verdes y tonos profundos.",
    intro: "Pana Velvet propone una colección más extensa de tonos para proyectos de tapicería interior. Su superficie suave y su paleta amplia la vuelven versátil para estilos contemporáneos y clásicos.",
    tags: [
      "Pana",
      "Tapicería",
      "Paleta amplia"
    ],
    specs: [
      [
        "Familia",
        "Pana"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "15"
      ]
    ],
    uses: [
      "Sillones",
      "Sillas",
      "Sofás",
      "Respaldos",
      "Almohadones"
    ],
    colors: [
      {
        name: "Azafran",
        main: "assets/materials/pana-velvet/azafran-main.webp",
        detail: "assets/materials/pana-velvet/azafran-detail.webp"
      },
      {
        name: "Cafe",
        main: "assets/materials/pana-velvet/cafe-main.webp",
        detail: "assets/materials/pana-velvet/cafe-detail.webp"
      },
      {
        name: "Castaño",
        main: "assets/materials/pana-velvet/castano-main.webp",
        detail: "assets/materials/pana-velvet/castano-detail.webp"
      },
      {
        name: "Grafito",
        main: "assets/materials/pana-velvet/grafito-main.webp",
        detail: "assets/materials/pana-velvet/grafito-detail.webp"
      },
      {
        name: "Gris pimienta",
        main: "assets/materials/pana-velvet/gris-pimienta-main.webp",
        detail: "assets/materials/pana-velvet/gris-pimienta-detail.webp"
      },
      {
        name: "Indigo",
        main: "assets/materials/pana-velvet/indigo-main.webp",
        detail: "assets/materials/pana-velvet/indigo-detail.webp"
      },
      {
        name: "Marfil",
        main: "assets/materials/pana-velvet/marfil-main.webp",
        detail: "assets/materials/pana-velvet/marfil-detail.webp"
      },
      {
        name: "Negro",
        main: "assets/materials/pana-velvet/negro-main.webp",
        detail: "assets/materials/pana-velvet/negro-detail.webp"
      },
      {
        name: "Oxido",
        main: "assets/materials/pana-velvet/oxido-main.webp",
        detail: "assets/materials/pana-velvet/oxido-detail.webp"
      },
      {
        name: "Plata",
        main: "assets/materials/pana-velvet/plata-main.webp",
        detail: "assets/materials/pana-velvet/plata-detail.webp"
      },
      {
        name: "Sepia",
        main: "assets/materials/pana-velvet/sepia-main.webp",
        detail: "assets/materials/pana-velvet/sepia-detail.webp"
      },
      {
        name: "Tabaco",
        main: "assets/materials/pana-velvet/tabaco-main.webp",
        detail: "assets/materials/pana-velvet/tabaco-detail.webp"
      },
      {
        name: "Verde",
        main: "assets/materials/pana-velvet/verde-main.webp",
        detail: "assets/materials/pana-velvet/verde-detail.webp"
      },
      {
        name: "Vino",
        main: "assets/materials/pana-velvet/vino-main.webp",
        detail: "assets/materials/pana-velvet/vino-detail.webp"
      },
      {
        name: "Visón",
        main: "assets/materials/pana-velvet/vison-main.webp",
        detail: "assets/materials/pana-velvet/vison-detail.webp"
      }
    ]
  },
  {
    id: "lino-boucle-largo",
    title: "Lino Bouclé largo",
    shortName: "Bouclé largo",
    family: "linos",
    application: "tapiceria",
    description: "Textil con relieve visual y tacto envolvente, pensado para piezas con carácter.",
    intro: "La colección Bouclé largo aporta una textura de mayor volumen visual, ideal para piezas protagonistas. Su muestrario se organiza para comparar tonos manteniendo visible el detalle de la trama.",
    tags: [
      "Lino",
      "Textura volumétrica",
      "Tapicería"
    ],
    specs: [
      [
        "Familia",
        "Lino / bouclé"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "8"
      ]
    ],
    uses: [
      "Poltronas",
      "Sillones",
      "Banquetas",
      "Respaldos"
    ],
    colors: [
      {
        name: "Azul",
        main: "assets/materials/lino-boucle-largo/azul-main.webp",
        detail: "assets/materials/lino-boucle-largo/azul-detail.webp"
      },
      {
        name: "Beige",
        main: "assets/materials/lino-boucle-largo/beige-main.webp",
        detail: "assets/materials/lino-boucle-largo/beige-detail.webp"
      },
      {
        name: "Blanco",
        main: "assets/materials/lino-boucle-largo/blanco-main.webp",
        detail: "assets/materials/lino-boucle-largo/blanco-detail.webp"
      },
      {
        name: "Gris Claro",
        main: "assets/materials/lino-boucle-largo/gris-claro-main.webp",
        detail: "assets/materials/lino-boucle-largo/gris-claro-detail.webp"
      },
      {
        name: "Gris Medio",
        main: "assets/materials/lino-boucle-largo/gris-medio-main.webp",
        detail: "assets/materials/lino-boucle-largo/gris-medio-detail.webp"
      },
      {
        name: "Gris Oscuro",
        main: "assets/materials/lino-boucle-largo/gris-oscuro-main.webp",
        detail: "assets/materials/lino-boucle-largo/gris-oscuro-detail.webp"
      },
      {
        name: "Gris Plomo",
        main: "assets/materials/lino-boucle-largo/gris-plomo-main.webp",
        detail: "assets/materials/lino-boucle-largo/gris-plomo-detail.webp"
      },
      {
        name: "Visón",
        main: "assets/materials/lino-boucle-largo/vison-main.webp",
        detail: "assets/materials/lino-boucle-largo/vison-detail.webp"
      }
    ]
  },
  {
    id: "lino-dot",
    title: "Lino Dot",
    shortName: "Dot",
    family: "linos",
    application: "tapiceria",
    description: "Lino con lectura contemporánea y una paleta que mezcla neutros, azules, verdes y acentos cálidos.",
    intro: "Lino Dot trabaja una textura fina y una paleta diversa para proyectos contemporáneos. La biblioteca busca preservar tono y trama para facilitar comparaciones antes de definir la muestra física.",
    tags: [
      "Lino",
      "Trama fina",
      "Contemporáneo"
    ],
    specs: [
      [
        "Familia",
        "Lino"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "13"
      ]
    ],
    uses: [
      "Sillones",
      "Sillas",
      "Respaldos",
      "Almohadones"
    ],
    colors: [
      {
        name: "Blue",
        main: "assets/materials/lino-dot/blue-main.webp",
        detail: "assets/materials/lino-dot/blue-detail.webp"
      },
      {
        name: "Bronze",
        main: "assets/materials/lino-dot/bronze-main.webp",
        detail: "assets/materials/lino-dot/bronze-detail.webp"
      },
      {
        name: "Gold",
        main: "assets/materials/lino-dot/gold-main.webp",
        detail: "assets/materials/lino-dot/gold-detail.webp"
      },
      {
        name: "Green",
        main: "assets/materials/lino-dot/green-main.webp",
        detail: "assets/materials/lino-dot/green-detail.webp"
      },
      {
        name: "Ivory",
        main: "assets/materials/lino-dot/ivory-main.webp",
        detail: "assets/materials/lino-dot/ivory-detail.webp"
      },
      {
        name: "Latte",
        main: "assets/materials/lino-dot/latte-main.webp",
        detail: "assets/materials/lino-dot/latte-detail.webp"
      },
      {
        name: "Mastic",
        main: "assets/materials/lino-dot/mastic-main.webp",
        detail: "assets/materials/lino-dot/mastic-detail.webp"
      },
      {
        name: "Mustang",
        main: "assets/materials/lino-dot/mustang-main.webp",
        detail: "assets/materials/lino-dot/mustang-detail.webp"
      },
      {
        name: "Nickel",
        main: "assets/materials/lino-dot/nickel-main.webp",
        detail: "assets/materials/lino-dot/nickel-detail.webp"
      },
      {
        name: "Onyx",
        main: "assets/materials/lino-dot/onyx-main.webp",
        detail: "assets/materials/lino-dot/onyx-detail.webp"
      },
      {
        name: "Perla",
        main: "assets/materials/lino-dot/perla-main.webp",
        detail: "assets/materials/lino-dot/perla-detail.webp"
      },
      {
        name: "Pink",
        main: "assets/materials/lino-dot/pink-main.webp",
        detail: "assets/materials/lino-dot/pink-detail.webp"
      },
      {
        name: "Stone",
        main: "assets/materials/lino-dot/stone-main.webp",
        detail: "assets/materials/lino-dot/stone-detail.webp"
      }
    ]
  },
  {
    id: "lino-mecha",
    title: "Lino Mecha",
    shortName: "Mecha",
    family: "linos",
    application: "tapiceria",
    description: "Lino de paleta amplia, con una selección que va de marfiles y arenas a tonos intensos y profundos.",
    intro: "Lino Mecha reúne una colección amplia de colores para quienes buscan variedad sin perder una lectura textil cálida y natural. El muestrario está preparado para ver tono y trama en alta definición.",
    tags: [
      "Lino",
      "Paleta amplia",
      "Tapicería"
    ],
    specs: [
      [
        "Familia",
        "Lino"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "16"
      ]
    ],
    uses: [
      "Sillones",
      "Sillas",
      "Respaldos",
      "Piezas a medida"
    ],
    colors: [
      {
        name: "Arena",
        main: "assets/materials/lino-mecha/arena-main.webp",
        detail: "assets/materials/lino-mecha/arena-detail.webp"
      },
      {
        name: "Cobre",
        main: "assets/materials/lino-mecha/cobre-main.webp",
        detail: "assets/materials/lino-mecha/cobre-detail.webp"
      },
      {
        name: "Gamo",
        main: "assets/materials/lino-mecha/gamo-main.webp",
        detail: "assets/materials/lino-mecha/gamo-detail.webp"
      },
      {
        name: "Gamuza",
        main: "assets/materials/lino-mecha/gamuza-main.webp",
        detail: "assets/materials/lino-mecha/gamuza-detail.webp"
      },
      {
        name: "Gris",
        main: "assets/materials/lino-mecha/gris-main.webp",
        detail: "assets/materials/lino-mecha/gris-detail.webp"
      },
      {
        name: "Ivory",
        main: "assets/materials/lino-mecha/ivory-main.webp",
        detail: "assets/materials/lino-mecha/ivory-detail.webp"
      },
      {
        name: "Malbec",
        main: "assets/materials/lino-mecha/malbec-main.webp",
        detail: "assets/materials/lino-mecha/malbec-detail.webp"
      },
      {
        name: "Navy",
        main: "assets/materials/lino-mecha/navy-main.webp",
        detail: "assets/materials/lino-mecha/navy-detail.webp"
      },
      {
        name: "Negro",
        main: "assets/materials/lino-mecha/negro-main.webp",
        detail: "assets/materials/lino-mecha/negro-detail.webp"
      },
      {
        name: "Petroleo",
        main: "assets/materials/lino-mecha/petroleo-main.webp",
        detail: "assets/materials/lino-mecha/petroleo-detail.webp"
      },
      {
        name: "Plata",
        main: "assets/materials/lino-mecha/plata-main.webp",
        detail: "assets/materials/lino-mecha/plata-detail.webp"
      },
      {
        name: "Rojo",
        main: "assets/materials/lino-mecha/rojo-main.webp",
        detail: "assets/materials/lino-mecha/rojo-detail.webp"
      },
      {
        name: "Sambayon",
        main: "assets/materials/lino-mecha/sambayon-main.webp",
        detail: "assets/materials/lino-mecha/sambayon-detail.webp"
      },
      {
        name: "Tabaco",
        main: "assets/materials/lino-mecha/tabaco-main.webp",
        detail: "assets/materials/lino-mecha/tabaco-detail.webp"
      },
      {
        name: "Turquesa",
        main: "assets/materials/lino-mecha/turquesa-main.webp",
        detail: "assets/materials/lino-mecha/turquesa-detail.webp"
      },
      {
        name: "Violeta",
        main: "assets/materials/lino-mecha/violeta-main.webp",
        detail: "assets/materials/lino-mecha/violeta-detail.webp"
      }
    ]
  },
  {
    id: "lino-spazio",
    title: "Lino Spazio",
    shortName: "Spazio",
    family: "linos",
    application: "tapiceria",
    description: "Lino de tonos neutros, tierras, verdes y azules, con lectura sobria y actual.",
    intro: "Lino Spazio trabaja una base de neutros y tierras acompañada por verdes y azules más profundos. Es una colección versátil para proyectos donde el color acompaña sin dominar.",
    tags: [
      "Lino",
      "Sobrio",
      "Actual"
    ],
    specs: [
      [
        "Familia",
        "Lino"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "17"
      ]
    ],
    uses: [
      "Sillones",
      "Sillas",
      "Respaldos",
      "Cabeceras"
    ],
    colors: [
      {
        name: "Africano",
        main: "assets/materials/lino-spazio/africano-main.webp",
        detail: "assets/materials/lino-spazio/africano-detail.webp"
      },
      {
        name: "Arena",
        main: "assets/materials/lino-spazio/arena-main.webp",
        detail: "assets/materials/lino-spazio/arena-detail.webp"
      },
      {
        name: "Azul",
        main: "assets/materials/lino-spazio/azul-main.webp",
        detail: "assets/materials/lino-spazio/azul-detail.webp"
      },
      {
        name: "Beige",
        main: "assets/materials/lino-spazio/beige-main.webp",
        detail: "assets/materials/lino-spazio/beige-detail.webp"
      },
      {
        name: "Borravino",
        main: "assets/materials/lino-spazio/borravino-main.webp",
        detail: "assets/materials/lino-spazio/borravino-detail.webp"
      },
      {
        name: "Chocolate",
        main: "assets/materials/lino-spazio/chocolate-main.webp",
        detail: "assets/materials/lino-spazio/chocolate-detail.webp"
      },
      {
        name: "Crudo",
        main: "assets/materials/lino-spazio/crudo-main.webp",
        detail: "assets/materials/lino-spazio/crudo-detail.webp"
      },
      {
        name: "Gamuza",
        main: "assets/materials/lino-spazio/gamuza-main.webp",
        detail: "assets/materials/lino-spazio/gamuza-detail.webp"
      },
      {
        name: "Gris",
        main: "assets/materials/lino-spazio/gris-main.webp",
        detail: "assets/materials/lino-spazio/gris-detail.webp"
      },
      {
        name: "Lino",
        main: "assets/materials/lino-spazio/lino-main.webp",
        detail: "assets/materials/lino-spazio/lino-detail.webp"
      },
      {
        name: "Musgo",
        main: "assets/materials/lino-spazio/musgo-main.webp",
        detail: "assets/materials/lino-spazio/musgo-detail.webp"
      },
      {
        name: "Negro",
        main: "assets/materials/lino-spazio/negro-main.webp",
        detail: "assets/materials/lino-spazio/negro-detail.webp"
      },
      {
        name: "Optico",
        main: "assets/materials/lino-spazio/optico-main.webp",
        detail: "assets/materials/lino-spazio/optico-detail.webp"
      },
      {
        name: "Perla",
        main: "assets/materials/lino-spazio/perla-main.webp",
        detail: "assets/materials/lino-spazio/perla-detail.webp"
      },
      {
        name: "Petroleo",
        main: "assets/materials/lino-spazio/petroleo-main.webp",
        detail: "assets/materials/lino-spazio/petroleo-detail.webp"
      },
      {
        name: "Stone",
        main: "assets/materials/lino-spazio/stone-main.webp",
        detail: "assets/materials/lino-spazio/stone-detail.webp"
      },
      {
        name: "Verde",
        main: "assets/materials/lino-spazio/verde-main.webp",
        detail: "assets/materials/lino-spazio/verde-detail.webp"
      }
    ]
  },
  {
    id: "lino-scandal",
    title: "Lino Scandal",
    shortName: "Scandal",
    family: "linos",
    application: "tapiceria",
    description: "Lino contemporáneo con tonos neutros, tierras, verdes y grises profundos.",
    intro: "Lino Scandal ofrece una lectura contemporánea del color y una textura que equilibra naturalidad con presencia. La colección está pensada para interiores que buscan calidez sin perder sofisticación.",
    tags: [
      "Lino",
      "Contemporáneo",
      "Tapicería"
    ],
    specs: [
      [
        "Familia",
        "Lino"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "11"
      ]
    ],
    uses: [
      "Sillones",
      "Sillas",
      "Respaldos",
      "Almohadones"
    ],
    colors: [
      {
        name: "Antique",
        main: "assets/materials/lino-scandal/antique-main.webp",
        detail: "assets/materials/lino-scandal/antique-detail.webp"
      },
      {
        name: "Black",
        main: "assets/materials/lino-scandal/black-main.webp",
        detail: "assets/materials/lino-scandal/black-detail.webp"
      },
      {
        name: "Coral",
        main: "assets/materials/lino-scandal/coral-main.webp",
        detail: "assets/materials/lino-scandal/coral-detail.webp"
      },
      {
        name: "Ivory",
        main: "assets/materials/lino-scandal/ivory-main.webp",
        detail: "assets/materials/lino-scandal/ivory-detail.webp"
      },
      {
        name: "Kaki",
        main: "assets/materials/lino-scandal/kaki-main.webp",
        detail: "assets/materials/lino-scandal/kaki-detail.webp"
      },
      {
        name: "Mostaza",
        main: "assets/materials/lino-scandal/mostaza-main.webp",
        detail: "assets/materials/lino-scandal/mostaza-detail.webp"
      },
      {
        name: "Nickel",
        main: "assets/materials/lino-scandal/nickel-main.webp",
        detail: "assets/materials/lino-scandal/nickel-detail.webp"
      },
      {
        name: "Ónix",
        main: "assets/materials/lino-scandal/onix-main.webp",
        detail: "assets/materials/lino-scandal/onix-detail.webp"
      },
      {
        name: "Pine",
        main: "assets/materials/lino-scandal/pine-main.webp",
        detail: "assets/materials/lino-scandal/pine-detail.webp"
      },
      {
        name: "Stone",
        main: "assets/materials/lino-scandal/stone-main.webp",
        detail: "assets/materials/lino-scandal/stone-detail.webp"
      },
      {
        name: "Yute",
        main: "assets/materials/lino-scandal/yute-main.webp",
        detail: "assets/materials/lino-scandal/yute-detail.webp"
      }
    ]
  },
  {
    id: "cuerina-dakota",
    title: "Cuerina Dakota",
    shortName: "Dakota",
    family: "cuerinas",
    application: "tapiceria",
    description: "Cuerina de lectura uniforme, pensada para proyectos que priorizan mantenimiento y practicidad.",
    intro: "Cuerina Dakota propone una paleta compacta y fácil de combinar. Su superficie uniforme la vuelve práctica para piezas de uso frecuente y proyectos donde el mantenimiento simple es un factor importante.",
    tags: [
      "Cuerina",
      "Fácil mantenimiento",
      "Interior"
    ],
    specs: [
      [
        "Familia",
        "Cuerina"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "7"
      ]
    ],
    uses: [
      "Sillas",
      "Banquetas",
      "Bancos",
      "Piezas de uso frecuente"
    ],
    colors: [
      {
        name: "Color 2",
        main: "assets/materials/cuerina-dakota/color-2-main.webp",
        detail: "assets/materials/cuerina-dakota/color-2-detail.webp"
      },
      {
        name: "Color3",
        main: "assets/materials/cuerina-dakota/color3-main.webp",
        detail: "assets/materials/cuerina-dakota/color3-detail.webp"
      },
      {
        name: "Color4",
        main: "assets/materials/cuerina-dakota/color4-main.webp",
        detail: "assets/materials/cuerina-dakota/color4-detail.webp"
      },
      {
        name: "Color5",
        main: "assets/materials/cuerina-dakota/color5-main.webp",
        detail: "assets/materials/cuerina-dakota/color5-detail.webp"
      },
      {
        name: "Color6",
        main: "assets/materials/cuerina-dakota/color6-main.webp",
        detail: "assets/materials/cuerina-dakota/color6-detail.webp"
      },
      {
        name: "Color7",
        main: "assets/materials/cuerina-dakota/color7-main.webp",
        detail: "assets/materials/cuerina-dakota/color7-detail.webp"
      },
      {
        name: "Color9",
        main: "assets/materials/cuerina-dakota/color9-main.webp",
        detail: "assets/materials/cuerina-dakota/color9-detail.webp"
      }
    ]
  },
  {
    id: "cuerina-legards",
    title: "Cuerina Legards",
    shortName: "Legards",
    family: "cuerinas",
    application: "tapiceria",
    description: "Cuerina en tonos sobrios y neutros, con lectura limpia para interiores versátiles.",
    intro: "Cuerina Legards trabaja una selección breve y clara de tonos. Es una colección cómoda para comparar opciones de forma rápida cuando se prioriza practicidad y presencia sobria.",
    tags: [
      "Cuerina",
      "Neutros",
      "Practicidad"
    ],
    specs: [
      [
        "Familia",
        "Cuerina"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "5"
      ]
    ],
    uses: [
      "Sillas",
      "Banquetas",
      "Cabeceras"
    ],
    colors: [
      {
        name: "Grey",
        main: "assets/materials/cuerina-legards/grey-main.webp",
        detail: "assets/materials/cuerina-legards/grey-detail.webp"
      },
      {
        name: "Light grey",
        main: "assets/materials/cuerina-legards/light-grey-main.webp",
        detail: "assets/materials/cuerina-legards/light-grey-detail.webp"
      },
      {
        name: "Negro",
        main: "assets/materials/cuerina-legards/negro-main.webp",
        detail: "assets/materials/cuerina-legards/negro-detail.webp"
      },
      {
        name: "Saddle",
        main: "assets/materials/cuerina-legards/saddle-main.webp",
        detail: "assets/materials/cuerina-legards/saddle-detail.webp"
      },
      {
        name: "Verde",
        main: "assets/materials/cuerina-legards/verde-main.webp",
        detail: "assets/materials/cuerina-legards/verde-detail.webp"
      }
    ]
  },
  {
    id: "cuerina-marbella",
    title: "Cuerina Marbella",
    shortName: "Marbella",
    family: "cuerinas",
    application: "tapiceria",
    description: "Cuerina de paleta versátil, centrada en neutros, tierras y grises.",
    intro: "Cuerina Marbella reúne tonos clásicos y fáciles de combinar para proyectos de tapicería interior. La biblioteca muestra la variación de tono y el grano superficial con la mayor fidelidad posible.",
    tags: [
      "Cuerina",
      "Versátil",
      "Interior"
    ],
    specs: [
      [
        "Familia",
        "Cuerina"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "10"
      ]
    ],
    uses: [
      "Sillas",
      "Banquetas",
      "Respaldos",
      "Piezas a medida"
    ],
    colors: [
      {
        name: "Arena",
        main: "assets/materials/cuerina-marbella/arena-main.webp",
        detail: "assets/materials/cuerina-marbella/arena-detail.webp"
      },
      {
        name: "Blanco",
        main: "assets/materials/cuerina-marbella/blanco-main.webp",
        detail: "assets/materials/cuerina-marbella/blanco-detail.webp"
      },
      {
        name: "Dark grey",
        main: "assets/materials/cuerina-marbella/dark-grey-main.webp",
        detail: "assets/materials/cuerina-marbella/dark-grey-detail.webp"
      },
      {
        name: "Gris",
        main: "assets/materials/cuerina-marbella/gris-main.webp",
        detail: "assets/materials/cuerina-marbella/gris-detail.webp"
      },
      {
        name: "Hueso",
        main: "assets/materials/cuerina-marbella/hueso-main.webp",
        detail: "assets/materials/cuerina-marbella/hueso-detail.webp"
      },
      {
        name: "Miel",
        main: "assets/materials/cuerina-marbella/miel-main.webp",
        detail: "assets/materials/cuerina-marbella/miel-detail.webp"
      },
      {
        name: "Negro",
        main: "assets/materials/cuerina-marbella/negro-main.webp",
        detail: "assets/materials/cuerina-marbella/negro-detail.webp"
      },
      {
        name: "Perla",
        main: "assets/materials/cuerina-marbella/perla-main.webp",
        detail: "assets/materials/cuerina-marbella/perla-detail.webp"
      },
      {
        name: "Piedra",
        main: "assets/materials/cuerina-marbella/piedra-main.webp",
        detail: "assets/materials/cuerina-marbella/piedra-detail.webp"
      },
      {
        name: "Tostado",
        main: "assets/materials/cuerina-marbella/tostado-main.webp",
        detail: "assets/materials/cuerina-marbella/tostado-detail.webp"
      }
    ]
  },
  {
    id: "cuerina-nebraska",
    title: "Cuerina Nebraska",
    shortName: "Nebraska",
    family: "cuerinas",
    application: "tapiceria",
    description: "Cuerina de paleta clásica, con negros, marrones, grises y neutros claros.",
    intro: "Cuerina Nebraska apunta a una paleta clásica y muy utilizable. Se adapta bien a proyectos que buscan durabilidad visual, limpieza de lectura y mantenimiento simple.",
    tags: [
      "Cuerina",
      "Paleta clásica",
      "Interior"
    ],
    specs: [
      [
        "Familia",
        "Cuerina"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "9"
      ]
    ],
    uses: [
      "Sillas",
      "Bancos",
      "Banquetas",
      "Cabeceras"
    ],
    colors: [
      {
        name: "Black",
        main: "assets/materials/cuerina-nebraska/black-main.webp",
        detail: "assets/materials/cuerina-nebraska/black-detail.webp"
      },
      {
        name: "Chocolate",
        main: "assets/materials/cuerina-nebraska/chocolate-main.webp",
        detail: "assets/materials/cuerina-nebraska/chocolate-detail.webp"
      },
      {
        name: "Grey",
        main: "assets/materials/cuerina-nebraska/grey-main.webp",
        detail: "assets/materials/cuerina-nebraska/grey-detail.webp"
      },
      {
        name: "Hueso",
        main: "assets/materials/cuerina-nebraska/hueso-main.webp",
        detail: "assets/materials/cuerina-nebraska/hueso-detail.webp"
      },
      {
        name: "Light grey",
        main: "assets/materials/cuerina-nebraska/light-grey-main.webp",
        detail: "assets/materials/cuerina-nebraska/light-grey-detail.webp"
      },
      {
        name: "Miel",
        main: "assets/materials/cuerina-nebraska/miel-main.webp",
        detail: "assets/materials/cuerina-nebraska/miel-detail.webp"
      },
      {
        name: "Pearl",
        main: "assets/materials/cuerina-nebraska/pearl-main.webp",
        detail: "assets/materials/cuerina-nebraska/pearl-detail.webp"
      },
      {
        name: "Saddle",
        main: "assets/materials/cuerina-nebraska/saddle-main.webp",
        detail: "assets/materials/cuerina-nebraska/saddle-detail.webp"
      },
      {
        name: "Tabaco",
        main: "assets/materials/cuerina-nebraska/tabaco-main.webp",
        detail: "assets/materials/cuerina-nebraska/tabaco-detail.webp"
      }
    ]
  },
  {
    id: "cuero-vacuno-mantra",
    title: "Cuero vacuno Mantra",
    shortName: "Mantra",
    family: "cuero",
    application: "tapiceria",
    description: "Cuero vacuno en tonos profundos y cálidos, con carácter y presencia natural.",
    intro: "La colección Mantra reúne tonos cálidos y profundos dentro de una lectura más expresiva del cuero vacuno. La superficie natural aporta variaciones sutiles que enriquecen cada pieza.",
    tags: [
      "Cuero vacuno",
      "Carácter natural",
      "Tapicería"
    ],
    specs: [
      [
        "Familia",
        "Cuero vacuno"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "5"
      ]
    ],
    uses: [
      "Poltronas",
      "Sillones",
      "Sillas",
      "Piezas de autor"
    ],
    colors: [
      {
        name: "Chocolate",
        main: "assets/materials/cuero-vacuno-mantra/chocolate-main.webp",
        detail: "assets/materials/cuero-vacuno-mantra/chocolate-detail.webp"
      },
      {
        name: "Cogñac",
        main: "assets/materials/cuero-vacuno-mantra/cognac-main.webp",
        detail: "assets/materials/cuero-vacuno-mantra/cognac-detail.webp"
      },
      {
        name: "Suela",
        main: "assets/materials/cuero-vacuno-mantra/suela-main.webp",
        detail: "assets/materials/cuero-vacuno-mantra/suela-detail.webp"
      },
      {
        name: "Negro",
        main: "assets/materials/cuero-vacuno-mantra/negro-main.webp",
        detail: "assets/materials/cuero-vacuno-mantra/negro-detail.webp"
      },
      {
        name: "Red",
        main: "assets/materials/cuero-vacuno-mantra/red-main.webp",
        detail: "assets/materials/cuero-vacuno-mantra/red-detail.webp"
      }
    ]
  },
  {
    id: "cuero-vacuno-novapelli",
    title: "Cuero vacuno Novapelli",
    shortName: "Novapelli",
    family: "cuero",
    application: "tapiceria",
    description: "Colección acotada de cuero vacuno en tonos sobrios para propuestas contemporáneas.",
    intro: "Novapelli presenta una selección breve de tonos, pensada para quienes buscan un cuero vacuno de lectura sobria y contemporánea.",
    tags: [
      "Cuero vacuno",
      "Sobrio",
      "Contemporáneo"
    ],
    specs: [
      [
        "Familia",
        "Cuero vacuno"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "2"
      ]
    ],
    uses: [
      "Sillones",
      "Sillas",
      "Respaldos"
    ],
    colors: [
      {
        name: "Grey",
        main: "assets/materials/cuero-vacuno-novapelli/grey-main.webp",
        detail: "assets/materials/cuero-vacuno-novapelli/grey-detail.webp"
      },
      {
        name: "Moss",
        main: "assets/materials/cuero-vacuno-novapelli/moss-main.webp",
        detail: "assets/materials/cuero-vacuno-novapelli/moss-detail.webp"
      }
    ]
  },
  {
    id: "cuero-vacuno-riviera",
    title: "Cuero vacuno Riviera",
    shortName: "Riviera",
    family: "cuero",
    application: "tapiceria",
    description: "Cuero vacuno con una de las paletas más amplias del catálogo, entre neutros, tierras y acentos intensos.",
    intro: "Riviera trabaja una paleta extensa que permite moverse desde neutros muy claros hasta rojos, marrones y grises profundos. Una base flexible para proyectos de carácter clásico o contemporáneo.",
    tags: [
      "Cuero vacuno",
      "Paleta amplia",
      "Tapicería"
    ],
    specs: [
      [
        "Familia",
        "Cuero vacuno"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "16"
      ]
    ],
    uses: [
      "Sillones",
      "Sillas",
      "Poltronas",
      "Cabeceras"
    ],
    colors: [
      {
        name: "Almond",
        main: "assets/materials/cuero-vacuno-riviera/almond-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/almond-detail.webp"
      },
      {
        name: "Angora",
        main: "assets/materials/cuero-vacuno-riviera/angora-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/angora-detail.webp"
      },
      {
        name: "Burgundy",
        main: "assets/materials/cuero-vacuno-riviera/burgundy-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/burgundy-detail.webp"
      },
      {
        name: "Ceniza",
        main: "assets/materials/cuero-vacuno-riviera/ceniza-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/ceniza-detail.webp"
      },
      {
        name: "Charcoal",
        main: "assets/materials/cuero-vacuno-riviera/charcoal-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/charcoal-detail.webp"
      },
      {
        name: "Chocolate",
        main: "assets/materials/cuero-vacuno-riviera/chocolate-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/chocolate-detail.webp"
      },
      {
        name: "Coconut",
        main: "assets/materials/cuero-vacuno-riviera/coconut-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/coconut-detail.webp"
      },
      {
        name: "Gris",
        main: "assets/materials/cuero-vacuno-riviera/gris-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/gris-detail.webp"
      },
      {
        name: "Habano",
        main: "assets/materials/cuero-vacuno-riviera/habano-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/habano-detail.webp"
      },
      {
        name: "Light grey",
        main: "assets/materials/cuero-vacuno-riviera/light-grey-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/light-grey-detail.webp"
      },
      {
        name: "Miel",
        main: "assets/materials/cuero-vacuno-riviera/miel-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/miel-detail.webp"
      },
      {
        name: "Negro",
        main: "assets/materials/cuero-vacuno-riviera/negro-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/negro-detail.webp"
      },
      {
        name: "Oxido",
        main: "assets/materials/cuero-vacuno-riviera/oxido-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/oxido-detail.webp"
      },
      {
        name: "Red",
        main: "assets/materials/cuero-vacuno-riviera/red-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/red-detail.webp"
      },
      {
        name: "Saddle",
        main: "assets/materials/cuero-vacuno-riviera/saddle-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/saddle-detail.webp"
      },
      {
        name: "Visón",
        main: "assets/materials/cuero-vacuno-riviera/vison-main.webp",
        detail: "assets/materials/cuero-vacuno-riviera/vison-detail.webp"
      }
    ]
  },
  {
    id: "cuero-vacuno-stragrain",
    title: "Cuero vacuno Stragrain",
    shortName: "Stragrain",
    family: "cuero",
    application: "tapiceria",
    description: "Cuero vacuno de selección equilibrada entre claros, medios y oscuros.",
    intro: "Stragrain combina tonos claros, medios y oscuros en una colección de cuero vacuno pensada para facilitar la comparación de base y acento dentro del mismo material.",
    tags: [
      "Cuero vacuno",
      "Equilibrado",
      "Tapicería"
    ],
    specs: [
      [
        "Familia",
        "Cuero vacuno"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "8"
      ]
    ],
    uses: [
      "Sillas",
      "Sillones",
      "Cabeceras",
      "Piezas especiales"
    ],
    colors: [
      {
        name: "Biscuit",
        main: "assets/materials/cuero-vacuno-stragrain/biscuit-main.webp",
        detail: "assets/materials/cuero-vacuno-stragrain/biscuit-detail.webp"
      },
      {
        name: "Blanco",
        main: "assets/materials/cuero-vacuno-stragrain/blanco-main.webp",
        detail: "assets/materials/cuero-vacuno-stragrain/blanco-detail.webp"
      },
      {
        name: "Camel",
        main: "assets/materials/cuero-vacuno-stragrain/camel-main.webp",
        detail: "assets/materials/cuero-vacuno-stragrain/camel-detail.webp"
      },
      {
        name: "Chocolate",
        main: "assets/materials/cuero-vacuno-stragrain/chocolate-main.webp",
        detail: "assets/materials/cuero-vacuno-stragrain/chocolate-detail.webp"
      },
      {
        name: "Hueso",
        main: "assets/materials/cuero-vacuno-stragrain/hueso-main.webp",
        detail: "assets/materials/cuero-vacuno-stragrain/hueso-detail.webp"
      },
      {
        name: "Negro",
        main: "assets/materials/cuero-vacuno-stragrain/negro-main.webp",
        detail: "assets/materials/cuero-vacuno-stragrain/negro-detail.webp"
      },
      {
        name: "Pebble",
        main: "assets/materials/cuero-vacuno-stragrain/pebble-main.webp",
        detail: "assets/materials/cuero-vacuno-stragrain/pebble-detail.webp"
      },
      {
        name: "Red",
        main: "assets/materials/cuero-vacuno-stragrain/red-main.webp",
        detail: "assets/materials/cuero-vacuno-stragrain/red-detail.webp"
      }
    ]
  },
  {
    id: "sheep",
    title: "Sheep",
    shortName: "Sheep",
    family: "texturas",
    application: "tapiceria",
    description: "Textura especial de lectura cálida y visual envolvente, en tonos claros y naturales.",
    intro: "Sheep aporta una textura especial, táctil y envolvente, ideal para piezas que buscan protagonismo desde la superficie. Su familia queda dentro de texturas especiales por su carácter más expresivo.",
    tags: [
      "Textura especial",
      "Tonos claros",
      "Tapicería"
    ],
    specs: [
      [
        "Familia",
        "Textura especial"
      ],
      [
        "Uso sugerido",
        "Tapicería interior"
      ],
      [
        "Colores cargados",
        "4"
      ]
    ],
    uses: [
      "Poltronas",
      "Butacas",
      "Almohadones",
      "Piezas de acento"
    ],
    colors: [
      {
        name: "Crudo",
        main: "assets/materials/sheep/crudo-main.webp",
        detail: "assets/materials/sheep/crudo-detail.webp"
      },
      {
        name: "Crudo",
        main: "assets/materials/sheep/crudo-main.webp",
        detail: "assets/materials/sheep/crudo-detail.webp"
      },
      {
        name: "Natural",
        main: "assets/materials/sheep/natural-main.webp",
        detail: "assets/materials/sheep/natural-detail.webp"
      },
      {
        name: "White",
        main: "assets/materials/sheep/white-main.webp",
        detail: "assets/materials/sheep/white-detail.webp"
      }
    ]
  }
];

// Repeat identical banks so the loop boundary never crosses different content.
function wrapCatalogPosition(position, start, span) {
  return span > 0 ? start + ((position - start) % span + span) % span : 0;
}

function setupCatalogCarousel(root) {
  const track = root.querySelector('.catalog-track');
  const original = root.querySelector('[data-catalog-original]');
  const controls = root.querySelector('[data-catalog-controls]');
  const play = root.querySelector('[data-catalog-play]');
  const previous = root.querySelector('[data-catalog-prev]');
  const next = root.querySelector('[data-catalog-next]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const removers = [];
  let clones = [];
  let span = 0;
  let start = 0;
  let step = 0;
  let loop = false;
  let automatic = !reduced.matches;
  let visible = false;
  let hovering = false;
  let frame = 0;
  let lastTime = null;
  let motion = null;
  let destroyed = false;
  const listen = (node, event, callback, options) => {
    node.addEventListener(event, callback, options);
    removers.push(() => node.removeEventListener(event, callback, options));
  };
  const stop = () => { window.cancelAnimationFrame(frame); frame = 0; lastTime = null; motion = null; };
  const paint = (position) => {
    track.scrollLeft = loop ? wrapCatalogPosition(position, start, span) : 0;
  };
  const canPlay = () => automatic && loop && visible && !hovering && !document.hidden;
  const tick = (time) => {
    frame = 0;
    if (destroyed) return;
    if (motion) {
      if (motion.time === null) motion.time = time;
      const progress = Math.min(1, (time - motion.time) / 650);
      const eased = (1 - Math.cos(Math.PI * progress)) / 2;
      motion.value = motion.from + (motion.to - motion.from) * eased;
      paint(motion.value);
      if (progress < 1) frame = window.requestAnimationFrame(tick);
      else { motion = null; schedule(); }
    } else if (canPlay()) {
      if (lastTime !== null) paint(track.scrollLeft + Math.min(64, time - lastTime) * .020);
      lastTime = time;
      frame = window.requestAnimationFrame(tick);
    }
  };
  const schedule = () => {
    if (motion || frame || destroyed) return;
    lastTime = null;
    if (canPlay()) frame = window.requestAnimationFrame(tick);
  };
  const updatePlay = () => {
    play.textContent = automatic ? 'Pausar' : 'Reproducir';
    play.setAttribute('aria-pressed', String(automatic));
    play.setAttribute('aria-label', `${automatic ? 'Pausar' : 'Reproducir'} movimiento: ${root.getAttribute('aria-label')}`);
  };
  const pause = () => { automatic = false; stop(); updatePlay(); };
  const measure = () => {
    if (destroyed) return;
    const phase = span ? (wrapCatalogPosition(track.scrollLeft, start, span) - start) / span : 0;
    stop();
    clones.forEach((clone) => clone.remove()); clones = [];
    loop = original.children.length > 1 && original.getBoundingClientRect().width > track.clientWidth + 1;
    if (loop) {
      const cloneBank = () => {
        const clone = original.cloneNode(true);
        clone.removeAttribute('data-catalog-original');
        clone.setAttribute('data-catalog-clone', '');
        clone.setAttribute('aria-hidden', 'true');
        clone.querySelectorAll('a,button,[tabindex]').forEach((node) => node.setAttribute('tabindex', '-1'));
        return clone;
      };
      const before = cloneBank(); const after = cloneBank();
      track.prepend(before); track.append(after); clones = [before, after];
      start = original.offsetLeft - before.offsetLeft;
      span = after.offsetLeft - original.offsetLeft;
      step = original.children[1].offsetLeft - original.children[0].offsetLeft;
      paint(start + phase * span);
    } else { start = 0; span = 0; track.scrollLeft = 0; }
    controls.hidden = !loop;
    track.classList.toggle('is-looping', loop);
    updatePlay(); schedule();
  };
  const advance = (direction) => {
    if (!loop) return;
    const from = track.scrollLeft;
    // A second click keeps the next intended destination, rather than restarting.
    const destination = from + (motion ? motion.to - motion.value : 0) + direction * step;
    automatic = false; stop(); updatePlay();
    if (reduced.matches) { paint(destination); return; }
    motion = { from, to: destination, time: null, value: from };
    frame = window.requestAnimationFrame(tick);
  };
  listen(previous, 'click', () => advance(-1));
  listen(next, 'click', () => advance(1));
  listen(play, 'click', () => {
    if (automatic) pause();
    else { automatic = true; stop(); updatePlay(); schedule(); }
  });
  listen(track, 'pointerdown', pause, { passive: true });
  listen(track, 'wheel', pause, { passive: true });
  listen(track, 'focusin', pause);
  listen(root, 'pointerenter', (event) => { if (event.pointerType === 'mouse') { hovering = true; stop(); } });
  listen(root, 'pointerleave', () => { hovering = false; schedule(); });
  listen(track, 'scroll', () => {
    if (!loop || motion) return;
    if (track.scrollLeft < start || track.scrollLeft >= start + span) paint(track.scrollLeft);
  }, { passive: true });
  listen(track, 'keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'Home' || event.key === 'End') {
      pause();
      paint(start + (event.key === 'End' ? (original.children.length - 1) * step : 0));
    } else advance(event.key === 'ArrowRight' ? 1 : -1);
  });
  listen(reduced, 'change', () => { if (reduced.matches) pause(); });
  listen(document, 'visibilitychange', () => { if (document.hidden) stop(); else schedule(); });
  listen(window, 'resize', measure, { passive: true });
  listen(window, 'pagehide', stop);
  listen(window, 'pageshow', schedule);
  let observer = null;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (!visible) stop(); else schedule();
    }, { threshold: .1 });
    observer.observe(root);
  } else visible = true;
  measure();
  return { destroy() { destroyed = true; stop(); observer?.disconnect(); removers.forEach((remove) => remove()); clones.forEach((clone) => clone.remove()); } };
}

const state = { application: 'tapiceria', family: 'all', query: '' };
let libraryCarousels = [];

function trackMaterialEvent(event, payload = {}) { if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event, ...payload }); }
function familyLabel(key) { return FAMILY_META[key]?.label || key; }
function collectionName(item) { return item.shortName || item.title; }
function colorHaystack(item) { return item.colors.map((color) => color.name).join(' ').toLowerCase(); }
function colorMain(color) { return color.main; }
function colorDetail(color) { return color.detail || color.main; }

function renderPortalMedia(appKey) {
  const app = APPLICATIONS[appKey];
  return `<div class="portal-media portal-media-photo"><img src="${app.image}" alt="${app.title}" loading="lazy" decoding="async" /></div>`;
}

function renderApplicationPortals() {
  const root = document.getElementById('materialPortals');
  if (!root) return;
  root.innerHTML = Object.entries(APPLICATIONS).map(([key, app]) => `
    <button type="button" class="application-portal ${state.application === key ? 'is-active' : ''}" data-application="${key}" aria-pressed="${state.application === key}">
      ${renderPortalMedia(key)}
      <div class="portal-overlay"></div>
      <div class="portal-copy">
        <span class="portal-eyebrow">${app.eyebrow}</span>
        <div class="portal-title-row"><h2>${app.title}</h2><span aria-hidden="true">↗</span></div>
        <p>${app.description}</p>
        <span class="portal-status">${app.status}</span>
      </div>
    </button>`).join('');
  root.querySelectorAll('[data-application]').forEach((button) => button.addEventListener('click', () => {
    state.application = button.dataset.application;
    state.family = 'all';
    renderApplicationPortals();
    renderFamilyNavigation();
    renderMaterialsLibrary();
    trackMaterialEvent('materials_application_select', { materials_application: state.application });
    document.getElementById('collectionsStart')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }));
}

function renderFamilyNavigation() {
  const root = document.getElementById('materialsFamilyNav');
  if (!root) return;
  if (state.application !== 'tapiceria') { root.innerHTML = ''; return; }
  const keys = [...new Set(MATERIAL_COLLECTIONS.filter((item) => item.application === state.application).map((item) => item.family))]
    .sort((a, b) => (FAMILY_META[a]?.order || 99) - (FAMILY_META[b]?.order || 99));
  root.innerHTML = [`<button type="button" class="family-chip ${state.family === 'all' ? 'is-active' : ''}" data-family="all" aria-pressed="${state.family === 'all'}">Todas</button>`, ...keys.map((key) => `<button type="button" class="family-chip ${state.family === key ? 'is-active' : ''}" data-family="${key}" aria-pressed="${state.family === key}">${familyLabel(key)}</button>`)].join('');
  root.querySelectorAll('[data-family]').forEach((button) => button.addEventListener('click', () => {
    state.family = button.dataset.family;
    renderFamilyNavigation();
    renderMaterialsLibrary();
    trackMaterialEvent('materials_family_select', { materials_family: state.family });
  }));
}

function uniqueMaterialColors(item) {
  const seen = new Set();
  return item.colors.flatMap((color, index) => {
    if (seen.has(color.main)) return [];
    seen.add(color.main);
    return [{ color, index }];
  });
}

function collectionPreview(item) {
  const colors = uniqueMaterialColors(item);
  const { color } = colors[Math.floor(colors.length / 3)];
  return `<div class="collection-preview" data-family="${item.family}"><img src="${colorMain(color)}" alt="${item.title}: trama en color ${color.name}" width="330" height="410" loading="lazy" decoding="async" class="texture-img" /><span class="sample-family">${familyLabel(item.family)}</span></div>`;
}

function renderCollectionCard(item) {
  return `<a class="collection-card" href="/materiales/${encodeURIComponent(item.id)}.html" data-collection-id="${item.id}">
    ${collectionPreview(item)}
    <div class="collection-card-copy"><div class="collection-card-title"><h3>${item.title}</h3><span aria-hidden="true">↗</span></div><span class="collection-color-count">${uniqueMaterialColors(item).length} colores</span><p>${item.description}</p></div>
  </a>`;
}

function catalogRailMarkup(name, id, cards) {
  return `<div class="catalog-carousel" data-catalog-carousel role="region" aria-roledescription="carrusel" aria-label="${name}"><div class="catalog-track" id="${id}" tabindex="0" aria-label="${name}. Deslizá o usá las flechas del teclado."><div class="catalog-bank" data-catalog-original>${cards}</div></div><div class="catalog-controls" data-catalog-controls hidden><button class="catalog-play" type="button" data-catalog-play aria-pressed="false">Reproducir</button><span class="catalog-instruction">Deslizá para explorar</span><div class="sample-arrows"><button type="button" data-catalog-prev aria-label="Ver anteriores: ${name}" aria-controls="${id}">←</button><button type="button" data-catalog-next aria-label="Ver siguientes: ${name}" aria-controls="${id}">→</button></div></div></div>`;
}

function renderUpcoming(application) {
  const items = UPCOMING[application] || [];
  return `<section class="upcoming-shell">
    <div class="upcoming-intro"><span class="eyebrow">En preparación</span><h2>${APPLICATIONS[application].title}</h2><p>${APPLICATIONS[application].description}</p></div>
    <div class="upcoming-grid">${items.map(([title, text]) => `<article class="upcoming-card"><div class="upcoming-pattern" aria-hidden="true"></div><span>Próximamente</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
  </section>`;
}

function renderMaterialsLibrary() {
  const root = document.getElementById('materialsLibrary');
  if (!root) return;
  libraryCarousels.forEach((carousel) => carousel.destroy());
  libraryCarousels = [];
  if (state.application !== 'tapiceria') { root.innerHTML = renderUpcoming(state.application); return; }
  const query = state.query.trim().toLowerCase();
  const filtered = MATERIAL_COLLECTIONS.filter((item) => item.application === state.application)
    .filter((item) => state.family === 'all' || item.family === state.family)
    .filter((item) => !query || `${item.title} ${item.description} ${familyLabel(item.family)} ${colorHaystack(item)}`.toLowerCase().includes(query));
  const result = document.getElementById('materials-results');
  if (result) result.textContent = `${filtered.length} colecciones disponibles.`;
  if (!filtered.length) {
    root.innerHTML = `<div class="materials-empty"><strong>No encontramos coincidencias.</strong><p>Probá buscando otra colección, familia o color.</p></div>`;
    return;
  }
  const grouped = {};
  filtered.forEach((item) => { (grouped[item.family] ||= []).push(item); });
  const orderedFamilies = Object.keys(grouped).sort((a, b) => (FAMILY_META[a]?.order || 99) - (FAMILY_META[b]?.order || 99));
  root.innerHTML = orderedFamilies.map((key) => `<section class="collection-family-section">
    <div class="collection-family-heading"><div><span class="eyebrow">Familia</span><h2>${familyLabel(key)}</h2></div><span>${grouped[key].length} ${grouped[key].length === 1 ? 'colección' : 'colecciones'}</span></div>
    ${catalogRailMarkup(familyLabel(key), `catalog-${key}`, grouped[key].map(renderCollectionCard).join(''))}
  </section>`).join('');
  if (typeof window.requestAnimationFrame === 'function') libraryCarousels = Array.from(root.querySelectorAll('[data-catalog-carousel]'), setupCatalogCarousel);
  if (typeof window.requestAnimationFrame === 'function' && !root.dataset.trackingBound) { root.addEventListener('click', trackCollectionClick); root.dataset.trackingBound = 'true'; }
}

function trackCollectionClick(event) {
  const link = event.target.closest('[data-collection-id]');
  if (link) trackMaterialEvent('material_collection_select', { material_collection: link.dataset.collectionId });
}

function setupMaterialSearch() {
  const input = document.getElementById('materialsSearch');
  if (!input) return;
  input.addEventListener('input', () => { state.query = input.value; renderMaterialsLibrary(); });
  input.addEventListener('search', () => { state.query = input.value; renderMaterialsLibrary(); });
}

function findCollection(id) { return MATERIAL_COLLECTIONS.find((item) => item.id === id); }

function renderEssentialSheet(item) {
  const specs = item.specs?.length ? item.specs : [['Familia', familyLabel(item.family)], ['Colores', `${uniqueMaterialColors(item).length}`]];
  return `<section class="essential-sheet"><div class="essential-heading"><span class="eyebrow">Ficha esencial</span><h2>De un <span class="serif-word">vistazo.</span></h2></div><div class="essential-grid">${specs.map(([label, value]) => `<div class="essential-row"><span>${label.replace('Colores cargados', 'Colores')}</span><strong>${/colores/i.test(label) ? uniqueMaterialColors(item).length : value}</strong></div>`).join('')}</div></section>`;
}

function materialDetailMarkup(item) {
  const colors = uniqueMaterialColors(item);
  const intro = item.intro || item.description;
  const tags = item.tags || [familyLabel(item.family)];
  const uses = item.uses || ['Tapicería interior'];
  return `
    <section class="material-detail-hero wrap"><nav class="material-breadcrumb" aria-label="Ruta de navegación"><a href="/materiales.html">Materiales</a><span aria-hidden="true">/</span><a href="/materiales.html#catalog-${item.family}">${familyLabel(item.family)}</a><span aria-hidden="true">/</span><span aria-current="page">${item.title}</span></nav><div class="material-detail-grid"><div class="material-detail-copy"><p class="eyebrow">${familyLabel(item.family)}</p><h1>${item.title}</h1><p>${intro}</p><div class="material-tags">${tags.map((tag) => `<span>${tag}</span>`).join('')}</div><a class="text-link" href="/materiales.html">Volver al archivo <span aria-hidden="true">↗</span></a></div>${renderEssentialSheet(item)}</div></section>
    <section class="material-colors-section wrap"><div class="material-section-heading"><div><p class="eyebrow">El muestrario · ${item.title}</p><h2>Un mundo de <span class="serif-word">matices.</span></h2><p>Recorré los tonos y tocá una muestra para ver la imagen completa y su trama de cerca.</p></div><span class="color-count">${colors.length} ${colors.length === 1 ? 'color' : 'colores'}</span></div>${catalogRailMarkup(`Colores de ${item.title}`, 'catalog-colors', colors.map(({ color, index }) => `<button type="button" class="material-color-card" data-color-index="${index}" aria-label="Ver textura ${item.title}, ${color.name}"><span class="material-color-media" data-family="${item.family}"><img src="${colorMain(color)}" alt="${item.title} · ${color.name}" width="330" height="410" loading="lazy" decoding="async" class="texture-img" /></span><span class="material-color-caption"><strong>${color.name}</strong><span aria-hidden="true">↗</span></span></button>`).join(''))}</section>
    <section class="material-info-grid wrap"><article class="material-info-card"><p class="eyebrow">Aplicación</p><h3>Usos sugeridos</h3><ul>${uses.map((use) => `<li>${use}</li>`).join('')}</ul></article><article class="material-info-card"><p class="eyebrow">Referencia de color</p><h3>La luz también es parte del material.</h3><p>Las pantallas y la iluminación pueden modificar la percepción del tono. La muestra física es la referencia para definir el color final.</p></article></section>
    <dialog class="material-lightbox" id="materialLightbox" aria-labelledby="materialLightboxTitle"><div class="material-lightbox-head"><div><strong id="materialLightboxTitle"></strong><span>Color y textura, de cerca.</span></div><button type="button" class="menu-close" data-close-material aria-label="Cerrar muestra"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div><div class="material-lightbox-views"><figure><div class="lightbox-image-stage"><img id="materialLightboxMain" alt="" /></div><figcaption>Vista de color</figcaption></figure><figure><div class="lightbox-image-stage is-detail"><img id="materialLightboxZoom" alt="" /></div><figcaption>Detalle de la trama</figcaption></figure></div></dialog>`;
}

function renderMaterialDetail() {
  const root = document.getElementById('materialDetail');
  if (!root) return;
  const id = document.body.dataset.materialId || new URLSearchParams(window.location.search).get('id');
  const item = findCollection(id);
  if (!item) {
    root.innerHTML = '<section class="section not-found"><h1>No encontramos ese material.</h1><p>Podés explorar las colecciones disponibles en nuestro catálogo.</p><a class="button button-primary" href="/materiales.html">Ver materiales</a></section>';
    return;
  }
  if (root.dataset.rendered !== item.id) root.innerHTML = materialDetailMarkup(item);
  root.querySelectorAll('[data-catalog-carousel]').forEach(setupCatalogCarousel);
  setupMaterialLightbox(item);
}

function setupMaterialLightbox(item) {
  const lightbox = document.getElementById('materialLightbox');
  if (!lightbox) return;
  const title = document.getElementById('materialLightboxTitle');
  const main = document.getElementById('materialLightboxMain');
  const zoom = document.getElementById('materialLightboxZoom');
  let selectedIndex = null;
  document.getElementById('materialDetail').addEventListener('click', (event) => {
    const button = event.target.closest('[data-color-index]');
    if (!button) return;
    selectedIndex = Number(button.dataset.colorIndex);
    const color = item.colors[selectedIndex];
    if (!color) return;
    title.textContent = `${color.name} · ${item.title}`;
    main.src = colorMain(color); zoom.src = colorDetail(color);
    main.alt = `${item.title} · ${color.name}`; zoom.alt = `Detalle de ${item.title} · ${color.name}`;
    main.className = 'texture-img'; zoom.className = 'texture-img';
    lightbox.showModal();
    document.body.classList.add('material-modal-open');
    trackMaterialEvent('material_color_view', { material_collection: item.id, material_color: color.name });
  });
  lightbox.querySelector('[data-close-material]').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('close', () => {
    document.body.classList.remove('material-modal-open');
    document.querySelector(`[data-catalog-original] [data-color-index="${selectedIndex}"]`)?.focus({ preventScroll: true });
  });
  lightbox.addEventListener('click', (event) => {
    if (event.target !== lightbox) return;
    const rect = lightbox.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) lightbox.close();
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('materialPortals')) { renderApplicationPortals(); renderFamilyNavigation(); renderMaterialsLibrary(); setupMaterialSearch(); }
  if (document.getElementById('materialDetail')) renderMaterialDetail();
});
