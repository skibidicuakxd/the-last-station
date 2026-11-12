# Contenido — The Last Station

Esta guía explica cómo sustituir los textos, datos e imágenes provisionales del sitio. **Todo el contenido editable está en un solo archivo:**

```text
src/content/film.ts
```

No hace falta tocar componentes para cambiar textos, créditos, reparto, producción, función o redes.

---

## 1. Antes de empezar

Los valores pendientes aparecen entre corchetes, por ejemplo:

```ts
date: '[FECHA]',
venue: '[LUGAR]',
```

Busca `[` en `film.ts` para localizar todo lo que falta. Cuando reemplaces un valor:

- Mantén las comillas simples o dobles y la coma final.
- No borres las claves (`date:`, `venue:`…), solo el texto entre comillas.
- Guarda el archivo y comprueba que `npm run dev` siga funcionando.

---

## 2. Campos por reemplazar

### Datos generales

| Campo | Estado | Qué escribir |
| --- | --- | --- |
| `title` | Provisional | Título internacional definitivo. |
| `titleEs` | Provisional | Título en español. |
| `tagline` | Provisional | Frase corta de presentación (una línea). |
| `metaDescription` | Provisional | Descripción para Google, **máximo 155 caracteres**. |
| `synopsis` | Provisional | Sinopsis definitiva (2–4 frases). |
| `duration` | `[DURACIÓN]` | Ej. `18 min`. |
| `year` | `2026` | Año de estreno. |
| `genre` | Provisional | Ej. `Terror / Misterio`. |
| `format` | `[FORMATO]` | Ej. `2K · Color · 5.1`. |
| `footerNote` | Provisional | Nota corta del pie. |
| `footerClosing` | Provisional | Frase de cierre. |
| `acknowledgements` | `[AGRADECIMIENTOS]` | Nombres o entidades que apoyaron el corto. |
| `copyrightYear` | `2026` | Año del aviso de derechos. |

### Créditos

Sustituye cada `[NOMBRE]` por el nombre real:

```ts
credits: [
  { role: 'Dirección', name: '[NOMBRE]' },
  { role: 'Guion', name: '[NOMBRE]' },
  { role: 'Producción', name: '[NOMBRE]' },
  { role: 'Fotografía', name: '[NOMBRE]' },
  { role: 'Edición', name: '[NOMBRE]' },
  { role: 'Sonido', name: '[NOMBRE]' },
  { role: 'Música', name: '[NOMBRE]' },
],
```

Puedes añadir o quitar filas manteniendo el formato `{ role, name }`.

### Reparto

Cada ficha tiene seis campos:

```ts
{
  id: '01',
  character: 'PERSONAJE 01',
  actor: 'INTÉRPRETE 01',
  description: 'Descripción breve del personaje.',
  photo: '/media/cast-01.jpg',
  photoAlt: 'Retrato pendiente de PERSONAJE 01.',
}
```

| Campo | Qué escribir |
| --- | --- |
| `id` | Número visible (`01`–`06`). |
| `character` | Nombre del personaje. |
| `actor` | Nombre del intérprete. |
| `description` | Una o dos frases sobre el personaje. |
| `photo` | Ruta de la imagen (ver sección 3). |
| `photoAlt` | Descripción de la foto para lectores de pantalla. |

Si el reparto final no tiene seis personas, elimina o añade bloques completos. La interfaz cuenta las fichas automáticamente.

### Producción

```ts
{
  id: '01',
  number: '01',
  title: 'Guion / Storyboard',
  description: 'Del papel a la estación.',
  photo: '/media/bts-01.jpg',
  photoAlt: 'Foto pendiente del proceso de guion y storyboard.',
}
```

Sustituye títulos, descripciones, fotos y textos alternativos. Puedes cambiar el número de etapas; el contador se actualiza solo.

### Función / Casa abierta

```ts
event: {
  label: 'Casa abierta · Función única',
  date: '[FECHA]',
  time: '[HORA]',
  venue: '[LUGAR]',
  address: '[DIRECCIÓN]',
  admission: 'Entrada libre',
  mapUrl: '',
  dateISO: '',
},
```

