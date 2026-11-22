import { Link } from "react-router-dom";

function NoEncontrada() {
  return (
    <section className="no-encontrada">
      <p className="eyebrow">Error 404</p>
      <h1>Página no encontrada</h1>
      <p>La ruta que buscaste no existe.</p>
      <Link className="boton" to="/">Volver al inicio</Link>
    </section>
  );
}

export default NoEncontrada;
