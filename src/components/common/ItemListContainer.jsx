import React, {useEffect, useState} from 'react';
import productosDB from '../../data/productosDB';
import ItemList from './ItemList';


function getProductos(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productosDB);
        }, 2000);
    });
}

function ItemListContainer({greeting}) {

    const [productosEstado, setProductos] = useState([]);

    useEffect( () => {
        getProductos().then(respuestaPromesa => {
            setProductos(respuestaPromesa);
        });
    },[]);

    return (
        <div className="place-items-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
           <h1 className="text-3xl font-medium font-sans text-emerald-900 text-center m-10">{greeting}</h1>
           <ItemList productos={productosEstado}/>
        </div>
    );
}

export default ItemListContainer;