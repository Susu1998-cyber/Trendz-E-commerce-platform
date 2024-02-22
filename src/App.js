 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './User/Footer/Footer';
import Navbar from './User/Header/Navbar';
import Home from './User/Home/Home';
import Registration from './User/Registration/Registration';
import Login from './User/Login/Login';
import Cart from './User/AddCart/Cart';
import AddProduct from './User/AddProduct/AddProduct';
import ShopCategory from './User/Pages/ShopCategory';
import MenCategory from './User/Pages/MenCategory';
import WomenCategory from './User/Pages/WomenCategory' // Import the new component
import KidsCategory from './User/Pages/KidsCategory';
 
import SellerDashboard from './Seller/SellerDashBoard/SellerDashBoard';
import Edit from './Seller/Edit/Edit'
import AddItem from './Seller/AddItem/AddItem'
import View from './Seller/View/View';
import NewCollections from './User/NewCollections/NewCollection';
import About from './User/About/About';
import Contact from './User/Contact/Contact';
import Policy from './User/Policy/Policy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/mens' element={<MenCategory />} />
          <Route path='/womens' element={<WomenCategory/>}/> 
          <Route path='/kids' element={<KidsCategory/>} />
          <Route path='/' element={<ShopCategory />} />
          <Route path='/seller' element={<SellerDashboard/>} />
          
          <Route path='/additem' element={<AddItem/>}/>
          <Route path="/seller/edit/:productId" element={<Edit />} />
           <Route path="/seller/view/:productId" element={<View />} />
           <Route path='/newcollection' element={<NewCollections/>}/>
           <Route path='/about' element={< About/>} /> 
             <Route path='/contact' element={<Contact/>} /> 
      <Route path='/policy' element={<Policy/>} /> 
        </Routes>
      
         
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

