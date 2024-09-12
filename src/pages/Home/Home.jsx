import React from 'react'
import HomeImg from '../../Images/IMG_3229.jpg'
import WhoWeAreAndStatics from '../../Components/WhoWeAreAndStatics/WhoWeAreAndStatics'
import AnimatedText from '../../Components/AnimatedText'
import WhatIsIcpc from '../../Components/WhatIsIcpc/WhatIsIcpc'
import News from '../../Components/News/News'
import RoudeMap from '../../Components/RoudMap/RoudeMap'
import Testimonials from '../../Components/Testimonials/Testimonials'
import LatestEvent from '../../Components/LatestEvents/LatestEvent'

const Home = () => {
  return (
    <div className='Home  overflow-x-hidden'>
      <div className="hero bg-dark relative  -top-4">
        <AnimatedText text="ICPC HTI Community" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
        <div className='overlay absolute bg-blue-500/50 w-100 h-[97.5%] sm:h-[91.5%] xs:h-[98%]'></div>
        <img className='w-full  vh-100 object-cover' src={HomeImg} alt="hti comunity in ecpc" />
      </div>

      <WhoWeAreAndStatics/>
      <News/>
      <WhatIsIcpc/>
      <RoudeMap/>
      <Testimonials/>
      <LatestEvent/>
    </div>
  )
}

export default Home