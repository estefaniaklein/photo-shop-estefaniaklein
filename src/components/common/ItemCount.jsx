import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus }  from "@fortawesome/free-solid-svg-icons";

function ItemCount({stock, minimo, onAdd}) {

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

    return (
        
        <div className="p-6 max-w-sm mx-auto bg-white text-center">
            <div className="font-normal text-base text-white">        
                <div className="bg-teal-600 rounded-full shadow-md space-x-3 my-5 font-normal">
                        <button onClick={handleResta}>-</button>
                        <span className="font-bold"> {count} </span>
                        <button onClick={handleSuma}>+</button>
                </div>
                <div>
                    <button onClick={() => onAdd(count)} className="rounded-md shadow-lg text-xs text-teal-900 p-2 m-5 
                        transition ease-in-out delay-75 bg-slate-50 hover:-translate-y-1 hover:scale-110 hover:bg-lime-600 hover:text-white duration-300">
                            <FontAwesomeIcon className="px-2" icon={faCartPlus}/>
                             Agregar a mi carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;