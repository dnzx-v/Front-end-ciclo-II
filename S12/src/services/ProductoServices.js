const URL_API = "https://dummyjson.com/products";

export async function obtenerProductos() {
    const response = await fetch(URL_API);
    if (!response.ok) {
        throw new Error("Error al obtener los productos");
    }

    const data = await response.json();
    if (!Array.isArray(data.products)) {
        throw new Error("La respuesta de productos no tiene un formato válido");
    }

    return data.products.map((producto) => ({
        id: producto.id,
        category: producto.category,
        name: producto.title,
        stock: producto.stock,
        imageUrl: producto.thumbnail,
        reviews: Array.isArray(producto.reviews) ? producto.reviews : []
    }));
}
