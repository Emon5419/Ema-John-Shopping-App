import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleAddtoCart}) => {
   const {name, seller, price, ratings, img} = product;
  
   
   return (
      <div className='product'>
        <img src={img} alt="" />
        <div className='product-info'>
        <h4 className='product-name'>{name}</h4>
        <p>Price: ${price}</p>
        <p><small>Seller: {seller}</small></p>
        <p><small>Ratings: {ratings} star</small></p>
        </div>
        <button onClick={() => handleAddtoCart(product)} className='btn-cart'>
           <p>Add to Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p>
           
        </button>
      </div>
   );
};

export default Product;