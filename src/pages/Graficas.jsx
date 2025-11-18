import React from "react";

export default function Graficas() {
  return (
    <div className="charts-page">
      <h1 className="charts-title">
        Gráficas del promedio global de felicidad (2015–2024)
      </h1>

      <div className="chart-card">
        <h3>Evolución del promedio global de felicidad (2015–2024)</h3>
        <div className="chart-placeholder line-chart">
          Aquí irá la gráfica de líneas (placeholder).
        </div>
      </div>

      <div className="chart-card">
        <h3>Relación entre el PIB per cápita y el índice de felicidad</h3>
        <div className="chart-placeholder scatter-chart">
          Aquí irá el diagrama de dispersión (placeholder).
        </div>
      </div>
    </div>
  );
}
