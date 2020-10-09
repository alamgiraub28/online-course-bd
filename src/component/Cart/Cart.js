import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const totalPrice = cart.reduce((total, prd) => total + prd.fee, 0);
    
    let totalPrice = 0;
    for (let i =0; i< cart.length; i++){
        const product = cart[i];
        totalPrice = totalPrice + product.fee;
    }

    const tax = totalPrice/10;
    const grandTotal = (totalPrice + Number(tax)).toFixed(2);
    return (
        <div className="cart-details">
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>VAT & TAX: {tax}</p>
            <h5 className="text-success">Total Price: $ {grandTotal}</h5>
            <button className="btn btn-success btn-review">Review Your Order</button>

            
        </div>
    );
};

export default Cart;