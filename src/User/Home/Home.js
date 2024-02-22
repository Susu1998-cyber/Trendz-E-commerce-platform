import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'; // Import your custom CSS file for styling
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/hand-drawn-texture-boutique-template_23-2149322048.jpg?w=1380&t=st=1706789949~exp=1706790549~hmac=8b015250cbb4f69b598cbeb8480a07280ba5fab657af6a35b7d25efd0cfc7d9e"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-vector/vector-launch-day-classic-elegant-fashion-trends_1017595-23.jpg?w=1380"
            alt="Second slide"
          />
         
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?w=1060&t=st=1706789878~exp=1706790478~hmac=99ff965ecd4b216808f51382fa2f189a2b52f437936e7a5028646dcf13c307e6"
            alt="Third slide"
          />
         
        </Carousel.Item>
      </Carousel>
      <div className="latest-collection-button">
      <Link to="/newcollection">
          <button className="btn btn-warning btn-lg">Latest Collection</button>
        </Link>
      </div>


      <div className="row">
  <div className="left col-12 col-md-6">
    <div className="row">
      <div className="col-6">
        <img
          className="d-block w-100 img-fluid"
          style={{ height: '300px' }} // Corrected format
          src="https://img.freepik.com/free-photo/man-with-mobile-phone-wardrobe_23-2148401439.jpg?size=626&ext=jpg&ga=GA1.1.2090260727.1704740148&semt=ais"
          alt="Fifth slide"
        />
      </div>
      <div className="col-6">
        <img
          className="d-block w-100 img-fluid"
          style={{ height: '300px' }} // Corrected format
          src="https://img.freepik.com/free-photo/girl-posing-with-shopping-bags_23-2147825037.jpg?size=626&ext=jpg&ga=GA1.1.2090260727.1704740148&semt=ais"
          alt="Sixth slide"
        />
      </div>
    </div>
  </div>

  <div className="right col-12 col-md-6">
    <div className="row">
      <div className="col-6">
        <img
          className="d-block w-100 img-fluid"
          style={{ height: '300px' }} // Corrected format
          src="https://img.freepik.com/free-photo/young-client-wearing-yellow-clothes-orange-background_23-2148674266.jpg?size=626&ext=jpg&ga=GA1.1.2090260727.1704740148&semt=ais "
          alt="Fifth slide"
        />
      </div>
      <div className="col-6">
        <img
          className="d-block w-100 img-fluid"
          style={{ height: '300px' }} // Corrected format
          src="https://img.freepik.com/free-photo/happy-couple-using-digital-tablet-during-shopping_329181-1799.jpg?size=626&ext=jpg&ga=GA1.1.2090260727.1704740148&semt=ais "
          alt="Sixth slide"
        />
      </div>
    </div>
  </div>
</div>
<div className="row">
  <div className="left col-12 col-md-6 d-flex">
    <div className="row flex-fill">
      <div className="col-6 d-flex align-items-center">
        <div>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/white-blouse-isolated-white_392895-169376.jpg?w=360"
            alt="Eighth slide"
            style={{ height: '250px' }}
          />
          <div className="product-details">
            <p>Price: $XX.XX</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="col-6 d-flex align-items-center">
        <div>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/premium-photo/fashion-clothes-isolated-white-background_236836-21631.jpg?size=626&ext=jpg"
            alt="Eighth slide"
            style={{ height: '250px' }}
          />
          <div className="product-details">
            <p>Price: $XX.XX</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="right col-12 col-md-6 d-flex">
    <div className="row flex-fill">
      <div className="col-6 d-flex align-items-center">
        <div>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/texture-blue-background-clothes-color_1203-6522.jpg?size=626&ext=jpg&ga=GA1.1.2090260727.1704740148&semt=sph"
            alt="Eighth slide"
            style={{ height: '250px' }}
          />
          <div className="product-details">
            <p>Price: $XX.XX</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="col-6 d-flex align-items-center">
        <div>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/jeans_1203-8093.jpg?size=626&ext=jpg&ga=GA1.1.2090260727.1704740148&semt=sph"
            alt="Eighth slide"
            style={{ height: '250px' }}
          />
          <div className="product-details">
            <p>Price: $XX.XX</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        
     
  );
};

export default Home;
