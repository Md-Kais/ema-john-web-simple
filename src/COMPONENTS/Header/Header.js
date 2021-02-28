import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""></img>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order History</a>
                <a href="/manage">Manage Preview</a>
            </nav>
        </div>
    );
};

export default Header;