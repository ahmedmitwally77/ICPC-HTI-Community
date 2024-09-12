import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import style from './LatestEvent.module.css'
import img from '../../Images/icpc core 2024.jpg'
import AnimatedText from '../AnimatedText'
import AOS from 'aos';
import 'aos/dist/aos.css';

const LatestEvent = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);

    const [Days, setDays] = useState('')
    const [Hours, setHours] = useState('')
    const [Mint, setMint] = useState('')
    const [sec, setSec] = useState('')

    useEffect(() => {
          const countdown = new Date().getTime();
          const counter = setInterval(() => {
            const datenow = new Date().getTime();
            const datediff = countdown - datenow;
    
            setDays(Math.floor(datediff / 1000 / 60 / 60 / 24));
            setHours(Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMint(Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60)));
            setSec(Math.floor((datediff % (1000 * 60)) / 1000));
          }, 1000);
    
          return () => clearInterval(counter);
      }, []);


      return <>
      <div className="latest">
      <div class={`${style.events} container `} id="events">
            <AnimatedText text="Latest Event" ClassName='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500'/>
            <div class={style.container}>
                <div className="row">
                    <div className="col-md-8">
                        <div data-aos="fade-up-right" class={style.info}>
                            <div class={style.time}>
                                <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1}} class={style.unit}>
                                <span>{Days}</span>
                                <span className='text-dark '>Days</span>
                                </motion.div>
                                <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.2}} class={style.unit}>
                                <span>{Hours}</span>
                                <span className='text-dark '>Hours</span>
                                </motion.div>
                                <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.4}} class={style.unit}>
                                <span>{Mint}</span>
                                <span className='text-dark '>Minutes</span>
                                </motion.div>
                                <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.6}} class={style.unit}>
                                <span>{sec}</span>
                                <span className='text-dark '>Seconds</span>
                                </motion.div>
                            </div>
                            <h2 className={style.title}>Lorem ipsum dolor sit amet </h2>
                            <span className={style.description}>
                              consectetur adipisicing elit. Inventore, nesciunt, quis id autem error molestias voluptatem beatae nobis magnam eos culpa , 
                            </span>
                        </div>
                    </div>
    
                    <div data-aos="fade-up-left" className="col-md-4">
                      <img className='mt-4' src={img} alt='' />
                    </div>
                </div>
    
                <motion.div viewport={{once:true}} initial={{ scale :.6,opacity:0}} whileInView={{scale:1, opacity:1  }} transition={{duration:1.5}} class={style.subscribe}>
                  <form >
                    <input type="text" placeholder="Enter Your Name"  />
                    <input type="text" placeholder="Enter Your Number"  />
                    <input type="submit" value="Subscribe" />
                  </form>
                </motion.div>
              </div>
        </div>
      </div>
      </>
}

export default LatestEvent