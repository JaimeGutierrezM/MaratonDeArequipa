# Guia Explicativa: SEO, Prueba de Carga, Rollback y Panel de Analytics

> **Ubicacion del Archivo**: `docs/GUIA_EXPLICATIVA.md`  
> **Fecha**: 5 de Agosto, 2026

---

## 1. Que es el SEO y Que Hemos Hecho en el Proyecto

### Definicion de SEO
SEO (Search Engine Optimization u Optimizacion para Motores de Busqueda) es el conjunto de tecnicas y configuraciones tecnicas que se aplican a una pagina web para que motores de busqueda como Google la encuentren, entiendan su contenido y la posicionen en los primeros lugares cuando los usuarios buscan informacion relacionada.

### Lo Que Hemos Implementado en el Proyecto

1. **Metadatos y Metadescripciones Unicas**:
   - En `src/app/layout.tsx` se configuraron el `title`, `description` y `keywords` dirigidos al nicho: *"Maraton de Arequipa"*, *"media maraton arequipa 2026"*, *"resultados maraton arequipa"*, *"rutas running arequipa"*.

2. **Etiquetas OpenGraph para Redes Sociales**:
   - Configuracion de `openGraph` para que al compartir enlaces por WhatsApp, Facebook o Twitter se muestre la imagen de vista previa, titulo oficial y descripcion estilizada.

3. **Estructura HTML5 Semantica y Jerarquia de Encabezados**:
   - Uso de un solo `<h1>` por pagina, secciones demarcadas con `<header>`, `<main>`, `<section>`, `<footer>`, y tarjetas con ids descriptivos.

4. **Prerenderizado Estatico (Static Page Generation)**:
   - Las 14 rutas del sitio web se compilan de forma estatica en Next.js 15. Esto permite que cuando los robots de Google (Googlebot) visiten el sitio, lean el contenido indexable de forma instantanea sin esperar ejecuciones complejas.

5. **URLs Limpias Estructuradas segun Dossier**:
   - Enlaces semanticos como `/carreras/media-maraton-ciudad-de-arequipa-2026/` y `/rutas-running-arequipa/`.

6. **Datos Estructurados (Schemas)**:
   - Esquemas `SportsEvent` para la carrera principal y `Dataset` para los resultados oficiales.

---

## 2. Que es la Prueba de Carga y Rollback

### Prueba de Carga (Importacion de Resultados)
En el contexto de carreras atleticas, la prueba de carga consiste en simular e importar un archivo con cientos o miles de tiempos oficiales de corredores (en formato CSV o XLSX) inmediatamente despues de que los atletas cruzan la linea de meta.

- **En nuestra web**: En la seccion de resultados existe el boton **Importador CSV** que procesa datos de dorsal, nombre, distancia, categoria, genero, tiempo y ritmo, asignando inmediatamente el estado `Provisional`.

### Mecanismo de Rollback (Restauracion de Seguridad)
El Rollback es una funcion de seguridad operativa. Si durante el domingo de la carrera el organizador importa un archivo CSV corrupto o con tiempos erroneos, el sistema permite presionar el boton **Rollback**.

- **Como funciona**: Antes de procesar cualquier importacion, la aplicacion guarda automaticamente una copia de respaldo (backup) del estado anterior. Al hacer clic en Rollback, se restaura el dataset anterior instantaneamente sin perder informacion previa ni afectar el funcionamiento de la web.

---

## 3. Como Ver Analytics, Search Console y Los Eventos Rastreados

### Google Analytics 4 (GA4)

#### Donde se ven los datos:
- Ingresas al panel web de Google Analytics en [analytics.google.com](https://analytics.google.com).

#### Donde ver los eventos rastreados:
1. **En tiempo real**: En el menu lateral izquierdo, ve a **Informes** -> **En tiempo real (Realtime)**. Ahi veras a los usuarios conectados al instante y los eventos que se activan como `search_results` o `filter_apply`.
2. **Historial de Eventos**: En el menu lateral, ve a **Informes** -> **Interaccion** -> **Eventos**. Veras la lista completa de eventos rastreados (`result_view`, `route_download`, `race_cta`, etc.) y la cantidad de veces que los usuarios hicieron clic.

#### Como se conecta al codigo:
En nuestro archivo `src/lib/gtag.ts` se encuentra el modulo de rastreo. Cuando tengas tu ID oficial (ej. `G-XXXXXXXXXX`), se coloca en la variable de entorno `NEXT_PUBLIC_GA_ID` y las metricas comenzaran a fluir automaticamente.

---

### Google Search Console

#### Donde se ven los datos:
- Ingresas a [search.google.com/search-console](https://search.google.com/search-console).

#### Que informacion podras ver:
1. **Rendimiento**: Clics totales, impresiones en Google y la posicion media de tu web en busquedas como *"maraton de arequipa"*.
2. **Cobertura / Indexacion**: Confirmacion de que Google ha procesado las 14 paginas del sitio.
3. **Envio de Sitemap**: Subir el archivo `sitemap.xml` para acelerar el descubrimiento de nuevas noticias y carreras.

#### Como se conecta al codigo:
Search Console te otorga un codigo de verificacion. Ese codigo se agrega en la etiqueta `<meta name="google-site-verification" content="..." />` en `src/app/layout.tsx` para demostrar que eres el propietario del dominio.
