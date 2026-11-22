import { Link } from "react-router-dom";

function TarjetaDestino({ destino }) {
  return (
    <article className="tarjeta">
      <img src={destino.imagen} alt={destino.nombre} />
      <div className="tarjeta-cuerpo">
        <span className="categoria">{destino.categoria}</span>
        <h3>{destino.nombre}</h3>
        <p>{destino.ciudad}</p>
        <Link className="boton" to={`/destinos/${destino.id}`}>
          Ver destino
        </Link>
      </div>
    </article>
  );
}

export default TarjetaDestino;
