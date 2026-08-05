# Registro de Cambios (Changelog)

Todas las modificaciones, adiciones y decisiones de diseno del proyecto **Maraton de Arequipa** se registran en este documento.

El formato esta basado en Keep a Changelog (https://keepachangelog.com/es-ES/1.0.0/).

---

## [Unreleased]

---

## [v0.7.0] - 2026-08-05

### Agregado
- **Gestion Dinamica de Fechas, Calendario e Historico (`src/components/UpcomingRacesSection.tsx`)**:
  - Insignias de fecha mas notoria (badges de alto contraste con numero de dia, mes y ano).
  - Selector dual de vistas: **[ Vista Tarjetas ]** y **[ Vista Calendario ]**.
  - Destacado automatico de la carrera proxima mas cercana basada en la fecha actual.
  - Clasificacion e historial de **Carreras Pasadas** para eventos cuya fecha ha transcurrido.
- **Modelos de Datos con Fechas ISO (`src/data/maratonData.ts`)**:
  - Incorporacion de atributo `isoDate` y funcion `getProcessedRaces()` para filtrado y ordenamiento automatico.

---

## [v0.6.0] - 2026-08-05

### Agregado
- **Guia Explicativa de Conceptos (`docs/GUIA_EXPLICATIVA.md`)**:
  - Explicacion detallada sobre SEO y las 6 medidas aplicadas en el codigo.
  - Explicacion tecnica sobre la prueba de carga CSV y el mecanismo de Rollback.
