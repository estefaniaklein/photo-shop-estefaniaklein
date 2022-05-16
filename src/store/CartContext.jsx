import {createContext, useContext, useState} from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({children}) {

    const [carrito, setCarrito] = useState([]);
    
    const addProductToCart = (producto, cantidad) => {
       
        if(!isInCart(producto.id))
        {
            const nuevoProducto = {...producto, cantidad};
            setCarrito([...carrito, nuevoProducto]);
                  
        }else{
            
            const nuevoCarrito = carrito.map( item => {
                if((item.id === producto.id) && ((item.cantidad + cantidad) <= producto.stock)){
                    item.cantidad += cantidad;
                    return item;
                }else{
                    return item;
                }
            })
            setCarrito(nuevoCarrito);
        }
    }

    const removeProductFromCart = (id) => {
        const nuevoCarrito = [...carrito];
        const filtroCarrito = nuevoCarrito.filter( producto => {
            return producto.id !== id;
        })
        setCarrito(filtroCarrito);
    }

    const clearCart = () => {
        setCarrito([]);
    }

    const isInCart = (id) => {
        return carrito.some(producto => producto.id === id);
    }

    const itemsInCart = () => {
        let cantidad = 0;

        carrito.forEach(producto => {
            cantidad += producto.cantidad;
        });

        return cantidad;
    }

    const saleTotalPrice = () => {
        let total = 0;

        carrito.forEach(producto => {
            total += (producto.cantidad * producto.price);
        });

        return total;
    }

    return (
        <CartContext.Provider value={{carrito, addProductToCart, removeProductFromCart, clearCart, itemsInCart, saleTotalPrice, isInCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default useCartContext;