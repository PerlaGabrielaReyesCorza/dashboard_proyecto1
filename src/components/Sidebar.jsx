import React from "react";

export default function Sidebar({ seccionActiva, onCambiarSeccion }) {
  const botonClase = (clave) =>
    "sidebar-btn" + (seccionActiva === clave ? " active" : "");

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo-icon">HW</div>
        <div className="sidebar-logo-text">Happy World</div>
      </div>

      <nav className="sidebar-nav">
        <button
          className={botonClase("resumen")}
          onClick={() => onCambiarSeccion("resumen")}
        >
          Resumen
        </button>
        <button
          className={botonClase("graficas")}
          onClick={() => onCambiarSeccion("graficas")}
        >
          Gráficas
        </button>
      </nav>
    </aside>
  );
}
