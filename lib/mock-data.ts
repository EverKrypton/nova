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
    title: "Diseño gráfico",
    note: "Soporte · impreso",
    tone: "paper",
  },
  {
    code: "NV-03",
    title: "Identidad visual",
    note: "Sistema · marca",
    tone: "ink",
  },
  {
    code: "NV-04",
    title: "Piezas para redes",
    note: "Formato · vertical",
    tone: "halftone",
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
