import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignUp from './landing_page/signup/SignUp';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import SupportPage from './landing_page/support/SupportPage';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/signup/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
      <Route path='/pricing' element={<PricingPage />}></Route>
      <Route path='/products' element={<ProductPage />}></Route>
      <Route path='/support' element={<SupportPage />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  <Footer />
  </BrowserRouter>
);
