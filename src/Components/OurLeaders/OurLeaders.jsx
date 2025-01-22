import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import CommunityBox from '../CommunityBox/CommunityBox'
import ziad from '../../Images/me2.jpeg'
import alaa from '../../Images/علاء.jpg'
import adelkareem from '../../Images/عبكريم.jpg'

export default function OurLeaders() {
  return (
    <section className='our-leaders container pb-80'>

      <MainHeading title1='Our' title2='Leaders'/>

      <div className="our-leaders-boxes mt-20 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 md:gap-24 sm:gap-16">
        <CommunityBox name='Ziad Essa' title='Community co-Leader' mark='false' img={ziad} link='https://www.linkedin.com/in/ziad-essa/' />
        <CommunityBox name='Mohamed Alaa' title='Community Leader' mark='true' img={alaa} link='https://www.linkedin.com/in/ziad-essa/' />
        <CommunityBox name='Mohamed Abdelkareem' title='Community co-Leader' mark='false' img={adelkareem} link='https://www.linkedin.com/in/ziad-essa/' />
      </div>
    </section>
  )
}
