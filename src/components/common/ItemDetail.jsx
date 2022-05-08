import { faCartPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import useCartContext from "../../store/CartContext";

function ItemDetail({producto}) {

    const [enCarrito, setEnCarrito] = useState(false);
    const [cantidadProducto, setCantidadProducto] = useState(0);
    const {addProductToCart, removeProductFromCart} = useCartContext();

    function onAdd(cantidad){
        setCantidadProducto(cantidad);
        setEnCarrito(true);
        addProductToCart(producto,cantidad);
    }

    function removeProduct(){
        removeProductFromCart(producto.id);
    }

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

                    <Link to={`/cart`}>  
                        <button className="text-center rounded-md shadow-lg text-red-900 p-2 m-5 
                        transition ease-in-out delay-75 bg-slate-50 
                        hover:-translate-y-1 hover:scale-110 hover:bg-red-900 hover:text-white duration-300"
                        onClick={removeProduct}><FontAwesomeIcon className="px-2" icon={faTrashCan}/>Eliminar del carrito</button>
                    </Link>

                    {enCarrito ?
                        <Link to={`/cart`}>    
                            <button className="rounded-md shadow-lg text-xs text-teal-800 p-2 m-5 
                            transition ease-in-out delay-7 bg-white hover:-translate-y-1 hover:scale-110 hover:text-white hover:bg-teal-800 duration-300">
                                <FontAwesomeIcon className="px-2" icon={faCartPlus}/>
                                Terminar la compra de <b>{cantidadProducto}</b> fotos <b>{producto.title}</b>
                            </button>
                        </Link>
                     :                      
                        <ItemCount onAdd={onAdd} stock={producto?.stock} minimo={1}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;