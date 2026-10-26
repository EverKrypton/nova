export type Service = {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
};

export type PortfolioProject = {
  number: string;
  category: string;
  title: string;
  description: string;
  visual: "web" | "brand" | "social";
  demo: true;
};

export const brand = {
  name: "NovaProyect",
  tagline: "Ideas que se convierten en presencia digital.",
  whatsappNumber: "5356266845",
  whatsappDisplay: "+53 5626 6845",
  whatsappMessage:
    "Hola, quiero información sobre los servicios de NovaProyect.",
  socialLinks: {
    facebook: "",
    instagram: "",
  },
} as const;

export const services: Service[] = [
  {
    number: "01",
    title: "Páginas web",
    description:
      "Una presencia digital clara, rápida y adaptada a las personas que quieres convertir en clientes.",
    deliverables: ["Diseño responsive", "Presentación de servicios", "Contacto directo"],
  },
  {
    number: "02",
    title: "Diseño gráfico",
    description:
      "Piezas visuales coherentes para presentar tu negocio con una imagen profesional y reconocible.",
    deliverables: ["Creatividades para redes", "Material promocional", "Identidad visual"],
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    number: "01",
    category: "Diseño web",
    title: "Estudio Norte",
    description: "Concepto de página de presentación para un negocio de servicios.",
    visual: "web",
    demo: true,
  },
  {
    number: "02",
    category: "Identidad visual",
    title: "Forma Café",
    description: "Ejercicio conceptual de identidad para una marca de café.",
    visual: "brand",
    demo: true,
  },
  {
    number: "03",
    category: "Diseño para redes",
    title: "Pulso Studio",
    description: "Ejemplo de dirección visual para una campaña en redes sociales.",
    visual: "social",
    demo: true,
  },
];
