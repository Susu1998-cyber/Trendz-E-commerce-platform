 
import React from 'react';
import './Item.css';

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className='item'>
      <img src={image} alt={name} className='img-fluid' />
      <div className='item-details'>
        <h3>{name}</h3>
        <p>New Price: ${new_price}</p>
        <p>Old Price: ${old_price}</p>
       
      </div>
    </div>
  );
};

export default Item;

