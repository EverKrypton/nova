export type Service = {
  number: string;
  title: string;
  lead: string;
  deliverables: string[];
  spec: [string, string][];
};

export type Proof = {
  number: string;
  title: string;
  category: string;
  description: string;
  visual: "web" | "brand" | "social";
  tone: "lime" | "paper" | "ink";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const brand = {
  name: "NovaProyect",
  mark: "N.",
  tagline: "Diseño que se puede tocar.",
  edition: "Muestrario · Vol. 01",
  whatsappNumber: "5356266845",
  whatsappDisplay: "+53 5626 6845",
  whatsappMessage:
    "Hola, quiero información sobre los servicios de NovaProyect.",
  socialLinks: {
    facebook: "",
    instagram: "",
  },
} as const;

export const navItems = [
  { id: "servicios", label: "Servicios", code: "01" },
  { id: "proyectos", label: "Proyectos", code: "02" },
  { id: "proceso", label: "Proceso", code: "03" },
  { id: "contacto", label: "Contacto", code: "04" },
] as const;

export const deck = [
  {
    code: "NV-01",
    title: "Páginas web",
    note: "Soporte · pantalla",
    tone: "lime",
  },
  {
    code: "NV-02",
    title: "Videojuegos",
    note: "Formato · juego",
    tone: "ink",
  },
  {
    code: "NV-03",
    title: "Software",
    note: "Formato · sistema",
    tone: "halftone",
  },
  {
    code: "NV-04",
    title: "Apps y APK",
    note: "Formato · móvil",
    tone: "paper",
  },
] as const;

export const services: Service[] = [
  {
    number: "01",
    title: "Páginas web",
    lead: "Una página clara, rápida y pensada para el móvil. Presenta lo que haces y deja el camino a WhatsApp despejado.",
    deliverables: [
      "Diseño responsive",
      "Presentación de servicios",
      "Contacto directo",
    ],
    spec: [
      ["Soporte", "Pantalla"],
      ["Entregables", "03"],
      ["Canal", "WhatsApp"],
    ],
  },
  {
    number: "02",
    title: "Diseño gráfico",
    lead: "Piezas coherentes para que tu negocio se reconozca en todos lados: redes, impresos y todo lo que va entre medio.",
    deliverables: [
      "Creatividades para redes",
      "Material promocional",
      "Identidad visual",
    ],
    spec: [
      ["Soporte", "Impreso y digital"],
      ["Entregables", "03"],
      ["Canal", "WhatsApp"],
    ],
  },
  {
    number: "03",
    title: "Videojuegos",
    lead: "Juegos 2D y 3D para web o móvil: prototipo jugable, arte, mecánicas y build lista para publicar.",
    deliverables: [
      "Prototipo jugable",
      "Arte y mecánicas",
      "Build publicable",
    ],
    spec: [
      ["Motor", "Unity o web"],
      ["Entregables", "03"],
      ["Canal", "WhatsApp"],
    ],
  },
  {
    number: "04",
    title: "Software a medida",
    lead: "Herramientas internas, paneles y automatizaciones que quitan trabajo manual a tu negocio.",
    deliverables: [
      "Panel o herramienta",
      "Base de datos",
      "Despliegue y accesos",
    ],
    spec: [
      ["Soporte", "Web o escritorio"],
      ["Entregables", "03"],
      ["Canal", "WhatsApp"],
    ],
  },
  {
    number: "05",
    title: "Apps y APK",
    lead: "Aplicaciones móviles con su APK firmado, listas para instalar o subir a la tienda.",
    deliverables: [
      "App funcional",
      "APK firmado",
      "Guía de instalación",
    ],
    spec: [
      ["Soporte", "Android"],
      ["Entregables", "03"],
      ["Canal", "WhatsApp"],
    ],
  },
  {
    number: "06",
    title: "Mantenimiento",
    lead: "Tu página o app sigue viva: cambios de contenido, mejoras, arreglos y respaldo cuando lo necesites.",
    deliverables: [
      "Cambios y arreglos",
      "Respaldos",
      "Soporte por WhatsApp",
    ],
    spec: [
      ["Soporte", "Web y app"],
      ["Entregables", "Continuo"],
      ["Canal", "WhatsApp"],
    ],
  },
];

export const proofs: Proof[] = [
  {
    number: "P-01",
    title: "Estudio Norte",
    category: "Diseño web",
    description:
      "Concepto de página de presentación para un negocio de servicios.",
    visual: "web",
    tone: "lime",
  },
  {
    number: "P-02",
    title: "Forma Café",
    category: "Identidad visual",
    description: "Ejercicio conceptual de identidad para una marca de café.",
    visual: "brand",
    tone: "paper",
  },
  {
    number: "P-03",
    title: "Pulso Studio",
    category: "Diseño para redes",
    description:
      "Ejemplo de dirección visual para una campaña en redes sociales.",
    visual: "social",
    tone: "ink",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Conversación",
    description:
      "Nos cuentas qué haces, qué necesitas y para cuándo. Sin formularios: un mensaje basta.",
  },
  {
    number: "02",
    title: "Dirección",
    description:
      "Acordamos el tono, la paleta y la estructura antes de dibujar la primera pieza.",
  },
  {
    number: "03",
    title: "Producción",
    description:
      "Diseñamos, ajustamos y te mostramos avances reales, no promesas.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Recibes los archivos y la página publicada, listos para usar.",
  },
];
