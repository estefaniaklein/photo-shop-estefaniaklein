import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
//import productosDB from '../../data/productosDB';
import ItemDetail from './ItemDetail';
import {getItemById as getProducto} from '../../data/firebase';

// function getProducto(id){
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             const productoFound = productosDB.find( (item) => {
//                 return item.id === parseInt(id);
//             })
//             resolve(productoFound);
//         }, 1000);
//     });
// }

function ItemDetailContainer() {

    const [producto, setProducto] = useState();

    const {photoId} = useParams();

    useEffect( () => {
        getProducto(photoId).then(respuestaPromesa => {
            setProducto(respuestaPromesa);
        });
    },[photoId])

    return (
        <div className="container w-3/4 mx-auto h-screen py-6 px-4 sm:px-6 lg:px-8">
          <ItemDetail producto={producto}/>
        </div>
    );
}

export default ItemDetailContainer;