import React from 'react'
import AnimatedText from '../AnimatedText'
import line2 from '../../Images/line 2.jpeg'
import Slider from 'react-slick'
import img from '../../Images/icpc core 2024.webp'
import { Link } from 'react-router-dom'

const Gallary = () => {

    var settings = {
        dots: true,
        autoplay:true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1,  
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
      };
    var settings1 = {
        dots: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1,  
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
      };
    var settings2 = {
        dots: true,
        autoplay:true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1,  
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
      };

  return (
    <div className='talentedMembers bg-light shadow-top-only rounded-3xl relative -top-14'>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <AnimatedText text="Our Gallary" ClassName='text-center !text-6xl !text-blue-600 my-16'/>
        <div className="  py-16 pb-32">
            <Slider className='mt-4' {...settings}>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            </Slider>
            <Slider className='my-4' {...settings1}>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            </Slider>
            <Slider {...settings2}>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            <div className=''>
                <div className="image mx-2">
                    <img className='rounded-xl ' src={img} alt="icpc hti gallary" />
                </div>
            </div>
            </Slider>
            <div className="showMore mt-10 d-flex justify-center align-items-center">
                <Link className='text-center mt-10 btn grade2  ' to={'/gallary'}>Show more</Link>
            </div>
        </div>
    </div>
  )
}

export default Gallary