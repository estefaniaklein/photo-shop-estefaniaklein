import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen }  from "@fortawesome/free-solid-svg-icons";

function Item({producto}) {
    return(

        <div className="p-6 max-w-xs mx-auto bg-white rounded-xl shadow-lg text-center">
            <div className="text-sm font-medium text-black">
                <p className="p-1 ">{producto?.title}</p>  
                <div className="mx-8 my-4 max-h-fit">
                    <img src={producto?.pictureURL} alt="photo"/>
                </div>
                <p className="p-1">{producto?.price}</p>
                <div className="p-1">
                    <button className="rounded-md shadow-lg bg-slate-50 text-emerald-900 p-2"><FontAwesomeIcon className="px-3" icon={faBookOpen}/>Ver detalle</button>
                </div>
                <p className="p-1 ">En stock: {producto?.stock}</p>
            </div>
        </div>

        
    );
}

export default Item;