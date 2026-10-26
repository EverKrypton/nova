import { brand } from "@/lib/mock-data";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { ArrowUpRight, Barcode } from "./marks";

export function Contact() {
  return (
    <section className="contact" id="contacto">
      <div className="shell">
        <div className="ticket">
          <div className="ticket-main">
            <h2>
              Cuéntanos qué <em>necesitas</em>.
            </h2>
            <p className="ticket-lede">
              Escríbenos por WhatsApp con dos líneas: qué hace tu negocio y qué
              pieza necesitas. Te respondemos con el enfoque y el precio, sin
              formularios ni llamadas.
            </p>

            <div className="ticket-actions">
              <a
                className="btn"
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir WhatsApp <ArrowUpRight size={16} />
              </a>
              <span className="ticket-note">
                Atención en español · {brand.whatsappDisplay}
              </span>
            </div>
          </div>

          <aside className="ticket-stub">
            <dl>
              <div>
                <dt>Servicio</dt>
                <dd>Página web o diseño gráfico</dd>
              </div>
              <div>
                <dt>Canal</dt>
                <dd>WhatsApp directo</dd>
              </div>
              <div>
                <dt>Idioma</dt>
                <dd>Español</dd>
              </div>
            </dl>

            <div className="ticket-code">
              <div>
                <span className="spec">Ref.</span>
                <span className="spec ticket-id">NV-01</span>
              </div>
              <Barcode />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
