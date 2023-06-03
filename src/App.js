import logo from './logo.svg';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import {Routes, Route,Navigate} from "react-router-dom"
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';
import {useState} from 'react';

function App() {
  const [authenticate, setAuthenticate] =useState(false);
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage/> : <Navigate to ="/login"/>
  }
  return (
    <div>
      <Routes>
      <Route path='/' element ={<Homepage></Homepage>}/>
      <Route path='/about' element ={<Aboutpage></Aboutpage>}/>
      <Route path = '/products' element ={<ProductPage/>} />
      <Route path = '/products/:id/:num' element= {<ProductDetailPage></ProductDetailPage>} />
      <Route path = '/login' element ={<LoginPage></LoginPage>}></Route>
      <Route path='/user' element={<PrivateRoute/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
