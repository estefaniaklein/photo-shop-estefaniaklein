import React, {useEffect, useState} from 'react';
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';
import {getAllItems as getProductos, getCategoryItems as getProductosCategoria, getCategoryName as getNombreCategoria} from '../services/firebase';

function ItemListContainer() {

    const [productosEstado, setProductos] = useState([]);
    const {categoryId} = useParams();
    const [nombreCategoria, setNombreCategoria] = useState();

    useEffect( () => {
        if(!categoryId){
            getProductos().then(respuestaPromesa => {
                setProductos(respuestaPromesa);
            });
        }else{
            getNombreCategoria(categoryId).then(respuestaPromesa => {
                setNombreCategoria(respuestaPromesa);
            });
            
            getProductosCategoria(categoryId).then(respuestaPromesa => {
                setProductos(respuestaPromesa);
            });           
        }
    },[categoryId]);
    
    return (
        <div className="place-items-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
           {categoryId && nombreCategoria && <h1 className="text-3xl font-medium font-sans text-emerald-900 text-center m-10">{nombreCategoria}</h1>}
           {!categoryId && <h1 className="text-3xl font-medium font-sans text-emerald-900 text-center m-10">Photo Shop</h1>}
          
           <ItemList productos={productosEstado}/>
        </div>
    );
}

export default ItemListContainer;