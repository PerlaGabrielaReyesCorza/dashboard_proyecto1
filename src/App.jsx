import { useState } from "react";
import Layout from "./components/Layout.jsx";
import Resumen from "./pages/Resumen.jsx";
import Graficas from "./pages/Graficas.jsx";

function App() {
  const [seccionActiva, setSeccionActiva] = useState("resumen");

  const renderContenido = () => {
    if (seccionActiva === "graficas") return <Graficas />;
    return <Resumen />;
  };

  return (
    <Layout
      seccionActiva={seccionActiva}
      onCambiarSeccion={setSeccionActiva}
    >
      {renderContenido()}
    </Layout>
  );
}

export default App;
