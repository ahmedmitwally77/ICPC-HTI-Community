import React from 'react'
import AnimatedText from '../AnimatedText'
import img1 from '../../Images/im1.webp'
import img2 from '../../Images/img2.webp'
import line2 from '../../Images/line 2.jpeg'
import 'aos/dist/aos.css';
import { motion } from 'framer-motion'

const OurMissionVision = () => {
  return (
    <div className='ourMissionVision bg-dark/10 shadow-top-only rounded-3xl relative -top-14 '>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <div className="container py-32">
            <AnimatedText text="Our Mission and vision" ClassName='text-center !text-5xl !text-blue-600'/>
            <div className="row justify-center">
                <div  className="col-md-7 py-16">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1 }} className="card p-4 bg-dark/50 shadow-xl hover:bg-dark/40 !border-none rounded-xl duration-1000">
                        <div className="upperCard d-flex justify-start align-items-center ">
                            <img className='w-[15%] h-[10%] rounded-full m-2' src={img1} alt="" />
                            <h4 className='!text-4xl !text-dark/75 fw-bold'>Our Mission</h4>
                        </div>
                        <p className='text-dark/70 leading-loose'>We are dedicated to nurturing a culture of
                         innovation and excellence in computer science. We strive to provide our members with opportunities
                          to develop their problem-solving skills, enhance their programming abilities, and represent the 
                          university with distinction in competitive programming contests.
                        </p>
                    </motion.div>
                </div>
                <div className="col-md-7">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1 }} className="card p-4 bg-dark/50 shadow-xl hover:bg-dark/40 !border-none rounded-xl duration-1000 ">
                        <div className="upperCard d-flex justify-start align-items-center ">
                            <img className='w-[15%] h-[10%] rounded-full m-2' src={img2} alt="" />
                            <h4 className='!text-4xl !text-dark/75 fw-bold'>Our Mission</h4>
                        </div>
                        <p className='text-dark/70 leading-loose'>We envision the ICPC community at HTI University as a 
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