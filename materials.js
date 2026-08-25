const MATERIALS_WHATSAPP = typeof WHATSAPP_LINK !== 'undefined' ? WHATSAPP_LINK : 'https://wa.link/ogxnv3';

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
    description: "Gazas, tejidos, tusor liviano y pesado, y blackout. Esta familia queda preparada para sumar muestrarios reales, lectura de transparencia y caída.",
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
      "Colecciones preparadas para sumar variantes y subcategorías."
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

const state = { application: 'tapiceria', family: 'all', query: '' };

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
    document.getElementById('collectionsStart')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

function renderFamilyNavigation() {
  const root = document.getElementById('materialsFamilyNav');
  if (!root) return;
  if (state.application !== 'tapiceria') { root.innerHTML = ''; return; }
  const keys = [...new Set(MATERIAL_COLLECTIONS.filter((item) => item.application === state.application).map((item) => item.family))]
    .sort((a, b) => (FAMILY_META[a]?.order || 99) - (FAMILY_META[b]?.order || 99));
  root.innerHTML = [`<button type="button" class="family-chip ${state.family === 'all' ? 'is-active' : ''}" data-family="all">Todas</button>`, ...keys.map((key) => `<button type="button" class="family-chip ${state.family === key ? 'is-active' : ''}" data-family="${key}">${familyLabel(key)}</button>`)].join('');
  root.querySelectorAll('[data-family]').forEach((button) => button.addEventListener('click', () => {
    state.family = button.dataset.family;
    renderFamilyNavigation();
    renderMaterialsLibrary();
    trackMaterialEvent('materials_family_select', { materials_family: state.family });
  }));
}

function collectionPreview(item) {
  const samples = item.colors.slice(0, 3);
  return `<div class="collection-preview ${samples.length < 3 ? 'is-compact' : ''}">
    <div class="collection-preview-main"><img src="${colorMain(samples[0])}" alt="${item.title} · ${samples[0].name}" loading="lazy" decoding="async" class="texture-img" /></div>
    <div class="collection-preview-stack">${samples.slice(1).map((color) => `<img src="${colorMain(color)}" alt="${item.title} · ${color.name}" loading="lazy" decoding="async" class="texture-img" />`).join('')}</div>
  </div>`;
}

function renderCollectionCard(item) {
  return `<a class="collection-card" href="material.html?id=${encodeURIComponent(item.id)}" data-collection-id="${item.id}">
    ${collectionPreview(item)}
    <div class="collection-card-copy">
      <div class="collection-card-meta"><span>${familyLabel(item.family)}</span><span>${item.colors.length} colores</span></div>
      <div class="collection-card-title"><h3>${collectionName(item)}</h3><span aria-hidden="true">↗</span></div>
      <p>${item.description}</p>
    </div>
  </a>`;
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
  if (state.application !== 'tapiceria') { root.innerHTML = renderUpcoming(state.application); return; }
  const query = state.query.trim().toLowerCase();
  const filtered = MATERIAL_COLLECTIONS.filter((item) => item.application === state.application)
    .filter((item) => state.family === 'all' || item.family === state.family)
    .filter((item) => !query || `${item.title} ${item.description} ${familyLabel(item.family)} ${colorHaystack(item)}`.toLowerCase().includes(query));
  if (!filtered.length) {
    root.innerHTML = `<div class="materials-empty"><strong>No encontramos coincidencias.</strong><p>Probá buscando otra colección, familia o color.</p></div>`;
    return;
  }
  const grouped = {};
  filtered.forEach((item) => { (grouped[item.family] ||= []).push(item); });
  const orderedFamilies = Object.keys(grouped).sort((a, b) => (FAMILY_META[a]?.order || 99) - (FAMILY_META[b]?.order || 99));
  root.innerHTML = orderedFamilies.map((key) => `<section class="collection-family-section">
    <div class="collection-family-heading"><div><span class="eyebrow">Familia</span><h2>${familyLabel(key)}</h2></div><span>${grouped[key].length} ${grouped[key].length === 1 ? 'colección' : 'colecciones'}</span></div>
    <div class="collections-grid">${grouped[key].map(renderCollectionCard).join('')}</div>
  </section>`).join('');
  root.querySelectorAll('[data-collection-id]').forEach((link) => link.addEventListener('click', () => trackMaterialEvent('material_collection_select', { material_collection: link.dataset.collectionId })));
}

function setupMaterialSearch() {
  const input = document.getElementById('materialsSearch');
  if (!input) return;
  input.addEventListener('input', () => { state.query = input.value; renderMaterialsLibrary(); });
  input.addEventListener('search', () => { state.query = input.value; renderMaterialsLibrary(); });
}

function findCollection(id) { return MATERIAL_COLLECTIONS.find((item) => item.id === id); }

