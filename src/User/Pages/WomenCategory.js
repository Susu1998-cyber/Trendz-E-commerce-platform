import React from 'react';
import './WomenCategory.css';
import womenImage1 from '../Assets/product_1.png';
import womenImage2 from '../Assets/product_2.png';
import womenImage3 from '../Assets/product_3.png';
import womenImage4 from '../Assets/product_4.png';
import womenImage5 from '../Assets/product_5.png';
import womenImage6 from '../Assets/product_6.png';

const womenProducts = [
  { id: 1, name: 'Product 1', price: '$19.99', image: womenImage1 },
  { id: 2, name: 'Product 2', price: '$29.99', image: womenImage2 },
  { id: 3, name: 'Product 3', price: '$39.99', image: womenImage3 },
  { id: 4, name: 'Product 4', price: '$49.99', image: womenImage4 },
  { id: 5, name: 'Product 5', price: '$59.99', image: womenImage5 },
  { id: 6, name: 'Product 6', price: '$69.99', image: womenImage6 },
];

const WomenCategory = () => {
  return (
    <div className="women-category-container">
      {womenProducts.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={`Women's Product - ${product.name}`} />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default WomenCategory;
