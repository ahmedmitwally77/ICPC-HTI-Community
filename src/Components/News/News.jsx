import React from 'react'
import style from './News.module.css'
import img from '../../Images/icpc core 2024.jpg'
import AnimatedText from '../AnimatedText'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick'
import { Link } from 'react-router-dom';
import bg from '../../Images/blob-scene-haikei (1).svg'

const News = () => {
    var settings = {
        dots: true,
        autoplay:true,
        arrows:true,
        speed: 500,
        slidesToShow: 1,
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
    <div className='news bg-light relative py-32 mb-16'>
        <div  className=' top-0'>
            <AnimatedText text="News & Events" ClassName='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8 text-blue-500'/>
            <div className="container">
                <Slider {...settings}>
                <div>
                    <div  className='d-flex justify-center align-items-center'>
                            <div className="row justify-center align-items-center w-[80%]">
                                <div className="col-md-6">
                                    <img className='rounded-xl' decoding="async" src={img} alt="icpc hti events" />
                                </div>
                                <div className="col-md-6">
                                    <h2>Lorem ipsum dolor</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                    </p>
                                    <Link className='btn btn-dark' to={'/'}>Read More</Link>
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                    <div  className='d-flex justify-center align-items-center'>
                            <div className="row justify-center align-items-center w-[80%]">
                                <div className="col-md-6">
                                    <img className='rounded-xl' decoding="async" src={img} alt="icpc hti events" />
                                </div>
                                <div className="col-md-6">
                                    <h2>Lorem ipsum dolor</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                    </p>
                                    <Link className='btn btn-dark' to={'/'}>Read More</Link>
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                    <div  className='d-flex justify-center align-items-center'>
                            <div className="row justify-center align-items-center w-[80%]">
                                <div className="col-md-6">
                                    <img className='rounded-xl' decoding="async" src={img} alt="icpc hti events" />
                                </div>
                                <div className="col-md-6">
                                    <h2>Lorem ipsum dolor</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                    </p>
                                    <Link className='btn btn-dark' to={'/'}>Read More</Link>
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                    <div  className='d-flex justify-center align-items-center'>
                            <div className="row justify-center align-items-center w-[80%]">
                                <div className="col-md-6">
                                    <img className='rounded-xl' decoding="async" src={img} alt="icpc hti events" />
                                </div>
                                <div className="col-md-6">
                                    <h2>Lorem ipsum dolor</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima
                                    </p>
                                    <Link className='btn btn-dark' to={'/'}>Read More</Link>
                                </div>
                            </div>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default News