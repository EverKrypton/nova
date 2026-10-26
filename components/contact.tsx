import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { brand } from "@/lib/mock-data";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export function Contact() {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className="contact-panel">
          <div>
            <span className="eyebrow">Hablemos de tu proyecto</span>
            <h2>Tu próxima idea empieza con una conversación.</h2>
            <p>Cuéntanos qué necesitas. Te responderemos para conocer tu proyecto y orientarte sobre el servicio y su precio.</p>
          </div>
          <div className="contact-actions">
            <a
              className="contact-option"
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-option-icon"><MessageCircle size={21} aria-hidden="true" /></span>
              <span><strong>Escríbenos por WhatsApp</strong><small>{brand.whatsappDisplay} · Consulta de precios</small></span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            {brand.socialLinks.instagram ? (
              <a
                className="contact-option"
                href={brand.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-option-icon"><Instagram size={21} aria-hidden="true" /></span>
                <span><strong>Instagram</strong><small>Explora nuestras publicaciones</small></span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ) : (
              <div className="contact-option">
                <span className="contact-option-icon"><Instagram size={21} aria-hidden="true" /></span>
                <span><strong>Instagram</strong><small>Enlace pendiente de configurar</small></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
