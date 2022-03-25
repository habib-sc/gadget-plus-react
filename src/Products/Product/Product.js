import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, price, image } = props.product;
    return (
        <div className='product-container'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
        </div>
    );
};

export default Product;