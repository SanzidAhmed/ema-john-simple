import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
//    const cart = props.cart;
    let total = 0;
    let totalShipping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    let tax = total*7/100;
    let grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected item:{cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;