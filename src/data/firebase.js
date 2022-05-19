import { initializeApp } from "firebase/app";
import {getFirestore, doc, getDoc, query, where, collection, getDocs, addDoc, Timestamp} from 'firebase/firestore/lite'
// import { useState } from "react";
// import useCartContext from "../../store/CartContext";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNner0PM2rD1uCAc9pPeZeqXzD3gc1cto",
  authDomain: "photo-shop-estefania.firebaseapp.com",
  projectId: "photo-shop-estefania",
  storageBucket: "photo-shop-estefania.appspot.com",
  messagingSenderId: "339931737895",
  appId: "1:339931737895:web:1a9189c00db0aed7324302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);



export default firestoreDB;

export async function getAllItems(){
    const miColeccion = collection(firestoreDB, 'productos');

    const productosSnapshot = await getDocs(miColeccion);

    return productosSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getCategoryItems(categoryId){
    const miColeccion = collection(firestoreDB, 'productos');

    const queryCategory = query(miColeccion, where("category", "==", categoryId));

    const productosSnapshot = await getDocs(queryCategory);

    return productosSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItemById(itemId){
    const miColeccion = collection(firestoreDB, 'productos');

    const productoRef = doc(miColeccion, itemId);

    const productoSnapshot = await getDoc(productoRef);

    return{
        ...productoSnapshot.data(),
        id: productoSnapshot.id
    }
}

export async function sendOrder(orden){    
    
    const miColeccion = collection(firestoreDB, 'ordenes');

    const fechaOrden = Timestamp.now();
    const ordenHoy = {
        ...orden,
        date: fechaOrden
    }

    const order = await addDoc(miColeccion, ordenHoy);

    return order.id;
 
}