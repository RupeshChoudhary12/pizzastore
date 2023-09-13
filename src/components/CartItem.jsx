import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'

const CartItem = ({Cart}) => {
  

  const {img , name , price ,id } = Cart
// const [quantity,setQuantity]=useState()
// const [mprice,seMprice]=useState(price)

// const {dispatch} = useContext()

const {dispatch} = useContext(CartContext)

const handleRemove = (id) => {
  dispatch({
    type : "REMOVE",
    payload : id,
  });
};

 


  return (
    <div className="cart-items w-50px">
   
       

    <div className="cart-item">
        <img src={img} alt=""/>
       <span>
        <h1>{name}</h1>
        <h3>Rate : <i class="bi bi-currency-rupee"></i>{price}</h3>
        <h3>Qty : {id}</h3>
       </span>
       
       <button className="remove-btn" onClick={()=>handleRemove(id)}>Remove Item</button>
   

    
    </div>


    


</div>
  )
}

export default CartItem
