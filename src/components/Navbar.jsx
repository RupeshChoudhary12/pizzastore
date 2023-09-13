import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/cart/CartContext'
import logo from '../assets/logo.png'

const Navbar = () => {



  const {Cart} = useContext(CartContext)


  return (
    <div className='nav-links'>
        <img id='biryani' src={logo} alt="" />
        <ul className='nav'>
          <Link to={"/"}>HOME</Link>
          <Link to={"/about"}>ABOUT</Link>
          <Link to={"/product"}>PRODUCT</Link>
          <Link to={"/blog"}>BLOG</Link>
          <Link to={"/review"}>REVIEW</Link>
        </ul>
        <span className='cart'>
            <a href="#"  placeholder='serach'><i  class="bi bi-search"></i></a>
            <Link to={"/cart"}>            <button className='red'><i class="bi bi-cart4">{Cart.length}</i></button>
</Link>
        </span>
      
    </div>
  )
}

export default Navbar
