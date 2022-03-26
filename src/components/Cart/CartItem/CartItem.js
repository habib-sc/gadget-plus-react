import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    const { deleteCartItem } = props;
    const { name, image } = props.cartItem;
    return (
        <div className='cart-item'>
            <img src={image} alt="img" />
            <h4>{name}</h4>
            <button onClick={()=>{deleteCartItem(props.cartItem)}}>
                <TrashIcon className='trash-icon'></TrashIcon>
            </button>
        </div>
    );
};

export default CartItem;