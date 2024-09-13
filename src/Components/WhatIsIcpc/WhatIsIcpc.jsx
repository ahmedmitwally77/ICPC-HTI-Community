import React, { useEffect, useRef } from 'react'
import AnimatedText from '../AnimatedText'
import LiIcon from '../LiIcon'
import { motion, useScroll } from 'framer-motion'
import icpc from '../../Images/5d8fe48ab721ff05beea40684647002a3b64177a.svg'
import shape1 from '../../Images/circleleft.svg'
import footerWaves from '../../Images/fotter2.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './WhatIsIcpc.module.css'

const Details = ({position , company , companyLink , time , address , work}) =>{

    const ref = useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />

        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5 , type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize' > {company}</a></h3>
            {/* <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time}  {address}
            </span > */}
            <p className='font-medium text-light/75 w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const WhatIsIcpc = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref ,
            offset: ["start end" , "center start"]
        }
    )

  return (
    <div className={`${style.whatisicpc} relative  pb-16 `}>
        {/* <h2 className='font-bold text-8xl  w-full text-light/90 text-center md:text-6xl xs:text-4xl md:mb-16'>
            What is ICPC
        </h2> */}
        {/* <img className='rotate-180 absolute -top-[30%] md:none ' src={footerWaves} alt="waves" /> */}
        <img src={shape1} alt="" />
        <div className="row justify-around align-items-center">
            <div className="col-md-7">
                <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='bg-light  absolute left-9 top-0 w-[4px] h-full  origin-top
                md:w-[2px] md:left-[30px] xs:left-[20px]
                '/>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                    position="International Collegiate Programming Contest" 
                    work="ICPC stands for The International Collegiate Programming 
                    Contest, which is an algorithmic programming contest for college
                     students. Teams of three,fostering collaboration, creativity, 
                     innovation, and the ability to perform..."
                    />
                </ul>
                </div>
            </div>
            <div data-aos="fade-up-left" className="col-md-5 d-flex align-items-center justify-center">
                <img className='' src={icpc} alt="icpc" />
            </div>
        </div>
    </div>
  )
}

export default WhatIsIcpc