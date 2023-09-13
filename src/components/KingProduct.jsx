import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext'

const KingProduct = ({product}) => {


    const {id , name ,price  ,img} = product

    const {dispatch} = useContext(CartContext)

    const handleAdd = (product)  => {
      dispatch ({
        type : "ADD_CART",
        payload : product
      })
    }
  

    

  return (
    <div className="queen">
    <div className="e">
      <img
        id="joker"
        src={img}
        alt=""
      />
      <h1>
        {name}
        {/* Burger King <br />
        Amet MinimMoilit Deserunt <br />
        Ullamco Est Sit */}
      </h1>
      <span className="est">
        <h2><i class="bi bi-currency-rupee"></i> {price}</h2>
        <button className="amet" onClick={()=> handleAdd(product)}>Add To Cart</button>
      </span>
    </div>
    {/* <div className="f">
      <img id="joker" src="src\assets\1.png" alt="" />
      <h1>
        Burger King <br />
        Amet MinimMoilit Deserunt <br />
        Ullamco Est Sit
      </h1>
      <span className="est">
        <h2>$ 150</h2>
        <button className="amet">Add To Cart</button>
      </span>
    </div>
    <div className="g">
      <img id="joker" src="src\assets\3.png" alt="" />
      <h1>
        Mare Monti
        <br />
        Amet MinimMoilit Deserunt <br />
        Ullamco Est Sit
      </h1>
      <span className="est">
        <h2>$ 300</h2>
        <button className="amet">Add To Cart</button>
      </span>
    </div>
    <div  className="h">
      <img id="joker" src="src\assets\4.png" alt="" />
      <h1>
        Pasta
        <br />
        Amet MinimMoilit Deserunt <br />
        Ullamco Est Sit
      </h1>
      <span className="est">
        <h2>$ 250</h2>
        <button className="amet">Add To Cart</button>
      </span>
    </div>
    <div className="i">
      <img id="joker" src="src\assets\5.png" alt="" />
      <h1>
        French Fires
        <br />
        Amet MinimMoilit Deserunt <br />
        Ullamco Est Sit
      </h1>
      <span className="est">
        <h2>$ 100</h2>
        <button className="amet">Add To Cart</button>
      </span>
    </div>
    <div className="j">
      <img id="joker" src="src\assets\6.png" alt="" />
      <h1>
        Vhickrn Shawarma
        <br />
        Amet MinimMoilit Deserunt <br />
        Ullamco Est Sit
      </h1>
      <span className="est">
        <h2>$ 170</h2>
        <button className="amet">Add To Cart</button>
      </span>
    </div>
    <div className="k">
      <img id="joker" src="src\assets\7.png" alt="" />
      <h1>
        Fish Curry
        <br />
        Amet MinimMoilit Deserunt <br />
        Ullamco Est Sit
      </h1>
      <span className="est">
        <h2>$ 190</h2>
        <button className="amet">Add To Cart</button>
      </span>
    </div>
    <div className="n">
      {" "}
      <img id="joker" src="src\assets\4.png" alt="" />
      <h1>
        Cheddar Friec
        <br />
        Amet MinimMoilit Deserunt <br />
        Ullamco Est Sit
      </h1>
      <span className="est">
        <h2>$ 130</h2>
        <button className="amet">Add To Cart</button>
      </span>
    </div>
    <div className="m">
      <img id="joker" src="src\assets\6.png" alt="" />
      <h1>
        Cheddar Friec
        <br />
        Amet MinimMoilit Deserunt <br />
        Ullamco Est Sit
      </h1>
      <span className="est">
        <h2>$ 220</h2>
        <button className="amet">Add To Cart</button>
      </span>
    </div> */}
  </div>
  )
}

export default KingProduct
