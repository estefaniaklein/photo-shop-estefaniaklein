import React, {useEffect, useState} from 'react';
import productosDB from '../../data/productosDB';
import ItemDetail from './ItemDetail';


function getProducto(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(productosDB);
        }, 2000);
    });
}

function ItemDetailContainer({id}) {

    const [producto, setProducto] = useState([]);

    useEffect( () => {
        getProducto().then(respuestaPromesa => {
            setProducto(respuestaPromesa[id]);
        });
    },[]);

    return (
        <div className="container max-w-full mx-auto h-screen py-6 px-4 sm:px-6 lg:px-8">
          <ItemDetail producto={producto}/>
        </div>
    );
}

export default ItemDetailContainer;