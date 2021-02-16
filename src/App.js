import React, { useState , useEffect } from 'react';
import {commerce} from './lib/commerce';
import {Products , Navbar } from './components';

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
    // is like ComponentDidMount in classes components//
    useEffect(()=>{
        fetchProduct();
        fetchCart();
    },[]);
    console.log(cart);
    const handleAddToCart = async(productId,quantity) =>{
        const item = await commerce.cart.add(productId,quantity);
        setCart(item.cart);
    }

    return (
        <div>
            <Navbar totalItems ={cart.total_items}/>
            <Products products={products} onAddToCart={handleAddToCart}/>
        </div>
    )
}

export default App