import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag }  from "@fortawesome/free-solid-svg-icons";

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
        
        <div className="p-6 max-w-sm mx-auto bg-white text-center">
            <div className="font-normal text-base text-white">        
                <div className="bg-teal-600 rounded-full shadow-md space-x-3 my-5 font-normal">
                        <button onClick={handleResta}>-</button>
                        <span className="font-bold"> {count} </span>
                        <button onClick={handleSuma}>+</button>
                </div>
                <div>
                    <button className="rounded-md shadow-lg text-teal-900 p-2 m-5 
                        transition ease-in-out delay-75 bg-slate-50 hover:-translate-y-1 hover:scale-110 hover:bg-lime-600 hover:text-white duration-300" onClick={handleAgregarAlCarrito}>
                            <FontAwesomeIcon className="px-2" icon={faShoppingBag}/>
                             Agregar a mi carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;