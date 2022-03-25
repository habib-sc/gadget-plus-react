import { ShoppingCartIcon } from '@heroicons/react/solid';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, image } = props.product;
    return (
        <div className='product-container'>
            <img src={image} alt="" />
            <div className='product-info'>
                <h4>{name}</h4>
                <p>${price}</p>
                <button>
                    <ShoppingCartIcon className='cart-icon'></ShoppingCartIcon>
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default Product;