import { useEffect, useState } from "react";
import { obtenerProductos } from "../../services/ProductoServices";
import CardProducto from "./CardProducto";

export default function CatalogoProductos() {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        async function listar() {
            try {
                const resultado = await obtenerProductos();
                setProductos(resultado);
            } catch (error) {
                setError(error.message);
            } finally {
                setCargando(false);
            }
        }

        listar();
    }, []);

    return (
        <section>
            {cargando && <p>Cargando productos...</p>}
            {error && <p role="alert">{error}</p>}
            {productos.map((e) => (
                <CardProducto
                    key={e.id}
                    id={e.id}
                    category={e.category}
                    name={e.name}
                    stock={e.stock}
                    imageUrl={e.imageUrl}
                    reviews={e.reviews}
                />
            ))}
        </section>
    );
}