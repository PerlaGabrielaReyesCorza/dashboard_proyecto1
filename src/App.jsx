import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Resumen from "./pages/Resumen";
import Graficas from "./pages/Graficas"; // Tu página de gráficas

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* El Layout envuelve todas las rutas */}
        <Route path="/" element={<Layout />}>
          
          {/* Página principal (Resumen) */}
          <Route index element={<Resumen />} />
          
          {/* Página secundaria */}
          <Route path="graficas" element={<Graficas />} />
          
          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;