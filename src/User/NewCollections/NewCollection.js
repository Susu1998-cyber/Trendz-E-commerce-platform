 
// import React from 'react';
// import './NewCollection.css';
// import new_collection from '../Assets/new_collections';
// import Item from '../Item/Item';

// const NewCollections = () => {
//   return (
//     <div className='container new-collections'>
//       <h1 className='text-center'>NEW COLLECTIONS</h1>
//       <hr />
//       <div className="row">
//         {new_collection.map((item, i) => (
//           <div key={i} className="col-12 col-md-6 col-lg-4">
//             <Item
//               id={item.id}
//               name={item.name}
//               image={item.image}
//               new_price={item.new_price}
//               old_price={item.old_price}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NewCollections;

import React from 'react';
import './NewCollection.css'; // Import your custom CSS file for styling
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1 className='text-center'>NEW COLLECTIONS</h1>
      <hr />
      <div className="row">
        {new_collection.map((item, i) => (
          <div key={i} className="col-12 col-md-6 col-lg-4">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewCollections;

