import { useInView, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef } from 'react'
import AnimatedText from '../AnimatedText';
import logo from '../../Images/Black V1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion'
import style from './WhoWeAreAndStatics.module.css'

const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue , {duration:3000});
    const isInView = useInView(ref , {once: true});

    useEffect(() => {
      if(isInView){
        motionValue.set(value);
      }
    }, [isInView , value , motionValue])
    
    useEffect(() =>{
        springValue.on("change" , (latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    } , [springValue , value])


    return <span ref={ref}></span>
}


const WhoWeAreAndStatics = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);

  return (
    <div className={`${style.WhoWeAreAndStatics} mb-3 relative flex w-full flex-col items-center justify-center py-16 `} >
        <div className="container">
            <AnimatedText text="Who we are !" ClassName='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500'/>
            <div data-aos="fade-up" className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>bigraghy</h2>
                        <p className='font-medium'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil facilis hic accusantium fugit minus 
                        vitae aut et cum! Minima voluptates blanditiis soluta, maxime officia beatae eius quia cum esse!
                        </p>
                        <p className='font-medium my-4'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam exercitationem, eveniet ratione 
                        odio ea, consequuntur fugiat nobis, laudantium repellat fugit praesentium voluptas asperiores aperiam 
                        officiis. Cum repellendus labore error. Veritatis!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam exercitationem, eveniet ratione 
                        odio ea, consequuntur fugiat nobis,
                        </p>
                        
                    </div>

                    <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.5 }} className='col-span-3 dark:border-light dark:bg-dark relative h-max rounded-2xl 
                    border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <img src={logo} alt="ziad" className="w-75 h-auto m-auto rounded-2xl"
                        
                        sizes='(max-width: 768px) 100vw ,
                        (max-width:1200px) 50vw ,
                        33vw'
                        />
                    </motion.div>

                    <div data-aos="fade-up" className='col-span-2 xl:col-span-8 xl:flex-row flex flex-col items-center justify-between xl:text-center md:order-3'>
                        <div className='xl:items-center flex flex-col items-end justify-center'>
                            <span className='md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold text-yellow-500 '>
                                <AnimatedNumbers value={1000}/>+
                            </span>
                            <h2 className='xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Trainees</h2>
                        </div>
                        <div className='xl:items-center flex flex-col items-end justify-center'>
                            <span className='md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold text-yellow-500'>
                            <AnimatedNumbers value={75}/>+
                            </span>
                            <h2 className='xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Recorded Session</h2>
                        </div>
                        <div className='xl:items-center flex flex-col items-end justify-center'>
                            <span className='md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold text-yellow-500'>
                            <AnimatedNumbers value={3}/>+
                            </span>
                            <h2 className='xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Season</h2>
                        </div>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default WhoWeAreAndStatics