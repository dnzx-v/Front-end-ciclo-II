import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { obtenerDestino } from "../services/destinoService";

function DetalleDestino() {
  const { id } = useParams();
  const [destino, setDestino] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setDestino(null);
    setError("");
    setCargando(true);
    obtenerDestino(id)
      .then(setDestino)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (cargando) return <p>Cargando destino...</p>;
  if (!destino) return (
    <section className="no-encontrada">
      <p className="eyebrow">Error 404</p>
      <h1>Destino no encontrado</h1>
      <Link className="boton" to="/destinos">Volver a destinos</Link>
    </section>
  );

  return (
    <article className="detalle">
      <img src={destino.imagen} alt={destino.nombre} />
      <div className="detalle-info">
        <span className="categoria">{destino.categoria}</span>
        <h1>{destino.nombre}</h1>
        <p className="ubicacion">{destino.ciudad}, {destino.region}</p>
        <p>{destino.descripcion}</p>
        <dl>
          <div><dt>Entrada</dt><dd>S/ {destino.precioEntrada}</dd></div>
          <div><dt>Duración</dt><dd>{destino.duracionVisita}</dd></div>
        </dl>
        <Link className="boton secundario" to="/destinos">Volver a destinos</Link>
      </div>
    </article>
  );
}

export default DetalleDestino;
