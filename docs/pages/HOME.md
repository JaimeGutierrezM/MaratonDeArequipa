# Documentacion de Pestana: Home (Pagina de Inicio)

> **Ruta URL**: `/`  
> **Prioridad**: P0 (Obligatorio)  
> **Estado**: Implementado y Verificado  
> **Alineacion con Dossier**: Seccion 03 ("Arquitectura y Navegacion") & Seccion 11 ("Componentes Obligatorios")

---

## Proposito de la Pestana
Descubrimiento inicial, aceleracion de busquedas criticas (dorsal/resultados en menos de 3 acciones) y presentacion de la cultura deportiva de Arequipa a 2,335 m de altitud.

---

## Jerarquia Visual y Componentes Incluidos

1. **Header Sticky (`src/components/Header.tsx`)**:
   - Logotipo oficial `MARATON DE AREQUIPA` + etiqueta `SUR DEL PERU • 2,335 M`.
   - Navegacion directa a las 9 secciones.
   - Buscador general, notificaciones e icono de perfil.

2. **Hero con Contador en Vivo (`src/components/Hero.tsx`)**:
   - Fondo editorial de corredores con el volcan Misti / Yanahuara.
   - Titular: `"Corre Arequipa. Encuentra tu proxima meta."`
   - Contador en Vivo (JavaScript) con dias, horas, minutos y segundos para la Media Maraton del 9 de agosto de 2026.
   - Botones CTAs: `Ver Carreras`, `Ver Resultados`, `Encontrar Mis Fotos`.

3. **Banner Carrera Destacada P0 (`src/components/FeaturedRaceBanner.tsx`)**:
   - Fondo Guinda Profundo (`#6A1838`) con bordes Terracota (`#C04A35`).
   - Metricas: Distancias `21K | 10K | 5K`, Fecha `09 AGO 2026`, Horarios de largada y ubicacion en la Plaza de Yanahuara.

4. **Buscador & Resultados Recientes (`src/components/ResultsSearchSection.tsx`)**:
   - Filtro instantaneo por Dorsal, Nombre, Distancia, Categoria, Genero y Ano.
   - Tabla responsive que se convierte en tarjetas legibles en dispositivos moviles.

5. **Proximas Carreras (`src/components/UpcomingRacesSection.tsx`)**:
   - Rejilla de eventos filtrable por distancia (`5K`, `10K`, `21K`, `Trail`, `Montana`, `Infantiles`).

6. **Grupos de Running (`src/components/RunningGroupsSection.tsx`)**:
   - Tarjetas de comunidades reales (ej. ADES Runners, AQP Runners) con dias, horas, punto de encuentro y enlace directo a WhatsApp.

7. **Rutas para Correr (`src/components/RunningRoutesSection.tsx`)**:
   - Rutas validadas con altimetria, desnivel acumulado, tipo de superficie y descarga GPX.

8. **Fotografos y Fotos (`src/components/PhotographersSection.tsx`)**:
   - Campo para ingresar numero de dorsal y buscar fotos en galerias.

9. **Noticias (`src/components/NewsSection.tsx`)**:
   - Filtros editoriales por region (`Arequipa`, `Peru`, `Latam`, `Mundo`).

10. **Planes de Running (`src/components/RunningPlansSection.tsx`)**:
    - Niveles del 1 al 5 desde principiante hasta maraton 42K.

11. **Marcas y Patrocinadores (`src/components/SponsorsSection.tsx`)**:
    - Directorio de auspiciadores locales e internacionales.

12. **Newsletter & Footer (`src/components/NewsletterBanner.tsx`, `src/components/Footer.tsx`)**:
    - Captacion de correos y enlaces institucionales.

13. **Navegacion Movil Fija (`src/components/MobileNavBar.tsx`)**:
    - Barra inferior fija para experiencia touch una sola mano (`Inicio`, `Carreras`, `Resultados`, `Fotos`, `Mas`).
