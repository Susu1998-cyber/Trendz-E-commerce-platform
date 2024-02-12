 
import React from 'react';
import './AddProduct.css';
import product_1 from '../Assets/product_17.png'

const AddProduct = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-6 border-end">
            <div className="d-flex flex-column justify-content-center">
              <div className="main_image">
                <img
                  src= {product_1}
                  id="main_product_image"
                  alt="Product"
                  width="100%"
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-3 right-side">
              <div className="d-flex justify-content-between align-items-center">
                <h3>IIlana</h3>
                <span className="heart">
                  <i className="bx bx-heart" />
                </span>
              </div>
              <div className="mt-2 pr-3 content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
              <h3>$430.99</h3>
              <div className="ratings d-flex flex-row align-items-center">
                <div className="d-flex flex-row">
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bx-star" />
                </div>
              </div>
              <div className="mt-3">
                <div className="buttons d-flex flex-column mt-4">
                  <button className="btn btn-outline-dark mb-3">Buy Now</button>
                  <button className="btn btn-dark">Add to Basket</button>
                </div>
              </div>
              <div className="search-option mt-4">
                <i className="bx bx-search-alt-2 first-search" />
                 
                <i className="bx bx-share-alt share" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

 

