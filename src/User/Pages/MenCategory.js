// import React from 'react';
// import menImage from '../Assets/product_14.png';
// import menImage1 from '../Assets/product_15.png'
// import './MenCategory.css'; // Correct relative path

 
// const menProducts = [
//   { id: 1, name: 'Product 1', price: '$19.99' },
//   { id: 2, name: 'Product 2', price: '$29.99' },
//   { id: 3, name: 'Product 3', price: '$39.99' },
//   { id: 4, name: 'Product 4', price: '$49.99' },
//   { id: 4, name: 'Product 4', price: '$49.99' },
//   { id: 4, name: 'Product 4', price: '$49.99' },
// ];

// const MenCategory = () => {
//   return (
//     <div className="men-category-container">
       
//       {menProducts.map((product) => (
//         <div key={product.id} className="product-item">
//           <img src={menImage} alt={`Men's Product - ${product.name}`} />
          
//           <p>{product.name}</p>
//           <p>{product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MenCategory;
import React from 'react';
import './MenCategory.css';
import menImage1 from '../Assets/product_14.png';
import menImage2 from '../Assets/product_15.png';
import menImage3 from '../Assets/product_16.png';
import menImage4 from '../Assets/product_17.png'
import menImage5 from '../Assets/product_18.png'
import menImage6 from '../Assets/product_19.png'

const menProducts = [
  { id: 1, name: 'Product 1', price: '$19.99', image: menImage1 },
  { id: 2, name: 'Product 2', price: '$29.99', image: menImage2 },
  { id: 1, name: 'Product 3', price: '$19.99', image: menImage3 },
  { id: 2, name: 'Product 4', price: '$29.99', image: menImage4 },
  { id: 2, name: 'Product 5', price: '$29.99', image: menImage5 },
  { id: 2, name: 'Product 6', price: '$29.99', image: menImage6 },
  

];

const MenCategory = () => {
  return (
    <div className="men-category-container">
      {menProducts.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={`Men's Product - ${product.name}`} />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MenCategory;



 
  