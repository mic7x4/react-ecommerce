import React, { useState , useEffect } from 'react';
import {commerce} from './lib/commerce';
import {Products , Navbar , Cart, Checkout} from './components';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';

function App() {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState({});

    const fetchProduct = async ()=> {
        const {data} = await commerce.products.list();
        setProducts(data);
    }
    const fetchCart =  async () => {
        const response = await commerce.cart.retrieve();
        setCart(response);
    }
    // Function to add products to cart
    const handleAddToCart = async(productId,quantity) =>{
        const {cart} = await commerce.cart.add(productId,quantity);
        setCart(cart);
    }
    // Function for updating the Cart product Quantity
    const handleUpdateCartQty = async (productId,quantity)=> {
        const {cart} = await commerce.cart.update(productId,{quantity});
        setCart(cart);
    }
    // Function for Remove product from cart
    const handleRemoveFromCart = async (productId)=>{
        const {cart} = await commerce.cart.remove(productId);
            setCart(cart);
    }
    const handleEmptyCart = async ()=>{
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }
    
    // is like ComponentDidMount in classes components//
    useEffect(()=>{
        fetchProduct();
        fetchCart();
    },[]);
    console.log(cart);
    return (
        <Router> 
        <div>
            <Navbar totalItems ={cart.total_items}/>
            <Route exact path="/">
                <Products products={products} onAddToCart={handleAddToCart}/>
            </Route>
            <Route exact path="/cart">
                <Cart
                    cart={cart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart} 
                />
            </Route>
            <Route exact path="/checkout">
                <Checkout cart={cart}/>
            </Route>
        </div>
        </Router>
    )
}

export default App
