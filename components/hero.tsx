import { ArrowDown, ArrowUpRight } from "lucide-react";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Diseño digital para negocios</span>
          <h1>Tu negocio merece una presencia <span className="accent-text">extraordinaria.</span></h1>
          <p className="hero-copy">Creamos páginas web y diseños gráficos que presentan tu negocio con claridad, personalidad y una imagen profesional.</p>
          <div className="hero-actions">
            <a className="button" href={whatsappLink(whatsappMessages.hero)} target="_blank" rel="noopener noreferrer">
              Cuéntanos tu idea <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#servicios">
              Explorar servicios <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note"><span className="status-dot" aria-hidden="true" /> Atención directa y precios por WhatsApp</div>
        </div>
        <div
          className="hero-art"
          role="img"
          aria-label="Composición gráfica conceptual de diseño web y marca"
        >
          <div className="art-topbar">
            <div className="art-lights" aria-hidden="true"><span /><span /><span /></div>
            <span>NOVAPROYECT / STUDIO</span>
            <span>01—03</span>
          </div>
          <div className="art-content">
            <div className="art-main-card">
              <div>
                <span className="art-label">Tu siguiente paso</span>
                <h2>Ideas con<br />dirección.</h2>
                <p>Una imagen digital a la altura de tu negocio.</p>
                <div className="art-lines" aria-hidden="true"><span /><span /><span /></div>
              </div>
              <span className="art-mini-cta">CREAR ALGO NUEVO <ArrowUpRight size={12} aria-hidden="true" /></span>
            </div>
            <div className="art-side-stack">
              <div className="art-side-card">
                <div className="art-orb" aria-hidden="true" />
                <div><strong>Diseño con intención</strong><br /><small>Identidad visual</small></div>
              </div>
              <div className="art-side-card">
                <span className="art-label">Digital first</span>
                <div><strong>Hecho para conectar</strong><br /><small>Web y creatividad</small></div>
              </div>
            </div>
            <div className="art-bottom-card">
              <strong>De la idea a tu presencia digital.</strong>
              <span>EST. NOVAPROYECT ↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
