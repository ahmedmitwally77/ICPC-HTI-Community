import React from 'react'
import style from './Testimonials.module.css'
import img from '../../Images/me.webp'
import Slider from 'react-slick'
import AnimatedText from '../AnimatedText'
import TestimonialsCard from './TestimonialsCard'
import MainHeading from '../MainHeading/MainHeading'

const Testimonials = () => {

    var settings = {
        dots: false,
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
    <div className='testimonials py-28 '>
        {/* <AnimatedText text="Testimonials" ClassName='text-center mb-5 !text-6xl !text-blue-600 '/> */}
      <div class="container">
        <MainHeading title1='' title2='Testimonials'/>
        <Slider className='mt-16' {...settings}>
           
            <div className=''>
                <TestimonialsCard 
                    name="ziad essa" 
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus"
                    rate="4"
                />
            </div>
            <div className=''>
                <TestimonialsCard 
                        name="ziad essa" 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus"
                        rate="2"
                />
            </div>
            <div className=''>
                <TestimonialsCard 
                        name="ziad essa" 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus"
                        rate="5"
                />
            </div>
            <div className=''>
                <TestimonialsCard 
                        name="ziad essa" 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natusquaerat ducimus"
                        rate="3"
                />
            </div>
            
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials