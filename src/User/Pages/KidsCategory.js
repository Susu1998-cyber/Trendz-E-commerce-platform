import React from 'react';
import './KidsCategory.css';
import kidsImage1 from '../Assets/product_25.png';
import kidsImage2 from '../Assets/product_26.png';
import kidsImage3 from '../Assets/product_27.png';
import kidsImage4 from '../Assets/product_28.png';
import kidsImage5 from '../Assets/product_29.png';
import kidsImage6 from '../Assets/product_30.png';

const kidsProducts = [
  { id: 1, name: 'Kids Product 1', price: '$14.99', image: kidsImage1 },
  { id: 2, name: 'Kids Product 2', price: '$24.99', image: kidsImage2 },
  { id: 3, name: 'Kids Product 3', price: '$34.99', image: kidsImage3 },
  { id: 4, name: 'Kids Product 4', price: '$44.99', image: kidsImage4 },
  { id: 5, name: 'Kids Product 5', price: '$54.99', image: kidsImage5 },
  { id: 6, name: 'Kids Product 6', price: '$64.99', image: kidsImage6 },
];

const KidsCategory = () => {
  return (
    <div className="kids-category-container">
      {kidsProducts.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={`Kids' Product - ${product.name}`} />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default KidsCategory;
