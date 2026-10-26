import { brand, navItems } from "@/lib/mock-data";
import { whatsappLink } from "@/lib/whatsapp";
import { ArrowUpRight } from "./marks";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div>
            <h2>Diseño hecho para durar más que la tendencia.</h2>
            <p className="spec" style={{ marginTop: "1rem" }}>
              {brand.edition} · Español
            </p>
          </div>

          <div className="footer-cols">
            <div>
              <h3>Índice</h3>
              <ul>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Contacto</h3>
              <ul>
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp <ArrowUpRight size={11} />
                  </a>
                </li>
                <li>
                  <p>{brand.whatsappDisplay}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="spec">
            © {new Date().getFullYear()} {brand.name} · Colofón: Bricolage
            Grotesque, Bodoni Moda, Martian Mono
          </span>
          <span className="spec">Tintas: lima, hueso, tinta, trama</span>
        </div>
      </div>
    </footer>
  );
}
