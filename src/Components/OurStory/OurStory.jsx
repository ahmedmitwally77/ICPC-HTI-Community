import React from 'react'
import AnimatedText from '../AnimatedText'
import img from '../../Images/IMG_3229 full.webp'
import line1 from '../../Images/line 1.jpeg'
import line2 from '../../Images/line 2.jpeg'
import { motion } from 'framer-motion'
import MainHeading from '../MainHeading/MainHeading'

const OurStory = () => {
  return (
    <div className='ourStory bg-light rounded-3xl relative -top-14'>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>
        <div className="container py-32">
            <MainHeading title1='Our' title2='Story'/>
            <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="row">
                <div  className="col-md-7">
                    <p className='text-dark/60 leading-loose mt-8 pr-8 relative after:w-2 after:h-full after:bg-[#FEBA12] after:absolute after:top-1/2 after:-translate-y-1/2 after:-left-6'>The ICPC community at HTI University is 
                    a dynamic hub of talented individuals passionate about computer science. Members 
                    regularly engage in practice sessions to enhance their problem-solving skills and 
                    collaborate on challenging coding tasks. They actively participate in local and regional
                    ICPC competitions, proudly representing the university. Beyond contests, members work
                    on personal projects, exploring cutting-edge technologies and driving innovation. The 
                    community fosters a supportive and inclusive environment, encouraging mutual learning
                    and academic and personal growth. Through their dedication and teamwork, ICPC members 
                    have achieved remarkable success, earning recognition and accolades at various competitionlevels.
                    </p>
                </div>
                <div  className="col-md-5 flex justify-center align-items-center sm:ml-6  ">
                    <div className="image relative w-[650px] h-[250px] sm:w-[400px]">
                        <img className='shadowYellow w-full h-full object-cover'  src={img} alt="icpc hti team" />
                        <div className="text absolute left-[-144px] top-[105px]   rotate-[-90deg] flex justify-center align-items-center flex-col text-light bg-[#FFCA45] h-[40px] w-[251px]">
                            <h6 >ICPC 2024</h6>
                        </div>
                    </div>
                </div>
            </motion.div> 
            {/* <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="vid d-flex relative -top-4 justify-center align-items-center md:mt-12 d-md-flex ">
                <iframe width="950" height="500" 
                    className='sm:!h-[300px]'
                    src="https://www.youtube.com/embed/6l19PsCtbTs?si=F8df9aOFTtrq9U-w"
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                  </iframe>
            </motion.div> */}
        </div>
        <div className='line d-flex justify-center align-items-center h-25 absolute right-10 bottom-16 d-none d-md-block '>
            <img className='rounded-2xl h-[100%]' src={line1} alt="line" />
        </div>
    </div>
  )
}

export default OurStory