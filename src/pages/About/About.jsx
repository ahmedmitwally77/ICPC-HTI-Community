import React from 'react'
import AnimatedText from '../../Components/AnimatedText'
import HomeImg from '../../Images/IMG_3229 full.webp'
import OurStory from '../../Components/OurStory/OurStory'
import OurMissionVision from '../../Components/OurMissionVision/OurMissionVision'
import OurAchievements from '../../Components/OurAchievements/OurAchievements'
import OurCore from '../../Components/OurCore/OurCore'
import OurFounders from '../../Components/OurFounders/OurFounders'
import TalentedMember from '../../Components/talentedMember/TalentedMember'
import Gallary from '../../Components/Gallary/Gallary'
import TransitionEffect from '../../Components/TransitionEffect'

const About = () => {
  return <>
    <TransitionEffect/>
    <div className='about relative overflow-x-hidden'>
      <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="About Us" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bg-dark/50 w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
        </div>

        <OurStory/>
        <OurMissionVision/>
        <OurAchievements/>
        <OurFounders/>
        <OurCore/>
        <TalentedMember/>
        <Gallary/>
    </div>
    </>
}

export default About