import React from 'react'
import HomeImg from '../../Images/IMG_3229 full.webp'
import TransitionEffect from '../../Components/TransitionEffect'
import AnimatedText from '../../Components/AnimatedText'
import WhyC from '../../Components/whyC++/WhyC'
import RoadMap from '../../Components/RoadMap/RoadMap'
import Levels from '../../Components/Levels/Levels'
import { Helmet } from 'react-helmet'

const Training = () => {
  return <>

    <Helmet>
        <title>ICPC HTI Training | Preparing Students for Competitive Programming</title>
        <meta name='description' content='Explore the training programs offered by ICPC HTI to help students enhance their programming skills and excel in national and international competitions.' />
    </Helmet>
    <TransitionEffect/>
    <div className='training  relative overflow-x-hidden'>
    <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="Training" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bgWaves w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
        </div>


        <WhyC/>
        {/* <RoadMap/> */}
        <Levels/>
    </div>
  </>
}

export default Training