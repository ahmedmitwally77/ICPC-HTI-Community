import React, { useContext } from 'react'
import HomeImg from '../../Images/IMG_3229 full.webp'
import WhoWeAreAndStatics from '../../Components/WhoWeAreAndStatics/WhoWeAreAndStatics'
import AnimatedText from '../../Components/AnimatedText'
import WhatIsIcpc from '../../Components/WhatIsIcpc/WhatIsIcpc'
import News from '../../Components/News/News'
import RoudeMap from '../../Components/RoudMap/RoudeMap'
import LatestEvent from '../../Components/LatestEvents/LatestEvent'
import footerWaves from '../../Images/intersecting-waves-scattered.svg'
import TransitionEffect from '../../Components/TransitionEffect'
import TalentedMember from '../../Components/talentedMember/TalentedMember'
import { AuthContext } from '../../Context/AuthContext'

const Home = () => {
  
  const { userData , loading } = useContext(AuthContext)

  console.log(userData);
  
  return <>
    <TransitionEffect/>

    {loading?<div id="lauding">
          <div class="sk-cube-grid ">
              <div class="sk-cube sk-cube1"></div>
              <div class="sk-cube sk-cube2"></div>
              <div class="sk-cube sk-cube3"></div>
              <div class="sk-cube sk-cube4"></div>
              <div class="sk-cube sk-cube5"></div>
              <div class="sk-cube sk-cube6"></div>
              <div class="sk-cube sk-cube7"></div>
              <div class="sk-cube sk-cube8"></div>
              <div class="sk-cube sk-cube9"></div>
            </div>
      </div>:<div className='Home  overflow-x-hidden'>
      <div className="hero !bg-dark relative  -top-4">
        <AnimatedText text="ICPC HTI Community" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[25%] sm:top-[10%] top-[30%] z-20'/>
        <div className='overlay absolute bgWaves w-100 h-[98%] sm:h-[91.5%] xs:h-[98%]'></div>
        <img className='w-full  vh-100 object-cover' src={HomeImg} alt="hti comunity in ecpc" loading='lazy' />
        <img className='rotate-180 absolute -bottom-1 ' src={footerWaves} alt="footer bg" loading='lazy'/>
      </div>

      <WhoWeAreAndStatics/>
      <News/>
      <WhatIsIcpc/>
      <RoudeMap/>
      <TalentedMember/>
      {/* <LatestEvent/> */}
    </div>}

    
  </>
}

export default Home

