import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useCartContext from "../../store/CartContext";


function Cart() {
    const {clearCart, removeProductFromCart, cantidadEnCarrito, costoTotalCompra, carrito} = useCartContext();
    
    return (
        <div className="text-center">
            <h1 className="text-3xl font-medium font-sans text-emerald-900 text-center m-10">Tu Carrito</h1>
            <h2 className="text-3xl font-normal font-sans text-black text-center m-10">Cantidad de items en el carrito: {cantidadEnCarrito()} </h2>
            <h2 className="text-3xl font-normal font-sans text-black text-center m-10">Costo Total: ${costoTotalCompra()} </h2>
            <button className="text-center rounded-md shadow-lg text-red-900 p-2 m-5 
                transition ease-in-out delay-75 bg-slate-50 
                hover:-translate-y-1 hover:scale-110 hover:bg-red-900 hover:text-white duration-300"
                onClick={clearCart}>
                <FontAwesomeIcon className="px-1" icon={faTrash}/>
                Limpiar Carrito
            </button>
        </div>
    );
}

export default Cart;