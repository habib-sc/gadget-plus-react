import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div>
                    <h4>Gadget Plus</h4>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;