import React from 'react'

const Order = () => {
  return (
    <section class="location" id="order">
        <h1 class="heading">order now</h1>

        <form action="">

            <div class="box-container">

                <div class="box">
                    <div class="inputBox">
                        <span>full name</span>
                        <input type="text" placeholder="enter your name"/>
                    </div>

                    <div class="inputBox">
                        <span>Parathaa Store</span>
                        <input type="text" placeholder="Parathaa you want"/>
                    </div>

                    <div class="inputBox">
                        <span>order details</span>
                        <input type="text" placeholder="verrytiy"/>
                    </div>

                    <div class="inputBox">
                        <span>your address</span>
                        <textarea name="" placeholder="enter your address" cols="30" rows="10"></textarea>
                    </div>

                </div>

                <div class="box">
                    <div class="inputBox">
                        <span>phone number</span>
                        <input type="number" placeholder="enter your phone number"/>
                    </div>

                    <div class="inputBox">
                        <span>quantity</span>
                        <input type="number" placeholder="how many you want"/>
                    </div>

                    <div class="inputBox">
                        <span>when you want</span>
                        <input type="datetime-local"/>
                    </div>

                    {/* <div class="inputBox">
                        <span>our address</span>
                        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4914.932059366301!2d67.06422978705596!3d24.96907002303995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340eb31897823%3A0x125deca14e8d41d4!2sMehran%20Ice%20Cream!5e0!3m2!1sen!2s!4v1658145845041!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}

                </div>

            </div>
            <input type="submit" value="order now" class="btn"/>
        </form>

    </section>

  )
}

export default Order
