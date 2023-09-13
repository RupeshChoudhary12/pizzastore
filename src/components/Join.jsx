import React from 'react'
import '../hero/join.css'

const Join = () => {
  return (
    <div className='join'>
     <div className='joinme'>
     <h1>Join Our Member And Get <br/> Discount <span>UP To 50%</span></h1>
      <div className='inout'>
      <input placeholder='Enter Your Email' type="text" />
      <button className='sub'>Submit</button>

      </div>
     </div>
    </div>
    

  )
}

export default Join
