import React, { useState } from 'react';
import './Cart.css';
import CartItem from './CartItem/CartItem';
import RandomCartItem from './RandomCartItem/RandomCartItem';

const Cart = (props) => {
    const { cart, resetCart } = props;

    const [randomCartItem, setRandomCartItem] = useState([]);

    const getRandomCart = () => {
        const randomIndex = Math.floor(Math.random() * cart.length);
        const randomItem = cart[randomIndex];
        setRandomCartItem(randomItem);
    }

    return (
        <div className='cart-container'>
            <h3>Cart Items</h3>
            {
                cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)
            }
            
            {cart.length > 0 &&
                <div className='cart-button-group'>
                <button onClick={getRandomCart}>Choose 1 For Me</button>
                <button onClick={()=>{resetCart()}}>Choose Again</button>
            </div>
            }

            {cart.length > 0 &&
                <RandomCartItem randomCartItem={randomCartItem}></RandomCartItem>
            }
        </div>
    );
};

export default Cart;