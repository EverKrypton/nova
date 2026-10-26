import { brand } from "@/lib/mock-data";

export const whatsappMessages = {
  general: brand.whatsappMessage,
  hero: "Hola, quiero hablar sobre un proyecto para mi negocio.",
  services:
    "Hola, quiero consultar precios y detalles de los servicios de NovaProyect.",
  portfolio:
    "Hola, quiero crear un proyecto parecido a los ejemplos de NovaProyect.",
} as const;

export function whatsappLink(message: string = whatsappMessages.general) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
