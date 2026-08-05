# Documentacion Tecnica: Analytics y Google Search Console

> **Ubicacion del Archivo**: `docs/ANALYTICS_Y_SEO.md`  
> **Alineacion con Dossier**: Seccion 10 ("SEO, Datos y Filtros") & Seccion 12 ("Plan de Ejecucion P0")

---

## 1. Google Analytics (GA4) - Medicion de Comportamiento

### Proposito
Google Analytics permite medir y analizar las acciones que realizan los usuarios dentro del portal web.

### Eventos Minimos Obligatorios del Dossier

| Nombre de Evento | Accion del Usuario | Objetivo de Medicion |
| :--- | :--- | :--- |
| `search_results` | Uso del buscador de resultados por dorsal/nombre | Frecuencia de busqueda de tiempos |
| `filter_apply` | Aplicacion de filtros en carreras, rutas o grupos | Secciones de mayor interes |
| `result_view` | Consulta de la ficha o detalle individual de un corredor | Conversion e interes en atletas |
| `photo_click` | Clic para ver fotos o ir a la galeria del fotografo | Interes comercial en fotografia |
| `race_cta` | Clic en ver ficha de carrera o inscripcion | Conversion principal del portal |
| `group_join` | Clic en unirse a grupo de WhatsApp/entrenamiento | Integracion comunitaria |
| `route_download` | Descarga de archivo GPX de una ruta | Utilidad operativa de rutas |
| `newsletter_signup` | Registro de correo en el boletin | Captacion recurrente de runners |

---

## 2. Google Search Console - Posicionamiento Organico (SEO)

### Proposito
Google Search Console es la herramienta oficial de Google que supervisa la presencia del sitio web en los resultados de busqueda de Google.

### Funciones Principales en el Portal
1. **Indexacion**: Garantizar que cada carrera, ruta, grupo y noticia sea indexable por Google.
2. **Palabras Clave de Entrada**: Monitorear el rendimiento con terminos como *"maraton de arequipa"*, *"media maraton arequipa resultados"*, *"rutas para correr arequipa"*.
3. **Envio de Sitemap**: Envio automatico del mapa del sitio `sitemap.xml`.
4. **Validacion de Schemas**: Comprobacion de datos estructurados (`SportsEvent`, `NewsArticle`, `Dataset`).

---

## 3. Guia de Integracion Tecnica en Next.js 15

### A. Integracion de Google Analytics (GA4)
Instalacion de la libreria oficial de Next.js:
```bash
npm install @next/third-parties
```

Integracion en `src/app/layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      </body>
    </html>
  );
}
```

### B. Integracion de Google Search Console
Agregar la metaetiqueta de verificacion en la configuracion de Metadata de `src/app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  verification: {
    google: 'CODIGO_DE_VERIFICACION_DE_GOOGLE_SEARCH_CONSOLE',
  },
};
```
