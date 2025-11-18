import React from "react";
import Sidebar from "./Sidebar.jsx";

export default function Layout({ children, seccionActiva, onCambiarSeccion }) {
  return (
    <div className="app-layout">
      <Sidebar
        seccionActiva={seccionActiva}
        onCambiarSeccion={onCambiarSeccion}
      />

      <main className="dashboard-main">
        {children}
      </main>
    </div>
  );
}


