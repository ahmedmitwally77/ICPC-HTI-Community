import React from 'react'
import style from './Testimonials.module.css'
import img from '../../Images/me.png'
import Slider from 'react-slick'

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
    var settings2 = {
        dots: false,
        autoplay:true,
        arrows:true,
        speed: 1000,
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
      <div class="">
        <Slider {...settings}>
           
            <div className=''>
                <div class={`${style.box} mx-1 relative  bg-light/90`}>
                    {/* <div className=''>
                        <i class="fa-solid fa-quote-left bg-blue-500 p-3 text-white absolute -top-4 w-fit rounded-circle "></i>
                    </div> */}
                    <div class={style.rate}>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="far fa-star fs-4"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                    <div className={`${style.cardFooter} d-flex justify-start align-items-center w-100`}>
                        <img className='w-[40px] h-[40px] rounded-circle ' src={img} alt="ziad" />
                        <div className='ms-3'>
                            <h4 className='m-0 h5'>ziad essa</h4>
                            <p className='m-0 fs-6 '>Fullstack dedveloper</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div class={`${style.box} mx-1 relative  bg-light/90`}>
                    {/* <div className=''>
                        <i class="fa-solid fa-quote-left bg-blue-500 p-3 text-white absolute -top-4 w-fit rounded-circle "></i>
                    </div> */}
                    <div class={style.rate}>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="far fa-star fs-4"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                    <div className={`${style.cardFooter} d-flex justify-start align-items-center w-100`}>
                        <img className='w-[40px] h-[40px] rounded-circle ' src={img} alt="ziad" />
                        <div className='ms-3'>
                            <h4 className='m-0 h5'>ziad essa</h4>
                            <p className='m-0 fs-6 '>Fullstack dedveloper</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div class={`${style.box} mx-1 relative  bg-light/90`}>
                    {/* <div className=''>
                        <i class="fa-solid fa-quote-left bg-blue-500 p-3 text-white absolute -top-4 w-fit rounded-circle "></i>
                    </div> */}
                    <div class={style.rate}>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="far fa-star fs-4"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                    <div className={`${style.cardFooter} d-flex justify-start align-items-center w-100`}>
                        <img className='w-[40px] h-[40px] rounded-circle ' src={img} alt="ziad" />
                        <div className='ms-3'>
                            <h4 className='m-0 h5'>ziad essa</h4>
                            <p className='m-0 fs-6 '>Fullstack dedveloper</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div class={`${style.box} mx-1 relative shadow-2xl bg-light/90`}>
                    {/* <div className=''>
                        <i class="fa-solid fa-quote-left bg-blue-500 p-3 text-white absolute -top-4 w-fit rounded-circle "></i>
                    </div> */}
                    <div class={style.rate}>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="far fa-star fs-4"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                    <div className={`${style.cardFooter} d-flex justify-start align-items-center w-100`}>
                        <img className='w-[40px] h-[40px] rounded-circle ' src={img} alt="ziad" />
                        <div className='ms-3'>
                            <h4 className='m-0 h5'>ziad essa</h4>
                            <p className='m-0 fs-6 '>Fullstack dedveloper</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </Slider>
        <Slider className='mt-3' {...settings2}>
           
            <div className=''>
                <div class={`${style.box} mx-1 relative  bg-light/90`}>
                    {/* <div className=''>
                        <i class="fa-solid fa-quote-left bg-blue-500 p-3 text-white absolute -top-4 w-fit rounded-circle "></i>
                    </div> */}
                    <div class={style.rate}>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="far fa-star fs-4"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                    <div className={`${style.cardFooter} d-flex justify-start align-items-center w-100`}>
                        <img className='w-[40px] h-[40px] rounded-circle ' src={img} alt="ziad" />
                        <div className='ms-3'>
                            <h4 className='m-0 h5'>ziad essa</h4>
                            <p className='m-0 fs-6 '>Fullstack dedveloper</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div class={`${style.box} mx-1 relative  bg-light/90`}>
                    {/* <div className=''>
                        <i class="fa-solid fa-quote-left bg-blue-500 p-3 text-white absolute -top-4 w-fit rounded-circle "></i>
                    </div> */}
                    <div class={style.rate}>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="far fa-star fs-4"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                    <div className={`${style.cardFooter} d-flex justify-start align-items-center w-100`}>
                        <img className='w-[40px] h-[40px] rounded-circle ' src={img} alt="ziad" />
                        <div className='ms-3'>
                            <h4 className='m-0 h5'>ziad essa</h4>
                            <p className='m-0 fs-6 '>Fullstack dedveloper</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div class={`${style.box} mx-1 relative  bg-light/90`}>
                    {/* <div className=''>
                        <i class="fa-solid fa-quote-left bg-blue-500 p-3 text-white absolute -top-4 w-fit rounded-circle "></i>
                    </div> */}
                    <div class={style.rate}>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="far fa-star fs-4"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                    <div className={`${style.cardFooter} d-flex justify-start align-items-center w-100`}>
                        <img className='w-[40px] h-[40px] rounded-circle ' src={img} alt="ziad" />
                        <div className='ms-3'>
                            <h4 className='m-0 h5'>ziad essa</h4>
                            <p className='m-0 fs-6 '>Fullstack dedveloper</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div class={`${style.box} mx-1 relative shadow-2xl bg-light/90`}>
                    {/* <div className=''>
                        <i class="fa-solid fa-quote-left bg-blue-500 p-3 text-white absolute -top-4 w-fit rounded-circle "></i>
                    </div> */}
                    <div class={style.rate}>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="filled fas fa-star fs-4"></i>
                        <i class="far fa-star fs-4"></i>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                        quaerat ducimus
                    </p>
                    <div className={`${style.cardFooter} d-flex justify-start align-items-center w-100`}>
                        <img className='w-[40px] h-[40px] rounded-circle ' src={img} alt="ziad" />
                        <div className='ms-3'>
                            <h4 className='m-0 h5'>ziad essa</h4>
                            <p className='m-0 fs-6 '>Fullstack dedveloper</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials