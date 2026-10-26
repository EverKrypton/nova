import type { Metadata, Viewport } from "next";
import "./globals.css";
import { brand } from "@/lib/mock-data";

const description =
  "Creamos páginas web y diseños gráficos para ayudar a tu negocio a tener una presencia digital profesional.";

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Diseño web y gráfico`,
    template: `%s | ${brand.name}`,
  },
  description,
  applicationName: brand.name,
  keywords: [
    "diseño web",
    "diseño gráfico",
    "páginas web",
    "identidad visual",
    "presencia digital",
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: brand.name,
    title: `${brand.name} | Diseño web y gráfico`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} | Diseño web y gráfico`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080a08",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
