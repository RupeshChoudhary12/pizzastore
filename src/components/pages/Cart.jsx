import React, { useContext } from 'react'
import CartItem from '../CartItem'
import CartContext from '../../context/cart/CartContext'

const Cart = () => {

  
const {Cart} = useContext(CartContext)

const total = Cart.reduce((p,c)=>{
  return p + c.price
},0)



  return (
    <div className="cart-container">

{
  Cart.map(Cart =>      <CartItem key={Cart.id} Cart={Cart}/>
  )
}
    <div className="bill-section">
        <h1> Amount : <br/> <br/> <i class="bi bi-currency-rupee"></i> {total}  </h1>
        <button className="pay-btn">Pay</button>
    </div>

   </div>
  )
}
  


export default Cart
