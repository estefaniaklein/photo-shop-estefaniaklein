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
        
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg text-center">
            <div className="text-xl font-medium text-black">ItemCount        
                <div className="bg-emerald-500 rounded-full shadow-md space-x-3 my-5">
                        <button onClick={handleResta}>-</button>
                        <span> {count} </span>
                        <button onClick={handleSuma}>+</button>
                </div>
                <div>
                    <button className="rounded-md shadow-lg bg-slate-50 text-emerald-900 p-2" onClick={handleAgregarAlCarrito}>Agregar a mi carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;