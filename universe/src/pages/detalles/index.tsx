import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { productosService } from "../../services/ecommerce/productos.services";

function DetallesPage() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        const fetchProducto = async () => {
            try {
                const data = await productosService.obtenerProductoPorId(
                    Number(id),
                );
                setProducto(data);
            } catch (err) {
                setError("Producto no encontrado");
            }
        };

        fetchProducto();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!producto) return <p>Cargando...</p>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl p-6 max-w-5xl w-full gap-8">
                {/* Imagen */}
                <div className="flex-1 rounded-2xl overflow-hidden">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Información */}
                <div className="flex-1 flex flex-col justify-center gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {producto.nombre}
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        {producto.descripcion}
                    </p>

                    <p className="text-2xl font-semibold text-emerald-600">
                        ${producto.precio}
                    </p>

                    <button className="bg-emerald-600 hover:bg-emerald-700 transition text-white font-medium px-5 py-3 rounded-xl w-fit">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetallesPage;
