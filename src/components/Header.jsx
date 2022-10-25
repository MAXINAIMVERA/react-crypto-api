import React from 'react';
import '../styles/Header.css'
import logo from '../assets/CoinCheckers.png'

const Header = () => {

    return (
        <nav>
            <img src={logo} alt="logo" id='logo'/>
            <div className='nav-menu'>
                <a href="#">Home</a>
                <a href="#">Lorem</a>
                <a href="#">Lorem2</a>
            </div>
        </nav>
    );
} 

export default Header;