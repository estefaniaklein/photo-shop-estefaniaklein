import React from 'react';
import './NavBar.css';
import imgLogo from '../../assets/logo/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="bg-emerald-500">           
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <img width="50px" src={imgLogo} alt="Logo Tienda" className="h-8 w-8"/>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                
                                <a href="/" className="text-white hover:bg-emerald-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="/" className="text-white hover:bg-emerald-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Photos</a>
                                <a href="/" className="text-white hover:bg-emerald-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
                            </div>
                        </div>
                   
                    <a><CartWidget/></a>
                </div>
            </div>           
        </nav>
    );
}

export default NavBar;