import imgLogo from '../assets/logo/photo_shop_logo.jpg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {getCategories} from '../services/firebase';
import { useState, useEffect } from 'react';

function NavBar() {

    const [categorias, setCategorias] = useState();

    useEffect( () => {
        getCategories().then(respuestaPromesa => {
            setCategorias(respuestaPromesa);
        }); 
    },[]);

    return (
        <nav className="bg-teal-600">           
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex-shrink-0">
                            <img src={imgLogo} alt="Logo Tienda" className="h-10"/>
                            <p className="text-white text-xs">Photo Shop</p>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" className="text-white hover:bg-yellow-200 hover:text-teal-900 px-3 py-2 rounded-sm text-sm font-medium"><FontAwesomeIcon icon={faHome}/></Link>
                                
                                {categorias && categorias.map( (item) =>  <Link key={item.id} to={`/category/${item.id}`} className="text-white hover:bg-yellow-200 hover:text-teal-900 px-3 py-2 rounded-sm text-sm font-medium">{item.nombre}</Link>)}
                            </div>
                        </div>
                   
                    <Link to="/cart"><CartWidget/></Link>
                </div>
            </div>           
        </nav>
    );
}

export default NavBar;