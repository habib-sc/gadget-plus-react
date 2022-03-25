import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Products.css';

const Products = ({addToCart}) => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    } , []);

    return (
        <div className='products-container'>
            {
                products.map(product => <Product addToCart={addToCart} key={product.id} product={product}></Product>)
            }       
        </div>
    );
};

export default Products;