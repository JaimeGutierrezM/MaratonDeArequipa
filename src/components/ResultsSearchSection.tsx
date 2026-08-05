"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MOCK_RESULTS, ResultItem } from "@/data/maratonData";
import { trackEvent } from "@/lib/gtag";
import { Search, Trophy, HelpCircle, ChevronRight, Filter, RefreshCw, CheckCircle2, AlertCircle, Upload, RotateCcw, Clock } from "lucide-react";

export default function ResultsSearchSection() {
  const [resultsList, setResultsList] = useState<ResultItem[]>(MOCK_RESULTS);
  const [previousBackup, setPreviousBackup] = useState<ResultItem[] | null>(null);
  const [dorsalQuery, setDorsalQuery] = useState("");
  const [nameQuery, setNameQuery] = useState("");
  const [distanceFilter, setDistanceFilter] = useState("Todas");
  const [categoryFilter, setCategoryFilter] = useState("Todas");
  const [genderFilter, setGenderFilter] = useState("Todos");
  const [yearFilter, setYearFilter] = useState("2025");
  const [statusState, setStatusState] = useState<"Proximamente" | "Provisional" | "Oficial" | "Corregido">("Oficial");

  const [showImporter, setShowImporter] = useState(false);
  const [csvContent, setCsvContent] = useState("");
  const [importNotice, setImportNotice] = useState("");

  // Filtering logic
  const filteredResults = useMemo(() => {
    return resultsList.filter((item) => {
      const matchDorsal = dorsalQuery === "" || item.dorsal.includes(dorsalQuery.trim());
      const matchName = nameQuery === "" || item.nombre.toLowerCase().includes(nameQuery.toLowerCase().trim());
      const matchDistance = distanceFilter === "Todas" || item.distancia === distanceFilter;
      const matchCategory = categoryFilter === "Todas" || item.categoria === categoryFilter;
      const matchGender = genderFilter === "Todos" || item.genero === genderFilter;
      const matchYear = yearFilter === "Todos" || item.ano.toString() === yearFilter;

      return matchDorsal && matchName && matchDistance && matchCategory && matchGender && matchYear;
    });
  }, [resultsList, dorsalQuery, nameQuery, distanceFilter, categoryFilter, genderFilter, yearFilter]);

  const handleSearchDorsal = (val: string) => {
    setDorsalQuery(val);
    if (val.length > 0) {
      trackEvent("search_results", { dorsal: val });
    }
  };

  const handleFilterDistance = (val: string) => {
    setDistanceFilter(val);
    trackEvent("filter_apply", { filter: "distancia", value: val });
  };

  const handleReset = () => {
    setDorsalQuery("");
    setNameQuery("");
    setDistanceFilter("Todas");
    setCategoryFilter("Todas");
    setGenderFilter("Todos");
    setYearFilter("2025");
  };

  // CSV Import function
  const handleImportCSV = () => {
    if (!csvContent.trim()) {
      setImportNotice("Por favor ingresa o pega el contenido en formato CSV.");
      return;
    }

    try {
      // Backup current results for rollback
      setPreviousBackup([...resultsList]);

      const lines = csvContent.trim().split("\n");
      const parsed: ResultItem[] = [];

      lines.forEach((line, idx) => {
        const parts = line.split(",");
        if (parts.length >= 7) {
          parsed.push({
            pos: idx + 1,
            dorsal: parts[0].trim(),
            nombre: parts[1].trim(),
            distancia: parts[2].trim(),
            categoria: parts[3].trim(),
            genero: parts[4].trim() as "M" | "F",
            tiempo: parts[5].trim(),
            tiempoNeto: parts[5].trim(),
            ritmo: parts[6].trim(),
            carrera: "Media Maraton Cd. Arequipa 2026",
            fecha: "09/08/2026",
            ano: 2026,
            equipo: "Importado CSV",
            estado: "Provisional",
            posGenero: idx + 1,
            posCategoria: idx + 1,
          });
        }
      });

      if (parsed.length > 0) {
        setResultsList(parsed);
        setStatusState("Provisional");
        setImportNotice(`Se importaron ${parsed.length} resultados correctamente en estado Provisional.`);
        setShowImporter(false);
        setCsvContent("");
      } else {
        setImportNotice("Formato CSV invalido. Formato esperado: Dorsal,Nombre,Distancia,Categoria,Genero,Tiempo,Ritmo");
      }
    } catch {
      setImportNotice("Error al procesar el archivo CSV.");
    }
  };

  // Rollback function
  const handleRollback = () => {
    if (previousBackup) {
      setResultsList(previousBackup);
      setPreviousBackup(null);
      setStatusState("Oficial");
      alert("Rollback ejecutado correctamente. Se restauraron los datos anteriores.");
    }
  };

  return (
    <section className="w-full bg-[#F4E8D2] py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E6D4B5]" id="resultados-section">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#171717]">
                Resultados
              </h2>
              {/* Status Badge */}
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                statusState === "Proximamente"
                  ? "bg-amber-200 text-amber-900 border border-amber-400"
                  : statusState === "Provisional"
                  ? "bg-blue-100 text-blue-900 border border-blue-400"
                  : "bg-emerald-100 text-emerald-900 border border-emerald-400"
              }`}>
                Estado: {statusState}
              </span>
            </div>
            <p className="text-sm text-neutral-600 font-medium">
              Busca tus resultados oficiales y compara tu rendimiento.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Import Button */}
            <button
              onClick={() => setShowImporter(true)}
              className="px-3.5 py-2 bg-[#171717] hover:bg-neutral-800 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Upload className="w-4 h-4 text-[#F4E8D2]" />
              <span>Importador CSV</span>
            </button>

            {/* Rollback Button if backup exists */}
            {previousBackup && (
              <button
                onClick={handleRollback}
                className="px-3 py-2 bg-[#C04A35] hover:bg-red-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Rollback</span>
              </button>
            )}

            <Link
              href="/resultados/"
              className="px-4 py-2.5 bg-[#6A1838] hover:bg-[#7E1C43] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>Ver Todos Los Resultados</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => alert("Para buscar tu tiempo, ingresa tu numero de dorsal exacto o tu nombre/apellido en el formulario inferior.")}
              className="text-xs font-semibold text-[#6A1838] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Como buscar resultados</span>
            </button>
          </div>
        </div>

        {/* Status Toggle Banner for Pipeline Admin */}
        <div className="bg-white p-3.5 rounded-xl border border-[#E6D4B5] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-bold text-[#171717]">
            <Clock className="w-4 h-4 text-[#6A1838]" />
            <span>Simulador de Estado del Pipeline de Publicacion:</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setStatusState("Proximamente")}
              className={`px-3 py-1 rounded-md font-bold text-[11px] cursor-pointer ${
                statusState === "Proximamente" ? "bg-amber-700 text-white" : "bg-neutral-100 text-neutral-700"
              }`}
            >
              Resultados Proximamente
            </button>

            <button
              onClick={() => setStatusState("Provisional")}
              className={`px-3 py-1 rounded-md font-bold text-[11px] cursor-pointer ${
                statusState === "Provisional" ? "bg-blue-700 text-white" : "bg-neutral-100 text-neutral-700"
              }`}
            >
              Estado Provisional
            </button>

            <button
              onClick={() => setStatusState("Oficial")}
              className={`px-3 py-1 rounded-md font-bold text-[11px] cursor-pointer ${
                statusState === "Oficial" ? "bg-emerald-700 text-white" : "bg-neutral-100 text-neutral-700"
              }`}
            >
              Estado Oficial
            </button>
          </div>
        </div>

        {/* CSV Importer Modal */}
        {showImporter && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 max-w-xl w-full border border-[#E6D4B5] shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <h3 className="font-heading text-lg font-bold text-[#6A1838] uppercase">
                  Importador de Resultados CSV
                </h3>
                <button
                  onClick={() => setShowImporter(false)}
                  className="text-neutral-400 hover:text-neutral-700 font-bold"
                >
                  ✕
                </button>
              </div>

              <p className="text-xs text-neutral-600">
                Pega tus datos en formato CSV (Formato: Dorsal,Nombre,Distancia,Categoria,Genero,Tiempo,Ritmo):
              </p>

              <textarea
                rows={5}
                value={csvContent}
                onChange={(e) => setCsvContent(e.target.value)}
                placeholder={`1001,Juan Perez,21K,18-29 M,M,01:15:30,03:35\n1002,Ana Gomez,21K,18-29 F,F,01:25:40,04:04`}
                className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded-xl font-mono text-xs focus:outline-none focus:ring-2 focus:ring-[#6A1838]"
              />

              {importNotice && (
                <p className="text-xs font-bold text-[#C04A35]">{importNotice}</p>
              )}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setShowImporter(false)}
                  className="px-4 py-2 bg-neutral-200 text-neutral-800 text-xs font-bold uppercase rounded-lg"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleImportCSV}
                  className="px-4 py-2 bg-[#6A1838] text-white text-xs font-bold uppercase rounded-lg"
                >
                  Procesar E Importar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filter Controls Box */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E6D4B5] shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
            <div className="flex items-center gap-2 font-heading text-sm font-bold uppercase text-[#6A1838]">
              <Filter className="w-4 h-4 text-[#C04A35]" />
              <span>Filtros de Busqueda de Corredor</span>
            </div>
            
            {(dorsalQuery || nameQuery || distanceFilter !== "Todas" || categoryFilter !== "Todas" || genderFilter !== "Todos") && (
              <button
                onClick={handleReset}
                className="text-xs text-[#C04A35] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Limpiar filtros</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {/* Input Dorsal */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-neutral-600">Dorsal</label>
              <input
                type="text"
                placeholder="Ej: 1024"
                value={dorsalQuery}
                onChange={(e) => handleSearchDorsal(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#F4E8D2]/40 border border-[#E6D4B5] rounded-lg font-mono font-bold focus:outline-none focus:ring-2 focus:ring-[#6A1838]"
              />
            </div>

            {/* Input Nombre */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-neutral-600">Nombre</label>
              <input
                type="text"
                placeholder="Nombre del corredor"
                value={nameQuery}
                onChange={(e) => setNameQuery(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#F4E8D2]/40 border border-[#E6D4B5] rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#6A1838]"
              />
            </div>

            {/* Select Distancia */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-neutral-600">Distancia</label>
              <select
                value={distanceFilter}
                onChange={(e) => handleFilterDistance(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#F4E8D2]/40 border border-[#E6D4B5] rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#6A1838]"
              >
                <option value="Todas">Todas</option>
                <option value="21K">21K</option>
                <option value="10K">10K</option>
                <option value="5K">5K</option>
              </select>
            </div>

            {/* Select Categoria */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-neutral-600">Categoria</label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#F4E8D2]/40 border border-[#E6D4B5] rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#6A1838]"
              >
                <option value="Todas">Todas</option>
                <option value="18-29 M">18-29 M</option>
                <option value="18-29 F">18-29 F</option>
                <option value="30-39 M">30-39 M</option>
                <option value="30-39 F">30-39 F</option>
                <option value="40-49 M">40-49 M</option>
                <option value="50-59 M">50-59 M</option>
              </select>
            </div>

            {/* Select Genero */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-neutral-600">Genero</label>
              <select
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#F4E8D2]/40 border border-[#E6D4B5] rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#6A1838]"
              >
                <option value="Todos">Todos</option>
                <option value="M">Masculino (M)</option>
                <option value="F">Femenino (F)</option>
              </select>
            </div>

            {/* Select Ano */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase text-neutral-600">Ano</label>
              <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#F4E8D2]/40 border border-[#E6D4B5] rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-[#6A1838]"
              >
                <option value="Todos">Todos</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Table (Desktop) & Cards (Mobile) */}
        <div className="bg-white rounded-2xl border border-[#E6D4B5] shadow-md overflow-hidden">
          <div className="p-4 bg-[#171717] text-white flex items-center justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#F4E8D2]" />
              Resultados ({filteredResults.length} encontrados)
            </span>
            <span className="text-[11px] text-neutral-400">
              Fuente Oficial: Event Sports Peru
            </span>
          </div>

          {statusState === "Proximamente" ? (
            <div className="p-12 text-center space-y-3">
              <Clock className="w-12 h-12 text-amber-600 mx-auto" />
              <h3 className="font-heading text-xl font-bold text-[#171717] uppercase">
                Resultados Proximamente
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto">
                Los resultados oficiales de la Media Maraton se publicaran el domingo 9 de agosto inmediatamente despues de la llegada de los atletas.
              </p>
            </div>
          ) : filteredResults.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <AlertCircle className="w-10 h-10 text-[#C04A35] mx-auto" />
              <p className="font-heading text-lg font-bold text-[#171717]">
                No se encontraron resultados para la busqueda realizada.
              </p>
              <p className="text-sm text-neutral-500">
                Verifica el numero de dorsal o intenta restablecer los filtros.
              </p>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-[#6A1838] text-white text-xs font-bold uppercase rounded-lg"
              >
                Restablecer Filtros
              </button>
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#F4E8D2]/60 text-[11px] font-heading font-bold uppercase text-[#6A1838] border-b border-[#E6D4B5]">
                      <th className="py-3 px-4">POS.</th>
                      <th className="py-3 px-4">DORSAL</th>
                      <th className="py-3 px-4">NOMBRE</th>
                      <th className="py-3 px-4">DISTANCIA</th>
                      <th className="py-3 px-4">CATEGORIA</th>
                      <th className="py-3 px-4">TIEMPO</th>
                      <th className="py-3 px-4">RITMO</th>
                      <th className="py-3 px-4">CARRERA</th>
                      <th className="py-3 px-4">ESTADO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-sm">
                    {filteredResults.map((item) => (
                      <tr 
                        key={item.dorsal + item.carrera} 
                        onClick={() => trackEvent("result_view", { dorsal: item.dorsal, nombre: item.nombre })}
                        className="hover:bg-[#F4E8D2]/20 transition-colors cursor-pointer"
                      >
                        <td className="py-3.5 px-4 font-heading font-bold text-[#171717]">
                          #{item.pos}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#6A1838]">
                          {item.dorsal}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-[#171717]">
                          {item.nombre}
                          <span className="block text-[11px] text-neutral-500 font-normal">{item.equipo}</span>
                        </td>
                        <td className="py-3.5 px-4 font-heading font-extrabold text-[#6A1838]">
                          {item.distancia}
                        </td>
                        <td className="py-3.5 px-4 text-xs font-semibold text-neutral-700">
                          {item.categoria}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-[#171717]">
                          {item.tiempo}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs font-semibold text-[#C04A35]">
                          {item.ritmo} /km
                        </td>
                        <td className="py-3.5 px-4 text-xs text-neutral-600">
                          {item.carrera}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                            statusState === "Provisional"
                              ? "bg-blue-100 text-blue-800 border border-blue-300"
                              : "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          }`}>
                            <CheckCircle2 className="w-3 h-3" />
                            {item.estado}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards View */}
              <div className="md:hidden divide-y divide-neutral-200">
                {filteredResults.map((item) => (
                  <div key={item.dorsal + item.carrera} className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-lg font-bold text-[#171717]">#{item.pos}</span>
                        <span className="font-mono font-bold px-2 py-0.5 bg-[#6A1838] text-white text-xs rounded-md">
                          Dorsal {item.dorsal}
                        </span>
                      </div>
                      <span className="font-heading text-base font-extrabold text-[#6A1838]">{item.distancia}</span>
                    </div>

                    <p className="font-bold text-[#171717]">{item.nombre}</p>
                    <p className="text-xs text-neutral-500">{item.equipo} • {item.categoria}</p>

                    <div className="grid grid-cols-2 gap-2 pt-2 bg-[#F4E8D2]/40 p-2 rounded-lg text-xs">
                      <div>
                        <span className="text-neutral-500 block text-[10px] uppercase">Tiempo Oficial</span>
                        <span className="font-mono font-bold text-[#171717]">{item.tiempo}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block text-[10px] uppercase">Ritmo Promedio</span>
                        <span className="font-mono font-bold text-[#C04A35]">{item.ritmo} /km</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
