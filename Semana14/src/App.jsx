import { Route, Routes } from "react-router-dom";
import LayoutPrincipal from "./components/LayoutPrincipal";
import Inicio from "./pages/Inicio";
import Destinos from "./pages/Destinos";
import DetalleDestino from "./pages/DetalleDestino";
import Nosotros from "./pages/Nosotros";
import NoEncontrada from "./pages/NoEncontrada";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutPrincipal />}>
        <Route index element={<Inicio />} />
        <Route path="destinos" element={<Destinos />} />
        <Route path="destinos/:id" element={<DetalleDestino />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  );
}

export default App;
