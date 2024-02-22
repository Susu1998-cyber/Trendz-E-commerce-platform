import React, { useContext } from 'react';
import Item from '../Item/Item';
import { ShopContext } from '../Context/ShopContext';
 
 


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  console.log('all_product:', all_product);

  // Check if all_product is null before attempting to destructure
  if (!all_product) {
    return <div>Loading...</div>; // You can also render an error message or loading indicator
  }

  return (
    <div className='shop-Category'>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
