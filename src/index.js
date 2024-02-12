// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import 'datatables.net-dt/css/jquery.dataTables.min.css';
// import 'datatables.net/js/jquery.dataTables.min.js';

 
 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
 
//   <GoogleOAuthProvider clientId="962354702241-2s5pqd78i45ipu4pntpcla63ffcidvjf.apps.googleusercontent.com">
 
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
 
// </GoogleOAuthProvider>,
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net/js/jquery.dataTables.min.js';

ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="962354702241-2s5pqd78i45ipu4pntpcla63ffcidvjf.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
