import React from 'react'
import Navbar from './Navbar'
import '../index.css'
import Footer from './Footer'
import Signup from './Signup'

const Home = () => {
  return (
      <div>
      <Navbar />
      <Signup />  
      <Footer />
    </div>
  )
}

export default Home