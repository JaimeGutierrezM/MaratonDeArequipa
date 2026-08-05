# Documentacion de Pestana: Resultados (El Producto Mas Importante)

> **Ruta URL**: `/resultados/`  
> **Prioridad**: P0  
> **Estado**: Implementado y Verificado  
> **Alineacion con Dossier**: Seccion 05 ("Resultados: El Producto Mas Importante")

---

## Proposito de la Pestana
Buscador principal y sistema de rankings de corredores. Permite encontrar tiempos oficiales, netos, ritmos promedio y posiciones por categoria en menos de 3 clics.

---

## Capacidades de Busqueda y Filtros

| Campo de Filtro | Opciones Disponibles |
| :--- | :--- |
| **Busqueda por Dorsal** | Busqueda exacta / parcial por numero de dorsal (ej. `1024`, `2048`, `3096`) |
| **Busqueda por Nombre** | Busqueda por nombre o apellido del corredor |
| **Distancia** | `Todas`, `21K`, `10K`, `5K` |
| **Categoria** | `Todas`, `18-29 M`, `18-29 F`, `30-39 M`, `30-39 F`, `40-49 M`, `50-59 M` |
| **Genero** | `Todos`, `M` (Masculino), `F` (Femenino) |
| **Ano** | `2026`, `2025` |

---

## Reglas de Integridad y Pipeline de Publicacion

1. **No inventar datos**: Ningun resultado se publica sin archivo oficial provisto por la organizacion.
2. **Privacidad**: No publicar DNI completo ni datos personales innecesarios.
3. **Audit Log de Correcciones**: Cualquier correccion realizada en tiempos debe incluir fecha, responsable y motivo.
4. **Estados de Resultados**:
   - `Provisional`: Carga inicial previa a la validacion de muestra.
   - `Oficial`: Aprobado por la coordinacion tecnica.
   - `Corregido`: Tiempos ajustados con historial.
