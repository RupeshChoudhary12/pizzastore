import React from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom'

// import Footer from './components/Footer'
import Blog from './components/pages/Blog'
import Cart from './components/pages/Cart'
import About from './components/pages/About'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/cart/CartContext'
import Home from './components/pages/Home'
import Order from './components/Order'
import Product from './components/pages/Product'
// import Mui from './components/Mui'

const App = () => {
  return (
    <>
     <Router>
     <ProductProvider>
    <CartProvider>
    <Navbar/>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Order' element={<Order/>}/>
        <Route path='/product' element={<Product/>}/>
          
      </Routes>
    
    
      
      {/* <Footer/> */}
    </CartProvider>
     </ProductProvider>
     </Router>


    </>
  )
}

export default App