| Campo | Ejemplo | Notas |
| --- | --- | --- |
| `date` | `Sábado 12 de diciembre` | Texto visible. |
| `time` | `19:30 h` | Texto visible. |
| `venue` | `Estación Central` | Nombre del espacio. |
| `address` | `Calle 00, Ciudad` | Dirección completa. |
| `admission` | `Entrada libre` | Condición de acceso. |
| `mapUrl` | `https://maps.google.com/…` | Si está vacío, el botón de mapa se muestra deshabilitado. |
| `dateISO` | `2026-12-12T19:30` | Formato ISO, sin zona horaria. Activa la cuenta atrás y el JSON-LD. |

**Importante:** si `dateISO` está vacío, no se muestra cuenta atrás y no se emite el JSON-LD de la película. Es intencional para no publicar datos falsos.

### Redes sociales

```ts
social: [
  { label: 'Instagram', url: '' },
  { label: 'YouTube', url: '' },
],
```

Pega la URL completa. Si dejas `url: ''`, la red no se enlaza y se muestra como pendiente. Puedes añadir más redes con el mismo formato.

### Video

```ts
videoUrl: '',
```

Formatos admitidos:

| Plataforma | Ejemplo |
| --- | --- |
| YouTube | `https://www.youtube.com/watch?v=XXXXXXXXXXX` |
| YouTube corto | `https://youtu.be/XXXXXXXXXXX` |
| Vimeo | `https://vimeo.com/123456789` |
| MP4 | `/media/the-last-station.mp4` |
| MP4 externo | `https://cdn.ejemplo.com/the-last-station.mp4` |

YouTube se carga con `youtube-nocookie.com` y solo al abrir el modal. Si el campo está vacío, el botón queda deshabilitado con el texto **El video todavía no está disponible**.

### Etiquetas de interfaz

El bloque `labels` contiene textos de navegación, botones y avisos. Normalmente **no es necesario cambiarlo**, pero es editable si quieres ajustar la voz del sitio. Ejemplos: `watchFilm`, `play`, `playDisabled`, `photoPending`, `mapPending`, `footerEnd`.

---

## 3. Imágenes

Coloca los archivos en `public/media/` con estos nombres exactos:

| Archivo | Tamaño | Proporción | Dónde aparece |
| --- | --- | --- | --- |
| `hero.jpg` | 2400 × 1350 px | 16:9 | Fondo del hero |
| `poster.jpg` | 1200 × 1600 px | 3:4 | Póster de la sección 01 |
| `cast-01.jpg` | 900 × 1200 px | 3:4 | Reparto, ficha 01 |
| `cast-02.jpg` | 900 × 1200 px | 3:4 | Reparto, ficha 02 |
| `cast-03.jpg` | 900 × 1200 px | 3:4 | Reparto, ficha 03 |
| `cast-04.jpg` | 900 × 1200 px | 3:4 | Reparto, ficha 04 |
| `cast-05.jpg` | 900 × 1200 px | 3:4 | Reparto, ficha 05 |
| `cast-06.jpg` | 900 × 1200 px | 3:4 | Reparto, ficha 06 |
| `bts-01.jpg` | 1600 × 1067 px | 3:2 | Producción, etapa 01 |
| `bts-02.jpg` | 1600 × 1067 px | 3:2 | Producción, etapa 02 |
| `bts-03.jpg` | 1600 × 1067 px | 3:2 | Producción, etapa 03 |

Recomendaciones:

- JPG o WebP, sRGB, sin transparencias.
- Optimiza el peso: idealmente menos de 400 KB por foto y menos de 800 KB para el hero.
- Respeta la proporción para evitar recortes inesperados.
- Si cambias un nombre de archivo, actualiza también la ruta en `film.ts`.

### Qué pasa si falta una imagen

