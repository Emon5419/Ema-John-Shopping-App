import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';
import '../../App.css';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';

const Shop = () => {
   const [products, setProducts] = useProducts();
   const [cart, setCart] = useState([])

   useEffect(() => {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id in storedCart) {
         const addedProduct = products.find(product => product.id === id);
         if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
         }
      }
      setCart(savedCart);
      // console.log('Local Storage Finished');
   }, [products]);

   const handleAddtoCart = (product) => {
      //  console.log(product);
      //Old Style To push data in array: cart.push(product);
      const newCart = [...cart, product];
      setCart(newCart);
      addToDb(product.id)

   }
   return (
      <div className='shop-contanier'>
         <div className="products-contanier">
            {
               products.map(product =>
                  <Product
                     key={product.id}
                     product={product}
                     handleAddtoCart={handleAddtoCart}
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