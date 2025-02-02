import React from 'react'
import AnimatedText from '../AnimatedText'
import img1 from '../../Images/im1.webp'
import img2 from '../../Images/img2.webp'
import line2 from '../../Images/line 2.jpeg'
import { motion } from 'framer-motion'
import MainHeading from '../MainHeading/MainHeading'
import icpcHti from '../../Images/icpc hti.jpeg'

const OurMissionVision = () => {
  return (
    <div className='ourMissionVision bg-dark/10 shadow-top-only rounded-3xl relative -top-14 '>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <div className="container py-32">
            <MainHeading title1="Our" title2="Mission & Vision" />

            <div className="flex flex-wrap justify-center w-5/6 mx-auto">
                <div  className="w-1/2 sm:w-full md:w-full lg:w-full sm:px-0 md:px-0 lg:px-0 2xl:px-0 pr-4 ">
                    <img src={icpcHti} alt="icpc hti Logo" className='w-[100%] h-[100%] rounded-2xl object-cover'  />
                </div>
                <div  className="w-1/2 sm:w-full md:w-full lg:w-full sm:mt-8 md:mt-8 lg:mt-8 2xl:mt-8  bg-white rounded-2xl overflow-hidden ">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="card p-4 bg-dark/50  hover:bg-dark/40 !border-none rounded-xl duration-1000">
                        <div className="upperCard d-flex justify-start align-items-center pb-2 relative after:absolute after:w-full after:h-[2px] after:left-0 after:bg-[#FEBA12] after:bottom-0 before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:left-0 before:bg-[#FEBA12] before:-bottom-2 before:translate-x-[-50%]">
                            <img className='w-[15%] h-[10%] rounded-full m-2' src={img1} alt="" />
                            <h4 className='!text-4xl !text-dark/75 fw-bold'>Our Vision</h4>
                        </div>
                        <p className='text-dark/70 mt-2 leading-loose'>We are dedicated to nurturing a culture of
                            innovation and excellence in computer science. We strive to provide our members with opportunities
                            to develop their problem-solving skills, enhance their programming abilities, and represent the 
                            university with distinction in competitive programming contests.
                        </p>
                    </motion.div>
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="card p-4 bg-dark/50  hover:bg-dark/40 !border-none rounded-xl duration-1000 ">
                        <div className="upperCard d-flex justify-start align-items-center pb-2 relative after:absolute after:w-full after:h-[2px] after:left-0 after:bg-[#FEBA12] after:bottom-0 before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:left-0 before:bg-[#FEBA12] before:-bottom-2 before:translate-x-[-50%] ">
                            <img className='w-[15%] h-[10%] rounded-full m-2' src={img2} alt="" />
                            <h4 className='!text-4xl !text-dark/75 fw-bold'>Our Mission</h4>
                        </div>
                        <p className='text-dark/70 mt-2 leading-loose pb-14 2xl:pb-20 sm:pb-2 md:pb-2 lg:pb-2'>We envision the ICPC community at HTI University as a 
                        leading force in the field of competitive programming, renowned for its exceptional talent, innovative
                        problem-solving, and unwavering dedication to excellence.
                        </p>
                    </motion.div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default OurMissionVision