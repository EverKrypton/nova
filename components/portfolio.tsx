import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "@/lib/mock-data";
import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

function ProjectVisual({ visual }: { visual: "web" | "brand" | "social" }) {
  if (visual === "web") {
    return (
      <div className="demo-browser" aria-hidden="true">
        <div className="demo-browser-top"><span /><span /><span /></div>
        <div className="demo-web-hero"><small>ESTUDIO / SERVICIOS</small><strong>Menos ruido.<br />Más ideas.</strong></div>
        <div className="demo-web-footer"><span /><span /><span /></div>
      </div>
    );
  }

  if (visual === "brand") {
    return <div className="demo-brand" aria-hidden="true"><span>Fc.</span><small>FORMA CAFÉ</small></div>;
  }

  return (
    <div className="demo-social" aria-hidden="true">
      <div className="demo-social-block">HAZLO<br />VISIBLE.</div>
      <div className="demo-social-lines"><span /><span /><span /></div>
    </div>
  );
}

export function Portfolio() {
  return (
    <section className="section portfolio-section" id="proyectos">
      <div className="container">
        <div className="section-heading">
          <div><span className="eyebrow">Exploraciones creativas</span><h2>Una muestra de lo que podemos construir.</h2></div>
          <p>Estos conceptos son demostraciones visuales, no trabajos de clientes reales.</p>
        </div>
        <div className="portfolio-grid">
          {portfolioProjects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-visual"><ProjectVisual visual={project.visual} /></div>
              <div className="project-content">
                <div className="project-meta"><span>{project.category}</span><span className="demo-badge">Demo conceptual</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="portfolio-action">
          <a className="button button-secondary" href={whatsappLink(whatsappMessages.portfolio)} target="_blank" rel="noopener noreferrer">
            Crear un proyecto para mi negocio <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
