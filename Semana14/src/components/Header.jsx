import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-contenido">
        <NavLink className="logo" to="/" end>
          Viaja<span>Perú</span>
        </NavLink>
        <nav className="menu" aria-label="Navegación principal">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/destinos">Destinos</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
