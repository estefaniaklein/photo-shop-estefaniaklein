import { faHome, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useCartContext from "../../store/CartContext";


function CartView() {
    const {clearCart, removeProductFromCart, itemsInCart, saleTotalPrice, carrito} = useCartContext();

    if(carrito.length === 0){
        return(
        <div className="text-center">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white text-center py-4">No hay productos en el carrito</h5>                 
            <Link to={`/`}>    
                <button className="rounded-md shadow-lg text-xs text-white p-2 m-5 
                transition ease-in-out delay-7 bg-teal-800 hover:-translate-y-1 hover:scale-110 hover:text-teal-800 hover:bg-white duration-300">
                    <FontAwesomeIcon className="px-2" icon={faHome}/>
                    Volver al catálogo
                </button>
            </Link>
        </div>
        );
    }else{
        return( 
            <div className="grid justify-items-center">  
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white text-center py-4">Tu Carrito</h5>                 
                <div className="w-6/12 bg-white rounded-lg border shadow-md sm:p-4 dark:bg-gray-800 dark:border-gray-700">                    
                    <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                        {carrito.map( producto => {
                            return(
                       
                                <li key={producto.id} className="py-3 sm:py-4">
                                    <div className="flex justify-center space-x-8">
                                        <div className="flex-shrink-0">
                                            <img className="w-20 h-20 rounded-full" src={producto.pictureURL} alt="Neil image"/>
                                        </div>
                                         <div className="inline-flex items-center">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white m-2">
                                                {producto.title}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400 m-2">
                                                Cantidad: {producto.cantidad}
                                            </p>
                                            <p className="text-base font-semibold text-gray-900 dark:text-white">
                                                ${producto.price * producto.cantidad}
                                            </p>
                                        </div>
                                        <button className="text-center rounded-md shadow-lg text-red-900 text-sm p-2 m-5 
                                            transition ease-in-out delay-75 bg-slate-50 
                                            hover:-translate-y-1 hover:scale-110 hover:bg-red-900 hover:text-white duration-300"
                                            onClick={() => removeProductFromCart(producto.id)}><FontAwesomeIcon className="px-2" icon={faTrashCan}/></button>
                                    </div>
                                </li>
                                
                            )
                        })}
                        </ul>
                    </div>
                </div>
                <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white text-center py-4">Cantidad de items en el carrito: {itemsInCart()} </h2>
                
                <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white text-center py-4">Costo Total: ${saleTotalPrice()} </h2>
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
}

export default CartView;