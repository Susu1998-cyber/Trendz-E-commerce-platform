 
import React from 'react';
import './Cart.css';
import { Button } from 'bootstrap';
import product_1 from '../Assets/product_14.png'
import product_2 from '../Assets/product_15.png'
import product_3 from '../Assets/product_16.png'

const Cart = () => {
  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row w-100">
          <div className="col-lg-12 col-md-12 col-12">
            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
            <p className="mb-5 text-center">
              <i className="text-info font-weight-bold">3</i> items in your cart
            </p>
            <table id="shoppingCart" className="table table-condensed table-responsive">
              <thead>
                <tr>
                  <th style={{ width: '60%' }}>Product</th>
                  <th style={{ width: '12%' }}>Price</th>
                  <th style={{ width: '10%' }}>Quantity</th>
                  <th style={{ width: '16%' }} />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-md-3 text-left">
                        <img
                          src={product_1}
                          alt
                          className="img-fluid d-none d-md-block rounded mb-2 shadow "
                        />
                      </div>
                      <div className="col-md-9 text-left mt-sm-2">
                        <h4>Product Name</h4>
                        <p className="font-weight-light">Brand &amp; Name</p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">$49.00</td>
                  <td data-th="Quantity">
                    <input
                      type="number"
                      className="form-control form-control-lg text-center"
                      defaultValue={1}
                    />
                  </td>
                  <td className="actions" data-th>
                    <div className="text-right">
               
                      <button className="btn btn-danger btn-md mb-2">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              
              </tbody>
              <tbody>
                <tr>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-md-3 text-left">
                        <img
                          src={product_2}
                          alt
                          className="img-fluid d-none d-md-block rounded mb-2 shadow "
                        />
                      </div>
                      <div className="col-md-9 text-left mt-sm-2">
                        <h4>Product Name</h4>
                        <p className="font-weight-light">Brand &amp; Name</p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">$49.00</td>
                  <td data-th="Quantity">
                    <input
                      type="number"
                      className="form-control form-control-lg text-center"
                      defaultValue={1}
                    />
                  </td>
                  <td className="actions" data-th>
                    <div className="text-right">
               
                      <button className="btn btn-danger btn-md mb-2">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                
              </tbody>
              <tbody>
                <tr>
                  <td data-th="Product">
                    <div className="row">
                      <div className="col-md-3 text-left">
                        <img
                          src={product_3}
                          alt
                          className="img-fluid d-none d-md-block rounded mb-2 shadow "
                        />
                      </div>
                      <div className="col-md-9 text-left mt-sm-2">
                        <h4>Product Name</h4>
                        <p className="font-weight-light">Brand &amp; Name</p>
                      </div>
                    </div>
                  </td>
                  <td data-th="Price">$49.00</td>
                  <td data-th="Quantity">
                    <input
                      type="number"
                      className="form-control form-control-lg text-center"
                      defaultValue={1}
                    />
                  </td>
                  <td className="actions" data-th>
                    <div className="text-right">
               
                      <button className="btn btn-danger btn-md mb-2">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              
              </tbody>
              <div className="float-right text-right">
              <h4>Subtotal:</h4>
              <h1>$99.00</h1>
            </div>
        
            </table>
             
             
 
           
          </div>
        </div>
        <div className="row mt-4 d-flex align-items-center">
          <div className="col-sm-6 order-md-2 text-right">
            <a href="catalog.html" className="btn btn-primary mb-4 btn-lg pl-5 pr-5">
              Checkout
            </a>
          </div>
         
          <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
            <a href="catalog.html">
              <i className="fas fa-arrow-left mr-2" /> Continue Shopping
            </a>
             
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;


 

