import React from "react";

export default function Resumen() {
  return (
    <div className="summary-page">
      <h1 className="summary-title">El Pulso de la Felicidad Mundial (2015–2024)</h1>

      <div className="summary-grid">
        {/* Fila de KPIs */}
        <div className="kpi-row">
          <div className="kpi-card kpi-card-main">
            <div className="kpi-icon">X</div>
            <div className="kpi-text">
              <p className="kpi-label">Promedio global de felicidad</p>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon">X</div>
            <div className="kpi-text">
              <p className="kpi-label">PIB per cápita promedio (USD)</p>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon">X</div>
            <div className="kpi-text">
              <p className="kpi-label">Promedio global de apoyo social</p>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="map-card">
          <div className="map-placeholder">
            Mapa del mundo (placeholder)
          </div>
        </div>

        {/* Donut + tabla + slider */}
        <div className="donut-card">
          <h3 className="donut-title">Porcentaje de felicidad por continente.</h3>

          <div className="donut-chart-wrapper">
            <div className="donut-circle">
              <div className="donut-inner">
                <span className="donut-value">6.2</span>
                <span className="donut-label">Promedio global</span>
              </div>
            </div>

            <div className="donut-legend">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Continentes</th>
                    <th>Porcentaje</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>•</td>
                    <td>Europa y África</td>
                    <td>50%</td>
                  </tr>
                  <tr>
                    <td>•</td>
                    <td>América del norte y Oceanía</td>
                    <td>40%</td>
                  </tr>
                  <tr>
                    <td>•</td>
                    <td>Sudamérica y Asia</td>
                    <td>10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="donut-range">
            <div className="donut-range-header">
              <span>Rango de fechas</span>
              <span>2015</span>
              <span>2020</span>
              <span>2024</span>
            </div>
            <div className="donut-slider">
              <div className="donut-slider-track" />
              <div className="donut-slider-thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
