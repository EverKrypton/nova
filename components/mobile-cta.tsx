import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";
import { ArrowUpRight } from "./marks";

export function MobileCta() {
  return (
    <div className="mobile-cta">
      <span>
        Precio y dudas
        <br />
        por WhatsApp
      </span>
      <a
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Escribir <ArrowUpRight size={14} />
      </a>
    </div>
  );
}
