import React from 'react'
import AnimatedText from '../../Components/AnimatedText'
import HomeImg from '../../Images/IMG_3229 full.webp'
import OurEcpc from '../../Components/OurECPC/OurEcpc'
import TransitionEffect from '../../Components/TransitionEffect'

const ECPC = () => {
  return <>
      <TransitionEffect/>

    <div className='ecpc  relative'>
        <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="ECPC" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bg-dark/50 w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
        </div>

        <OurEcpc/>
    </div>
  </>
}

export default ECPC