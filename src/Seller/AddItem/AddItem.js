import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./AddItem.css";

const AddItem = () => {
  // State to manage form inputs
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [categoryId, setCategoryId] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [review, setReview] = useState("");
  const [price, setPrice] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [isAvailable, setIsAvailable] = useState("true"); // Setting default value to 'true'
  const [warranty, setWarranty] = useState("");

  const navigate = useNavigate();
  console.log(navigate);

  const addProduct = async (e) => {
    e.preventDefault();
    if (
      !productName ||
      !categoryId ||
      !description ||
      !price ||
      !isAvailable ||
      !productImage ||
      !rating ||
      !review ||
      !vendorName ||
      !warranty
    ) {
      alert("Please fill in all fields");
      return;
    } else {
      try {
        const body = {
          productName,
          categoryId,
          description,
          price,
          isAvailable: isAvailable === "true", // Converting string to boolean
          productImage,
          rating,
          review,
          vendorName,
          warranty,
        };
        console.log(productImage);
        const result = await axios.post(
          "http://localhost:5000/api/admin/Product/addproduct",
          body
        );
        alert(result.data.message);

        navigate("/seller"); // Navigating to '/seller' after successful addition
      } catch (error) {
        console.error("Error adding product:", error.response?.data?.error);
        alert("Error adding product. Please check the form and try again");
      }
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 style={{ textAlign: "center" }}>Add Product</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product name</Form.Label>
              <Form.Control
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category Id</Form.Label>
              <Form.Control
                onChange={(e) => setCategoryId(e.target.value)}
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="isAvailable">
              <Form.Label>Is Available</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) => setIsAvailable(e.target.value)}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className="mb-3" controlId="productImage">
              <Form.Label>Product Image</Form.Label>
              <Form.Control
                onChange={(e) => setProductImage(e.target.value)}
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                onChange={(e) => setRating(e.target.value)}
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="review">
              <Form.Label>Review</Form.Label>
              <Form.Control
                onChange={(e) => setReview(e.target.value)}
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="vendorName">
              <Form.Label>Vendor Name</Form.Label>
              <Form.Control
                onChange={(e) => setVendorName(e.target.value)}
                type="text"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="warranty">
              <Form.Label>Warranty</Form.Label>
              <Form.Control
                onChange={(e) => setWarranty(e.target.value)}
                type="text"
                placeholder=""
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={6}>
            <Button onClick={addProduct} className="ms-5" variant="secondary">
              Add
            </Button>
          </Col>
          <Col md={6}>
            <Link to={"/seller"}>
              <Button className="ms-5" variant="secondary">
                Cancel
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddItem;
