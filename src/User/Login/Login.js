 
import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Login.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate()
 

  const handleGoogleLogoin = async()=>{
    try{
      setProfile((prevData) => ({
        ...prevData,
        userType: "user"
      }));
      
      const response = await axios.post('http://localhost:5000/api/user/login/google',profile)
      console.log(response)
     if(response.status === 200){
      const{userType,redirect,token} = response.data;
      if(userType==="user"){
        navigate(redirect)

      }
      else{
        toast.error("google login error")
        navigate('/login')
      }

   
      

      sessionStorage.setItem('token',token)
     }else{
      console.error('Unexpected status code:',response.status)
     }
    } catch(error){
      console.error("error",error)

    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Google Login Failed:', error)
  });

  useEffect(() => {
    if (user) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
          console.log(profile);
          handleGoogleLogoin()
      
     
         
        })
        .catch((err) => console.log(err));
    }
  }, [user,navigate]);

 



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the specific error when the input changes
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      // Log the entered details to the console
      console.log('Entered Email:', formData.email);
      console.log('Entered Password:', formData.password);

      // Add logic to handle login (e.g., send data to server, validate, etc.)
      // You can add additional logic here, such as sending data to the server
    }
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic email validation
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address.',
      }));
      return false;
    }

    // Password length validation
    if (!formData.password || formData.password.length < 6) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 6 characters long.',
      }));
      return false;
    }

    return true;
  };

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/login/login', {
        email: formData.email,
        password: formData.password
      });
      
      if (response.data) {
        const token = response.data.token;
        console.log('token', token);
        sessionStorage.setItem('token', token);
      }
      
      const { userType, redirect } = response.data;
      if (userType === 'user' || userType === 'seller') {
        navigate(redirect);
      }
    } catch (error) {
      console.log('Error', error);   
    }
  }
  
  return (
    <div className="login-page">
      <h2 style={{textAlign:'center'}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
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
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </label>
    
       
        <div className='row'>
        <div className="col-12 mt-bottom-10px">
     <button type="submit" onClick={handleLogin}>Login</button>
   </div>

       
          <div className='col-12'>

          <button onClick={() => googleLogin()}>SignIn with Gmail  </button>
          </div>
          </div>
          <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
       
      </form>

     
      
    </div>
  );
};

export default Login;
 
 