import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function LayoutPrincipal() {
  return (
    <div className="sitio">
      <Header />
      <main className="contenido">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LayoutPrincipal;
