# NovaProyect

Landing page comercial para captar clientes de diseño web y diseño gráfico mediante WhatsApp.

## Requisitos

- Node.js 20.9 o posterior
- npm

## Ejecutar en desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint |
| `npm run typecheck` | Verificación de tipos con TypeScript |

## Estructura

```text
app/          Layout, página principal, estilos globales, robots e icono
components/   Secciones de la landing (header, hero, servicios, portafolio, contacto, footer)
lib/          Datos de marca/contenido y helper de enlaces de WhatsApp
```

## Personalizar datos

Edita `lib/mock-data.ts` para actualizar el número de WhatsApp, mensaje, enlaces sociales, servicios y proyectos demostrativos. Los enlaces sociales están vacíos deliberadamente hasta que se proporcionen las URL oficiales.

Los enlaces de WhatsApp se generan con `whatsappLink()` de `lib/whatsapp.ts`, de modo que el número y los mensajes se mantienen en un único lugar.

## Despliegue

El proyecto está desplegado en Vercel y conectado al repositorio de GitHub: cada push a `main` genera un despliegue automático.

## Notas

- Los proyectos del portafolio están identificados como demostraciones conceptuales.
- No hay backend, formularios, endpoints ni almacenamiento de datos.
- El precio se consulta directamente por WhatsApp.
- La aplicación no incorpora un modo claro/oscuro alternativo.
- Incluye cabeceras de seguridad (nosniff, anti-frame, referrer y permissions policy) y `poweredByHeader` desactivado.
