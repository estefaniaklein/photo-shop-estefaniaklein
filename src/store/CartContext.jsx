import {createContext, useContext, useState} from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({children}) {

    const [carrito, setCarrito] = useState([]);
    // let [cantItemsEnCarrito, setCantItemsEnCarrito] = useState(0);
    // let [costoTotal, setCostoTotal] = useState(0);
    
    const addProductToCart = (producto, cantidad) => {
       
        if(!isInCart(producto.id))
        {
            const nuevoProducto = {...producto, cantidad};
            setCarrito([...carrito, nuevoProducto]);

            // setCantItemsEnCarrito(cantItemsEnCarrito += cantidad);
            // setCostoTotal(costoTotal += (producto.price * cantidad));
                  
        }else{
            
            const nuevoCarrito = carrito.map( item => {
                if((item.id === producto.id) && ((item.cantidad + cantidad) <= producto.stock)){
                    item.cantidad += cantidad;
                    // setCantItemsEnCarrito(cantItemsEnCarrito += cantidad);
                    // setCostoTotal(costoTotal += (producto.price * cantidad));
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
            // if(producto.id === id){               
            //     setCantItemsEnCarrito(cantItemsEnCarrito -= producto.cantidad);   
            //     setCostoTotal(costoTotal -= (producto.price * producto.cantidad));   
            // }
            return producto.id !== id;
        })
        setCarrito(filtroCarrito);
    }

    const clearCart = () => {
        setCarrito([]);
        // setCantItemsEnCarrito(0);
        // setCostoTotal(0);
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