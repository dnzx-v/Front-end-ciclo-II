import { useEffect, useState } from "react";
import TarjetaDestino from "../components/TarjetaDestino";
import { listarDestinos } from "../services/destinoService";

function Destinos() {
  const [destinos, setDestinos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    listarDestinos()
      .then(setDestinos)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section>
      <p className="eyebrow">Guía de viajes</p>
      <h1>Destinos turísticos</h1>
      {error && <p className="error">{error}</p>}
      <div className="cuadricula">
        {destinos.map((destino) => (
          <TarjetaDestino key={destino.id} destino={destino} />
        ))}
      </div>
    </section>
  );
}

export default Destinos;
