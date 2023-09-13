import React from "react";
import "../hero/drink.css";
import small from '../assets/pizzasmall.png'
import panner from '../assets/paneer.png'
import tasty from '../assets/tasty.png'
import chikan from '../assets/chikan.png'




const Drink = () => {
  return (
    <div className="drink">
      <h1>Food Near You</h1>
      <div className="grid">
        <div className="aa">
          <h4>
            Pizza <br />
            starting <br />
            Price 120
          </h4>

          <img id="a" src={small} alt="" />
        </div>

        <div className="b">
          <h4>
            Pizza <br />
            starting <br />
            120
          </h4>
          <img
            id="a"
            src={panner}
            alt=""
          />
        </div>
        <div className="c">
          <h4>
            Pizza <br />
            starting <br />
            120
          </h4>
          <img
            id="a"
            src={tasty}
            alt=""
          />
        </div>
        <div className="d">
          <h4>
            Pizza <br />
            starting <br />
            120
          </h4>
          <img id="ba" src={chikan} alt="" />
        </div>
      </div>

      {/* <img id='cartoon' src="src\assets\20230520094019__fpdl.in__fun-3d-asian-teenager-with-manga-style_183364-16602_large-removebg-preview.png" alt="" /> */}
    </div>
  );
};

export default Drink;
