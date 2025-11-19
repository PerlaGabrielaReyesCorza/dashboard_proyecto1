import React, { useState, useEffect } from "react";

export default function Resumen() {
  // Estado del año seleccionado
  const [year, setYear] = useState(2024);
  
  // Estado unificado para los 3 KPIs
  const [kpis, setKpis] = useState({
    happiness: "...",
    gdp: "...",
    social: "..."
  });

  useEffect(() => {
    const fetchData = async () => {
      // (Opcional) Poner "..." visualmente mientras carga
      // setKpis({ happiness: "...", gdp: "...", social: "..." });

      try {
        // Llamamos al endpoint nuevo que nos devuelve todo junto
        const response = await fetch(`http://localhost:8000/api/kpis/summary?year=${year}`);
        
        if (!response.ok) throw new Error("Error en red");

        const data = await response.json();

        setKpis({
          // Redondeamos a 2 decimales
          happiness: Number(data.happiness).toFixed(2),
          gdp: Number(data.gdp).toFixed(2),
          social: Number(data.social).toFixed(2)
        });

      } catch (error) {
        console.error("Error fetching KPIs:", error);
        setKpis({ happiness: "-", gdp: "-", social: "-" });
      }
    };

    fetchData();
  }, [year]); // Se ejecuta cada vez que mueves el slider

  const handleSliderChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="summary-page">
      <h1 className="summary-title">El Pulso de la Felicidad Mundial (2015–2024)</h1>

      <div className="summary-grid">
        <div className="kpi-row">
          
          {/* --- TARJETA 1: FELICIDAD --- */}
          <div className="kpi-card kpi-card-main">
            <div className="kpi-icon">🌎</div>
            <div className="kpi-text">
              <p className="kpi-value" style={{ fontSize: "2.5rem", fontWeight: "bold", margin: "0" }}>
                {kpis.happiness}
              </p>
              <p className="kpi-label">Promedio global de felicidad ({year})</p>
            </div>
          </div>

          {/* --- TARJETA 2: PIB (LOG GDP) --- */}
          <div className="kpi-card">
            <div className="kpi-icon">💰</div>
            <div className="kpi-text">
              <p className="kpi-value" style={{ fontSize: "2rem", fontWeight: "bold", margin: "0" }}>
                {kpis.gdp}
              </p>
              <p className="kpi-label">PIB per cápita promedio (Log)</p>
            </div>
          </div>

          {/* --- TARJETA 3: APOYO SOCIAL --- */}
          <div className="kpi-card">
            <div className="kpi-icon">🤝</div>
            <div className="kpi-text">
              <p className="kpi-value" style={{ fontSize: "2rem", fontWeight: "bold", margin: "0" }}>
                {kpis.social}
              </p>
              <p className="kpi-label">Promedio global de apoyo social</p>
            </div>
          </div>
        </div>

        {/* MAPA */}
        <div className="map-card">
          <div className="map-placeholder">Mapa del mundo (placeholder)</div>
        </div>

        {/* DONUT + SLIDER */}
        <div className="donut-card">
          <h3 className="donut-title">Porcentaje de felicidad por continente.</h3>
          
          {/* Gráfica Donut (Estática por ahora) */}
          <div className="donut-chart-wrapper">
             <div className="donut-circle">
                <div className="donut-inner">
                  <span className="donut-value">6.2</span>
                  <span className="donut-label">Global</span>
                </div>
             </div>
             <div className="donut-legend">
              {/* ... (Tu tabla de leyenda) ... */}
               <table>
                <thead>
                  <tr><th>#</th><th>Continentes</th><th>Porcentaje</th></tr>
                </thead>
                <tbody>
                  <tr><td>•</td><td>Europa y África</td><td>50%</td></tr>
                  <tr><td>•</td><td>América y Oceanía</td><td>40%</td></tr>
                  <tr><td>•</td><td>Asia</td><td>10%</td></tr>
                </tbody>
              </table>
             </div>
          </div>

          {/* Slider Funcional */}
          <div className="donut-range">
            <div className="donut-range-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>Año seleccionado: <strong>{year}</strong></span>
            </div>
            <div className="donut-slider" style={{ display: 'flex', alignItems: 'center' }}>
               <span style={{ marginRight: '10px', fontSize: '0.8rem' }}>2015</span>
               <input 
                 type="range" min="2015" max="2024" step="1" 
                 value={year} onChange={handleSliderChange}
                 style={{ width: "100%", cursor: "pointer" }}
               />
               <span style={{ marginLeft: '10px', fontSize: '0.8rem' }}>2024</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}