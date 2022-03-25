import React, { useState } from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import RandomCartItem from './RandomCartItem/RandomCartItem';

const Cart = (props) => {
    const { cart } = props;

    const [randomCartItem, setRandomCartItem] = useState([]);

    const getRandomCart = () => {
        const randomIndex = Math.floor(Math.random() * cart.length);
        const randomItem = cart[randomIndex];
        setRandomCartItem(randomItem);
    }

    return (
        <div className='cart-container'>
            {
                cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)
            }
            <div className='cart-button-group'>
                <button onClick={getRandomCart}>Choose 1 For Me</button>
                <button>Choose Again</button>
            </div>
            {
                <RandomCartItem randomCartItem={randomCartItem}></RandomCartItem>
            }
        </div>
    );
};

export default Cart;