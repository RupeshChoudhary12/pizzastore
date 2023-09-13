import React, { useContext, useEffect } from "react";
// import "../hero/king.css";
// import KingProduct from "./KingProduct";
import ProductContext from "../context/ProductContext";
import { getProducts } from "../context/ProductAction";
import KingProduct from "./KingProduct";

const King = () => {



  const  {products , dispatch}  = useContext(ProductContext)

  const fetchProducts = ()=> {
    const data = getProducts()
    dispatch({
      type  :"GET_PRODUCTS",
      payload : data
    })
   
  }



  // useEffect(()=> {
  //    fetchProducts()

  // },[0])

  if(!products){
    return (
      <h1>LOADING</h1>
    )
  }

  return (
    // {/* <div data-aos="fade-up"></div>
    // <div data-aos="fade-down"></div>
    // <div data-aos="fade-right"></div>
    // <div data-aos="fade-left"></div>
    // <div data-aos="fade-up-right"></div>
    // <div data-aos="fade-up-left"></div>
    // <div data-aos="fade-down-right"></div>
    // <div data-aos="fade-down-left"></div> */}

    <div className="king">
    

     

{
    products.map(product => <KingProduct key={product.id} product={product}/>)
}
    

    </div>
  );
};

export default King;
