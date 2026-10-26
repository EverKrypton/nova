import { brand } from "@/lib/mock-data";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowUpRight } from "./marks";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#portada" aria-label={`${brand.name}, inicio`}>
          <span className="brand-mark" aria-hidden="true">
            {brand.mark}
          </span>
          <span>
            {brand.name}
            <small>{brand.edition}</small>
          </span>
        </a>

        <div className="header-actions">
          <span className="header-status">Abierto a proyectos</span>
          <a
            className="btn header-cta"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
