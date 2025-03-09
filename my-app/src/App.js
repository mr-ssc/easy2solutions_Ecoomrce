import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Product from './component/Product';
import { DarkModeProvider } from './component/DarkModeContext';
import Cart from './component/Cart';
import Account from './component/Account';
import Footer from './component/Footer';
import SubFooter from "./component/SubFooter"
import Customer from './component/Customer';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import ForgotPassword from './component/ForgotPassword';
import Categories from './component/Categories';
import Contact from './component/Contact';
import Hero from './component/Hero';
import Order from './component/Order';









function App() {
  return (
    <>
      <DarkModeProvider>
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/Hero' element={<Hero/>}></Route>
          <Route path='/Navbar' element={<Navbar />}></Route>
          <Route path='/Product' element={<Product />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='/Order' element={<Order/>}></Route>
          <Route path='/Account' element={<Account />}></Route>
          <Route path='/Customer' element={<Customer />}></Route>
          <Route path='/Categories' element={<Categories />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/ForgotPassword' element={<ForgotPassword />}></Route>

          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Footer' element={<Footer />}></Route>
          <Route path='/SubFooter' element={<SubFooter />}></Route>



        </Routes>
      </DarkModeProvider>



    </>

  );
}

export default App