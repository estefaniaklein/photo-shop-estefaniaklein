import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import {getItemById as getProducto} from '../services/firebase';

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