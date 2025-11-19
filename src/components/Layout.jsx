import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; // Aquí se cargarán tus páginas (Resumen/Gráficas)

export default function Layout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      
      {/* 1. SIDEBAR FIJO */}
      <Sidebar />

      {/* 2. ÁREA DE CONTENIDO */}
      {/* MarginLeft: 260px para dejar espacio al sidebar fijo */}
      <main style={{ flex: 1, marginLeft: "260px", width: "calc(100% - 260px)" }}>
        <Outlet /> 
      </main>
      
    </div>
  );
}


