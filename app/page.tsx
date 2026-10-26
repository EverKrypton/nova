import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Portfolio } from "@/components/portfolio";
import { Services } from "@/components/services";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <div className="proof-strip">
          <div className="container proof-inner">
            <p>Una imagen coherente para tu siguiente etapa.</p>
            <div className="proof-points">
              <span>Web</span>
              <span>Diseño gráfico</span>
              <span>Presencia digital</span>
            </div>
          </div>
        </div>
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
