
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import useCartContext from "../store/CartContext";

function CartWidget() {

    const {itemsInCart}=useCartContext();

    return (
        <>
            {itemsInCart() > 0 ? 
            
                <span className="relative inline-block">
                    <h1><FontAwesomeIcon className="text-white px-1" icon={ faCartShopping }/></h1>
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-emerald-900 transform translate-x-1/2 -translate-y-1/2 bg-yellow-200 rounded-full">{itemsInCart()}</span>
                </span>
                :
                <FontAwesomeIcon className="text-white px-3 py-2" icon={ faCartShopping }/> 
            }
        </>
    );
}

export default CartWidget;