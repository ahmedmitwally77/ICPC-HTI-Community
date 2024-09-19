import React from 'react'
import AnimatedText from '../AnimatedText'
import line2 from '../../Images/line 2.jpeg'
import me from '../../Images/me.webp'
import Slider from 'react-slick'

const TalentedMember = () => {

    var settings = {
        dots: false,
        autoplay:true,
        arrows:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 2,  
                slidesToScroll: 1,
                dots: true,
              }
            }
          ]
      };

  return (
    <div className='talentedMembers bg-dark/10 shadow-top-only rounded-3xl relative -top-14'>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <AnimatedText text="Talented Members" ClassName='text-center !text-6xl !text-blue-600 my-16'/>
        <div className="container py-16 pb-32">
            <Slider {...settings}>
            <div className=''>
                <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                    <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                        <h3>ziad essa</h3>
                    </div>
                    <img className='w-100 hover:scale-105 transition-transform' src={me} alt="" />
                </div>
            </div>
            <div className=''>
                <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                    <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                        <h3>ziad essa</h3>
                    </div>
                    <img className='w-100 hover:scale-105 transition-transform' src={me} alt="" />
                </div>
            </div>
            <div className=''>
                <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                    <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                        <h3>ziad essa</h3>
                    </div>
                    <img className='w-100 hover:scale-105 transition-transform' src={me} alt="" />
                </div>
            </div>
            <div className=''>
                <div className="card mx-3 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                    <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                        <h3>ziad essa</h3>
                    </div>
                    <img className='w-100 hover:scale-105 transition-transform' src={me} alt="" />
                </div>
            </div>
            </Slider>
        </div>
    </div>
  )
}

export default TalentedMember