# The Last Station — La última estación

Sitio de una sola página para el cortometraje **The Last Station / La última estación**. Presenta el corto, el reparto, el proceso de producción y la función de casa abierta, con una dirección de arte inspirada en un expediente de estación abandonada.

- Producción: [the-last-station.vercel.app](https://the-last-station.vercel.app) *(actualizar si el dominio final cambia)*
- Contenido editable: [`src/content/film.ts`](src/content/film.ts)
- Guía para el cliente: [`CONTENIDO.md`](CONTENIDO.md)

---

## Stack

| Pieza | Versión / decisión |
| --- | --- |
| Framework | Astro 7 (`output: 'static'`) |
| Lenguaje | TypeScript estricto (`astro/tsconfigs/strict`) |
| Estilos | CSS propio, sin framework |
| JS | Mínimo, inline; sin dependencias de cliente |
| Fuentes | Barlow Condensed 700/800, Barlow 400/500, IBM Plex Mono 400/500 (Fontsource, autoalojadas en `public/fonts`) |
| SEO | `@astrojs/sitemap`, `robots.txt`, canonical, Open Graph, Twitter Card, JSON-LD condicional |
| Deploy | Vercel (build estático) + GitHub para auto-deploy |

## Requisitos

- Node.js 20 o superior (desarrollado con Node 24).
- npm 10 o superior.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera el sitio estático en `dist/`. |
| `npm run preview` | Sirve `dist/` para revisar el build de producción. |
| `npm run check` | Valida TypeScript y archivos `.astro` (debe dar 0 errores). |

Antes de publicar:

```bash
npm run check
npm run build
npm run preview
```

## Estructura

```text
.
├─ public/
│  ├─ favicon.svg
│  ├─ fonts/                 # woff2 autoalojados
│  └─ media/                 # fotos, póster y og.jpg
├─ src/
│  ├─ components/
│  │  ├─ Nav.astro           # navegación fija + menú móvil <dialog>
│  │  ├─ Hero.astro          # atmósfera SVG/CSS, título y franja de función
│  │  ├─ FilmSection.astro   # 01 · El corto
│  │  ├─ CastSection.astro   # 02 · Reparto
│  │  ├─ ProductionSection.astro # 03 · Detrás de cámaras (carrusel móvil)
│  │  ├─ EventSection.astro  # Casa abierta / función
│  │  ├─ Footer.astro
│  │  ├─ VideoModal.astro    # YouTube, Vimeo y MP4
│  │  └─ MediaPlaceholder.astro
│  ├─ content/film.ts        # ÚNICA fuente de contenido editable
│  ├─ layouts/BaseLayout.astro
│  ├─ lib/
│  │  ├─ media.ts            # comprueba archivos en build
│  │  └─ video.ts            # normaliza URLs de video
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ 404.astro
│  │  └─ robots.txt.ts
│  └─ styles/global.css
├─ astro.config.mjs
└─ package.json
```

## Edición de contenido

Todo el texto visible, los créditos, el reparto, la producción, la función y las etiquetas de interfaz viven en **`src/content/film.ts`**, tipado con interfaces estrictas.

Los valores pendientes se marcan con corchetes, por ejemplo `[FECHA]` o `[NOMBRE]`. La guía completa de reemplazo está en [`CONTENIDO.md`](CONTENIDO.md).

## Medios y placeholders

El sitio comprueba en tiempo de build si cada archivo de `public/media` existe (`src/lib/media.ts`).

- Si la imagen existe, se muestra con sus dimensiones declaradas y `alt`.
- Si no existe, aparece un marco intencional **FOTO PENDIENTE** con el nombre del archivo y el tamaño recomendado. Nunca se muestra el icono de imagen rota.
- Si `hero.jpg` no existe, el hero usa su atmósfera SVG/CSS. Si existe, se precarga y se usa como fondo.

Archivos esperados:

| Archivo | Tamaño recomendado | Uso |
| --- | --- | --- |
| `public/media/hero.jpg` | 2400 × 1350 px | Fondo del hero |
| `public/media/poster.jpg` | 1200 × 1600 px | Póster de la sección 01 |
| `public/media/cast-01.jpg` … `cast-06.jpg` | 900 × 1200 px | Retratos del reparto |
| `public/media/bts-01.jpg` … `bts-03.jpg` | 1600 × 1067 px | Detrás de cámaras |
| `public/media/og.jpg` | 1200 × 630 px | Tarjeta social (ya generada) |

Formatos recomendados: JPG/WebP optimizados, sRGB, sin transparencias. Mantén el nombre exacto o actualiza la ruta en `film.ts`.

## Video

`videoUrl` acepta:

- YouTube: `https://www.youtube.com/watch?v=ID` o `https://youtu.be/ID`
- Vimeo: `https://vimeo.com/ID`
- MP4: `/media/pelicula.mp4` o una URL `https://…mp4`

YouTube se incrusta con `youtube-nocookie.com`. El reproductor se crea solo al abrir el modal y se destruye al cerrarlo. Si `videoUrl` está vacío, el botón **Ver el cortometraje** aparece deshabilitado con el texto **El video todavía no está disponible**; nunca queda un enlace roto.

## Accesibilidad

- `lang="es"`, un único `h1`, landmarks semánticos y enlace **Saltar al contenido**.
- Foco visible ámbar de 2 px, contraste AA orientativo, navegación completa por teclado.
- Menú móvil y modal de video implementados con `<dialog>`: trampa de foco, `Escape`, bloqueo de scroll y retorno de foco al elemento que los abrió.
- Animaciones desactivadas con `prefers-reduced-motion`.
- Carrousel de producción con scroll-snap y scroll horizontal contenido; la página no genera scroll horizontal a 320 px.

## SEO

- Título exacto: `The Last Station — Cortometraje | Casa abierta`.
- Descripción en español de menos de 155 caracteres, editable en `metaDescription`.
- Canonical, Open Graph, Twitter Card, `theme-color`, favicon SVG y `sitemap-index.xml`.
- `robots.txt` generado en build.
- El JSON-LD de tipo `Movie` solo se emite cuando hay video, duración, formato y datos completos de la función (fecha ISO, lugar y dirección). Si falta algo, se omite por completo.
- Página 404 con la misma dirección de arte.

## Deploy en Vercel

### Opción A — CLI

```bash
vercel link
vercel --prod
```

Configuración detectada automáticamente:

- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 20 o superior

### Opción B — GitHub + auto-deploy (recomendado)

1. Crea un repositorio en GitHub y sube este proyecto a la rama `main`.
2. En Vercel: **Add New → Project → Import Git Repository**.
3. Selecciona el repositorio. Vercel detecta Astro; no cambies build ni output.
4. Deploy. Cada push a `main` genera un deployment de producción automático.

### URL del sitio

`astro.config.mjs` resuelve el dominio así:

1. `SITE_URL`, si está definida.
2. `VERCEL_PROJECT_PRODUCTION_URL`, en deployments de Vercel.
3. Fallback: `https://the-last-station.vercel.app`.

Si usas un dominio propio, define `SITE_URL=https://tudominio.com` en Vercel → Settings → Environment Variables y vuelve a desplegar. Esto corrige canonical, sitemap, robots y Open Graph.

## Checklist de publicación

- [ ] `npm run check` sin errores.
- [ ] `npm run build` correcto.
- [ ] Créditos, reparto, sinopsis y producción reemplazados.
- [ ] Fecha, hora, lugar y dirección reales.
- [ ] `dateISO` completo para activar el JSON-LD.
- [ ] Imágenes en `public/media` con los nombres esperados.
- [ ] `videoUrl` válido o vacío de forma intencional.
- [ ] Enlaces sociales revisados.
- [ ] `SITE_URL` con el dominio final.
- [ ] Revisión en móvil (320–430 px) y escritorio.
- [ ] Probar teclado, menú móvil y modal de video.

## Dirección de arte

Paleta cerrada: tinta `#080907`, carbón `#11130f`, hueso `#e9e3d5`, humo `#9b9d92`, señal `#d7a23e`, óxido `#9a3f2d` y línea `rgba(233,227,213,.14)`. Tipografía condensada para titulares, Barlow para lectura e IBM Plex Mono para etiquetas técnicas. El resultado combina un expediente ferroviario, señalética desgastada y material de archivo.

---

Cortometraje independiente. Todos los derechos reservados.
