import React from 'react';
import { fakeData } from '../../fakeData/fakeData';
import { useState } from 'react';
import css from './CourseDetails.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const CourseDetails = () => {
    const first12 = fakeData.slice(0,13);
    const [products, setProducts] = useState(first12);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    
    return (
        <div className="courseDetails-container container">

            <div className="product-container">
            <ul>
            {
                products.map(product => <Product 
                        handleAddProduct = {handleAddProduct}
                    product={product}></Product> )
            }
            </ul>
            </div>
            <div className="cart-container">
            <Cart cart ={cart}></Cart>
            </div>
            
        </div>
    );
};

export default CourseDetails;