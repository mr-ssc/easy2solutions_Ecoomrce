import React from 'react'
import Navbar from './Navbar'
import Product from './Product'
import Customer from './Customer'
import Footer from './Footer'
import SubFooter from './SubFooter'
import Contact from './Contact'
import Hero from './Hero'




const Home = () => {
  return (
    <div>

      <Navbar />
      <Hero/>
      <Product />
      <Customer />
      <Contact />
      <Footer />
      <SubFooter />


    </div>
  )
}

export default Home
