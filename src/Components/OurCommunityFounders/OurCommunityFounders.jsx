import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import CommunityBox from '../CommunityBox/CommunityBox'
import redaa from '../../Images/redaa.jpg'
import adel from '../../Images/adell.jpg'
import salman from '../../Images/salman.jpeg'

export default function OurCommunityFounders() {
  return (
    <section className='our-leaders container pb-52'>
    
          <MainHeading title1='Our Community' title2='Founders'/>
          
          <div className="our-leaders-boxes mt-20 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 md:gap-24 gap-10">
            <CommunityBox name='Mohamed Reda' title='Community co-Leader' mark='false' img={redaa} link='https://www.linkedin.com' />
            <CommunityBox name='Salman Mohamed' title='Community Leader' mark='true' img={salman} link='https://www.linkedin.com/in/salman-badr-6510631b7/' />
            <CommunityBox name='Ahmed Adel' title='Community co-Leader' mark='false' img={adel} link='https://www.linkedin.com/in/ahmedadel11/' />
          </div>
        </section>
  )
}
