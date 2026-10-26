import { services } from "@/lib/mock-data";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { ArrowUpRight, Tick } from "./marks";

export function Services() {
  return (
    <section className="section paper on-paper" id="servicios">
      <div className="shell">
        <div className="section-head">
          <h2>
            Lo que sale del <em>taller</em>.
          </h2>
          <p className="head-note">
            Dos servicios, un mismo criterio: que tu negocio se vea profesional
            en pantalla y en papel. El precio se conversa por WhatsApp según lo
            que necesites.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-sheet" key={service.number}>
              <div className="service-band">
                <span>
                  Muestra <b>{service.number}</b>
                </span>
                <span>{service.spec[0][1]}</span>
              </div>

              <div className="service-body">
                <span className="service-number" aria-hidden="true">
                  {service.number}
                </span>
                <h3>{service.title}</h3>
                <p className="service-lead">{service.lead}</p>

                <ul className="deliverables">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>
                      <Tick size={13} />
                      {deliverable}
                    </li>
                  ))}
                </ul>

                <div className="service-foot">
                  <span className="spec">
                    {service.spec[1][0]} · {service.spec[1][1]}
                  </span>
                  <a
                    className="link-line"
                    href={whatsappLink(whatsappMessages.services)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
