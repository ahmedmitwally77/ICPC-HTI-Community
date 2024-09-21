import React from 'react'
import HomeImg from '../../Images/IMG_3229 full.webp'
import TransitionEffect from '../../Components/TransitionEffect'
import AnimatedText from '../../Components/AnimatedText'
import WhyC from '../../Components/whyC++/WhyC'
import RoadMap from '../../Components/RoadMap/RoadMap'
import Levels from '../../Components/Levels/Levels'

const Training = () => {
  return <>
    <TransitionEffect/>
    <div className='training relative overflow-x-hidden'>
    <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="Training" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bg-dark/50 w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
        </div>


        <WhyC/>
        {/* <RoadMap/> */}
        <Levels/>
    </div>
  </>
}

export default Training