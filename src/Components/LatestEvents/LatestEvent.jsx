import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import style from './LatestEvent.module.css'
import img from '../../Images/icpc core 2024.jpg'
import AnimatedText from '../AnimatedText'
import { collection, getDocs , query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../firebase';

const LatestEvent = () => {

    const [event, setEvent] = useState(null);
    const [Days, setDays] = useState('')
    const [Hours, setHours] = useState('')
    const [Mint, setMint] = useState('')
    const [sec, setSec] = useState('')
    const [loading, setLoading] = useState(true); // Add a loading state



  

    // const [Days, setDays] = useState('')
    // const [Hours, setHours] = useState('')
    // const [Mint, setMint] = useState('')
    // const [sec, setSec] = useState('')

    // useEffect(() => {
    //   const fetchLatestEvent = async () => {
    //     const eventCollection = collection(db, 'events');
    //     const eventQuery = query(eventCollection, orderBy('date', 'desc'), limit(1));
    //     const eventSnapshot = await getDocs(eventQuery);
    //     const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //     if (eventList.length > 0) {
    //       setEvent(eventList[0]);
    //     }
    //     setLoading(false); // Stop loading once the data is fetched

    //   };
    //   fetchLatestEvent();
    // }, []);

    useEffect(() => {
      if (event) {
        const countdown = new Date(event.date).getTime();
        const counter = setInterval(() => {
          const datenow = new Date().getTime();
          const datediff = countdown - datenow;
  
          setDays(Math.floor(datediff / 1000 / 60 / 60 / 24));
          setHours(Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
          setMint(Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60)));
          setSec(Math.floor((datediff % (1000 * 60)) / 1000));
        }, 1000);
        console.log(event.title);
        
        return () => clearInterval(counter);
      }
    }, [event]);

    if (loading ) {
      return (
          <div id="loading">
              <div className="sk-cube-grid">
                  <div className="sk-cube sk-cube1"></div>
                  <div className="sk-cube sk-cube2"></div>
                  <div className="sk-cube sk-cube3"></div>
                  <div className="sk-cube sk-cube4"></div>
                  <div className="sk-cube sk-cube5"></div>
                  <div className="sk-cube sk-cube6"></div>
                  <div className="sk-cube sk-cube7"></div>
                  <div className="sk-cube sk-cube8"></div>
                  <div className="sk-cube sk-cube9"></div>
              </div>
          </div>
      );
  }
  
  if (!event) {
      return <p>No level found.</p>;
  }


      return <>
      <div className={style.latestEvent}>
      <div class={`${style.events} container `} id="events">
            <AnimatedText text="Latest Event" ClassName='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-blue-500'/>
            <div class={style.container}>
                <div className="row">
                    <div className="col-md-8">
                        <div  class={style.info}>
                            <div class={style.time}>
                                <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1}} class={style.unit}>
                                <span>{Days}</span>
                                <span className='text-dark fw-bold'>Days</span>
                                </motion.div>
                                <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.2}} class={style.unit}>
                                <span>{Hours}</span>
                                <span className='text-dark fw-bold'>Hours</span>
                                </motion.div>
                                <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.4}} class={style.unit}>
                                <span>{Mint}</span>
                                <span className='text-dark fw-bold'>Minutes</span>
                                </motion.div>
                                <motion.div viewport={{once:true}} initial={{y:-60 , opacity:0}} whileInView={{y:0 , opacity:1  }} transition={{duration:1.6}} class={style.unit}>
                                <span>{sec}</span>
                                <span className='text-dark fw-bold'>Seconds</span>
                                </motion.div>
                            </div>
                            <h2 className={style.title}>{event.title} </h2>
                            <span className={style.description}>
                              {event.eventDetails}
                            </span>
                        </div>
                    </div>
                      
                    <div  className="col-md-4">
                      <img className='mt-4' src={event.eventCoverUrl} alt={event.title} />
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