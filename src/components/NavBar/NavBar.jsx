import React from 'react';
import './NavBar.css';
import imgLogo from '../../assets/logo/logo.png';

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
            </ul>
        </nav>
    );
}

export default NavBar;