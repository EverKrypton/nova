import type { CSSProperties } from "react";
import { brand, deck } from "@/lib/mock-data";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { ArrowDown, ArrowUpRight, RegistrationMark } from "./marks";

function cardStyle(index: number): CSSProperties {
  const slot = index - (deck.length - 1) / 2;

  return {
    "--i": index,
    "--dy": `${Math.abs(slot) * 5}px`,
    "--rot": `${slot * 3.4}deg`,
  } as CSSProperties;
}

export function Hero() {
  return (
    <section className="hero" id="portada">
      <div className="shell">
        <div className="hero-meta spec">
          <span className="spec-row">
            <span>
              <b>{brand.name}</b> / Taller gráfico
            </span>
            <span>
              <b>Vol. 01</b> / Muestras
            </span>
          </span>
          <span className="spec-row">
            <span>ES</span>
            <span>Web + gráfico</span>
          </span>
        </div>

        <div className="hero-grid">
          <div>
            <h1>
              Diseño que se
              <br />
              puede <em>tocar</em>.
            </h1>

            <p className="hero-lede">
              Páginas web y piezas gráficas para negocios que quieren verse tan
              bien como trabajan. De la primera idea a la entrega, en un solo
              lugar.
            </p>

            <div className="hero-actions">
              <a
                className="btn"
                href={whatsappLink(whatsappMessages.hero)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contar mi proyecto <ArrowUpRight size={16} />
              </a>
              <a className="btn-ghost" href="#servicios">
                Ver el muestrario <ArrowDown size={15} />
              </a>
            </div>

            <div className="hero-strip">
              <div>
                <span className="spec">Servicios</span>
                <b>02</b>
              </div>
              <div>
                <span className="spec">Canal</span>
                <b>WhatsApp</b>
              </div>
              <div>
                <span className="spec">Idioma</span>
                <b>Español</b>
              </div>
              <div>
                <span className="spec">Formato</span>
                <b>Web + gráfico</b>
              </div>
            </div>
          </div>

          <div className="deck" aria-hidden="true">
            {deck.map((card, index) => (
              <article className="deck-card" key={card.code} style={cardStyle(index)}>
                <div className="deck-card-top">
                  <span>{card.code}</span>
                  <RegistrationMark size={11} />
                </div>
                <p className="deck-card-title">{card.title}</p>
                <div className="deck-chip" data-tone={card.tone}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="deck-card-foot">{card.note}</p>
              </article>
            ))}
          </div>
        </div>

        <ul className="sr-only">
          {deck.map((card) => (
            <li key={card.code}>
              {card.title} — {card.note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
