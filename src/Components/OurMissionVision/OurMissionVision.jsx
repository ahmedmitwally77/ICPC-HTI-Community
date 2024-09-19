import React from 'react'
import AnimatedText from '../AnimatedText'
import img1 from '../../Images/im1.webp'
import img2 from '../../Images/img2.webp'
import line2 from '../../Images/line 2.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurMissionVision = () => {
  return (
    <div className='ourMissionVision bg-dark/10 shadow-top-only rounded-3xl relative -top-14 '>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <div className="container py-32">
            <AnimatedText text="Our Mission and vision" ClassName='text-center !text-5xl !text-blue-600'/>
            <div className="row justify-center">
                <div data-aos="fade-right" className="col-md-7 py-16">
                    <div className="card p-4 bg-dark/50 shadow-xl hover:bg-dark/40 !border-none rounded-xl duration-1000">
                        <div className="upperCard d-flex justify-start align-items-center ">
                            <img className='w-[15%] h-[10%] rounded-full m-2' src={img1} alt="" />
                            <h4 className='!text-4xl !text-dark/75 fw-bold'>Our Mission</h4>
                        </div>
                        <p className='text-dark/70 leading-loose'>Lorem ipsum dolor sit amet consectetur. Dolor quis justo non 
                            at morbi suspendisse lacus tortor non. Nunc non convallis id commodo. 
                            m ipsum dolor sit amet consectetur. Dolor quis justo non at morbi suspendisse 
                            lacus tortor non. Nunc non convallis id commodo.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-md-7">
                    <div className="card p-4 bg-dark/50 shadow-xl hover:bg-dark/40 !border-none rounded-xl duration-1000 ">
                        <div className="upperCard d-flex justify-start align-items-center ">
                            <img className='w-[15%] h-[10%] rounded-full m-2' src={img2} alt="" />
                            <h4 className='!text-4xl !text-dark/75 fw-bold'>Our Mission</h4>
                        </div>
                        <p className='text-dark/70 leading-loose'>Lorem ipsum dolor sit amet consectetur. Dolor quis justo non 
                            at morbi suspendisse lacus tortor non. Nunc non convallis id commodo. 
                            m ipsum dolor sit amet consectetur. Dolor quis justo non at morbi suspendisse 
                            lacus tortor non. Nunc non convallis id commodo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='line d-flex justify-center align-items-center h-25 absolute right-10 bottom-16  '>
            <img className='rounded-2xl h-[100%]' src={line1} alt="line" />
        </div> */}
    </div>
  )
}

export default OurMissionVision