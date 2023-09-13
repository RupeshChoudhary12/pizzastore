import React from "react";
import "../hero/hero.css";
import { Link } from "react-router-dom";
import Pizza from '../assets/pizza.png'


const HeroSection = () => {
  return (
    <div className="hero">
      <div className="herotext">
        <h1>
          {" "}
          <strong>
            Eat <span>Healthy</span> <br /> Live Long Live <br />{" "}
            <span>Strong</span>
          </strong>{" "}
        </h1>
        <p>
          food is Any Substance Consumed To Provid Nutreitional <br /> Support
          For An Organism Food Is Usually of Plant <br /> Animal or Fungal
          Origin And Contains Essential <br /> Nutrients
        </p>
        <span className="now">
          <Link to={"/Order"}><button className="order">Order Now</button></Link>
          <button className="food">
            <i class="bi bi-play-circle-fill"></i>Order Prosces
          </button>
        </span>
        {/* <div className='cartoon'>
        <img src="src\assets\20230520094019__fpdl.in__fun-3d-asian-teenager-with-manga-style_183364-16602_large-removebg-preview.png" alt="" />
      </div> */}
      </div>
      <div className="pizza">
        <img src={Pizza} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
