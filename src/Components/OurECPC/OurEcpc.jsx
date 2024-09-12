import React from 'react'
import AnimatedText from '../AnimatedText'
import ecpcImg from '../../Images/IMG_3229.jpg' 
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurEcpc = () => {
  return (
    <div className='Ecpc bg-light rounded-3xl relative -top-14'>
        <div className="container">
            <div className="ourEcpc py-32">
                <div className="row justify-center align-items-center ">
                    <div className="col-md-6">
                        <AnimatedText text="_Our Ecpc" ClassName='text-start !text-4xl !text-blue-500'/>
                        <p className=''>
                            Lorem ipsum dolor sit amet consectetur. Phasellus et egestas feugiat phasellus quis. Vitae amet odio 
                            consectetur diam aliquet. Et porttitor sit ut non adipiscing nibh. Augue neque sapien nisi etiam.Lorem ipsum dolor
                            sit amet consectetur. Phasellus et egestas feugiat phasellus quis. Vitae amet odio consectetur diam aliquet. Et
                            porttitor sit ut non adipiscing nibh. Augue neque sapien nisi etiam.
                            porttitor sit ut non adipiscing nibh. Augue neque sapien nisi etiam.
                        </p>
                    </div>
                    <div  className="col-md-6 mt-3">
                        <img className='rounded-3xl' src={ecpcImg} alt="icpc hti community in ecpc" />
                    </div>
                </div>
            </div>

            <div className="booking">
                <div className="row">
                    <div className="col-md-4 sm:my-5 xs:my-5">
                        <div   data-aos-duration="3000" className="card1 bg-gray-200 p-4 border-none rounded-3xl shadow-2xl hover:shadow-sm">
                            <h3 className='text-blue-500 mb-2 '>Book your housing</h3>
                            <p className='text-gray-600 py-3'>Lorem ipsum dolor sit amet consectetur. Phasellus et egestas feugiat</p>
                            <div className="footerCard d-flex justify-between align-items-center">
                                <p className='!text-blue-400 h5'>Price = 0</p>
                                <p className='border rounded-xl px-2 py-1'>Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 sm:my-5 xs:my-5">
                        <div   data-aos-duration="3000" className="card1 bg-gray-200 p-4 border-none rounded-3xl shadow-2xl hover:shadow-sm">
                            <h3 className='text-blue-500 mb-2 '>Book your housing</h3>
                            <p className='text-gray-600 py-3'>Lorem ipsum dolor sit amet consectetur. Phasellus et egestas feugiat</p>
                            <div className="footerCard d-flex justify-between align-items-center">
                                <p className='!text-blue-400 h5'>Price = 0</p>
                                <p className='border rounded-xl px-2 py-1'>Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 sm:my-5 xs:my-5">
                        <div   data-aos-duration="3000"  className="card1 bg-gray-200 p-4 border-none rounded-3xl shadow-2xl hover:shadow-sm">
                            <h3 className='text-blue-500 mb-2 '>Book your housing</h3>
                            <p className='text-gray-600 py-3'>Lorem ipsum dolor sit amet consectetur. Phasellus et egestas feugiat</p>
                            <div className="footerCard d-flex justify-between align-items-center">
                                <p className='!text-blue-400 h5'>Price = 0</p>
                                <p className='border rounded-xl px-2 py-1'>Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurEcpc