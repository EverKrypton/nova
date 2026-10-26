import { proofs, type Proof } from "@/lib/mock-data";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { ArrowUpRight } from "./marks";

function ProofArt({ visual }: { visual: Proof["visual"] }) {
  if (visual === "web") {
    return (
      <div className="proof-art proof-art-web">
        <div className="bar">
          <span />
          <span />
          <span />
        </div>
        <div className="field">
          <small>Estudio / Servicios</small>
          <strong>
            Menos ruido.
            <br />
            Más ideas.
          </strong>
        </div>
        <div className="rows">
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }

  if (visual === "brand") {
    return (
      <div className="proof-art proof-art-brand">
        <b>Fc.</b>
        <small>Forma Café</small>
      </div>
    );
  }

  return (
    <div className="proof-art proof-art-social">
      <div className="block">
        Hazlo
        <br />
        visible.
      </div>
      <div className="lines">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section className="section" id="proyectos">
      <div className="shell">
        <div className="section-head">
          <h2>
            Pruebas de <em>impresión</em>.
          </h2>
          <p className="head-note">
            Tres conceptos que muestran cómo trabajamos el detalle. Son
            demostraciones visuales, no trabajos de clientes reales.
          </p>
        </div>

        <div className="proofs-grid">
          {proofs.map((proof) => (
            <article className="proof" key={proof.number}>
              <div className="proof-visual" data-tone={proof.tone}>
                <ProofArt visual={proof.visual} />
              </div>
              <div className="proof-meta">
                <div className="proof-meta-top">
                  <span>{proof.number}</span>
                  <span>{proof.category}</span>
                </div>
                <h3>{proof.title}</h3>
                <p>{proof.description}</p>
                <span className="spec">Demo conceptual · No publicado</span>
              </div>
            </article>
          ))}
        </div>

        <div className="proofs-note">
          <span className="spec">
            Cuando haya trabajos reales, ocupan estas mismas pruebas.
          </span>
          <a
            className="link-line"
            href={whatsappLink(whatsappMessages.portfolio)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero algo así <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
