import React from 'react'
import AnimatedText from '../../Components/AnimatedText'
import HomeImg from '../../Images/IMG_3229 full.webp'
import OurStory from '../../Components/OurStory/OurStory'
import OurMissionVision from '../../Components/OurMissionVision/OurMissionVision'
import OurAchievements from '../../Components/OurAchievements/OurAchievements'
import OurFounders from '../../Components/OurFounders/OurFounders'
import Gallary from '../../Components/Gallary/Gallary'
import TransitionEffect from '../../Components/TransitionEffect'
import { Helmet } from 'react-helmet'

const About = () => {
  return <>
    <Helmet>
        <title>About ICPC HTI | Empowering Competitive Programming at HTI</title>
        <meta name='description' content='Learn about ICPC HTI, a community that fosters programming skills and competitive coding among students, preparing them for national and international competitions.' />
    </Helmet>
    <TransitionEffect/>
    <div className='about  relative overflow-x-hidden'>
      <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="About Us" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bgWaves w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
        </div>

        <OurStory/>
        <OurMissionVision/>
        <OurAchievements/>
        <OurFounders/>
        {/* <OurCore/> */}
        <Gallary/>
    </div>
    </>
}

export default About