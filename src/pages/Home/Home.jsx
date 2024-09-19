import React from 'react'
import HomeImg from '../../Images/IMG_3229.jpg'
import WhoWeAreAndStatics from '../../Components/WhoWeAreAndStatics/WhoWeAreAndStatics'
import AnimatedText from '../../Components/AnimatedText'
import WhatIsIcpc from '../../Components/WhatIsIcpc/WhatIsIcpc'
import News from '../../Components/News/News'
import RoudeMap from '../../Components/RoudMap/RoudeMap'
import Testimonials from '../../Components/Testimonials/Testimonials'
import LatestEvent from '../../Components/LatestEvents/LatestEvent'
import footerWaves from '../../Images/intersecting-waves-scattered.svg'
import TransitionEffect from '../../Components/TransitionEffect'

const Home = () => {
  return <>
    <TransitionEffect/>

    <div className='Home  overflow-x-hidden'>
      <div className="hero bg-dark relative  -top-4">
        <AnimatedText text="ICPC HTI Community" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[25%] sm:top-[10%] top-[30%] z-20'/>
        <div className='overlay absolute bgWaves w-100 h-[98%] sm:h-[91.5%] xs:h-[98%]'></div>
        <img className='w-full  vh-100 object-cover' src={HomeImg} alt="hti comunity in ecpc" />
        <img className='rotate-180 absolute -bottom-1 ' src={footerWaves} alt="footer bg" />
      </div>

      <WhoWeAreAndStatics/>
      <News/>
      <WhatIsIcpc/>
      <RoudeMap/>
      <Testimonials/>
      <LatestEvent/>
    </div>
  </>
}

export default Home