El sitio muestra un marco de archivo con el texto **FOTO PENDIENTE**, el nombre del archivo y el tamaño recomendado. No aparece el icono de imagen rota. En cuanto el archivo exista con el nombre correcto y se vuelva a construir el sitio, la foto se muestra automáticamente.

### Textos alternativos

Cada imagen tiene un campo `alt`. Describe lo que se ve, no repitas “imagen de”. Ejemplo:

```ts
photoAlt: 'Retrato de [NOMBRE] con abrigo oscuro bajo la luz de la estación.',
```

### Tarjeta social

`public/media/og.jpg` (1200 × 630 px) ya está generada con la dirección de arte del sitio. Si el cliente entrega una foto oficial, puede reemplazarse manteniendo el nombre y el tamaño.

---

## 4. Activar el JSON-LD

El bloque de datos estructurados solo se publica cuando **todo** esto es cierto:

- `videoUrl` es válido.
- `duration` no contiene `[`.
- `format` no contiene `[`.
- `event.dateISO` tiene valor.
- `event.venue` y `event.address` no contienen `[`.

Cuando esté completo, se emite un `Movie` con `ScreeningEvent` en el `<head>`. Si falta algún dato, se omite por completo para no enviar información incorrecta a Google.

---

## 5. Revisar antes de publicar

```bash
npm run dev
```

Comprueba:

- [ ] El título y la sinopsis se leen bien en el hero y en la sección 01.
- [ ] Los siete créditos tienen nombres reales.
- [ ] Las seis fichas de reparto tienen personaje, intérprete, descripción y foto.
- [ ] Las tres etapas de producción tienen texto y foto.
- [ ] La fecha, hora, lugar y dirección son correctos.
- [ ] `dateISO` está completo (si ya hay fecha confirmada).
- [ ] El botón de mapa lleva a la ubicación correcta.
- [ ] El video abre y se cierra correctamente.
- [ ] Las redes sociales apuntan a las cuentas oficiales.
- [ ] Los agradecimientos están completos.
- [ ] No queda ningún `[` en `src/content/film.ts`.

Después:

```bash
npm run check
npm run build
npm run preview
```

Y publica con un push a `main` (auto-deploy de Vercel) o con `vercel --prod`.

---

## 6. Dónde se ve cada cosa

| Sección | Componente | Contenido |
| --- | --- | --- |
| Navegación | `src/components/Nav.astro` | Enlaces y CTA |
| Hero | `src/components/Hero.astro` | Título, tagline, atmósfera, franja de función |
| `01 / El corto` | `src/components/FilmSection.astro` | Póster, sinopsis, créditos, ficha técnica |
| `02 / Reparto` | `src/components/CastSection.astro` | Fichas del reparto |
| `03 / Producción` | `src/components/ProductionSection.astro` | Etapas y carrusel móvil |
| Casa abierta | `src/components/EventSection.astro` | Fecha, hora, lugar, mapa, cuenta atrás |
| Pie | `src/components/Footer.astro` | Créditos, redes, cierre |

Los textos de sección y etiquetas vienen de `film.labels`; los datos, de las claves superiores de `film`.

---

## 7. Problemas frecuentes

**La imagen no aparece y veo FOTO PENDIENTE.**
El archivo no existe o el nombre/ruta no coincide. Revisa mayúsculas, extensión y que esté dentro de `public/media/`.

**El botón de video está deshabilitado.**
`videoUrl` está vacío. Pega una URL válida de YouTube, Vimeo o MP4.

**No aparece la cuenta atrás.**
`event.dateISO` está vacío o tiene un formato distinto de `AAAA-MM-DDTHH:mm`.

**El mapa no enlaza.**
`event.mapUrl` está vacío. Pega la URL de Google Maps u OpenStreetMap.

**El sitio publicado muestra el dominio antiguo.**
Define `SITE_URL` con el dominio final en Vercel y vuelve a desplegar.

**Cambié un texto y no lo veo.**
Guarda el archivo, recarga el navegador y confirma que el servidor de desarrollo sigue activo. En producción, espera a que termine el deployment.
