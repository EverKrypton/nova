import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Bricolage_Grotesque, Martian_Mono } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/mock-data";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const serif = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const mono = Martian_Mono({
  subsets: ["latin"],
  variable: "--font-martian",
  display: "swap",
});

const description =
  "Estudio de diseño y desarrollo: páginas web, diseño gráfico, videojuegos, software a medida y apps Android. De la primera idea a la entrega, con trato directo por WhatsApp.";

const siteUrl = "https://nova-xi-vert-33.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — Diseño web y gráfico`,
    template: `%s — ${brand.name}`,
  },
  description,
  applicationName: brand.name,
  keywords: [
    "diseño web",
    "diseño gráfico",
    "páginas web",
    "identidad visual",
    "diseño para redes",
    "desarrollo de videojuegos",
    "desarrollo de software",
    "apps Android",
    "APK",
    "estudio de diseño",
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: brand.name,
    title: `${brand.name} — Diseño y desarrollo digital`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — Diseño y desarrollo digital`,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0d0a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  description,
  url: siteUrl,
  telephone: `+${brand.whatsappNumber}`,
  areaServed: "Global",
  availableLanguage: "Spanish",
  knowsAbout: [
    "Diseño web",
    "Diseño gráfico",
    "Identidad visual",
    "Piezas para redes sociales",
    "Desarrollo de videojuegos",
    "Desarrollo de software",
    "Aplicaciones Android",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${serif.variable} ${mono.variable}`}>
      <body>
        {/*
          THESIS: La web es un muestrario de imprenta: fichas de papel, pestañas de índice y
          pruebas de tinta sobre negro. Rechaza el hero de landing con tarjetas de iconos.
          OWN-WORLD: Tinta #0b0d0a, hueso #f1ecdf, una sola tinta de señal lima #c9f24c y
          trama de semitono; Bricolage Grotesque + Bodoni Moda italic + Martian Mono; hojas
          con borde de papel, marcas de registro y códigos de muestra.
          STORY: El visitante entiende que hay dos servicios con criterio de taller, ve la
          calidad en las pruebas y escribe por WhatsApp sin formularios.
          FIRST VIEWPORT: Titular a la izquierda a escala de cartel, abanico de cuatro fichas
          a la derecha, CTA lima "Contar mi proyecto" y tira de cuatro datos; índice vertical
          de pestañas al borde derecho.
          FORM: Muestrario de imprenta, posición 1 de 7 de la lista propia; seed key 3ba89d6b.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
          review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
        */}
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
