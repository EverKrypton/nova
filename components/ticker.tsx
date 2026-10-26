import { Asterisk } from "./marks";

const items = [
  "Páginas web",
  "Diseño gráfico",
  "Videojuegos",
  "Software a medida",
  "Apps y APK",
  "Mantenimiento",
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
