export function Specimen() {
  return (
    <section className="specimen" aria-label="Prueba de tinta">
      <div className="shell specimen-inner">
        <p className="specimen-line">
          Una imagen coherente para tu <b>siguiente etapa</b>.
        </p>

        <div className="specimen-side">
          <span className="spec">Tintas del muestrario</span>
          <div className="inks" aria-hidden="true">
            <span className="ink" data-ink="lime">
              <i />
              Lima 01
            </span>
            <span className="ink" data-ink="paper">
              <i />
              Hueso 02
            </span>
            <span className="ink" data-ink="ink">
              <i />
              Tinta 03
            </span>
            <span className="ink" data-ink="halftone">
              <i />
              Trama 04
            </span>
          </div>
          <p className="specimen-caption">
            Cuatro tintas, un criterio. Así se ven las piezas antes de salir del
            taller.
          </p>
        </div>
      </div>
    </section>
  );
}
