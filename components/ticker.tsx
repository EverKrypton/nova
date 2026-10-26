import { Asterisk } from "./marks";

const items = [
  "Páginas web",
  "Identidad visual",
  "Piezas para redes",
  "Material promocional",
  "Diseño responsive",
  "Contacto directo",
];

function Strip() {
  return (
    <div className="ticker-strip">
      {items.map((item) => (
        <span className="ticker-item" key={item}>
          <Asterisk size={11} />
          {item}
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <Strip />
        <Strip />
      </div>
    </div>
  );
}
