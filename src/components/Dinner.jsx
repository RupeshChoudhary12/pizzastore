import React from 'react'
import '../hero/dinner.css'
import img from '../assets/10.png'
import cartoon from '../assets/cartoon.png'




const Dinner = () => {


  return (
    <div className='dinner'>
        <div  className='plan'>
            <img src={img} alt="" />
        </div>
        <div className='tabel'>
            <h1>Do You Have Any Dinner <br/>Plan Today? <span>Reserve Your <br/> Table</span></h1>
             <p>Food Is Any Subtance Consumed To Provide Nutritional Support <br/> For An Organism Food is Usually Of Plant ,Animal , or Fungal <br/>
             Origin</p>
             <button className='fungal'>Make Reservation</button>
        </div>

              <img id='cartoon' src={cartoon} alt="" />


      
    </div>
  )
}

export default Dinner
