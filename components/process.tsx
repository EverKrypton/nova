import { processSteps } from "@/lib/mock-data";

export function Process() {
  return (
    <section className="section paper on-paper" id="proceso">
      <div className="shell">
        <div className="section-head">
          <h2>
            De la conversación a la <em>entrega</em>.
          </h2>
          <p className="head-note">
            Sin intermediarios ni pasos escondidos. Cuatro momentos y siempre
            sabes en cuál estás.
          </p>
        </div>

        <div className="process-sheet">
          {processSteps.map((step) => (
            <div className="process-row" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
