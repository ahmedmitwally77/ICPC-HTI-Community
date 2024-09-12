import React from 'react'
import style from './Testimonials.module.css'
import img from '../../Images/me.png'
import Slider from 'react-slick'

const Testimonials = () => {

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
    <div className='testimonials py-32'>
      <div class="container">
        <Slider {...settings}>
            <div className=''>
                <div class={`${style.box} mx-1`}>
                    <img  src={img} alt="vector" />
                    <h3>ziad essa</h3>
                    <span class={style.title}>Full Stack Developer</span>
                    <div class={style.rate}>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                </div>
            </div>
            <div className=''>
                <div class={`${style.box} mx-1`}>
                    <img  src={img} alt="vector" />
                    <h3>ziad essa</h3>
                    <span class={style.title}>Full Stack Developer</span>
                    <div class={style.rate}>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                </div>
            </div>
            <div className=''>
                <div class={`${style.box} mx-1`}>
                    <img  src={img} alt="vector" />
                    <h3>ziad essa</h3>
                    <span class={style.title}>Full Stack Developer</span>
                    <div class={style.rate}>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                </div>
            </div>
            <div className=''>
                <div class={`${style.box} mx-1`}>
                    <img  src={img} alt="vector" />
                    <h3>ziad essa</h3>
                    <span class={style.title}>Full Stack Developer</span>
                    <div class={style.rate}>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="filled fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                </div>
            </div>
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials