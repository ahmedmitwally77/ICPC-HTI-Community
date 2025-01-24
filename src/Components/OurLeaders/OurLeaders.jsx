import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import CommunityBox from '../CommunityBox/CommunityBox'
import ziad from '../../Images/websiteFounders/ziad.jpeg'
import alaa from '../../Images/3laa.jpeg'
import adelkareem from '../../Images/عبكريم.jpg'

export default function OurLeaders() {
  return (
    <section className='our-leaders container pb-52'>

      <MainHeading title1='Our' title2='Leaders'/>

      <div className="our-leaders-boxes mt-20 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 md:gap-24 sm:gap-16">
        <CommunityBox name='Ziad Essa' title='Community co-Leader' mark='false' img={ziad} link='https://www.linkedin.com/in/ziad-essa/' />
        <CommunityBox name='Mohamed Alaa' title='Community Leader' mark='true' img={alaa} link='https://www.linkedin.com/in/mohamed-alaa-57b126286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' />
        <CommunityBox name='Mohamed Abdelkareem' title='Community co-Leader' mark='false' img={adelkareem} link='https://www.linkedin.com/in/mohamed-abdel-kareem-08a550216/' />
      </div>
    </section>
  )
}
