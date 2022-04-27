
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
    return (
        <FontAwesomeIcon className="text-white px-3 py-2" icon={ faCartShopping }/> 
    );
}

export default CartWidget;