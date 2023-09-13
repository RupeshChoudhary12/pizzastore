import React,{useRef,useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "../hero/swip.css"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import one from '../assets/1.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import four from '../assets/4.png'
import five from '../assets/5.png'
import six from '../assets/6.png'
import seven from '../assets/7.png'
import onee from '../assets/10.png'
import { Autoplay, Pagination, Navigation } from 'swiper';

const NewSwiper = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (
    <div>
       <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide> <h1>Burger</h1>
          <img  className='slide'  src={one}/>
          </SwiperSlide>
       
          <SwiperSlide> <h1>Roll Thali</h1>
          <img  className='slide'  src={two}/>
          </SwiperSlide>

          <SwiperSlide> <h1>Rice </h1>
          <img  className='slide'  src={three}/>
          </SwiperSlide>

          <SwiperSlide> <h1>Pastta</h1>
          <img  className='slide'  src={four}/>
          </SwiperSlide>

          <SwiperSlide> <h1>Burger</h1>
          <img  className='slide'  src={six}/>
          </SwiperSlide>

          <SwiperSlide> <h1>chips Fingur</h1>
          <img  className='slide'  src={seven}/>
          </SwiperSlide>

          <SwiperSlide> <h1>Nann</h1>
          <img  className='slide'  src={onee}/>
          </SwiperSlide>

          <SwiperSlide> <h1>tandori nann</h1>
          <img  className='slide'  src={five}/>
          </SwiperSlide>

          <SwiperSlide> <h1>Burger</h1>
          <img  className='slide'  src='src/assets/5.png'/>
          </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default NewSwiper