function renderEssentialSheet(item) {
  const specs = item.specs?.length ? item.specs : [['Familia', familyLabel(item.family)], ['Colores cargados', `${item.colors.length}`]];
  return `<section class="essential-sheet">
    <div class="essential-heading"><span class="eyebrow">Ficha esencial</span><h2>Lo importante, de un vistazo.</h2></div>
    <div class="essential-grid">${specs.map(([label, value]) => `<div class="essential-row"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div>
  </section>`;
}

function renderMaterialDetail() {
  const root = document.getElementById('materialDetail');
  if (!root) return;
  const params = new URLSearchParams(window.location.search);
  const item = findCollection(params.get('id')) || MATERIAL_COLLECTIONS[0];
  document.title = `${item.title} | Valturi`;
  const intro = item.intro || `${item.title} reúne ${item.colors.length} referencias de color.`;
  const tags = item.tags || [familyLabel(item.family), `${item.colors.length} colores`];
  const uses = item.uses || ['Tapicería interior'];
  root.innerHTML = `
    <section class="material-detail-hero">
      <nav class="material-breadcrumb" aria-label="Breadcrumb"><a href="materiales.html">Materiales</a><span>•</span><span>${familyLabel(item.family)}</span><span>•</span><span>${item.title}</span></nav>
      <div class="material-detail-grid">
        <div class="material-detail-copy"><span class="eyebrow">${familyLabel(item.family)}</span><h1>${item.title}</h1><p>${intro}</p><div class="material-tags">${tags.map((tag) => `<span>${tag}</span>`).join('')}</div><div class="material-detail-actions"><a class="material-primary-button" href="${MATERIALS_WHATSAPP}" target="_blank" rel="noreferrer">Consultar por WhatsApp</a><a class="material-secondary-button" href="materiales.html">Volver a materiales</a></div></div>
        ${renderEssentialSheet(item)}
      </div>
    </section>
    <section class="material-colors-section">
      <div class="material-section-heading"><div><span class="eyebrow">Muestrario</span><h2>Colores disponibles</h2><p>Las imágenes ayudan a comparar tono y textura. Para una definición final, recomendamos validar la muestra física porque cada pantalla y tipo de luz puede modificar la percepción del color.</p></div><span class="color-count">${item.colors.length} ${item.colors.length === 1 ? 'color' : 'colores'}</span></div>
      <div class="material-colors-grid">${item.colors.map((color, index) => `<button type="button" class="material-color-card" data-color-index="${index}"><div class="material-color-media"><img src="${colorMain(color)}" alt="${item.title} · ${color.name}" loading="lazy" decoding="async" class="texture-img" /></div><div class="material-color-caption"><strong>${color.name}</strong><span>Ver textura</span></div></button>`).join('')}</div>
    </section>
    <section class="material-info-grid"><article class="material-info-card"><span class="eyebrow">Aplicación</span><h3>Usos sugeridos</h3><ul>${uses.map((use) => `<li>${use}</li>`).join('')}</ul></article><article class="material-info-card"><span class="eyebrow">Referencia de color</span><h3>La luz también es parte del material.</h3><p>Los tonos oscuros pueden verse más claros bajo sol directo. Siempre recomendamos validar el color final con la muestra física y, cuando exista, sumar una segunda toma sin incidencia directa de sol.</p></article></section>
    <section class="material-future-grid"><article class="material-future-card"><span class="eyebrow">Próxima capa</span><h3>Aplicado en proyectos</h3><p>Esta sección queda preparada para sumar trabajos reales de Valturi realizados con cada colección y, cuando corresponda, con el tono exacto.</p></article>${item.performanceNote ? `<article class="material-future-card"><span class="eyebrow">Performance</span><h3>Propiedades en acción</h3><p>${item.performanceNote}</p></article>` : ''}</section>
    <div class="material-lightbox" id="materialLightbox" aria-hidden="true"><div class="material-lightbox-panel"><div class="material-lightbox-head"><div><strong id="materialLightboxTitle"></strong><span>Vista completa y acercamiento de textura en alta definición.</span></div><button type="button" class="material-lightbox-close" aria-label="Cerrar">×</button></div><div class="material-lightbox-views"><figure><div class="lightbox-image-stage"><img id="materialLightboxMain" src="" alt="" /></div></figure><figure><div class="lightbox-image-stage is-detail"><img id="materialLightboxZoom" src="" alt="" /></div></figure></div></div></div>`;
  setupMaterialLightbox(item);
}

function setupMaterialLightbox(item) {
  const lightbox = document.getElementById('materialLightbox');
  if (!lightbox) return;
  const title = document.getElementById('materialLightboxTitle');
  const main = document.getElementById('materialLightboxMain');
  const zoom = document.getElementById('materialLightboxZoom');
  const closeButton = lightbox.querySelector('.material-lightbox-close');
  const close = () => { lightbox.classList.remove('is-open'); lightbox.setAttribute('aria-hidden', 'true'); document.body.classList.remove('material-modal-open'); };
  document.querySelectorAll('[data-color-index]').forEach((button) => button.addEventListener('click', () => {
    const color = item.colors[Number(button.dataset.colorIndex)];
    title.textContent = `${color.name} · ${item.title}`;
    main.src = colorMain(color); zoom.src = colorDetail(color);
    main.alt = `${item.title} · ${color.name}`; zoom.alt = `Detalle ampliado ${item.title} · ${color.name}`;
    main.className = 'texture-img'; zoom.className = 'texture-img is-zoomed';
    lightbox.classList.add('is-open'); lightbox.setAttribute('aria-hidden', 'false'); document.body.classList.add('material-modal-open');
    trackMaterialEvent('material_color_view', { material_collection: item.id, material_color: color.name });
  }));
  closeButton?.addEventListener('click', close);
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
}

window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('materialPortals')) { renderApplicationPortals(); renderFamilyNavigation(); renderMaterialsLibrary(); setupMaterialSearch(); }
  if (document.getElementById('materialDetail')) renderMaterialDetail();
});
