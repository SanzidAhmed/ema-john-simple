import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const cart =  useLoaderData()
    return (
        <div className='shop-container'>
            <div className='review-container'>
                <h2>Order page: {cart.length}</h2>
                <div>
                    {
                        cart.map(product  => <ReviewItem
                        key={product.id}
                        product={product}
                        ></ReviewItem>)
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;