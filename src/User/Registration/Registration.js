import React, { useState, useEffect } from "react";
 
import $ from "jquery"; // Import jQuery
import "jquery-ui/ui/widgets/datepicker"; // Import jQuery UI datepicker
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Registration = () => {
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthDate: "",
    userType: "user",
    age: 0, // Initialize age state
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Initialize jQuery datepicker
    $("#datepicker").datepicker({
      dateFormat: "yy-mm-dd",
      changeYear: true,
      yearRange: "1900:+0",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let errorMessages = { ...errors };
  
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? "seller" : "user", // Update userType based on checked status
      }));
    } else {
      if (name === "birthDate") {
        const dob = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - dob.getFullYear();
        if (
          today.getMonth() < dob.getMonth() ||
          (today.getMonth() === dob.getMonth() &&
            today.getDate() < dob.getDate())
        ) {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            age: age - 1,
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            age: age,
          }));
        }
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
  
      // Update errors state
      switch (name) {
        case "firstName":
          errorMessages.firstName =
            value.length < 2
              ? "First name must be at least 2 characters long"
              : "";
          break;
        case "lastName":
          errorMessages.lastName =
            value.length < 2
              ? "Last name must be at least 2 characters long"
              : "";
          break;
        case "email":
          errorMessages.email = !/\S+@\S+\.\S+/.test(value)
            ? "Invalid email address"
            : "";
          break;
        case "password":
          errorMessages.password =
            value.length < 6
              ? "Password must be at least 6 characters long"
              : "";
          break;
        case "birthDate":
          errorMessages.birthDate = value ? "" : "Birth date is required";
          break;
        default:
          break;
      }
    }
  
    // Reset error message for userType since it's not validated
    if (name === "userType") {
      errorMessages.userType = "";
    }
  
    // Update errors state
    setErrors(errorMessages);
  };
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Check if there are any errors
      for (let key in errors) {
        if (errors[key]) {
          alert("Please fix all errors before submitting the form.");
          return;
        }
      }

      // If no errors, submit the form
      const response = await axios.post(
        "http://localhost:5000/api/user/register/register",
        formData
      );
      console.log("response", response);

      navigate('/login')
 
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthDate: "",
        userType: "user",
        age: 0,
      });
   
      console.log("formdata", formData);
    } catch (err) {
      console.error("error", err);
    }
  };

  return (
    <div className="registration-container">
      <h2 className="registration-heading">Registration</h2>

      <form className="registration-form" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>

        <label>
          Birth Date:
          <input
            type="text"
            name="birthDate"
            id="datepicker"
            value={formData.birthDate}
            onChange={handleChange}
            placeholder="YYYY-MM-DD"
            required
          />
          {errors.birthDate && (
            <span className="error">{errors.birthDate}</span>
          )}
        </label>

        {/* Display age */}
        <label>Age: {formData.age}</label>

        <label>
          Are you a seller?
          <input
            type="checkbox"
            name="userType"
            checked={formData.isSeller}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
