import React from 'react'
import AnimatedText from '../AnimatedText'
import me from '../../Images/me.webp'
import line2 from '../../Images/line 2.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurFounders = () => {
  return (
    <div className='ourFounder bg-dark/10 shadow-top-only rounded-3xl relative -top-14'>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <AnimatedText text="Our Founders" ClassName='text-center !text-6xl !text-blue-600 my-16'/>
        <div className="container p-16">
            <div className="row justify-center align-items-center">
                <div data-aos="fade-right" className="col-md-3 col-sm-4">
                    <div className="card relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                        <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                            <h3>ziad essa</h3>
                            <p>CoLeader of community</p>
                        </div>
                        <img className='w-100 hover:scale-105 transition-transform' src={me} alt="" />
                    </div>
                </div>
                <div data-aos="fade-up" className="col-md-3 col-sm-4">
                    <div className="card sm:mt-16 relative bottom-10 d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                        <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                            <h3>ziad essa</h3>
                            <p>Leader of community</p>
                        </div>
                        <img className='w-100 hover:scale-105 transition-transform' src={me} alt="" />
                    </div>
                </div>
                <div data-aos="fade-left" className="col-md-3 col-sm-4">
                    <div className="card relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                        <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                            <h3>ziad essa</h3>
                            <p>CoLeader of community</p>
                        </div>
                        <img className='w-100 hover:scale-105 transition-transform' src={me} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurFounders