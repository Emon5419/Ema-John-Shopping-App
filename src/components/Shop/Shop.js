import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import '../../App.css';
import Cart from '../Cart/Cart';


const Shop = () => {
const [products, setProducts] = useState([]);
const [cart, setCart] = useState([])

useEffect( () => {
   fetch('products.json')
   .then(res => res.json())
   .then(data => setProducts(data));
},[]);

 const handleAddtoCart = (product) =>{
    console.log(product);
    //Old Style To push data in array: cart.push(product);
    const newCart = [...cart, product];
    setCart(newCart);

 }  
 return ( 
  <div className='shop-contanier'>
     <div className="products-contanier">
        {
           products.map(product =>
           <Product 
           key={product.id}
           product = {product}
           handleAddtoCart = {handleAddtoCart}
           ></Product>)
           
           
        }
        <FontAwesomeIcon></FontAwesomeIcon>
     </div>
     <div className="cart-contanier">
           <Cart cart={cart}></Cart>         
     </div>          
  </div>
 );
};

export default Shop;