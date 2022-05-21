import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen }  from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Item({producto}) {
    return(

        <div className="p-6 max-w-xs mx-auto bg-gray-100 rounded-xl shadow-2xl text-center">
            <div className="text-sm font-medium text-black">
                <p className="p-2 ">{producto?.title}</p>  
                <div className="mx-8 my-4 max-h-fit">
                    <img src={producto?.pictureURL} alt={producto?.title}/>
                </div>
                <div>
                <p className="p-2">${producto?.price}</p>
                    <Link to={`/photo/${producto.id}`}>
                        <button className="rounded-md shadow-lg text-emerald-900 p-2 m-5 
                        transition ease-in-out delay-75 bg-slate-50 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-600 hover:text-white duration-300">
                            <FontAwesomeIcon className="px-1" icon={faBookOpen}/>
                            Ver detalle
                        </button>
                    </Link>
                </div>
                <p className="p-1">En stock: {producto?.stock}</p>
            </div>
        </div>

        
    );
}

export default Item;