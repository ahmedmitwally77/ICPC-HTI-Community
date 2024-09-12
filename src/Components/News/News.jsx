import React from 'react'
import style from './News.module.css'
import img from '../../Images/icpc core 2024.jpg'
import AnimatedText from '../AnimatedText'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick'


const News = () => {
    var settings = {
        dots: true,
        autoplay:true,
        arrows:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1,  
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <div className='news'>
        <div className={style.features} >
            <AnimatedText text="News & Events" ClassName='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500'/>
           
            <div className="container">
                <Slider {...settings}>
                <div>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className={`${style.box} ${style.quality}  `}>
                    <div className={style.imgHolder}><img decoding="async" src={img} alt="icpc hti events" /></div>
                    <h2>Quality</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="#">More</a>
                    </div>
                </div>
                <div>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className={`${style.box} ${style.time} mx-3 `}>
                    <div className={style.imgHolder}><img decoding="async" src={img} alt="icpc hti events" /></div>
                    <h2>Quality</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="#">More</a>
                    </div>
                </div>
                <div>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className={`${style.box} ${style.passion} mx-3 `}>
                    <div className={style.imgHolder}><img decoding="async" src={img} alt="icpc hti events" /></div>
                    <h2>Quality</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="#">More</a>
                    </div>
                </div>
                <div>
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className={`${style.box} ${style.quality}  mx-3`}>
                    <div className={style.imgHolder}><img decoding="async" src={img} alt="icpc hti events" /></div>
                    <h2>Quality</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
                    <a href="#">More</a>
                    </div>
                </div>
                
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default News