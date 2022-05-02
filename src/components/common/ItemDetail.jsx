import ItemCount from "./ItemCount";

function ItemDetail({producto}) {
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
                    <p className="p-1 font-bold">{producto?.price}</p> 
                    En stock: <p className="p-1 font-bold">{producto?.stock}</p> 
                                    
                    <ItemCount stock={producto?.stock} minimo={1}/>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;