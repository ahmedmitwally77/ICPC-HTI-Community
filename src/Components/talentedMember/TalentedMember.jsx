import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import line2 from '../../Images/line 2.jpeg'
import Slider from 'react-slick'
import { AuthContext } from '../../Context/AuthContext'
import MainHeading from '../MainHeading/MainHeading';
import img from '../../Images/me.webp'

const TalentedMember = () => {

    const [articles, setArticles] = useState([]);
    

    var settings = {
        className: "center",
        centerMode: true,
        dots: true,
        autoplay:true,
        arrows:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 768,  
              settings: {
                slidesToShow: 1,  
                slidesToScroll: 1,
                dots: true,
              },
              
            },
            
          ]
      };

  return (
    <div className='talentedMembers bg-light shadow-top-only rounded-3xl '>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        {/* <AnimatedText text="Talented Members" ClassName='text-center !text-6xl !text-blue-600  my-16'/> */}
        <div className="container mt-32">
          <MainHeading title1='' title2='Talented Members'/>
        </div>
          
        <div className=" py-16 pb-32">
            <Slider {...settings}>
                    <div className=''>
                    {/* {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>} */}
                    <div className="card flex flex-col justify-center align-items-center border-none shadowBlue p-3 md:p-1 sm:p-1 m-3 bg-dark/90 rounded-xl">
                      <div className="image   mb-4  rounded-xl ">
                        <img className=' w-[350px] h-[250px] md:w-[250px] sm:w-[250px] object-cover rounded-xl' src={img} alt="ziad essa" />
                      </div>
                      <div className="text text-center ">
                        <h3 className='flex align-items-center justify-center'>Ziad essa <i className="filled fas fa-star fs-6 ms-1"></i></h3>
                        <p>Total Problems: <span className='text-blue-700 fw-bold'>277</span></p>
                      </div>
                    </div>
                    </div>  
                    <div className=''>
                    {/* {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>} */}
                    <div className="card flex flex-col justify-center align-items-center border-none shadowBlue p-3 md:p-1 sm:p-1 m-3 bg-dark/90 rounded-xl">
                      <div className="image   mb-4  rounded-xl ">
                        <img className=' w-[350px] h-[250px] md:w-[250px] sm:w-[250px] object-cover rounded-xl' src={img} alt="ziad essa" />
                      </div>
                      <div className="text text-center ">
                        <h3 className='flex align-items-center justify-center'>Ziad essa <i className="filled fas fa-star fs-6 ms-1"></i></h3>
                        <p>Total Problems: <span className='text-blue-700 fw-bold'>277</span></p>
                      </div>
                    </div>
                    </div>  
                    <div className=''>
                    {/* {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>} */}
                    <div className="card flex flex-col justify-center align-items-center border-none shadowBlue p-3 md:p-1 sm:p-1 m-3 bg-dark/90 rounded-xl">
                      <div className="image   mb-4  rounded-xl ">
                        <img className=' w-[350px] h-[250px] md:w-[250px] sm:w-[250px] object-cover rounded-xl' src={img} alt="ziad essa" />
                      </div>
                      <div className="text text-center ">
                        <h3 className='flex align-items-center justify-center'>Ziad essa <i className="filled fas fa-star fs-6 ms-1"></i></h3>
                        <p>Total Problems: <span className='text-blue-700 fw-bold'>277</span></p>
                      </div>
                    </div>
                    </div>  
                    <div className=''>
                    {/* {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>} */}
                    <div className="card flex flex-col justify-center align-items-center border-none shadowBlue p-3 md:p-1 sm:p-1 m-3 bg-dark/90 rounded-xl">
                      <div className="image   mb-4  rounded-xl ">
                        <img className=' w-[350px] h-[250px] md:w-[250px] sm:w-[250px] object-cover rounded-xl' src={img} alt="ziad essa" />
                      </div>
                      <div className="text text-center ">
                        <h3 className='flex align-items-center justify-center'>Ziad essa <i className="filled fas fa-star fs-6 ms-1"></i></h3>
                        <p>Total Problems: <span className='text-blue-700 fw-bold'>277</span></p>
                      </div>
                    </div>
                    </div>  
                    <div className=''>
                    {/* {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(article.id)}>Delete</button>:<></>} */}
                    <div className="card flex flex-col justify-center align-items-center border-none shadowBlue p-3 md:p-1 sm:p-1 m-3 bg-dark/90 rounded-xl">
                      <div className="image   mb-4  rounded-xl ">
                        <img className=' w-[350px] h-[250px] md:w-[250px] sm:w-[250px] object-cover rounded-xl' src={img} alt="ziad essa" />
                      </div>
                      <div className="text text-center ">
                        <h3 className='flex align-items-center justify-center'>Ziad essa <i className="filled fas fa-star fs-6 ms-1"></i></h3>
                        <p>Total Problems: <span className='text-blue-700 fw-bold'>277</span></p>
                      </div>
                    </div>
                    </div>  
            </Slider>
        </div>
    </div>
  )
}

export default TalentedMember