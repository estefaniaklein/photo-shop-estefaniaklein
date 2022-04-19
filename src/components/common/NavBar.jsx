import React from 'react';
import './NavBar.css';
import imgLogo from '../../assets/logo/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav>           
            <ul className='nav'>               
                <img width="50px" src={imgLogo} alt="Logo Tienda"/>
                <li>
                    <a href="/">About</a>
                    <a href="/">Photos</a>
                    <a href="/">FAQ</a>
                </li>
                <a><CartWidget/></a>
            </ul>
        </nav>
    );
}

export default NavBar;