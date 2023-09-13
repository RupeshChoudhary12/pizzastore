import React from 'react'
import '../hero/footer.css'
import car from '../assets/car.png'
import tiwwter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import whatshap from '../assets/whatsapp.png'
import facebook from '../assets/facebook.png'
import snapchat from '../assets/snapchat.png'







const Footer = () => {
  return (
    <div className='footer'>
      <div className='foot'>
      <img id='car' src={car} alt="" />

      <ul className='one'>
            <h1>Paratha App</h1>
            <p>music Supports artists with tools to <br/> create, release, and measure music <br/> across a global stage</p>
             <span>
              <img src={tiwwter} alt="" />
              <img src={instagram} alt="" />
             <img src={facebook} alt="" />
             <img src={whatshap} alt="" />
             <img src={snapchat} alt="" />
             </span>
        </ul>
        <ul className='two'>
            <h1>Company</h1>
            <li><a href="#">About</a></li>
            <li><a href="#">Terms Of use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">How It works</a></li>
            
        </ul> 
         <ul className='three'>
            <h1>Support</h1>
             <li><a href="#">FAQs</a></li>
             <li><a href="#">Policy</a></li>
             <li><a href="#">Business</a></li>
             <li><a href="#">Contact Us</a></li>

        </ul>  <ul className='four'>
            <h1>Get Help</h1>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">24h Servics</a></li>
            <li><a href="#">Quick Chat</a></li>
         
        </ul>
      </div>
      <marquee behavior="hose" direction="left">www.paratha house.com</marquee>
    </div>
  )
}

export default Footer
