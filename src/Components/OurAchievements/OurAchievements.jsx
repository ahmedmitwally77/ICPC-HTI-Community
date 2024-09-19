import React from 'react'
import AnimatedText from '../AnimatedText'
import img from '../../Images/IMG_3229 full.webp'
import line1 from '../../Images/line 1.jpeg'
import line2 from '../../Images/line 2.jpeg'
import Slider from 'react-slick'


const OurAchievements = () => {
    var settings = {
        dots: false,
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
    <div className='ourAchievements bg-light shadow-top-only rounded-3xl relative -top-14 '>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <div className="container py-16 ">
            <AnimatedText text="Our Achievements" ClassName='text-center !text-6xl !text-blue-600 my-10'/>
                <Slider {...settings}>
                <div>
                    <div  className='d-flex justify-center align-items-center'>
                            <div className="row justify-center align-items-center w-100">
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
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                    <div  className='d-flex justify-center align-items-center'>
                            <div className="row justify-center align-items-center w-100">
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
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                    <div  className='d-flex justify-center align-items-center'>
                            <div className="row justify-center align-items-center w-100">
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
                                </div>
                            </div>
                    </div>
                </div>
                <div>
                    <div  className='d-flex justify-center align-items-center'>
                            <div className="row justify-center align-items-center w-100">
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
                                </div>
                            </div>
                    </div>
                </div>
                </Slider>
        </div>
        <div className='line d-flex justify-center align-items-center h-25 absolute right-10 bottom-16  d-none d-md-block '>
            <img className='rounded-2xl h-[100%]' src={line1} alt="line" />
        </div>
    </div>
  )
}

export default OurAchievements