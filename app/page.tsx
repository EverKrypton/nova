import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { MobileCta } from "@/components/mobile-cta";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Specimen } from "@/components/specimen";
import { ThumbIndex } from "@/components/thumb-index";
import { Ticker } from "@/components/ticker";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <ThumbIndex />
      <main id="contenido">
        <Hero />
        <Ticker />
        <Services />
        <div className="sheet-edge" aria-hidden="true" />
        <Specimen />
        <Portfolio />
        <Process />
        <div className="sheet-edge" aria-hidden="true" />
        <Contact />
      </main>
      <SiteFooter />
      <MobileCta />
    </>
  );
}
