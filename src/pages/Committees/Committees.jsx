import React from 'react'
import AnimatedText from '../../Components/AnimatedText'
import HomeImg from '../../Images/IMG_3229 full.webp'
import line2 from '../../Images/line 2.jpeg'
import Tech from '../../Images/img2.webp'
import me from '../../Images/me.webp'
import Slider from 'react-slick'
import TransitionEffect from '../../Components/TransitionEffect'


const Committees = () => {


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


  return <>
    <TransitionEffect/>
    <div className='committees  relative overflow-x-hidden'>
        <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="Committees" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bg-dark/50 w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
        </div>

        <div className="committee bg-light rounded-3xl relative -top-14">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>

            <div className="container py-16">
                <AnimatedText text="Our Committees" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
                <div className="row my-16 pt-16">
                    <div className="col-md-3">
                        <div className="box shadow rounded-2xl p-4 relative bg-blue-500 hover:bg-yellow-500 d-flex flex-col justify-center align-items-center">
                            <img className='w-50 absolute -top-16 rounded-2xl right-20' src={Tech} alt="" />
                            <h3 className='text-light my-5 fw-bold '>Tech Committee</h3>
                            <a className='bg-white text-blue-500 p-2 rounded-full px-3 text-decoration-none fw-bold' href="#tech">More</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box shadow rounded-2xl p-4 relative bg-blue-500 hover:bg-yellow-500 d-flex flex-col justify-center align-items-center">
                            <img className='w-50 absolute -top-16 rounded-2xl right-20' src={Tech} alt="" />
                            <h3 className='text-light my-5 fw-bold '>HR Committee</h3>
                            <a className='bg-white text-blue-500 p-2 rounded-full px-3 text-decoration-none fw-bold' href="#hr">More</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box shadow rounded-2xl p-4 relative bg-blue-500 hover:bg-yellow-500 d-flex flex-col justify-center align-items-center">
                            <img className='w-50 absolute -top-16 rounded-2xl right-20' src={Tech} alt="" />
                            <h3 className='text-light my-5 fw-bold '>Training Committee</h3>
                            <a className='bg-white text-blue-500 p-2 rounded-full px-3 text-decoration-none fw-bold' href="#training">More</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="box shadow rounded-2xl p-4 relative bg-blue-500 hover:bg-yellow-500 d-flex flex-col justify-center align-items-center">
                            <img className='w-50 absolute -top-16 rounded-2xl right-20' src={Tech} alt="" />
                            <h3 className='text-light my-5 fw-bold '>Board </h3>
                            <a className='bg-white text-blue-500 p-2 rounded-full px-3 text-decoration-none fw-bold' href="#board">More</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        <div id='tech' className="tech">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>
            <AnimatedText text="Tech Committee" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
            
            <div className="ourMission container">
                <AnimatedText text="What is our mission!" ClassName='text-start ms-3 !text-4xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <ul className='text-dark/75 '>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur. sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet cons</li>
                </ul>
            </div>

            <div className="ourTeam py-16 container">
                <AnimatedText text="Our Team" ClassName='text-start ms-3 !text-5xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
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

        <div id='hr' className="hr">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>
            <AnimatedText text="Hr Committee" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
            
            <div className="ourMission container">
                <AnimatedText text="What is our mission!" ClassName='text-start ms-3 !text-4xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <ul className='text-dark/75 '>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur. sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet cons</li>
                </ul>
            </div>

            <div className="ourTeam py-16 container">
                <AnimatedText text="Our Team" ClassName='text-start ms-3 !text-5xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
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

        <div id='training' className="training">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>
            <AnimatedText text="Training Committee" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
            
            <div className="ourMission container">
                <AnimatedText text="What is our mission!" ClassName='text-start ms-3 !text-4xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <ul className='text-dark/75 '>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur. sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet cons</li>
                </ul>
            </div>

            <div className="ourTeam py-16 container">
                <AnimatedText text="Our Team" ClassName='text-start ms-3 !text-5xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
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

        <div id='board' className="board">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>
            <AnimatedText text="Board" ClassName='my-16 mb-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark '/>
            
            <div className="ourMission container">
                <AnimatedText text="What is our mission!" ClassName='text-start ms-3 !text-4xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
                <ul className='text-dark/75 '>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur. sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</li>
                    <li className='p-1 fs-6'>- Lorem ipsum dolor sit amet cons</li>
                </ul>
            </div>

            <div className="ourTeam py-16 container">
                <AnimatedText text="Our Team" ClassName='text-start ms-3 !text-5xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500 '/>
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

    </div>
  </>
}

export default Committees