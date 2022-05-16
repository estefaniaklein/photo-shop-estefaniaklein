import { faArrowLeftLong, faArrowLeftRotate, faHome, faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import useCartContext from "../../store/CartContext";

function ItemDetail({producto}) {

    
    const [cantidadProducto, setCantidadProducto] = useState(0);
    const {addProductToCart, isInCart} = useCartContext();

    function onAdd(cantidad){
        setCantidadProducto(cantidad);
        addProductToCart(producto,cantidad);
    }

    if(!producto){
        
        return  <div className="text-center">
                    <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg  hover:bg-gray-100 hover:text-emerald-700 focus:z-10 focus:ring-2 focus:ring-emerald-700 focus:text-emerald-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                    <svg role="status" className="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                    </svg>
                    Cargando...
                </button>
                </div>
    }else{
        return(
            <div className="flex flex-row justify-evenly items-center bg-white rounded-xl shadow-lg">
                <div className="basis-1/4 mx-8 my-4 max-h-fit">
                <img className="rounded-md shadow-2xl" src={producto?.pictureURL} alt="photo"/>
                </div>
                <div className="basis-1/4 text-center">
                    <div>
                        <br/>
                        <p className="p-1 text-lg text-emerald-900 font-bold">{producto?.title}</p> 
                        <br/>
                        <p className="p-1 ">{producto?.description}</p>
                        
                        <hr/>
                        <br/>
                        <p className="p-1 font-bold">${producto?.price}</p> 
                        En stock: <p className="p-1 font-bold">{producto?.stock}</p> 

                        {isInCart(producto.id) ?
                            <Link to={`/cart`}>    
                                <button className="rounded-md shadow-lg text-xs text-teal-800 p-2 m-5 
                                transition ease-in-out delay-7 bg-white hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-teal-800 duration-300">
                                    <FontAwesomeIcon className="px-2" icon={faShoppingBag}/>
                                    Terminar la compra
                                </button>
                            </Link>
                        :                      
                            <ItemCount onAdd={onAdd} stock={producto?.stock} minimo={1}/>
                        }

                        <Link to={`/`}>    
                            <button className="rounded-md shadow-lg text-xs text-white p-2 m-5 
                            transition ease-in-out delay-7 bg-teal-800 hover:-translate-y-1 hover:scale-110 hover:text-teal-800 hover:bg-white duration-300">
                                <FontAwesomeIcon className="px-2" icon={faHome}/>
                                Volver al catálogo
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetail;