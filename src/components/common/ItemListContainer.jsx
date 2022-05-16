import React, {useEffect, useState} from 'react';
import productosDB from '../../data/productosDB';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function getProductos(categoryId){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if(categoryId){
                const filtro = productosDB.filter((producto) => {
                   return producto.category === categoryId;  
                });
                resolve(filtro);
            }else{
                resolve(productosDB);
            }
        });
    });
}

function ItemListContainer() {

    const [productosEstado, setProductos] = useState([]);
    const {categoryId} = useParams();

    useEffect( () => {
        getProductos(categoryId).then(respuestaPromesa => {
            setProductos(respuestaPromesa);
        });
    },[categoryId]);

    return (
        <div className="place-items-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
           {categoryId && <h1 className="text-3xl font-medium font-sans text-emerald-900 text-center m-10">{categoryId}</h1>}
           {!categoryId && <h1 className="text-3xl font-medium font-sans text-emerald-900 text-center m-10">Photo Shop</h1>}
           <ItemList productos={productosEstado}/>
        </div>
    );
}

export default ItemListContainer;