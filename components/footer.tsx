import { brand } from "@/lib/mock-data";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#inicio" aria-label={`${brand.name}, volver al inicio`}>
          <span className="brand-mark" aria-hidden="true">N.</span>
          <span>Nova<span>Proyect</span></span>
        </a>
        <p>© {new Date().getFullYear()} {brand.name}. Diseño con intención.</p>
        <nav className="footer-links" aria-label="Enlaces sociales">
          {brand.socialLinks.facebook ? <a href={brand.socialLinks.facebook} target="_blank" rel="noopener noreferrer">Facebook</a> : null}
          {brand.socialLinks.instagram ? <a href={brand.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a> : null}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </div>
    </footer>
  );
}
