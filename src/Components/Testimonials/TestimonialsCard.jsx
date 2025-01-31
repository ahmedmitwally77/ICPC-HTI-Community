import React from 'react'
import style from './Testimonials.module.css'
import img from '../../Images/me.webp'


const TestimonialsCard = ({text , name , rate}) => {

    const maxRate = 5; // الحد الأقصى للتقييم

  return (
    <div className='TestimonialsCard'>
         <div class={`${style.box} mx-1 relative  bg-light/90`}>
                    
                    <div class={style.rate}>
                        <div>
                            {/* النجوم المملوءة */}
                            {Array.from({ length: rate }, (_, index) => (
                            <i key={index} className="filled fas fa-star fs-4"></i>
                            ))}
                            {/* النجوم غير المملوءة */}
                            {Array.from({ length: maxRate - rate }, (_, index) => (
                            <i key={index + rate} className="far fa-star fs-4"></i>
                            ))}
                        </div>
                    </div>
                    <p>
                        {text}
                    </p>
                    <div className={`${style.cardFooter} d-flex justify-start align-items-center w-100`}>
                        <img className='w-[40px] h-[40px] rounded-circle ' src={img} alt="ziad" />
                        <div className='ms-3'>
                            <h4 className='m-0 h5'>{name}</h4>
                            <p className='m-0 fs-6 '>Fullstack dedveloper</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default TestimonialsCard