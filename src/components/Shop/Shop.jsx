import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1 get id
        for (const id in storedCart) {
            // step 2 get product by using id
            const addedProduct = products.find(product => product.id == id);

            // step 3 get quantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // console.log(addedProduct);
                // step 4: add the addedProduct to the saveCart
                savedCart.push(addedProduct)
            }

        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];

        // const newCart = [...cart, product];
        // if the product doesn't exist in the cart, then set quantity = 1
        // if exists update quantity by 1 
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exists.quantity = exists.quantity +1;
           const remaining = cart.filter(pd => pd.id !== product.id);
           newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;