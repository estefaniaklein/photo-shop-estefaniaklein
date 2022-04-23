import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function ItemCount({stock, minimo}) {

    const [count, setCount] = useState(minimo);

    function handleSuma(){
        {
            count < stock && setCount(count + 1);
        }
    }

    function handleResta(){
        {
            count > minimo && setCount(count - 1);
        }
    }

    function handleAgregarAlCarrito(){
        alert('Has agregado ' + count + ' items al carrito');
    }

    return (
        <div>ItemCount
            <div>
                <button onClick={handleResta}>-</button>
                <span> {count} </span>
                <button onClick={handleSuma}>+</button>
            </div>
            <div>
                <button onClick={handleAgregarAlCarrito}>Agregar a mi carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;