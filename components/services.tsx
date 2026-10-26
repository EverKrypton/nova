import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/mock-data";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">Lo que hacemos</span><h2>Diseño pensado para hacer crecer tu presencia.</h2></div>
          <p>Soluciones visuales y digitales para que tu negocio se comunique mejor y genere confianza.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-list">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}><Check size={16} aria-hidden="true" />{deliverable}</li>
                ))}
              </ul>
              <a className="button button-secondary service-cta" href={whatsappLink(whatsappMessages.services)} target="_blank" rel="noopener noreferrer">
                Consultar precio <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
