import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TarjetaDestino from "../components/TarjetaDestino";
import { listarDestacados } from "../services/destinoService";

function Inicio() {
  const [destinos, setDestinos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    listarDestacados()
      .then(setDestinos)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">Descubre el Perú</p>
          <h1>Tu próxima aventura comienza aquí</h1>
          <p>Conoce paisajes, historias y culturas inolvidables.</p>
          <Link className="boton" to="/destinos">Explorar destinos</Link>
        </div>
      </section>

      <section>
        <h2>Destinos destacados</h2>
        {error && <p className="error">{error}</p>}
        <div className="cuadricula">
          {destinos.map((destino) => (
            <TarjetaDestino key={destino.id} destino={destino} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;
