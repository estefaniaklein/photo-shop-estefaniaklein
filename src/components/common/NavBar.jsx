import React, { useContext } from 'react';
import imgLogo from '../../assets/logo/photo_shop_logo.jpg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {

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
                
                                <Link to="/category/Paisajes" className="text-white hover:bg-yellow-200 hover:text-teal-900 px-3 py-2 rounded-sm text-sm font-medium">Paisajes</Link>
                                <Link to="/category/Viajes" className="text-white hover:bg-yellow-200 hover:text-teal-900 px-3 py-2 rounded-sm text-sm font-medium">Viajes</Link>
                                <Link to="/category/Gourmet" className="text-white hover:bg-yellow-200 hover:text-teal-900 px-3 py-2 rounded-sm text-sm font-medium">Gourmet</Link>
                            </div>
                        </div>
                   
                    <Link to="/cart"><CartWidget/></Link>
                </div>
            </div>           
        </nav>
    );
}

export default NavBar;