import { getShoppingCart } from "../../utilities/fakedb";

const cardProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()


    // if card data is in database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = []
    for (const id in storedCart){
        const addedProduct = products.find(pd=>pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }


    // return {products, savedCart};
    return savedCart;
}



export default cardProductsLoader;