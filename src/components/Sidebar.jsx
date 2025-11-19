import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, BarChart3, Globe } from "lucide-react"; // Iconos

export default function Sidebar() {
  // Estilo base de los botones
  const linkClass = "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm mb-2";
  
  // Estilo activo (Tu degradado) vs Inactivo
  const activeStyle = {
    background: "linear-gradient(135deg, #5cc4e7ff 0%, #3096d6ff 100%)", // <--- TU DEGRADADO
    color: "white",
    boxShadow: "0 4px 15px rgba(79, 70, 229, 0.4)" // Resplandor suave
  };

  const inactiveStyle = {
    color: "#94A3B8", // Gris suave
    background: "transparent",
  };

  return (
    <aside style={{ 
        width: "260px", 
        height: "100vh", 
        backgroundColor: "#0F172A", // Fondo Oscuro (Dark Slate)
        display: "flex", 
        flexDirection: "column", 
        padding: "25px",
        position: "fixed", // Se queda fijo al hacer scroll
        left: 0,
        top: 0,
        borderRight: "1px solid #1E293B"
    }}>
      
      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px", paddingLeft: "10px" }}>
        <div style={{ 
            background: "linear-gradient(135deg, #5cc4e7ff 0%, #3096d6ff 100%)", 
            width: "36px", height: "36px", borderRadius: "10px", 
            display: "flex", alignItems: "center", justifyContent: "center" 
        }}>
            <Globe color="white" size={20} />
        </div>
        <h1 style={{ color: "white", fontSize: "1.2rem", fontWeight: "bold", margin: 0, letterSpacing: "-0.5px" }}>
          Happy World
        </h1>
      </div>

      {/* MENÚ DE NAVEGACIÓN */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        {/* Botón Resumen */}
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            textDecoration: "none",
            display: "flex", alignItems: "center", gap: "12px",
            padding: "12px 16px", borderRadius: "12px",
            fontSize: "0.95rem", fontWeight: "500",
            transition: "all 0.3s ease",
            ...(isActive ? activeStyle : inactiveStyle)
          })}
        >
          <LayoutDashboard size={20} />
          <span>Resumen</span>
        </NavLink>

        {/* Botón Gráficas */}
        <NavLink 
          to="/graficas" 
          style={({ isActive }) => ({
            textDecoration: "none",
            display: "flex", alignItems: "center", gap: "12px",
            padding: "12px 16px", borderRadius: "12px",
            fontSize: "0.95rem", fontWeight: "500",
            transition: "all 0.3s ease",
            ...(isActive ? activeStyle : inactiveStyle)
          })}
        >
          <BarChart3 size={20} />
          <span>Gráficas</span>
        </NavLink>

      </nav>

      {/* Footer del Sidebar (Opcional) */}
      <div style={{ marginTop: "auto", padding: "20px 0", borderTop: "1px solid #1E293B" }}>
        <p style={{ color: "#64748B", fontSize: "0.75rem", textAlign: "center", margin: 0 }}>
          © 2025 Dashboard Project
        </p>
      </div>

    </aside>
  );
}