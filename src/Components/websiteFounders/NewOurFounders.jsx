import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import OutFoundersBox from '../OurFoundersBox/OutFoundersBox'
import ziad from '../../Images/websiteFounders/ziad.jpeg'
import hanya from '../../Images/websiteFounders/hanya.jpeg'
import shebr from '../../Images/websiteFounders/shebr.jpeg'
import mustafa from '../../Images/websiteFounders/mustafa.jpeg'
import nabil from '../../Images/websiteFounders/nabil.jpeg'
import mitwaly from '../../Images/websiteFounders/Mitwally.jpg'
import upperShape from '../../Images/websiteFounders/Ellipse 1204.svg'
import downShape from '../../Images/websiteFounders/Ellipse 1203.svg'
import line2 from '../../Images/line 2.jpeg'


export default function NewOurFounders() {
  return (
    <>
    <section className='our-founders pb-12  rounded-3xl relative -top-14 shadow-top-only'>
      <img className='absolute top-0 ' src={upperShape} alt="" />
      <img className='absolute buttom-0 right-0 md:-right-20 md:-bottom-36' src={downShape} alt="" />
      <div className="container">

          <div className='line d-flex justify-center align-items-center relative top-7 mb-5'>
              <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
          </div>

        <MainHeading title1='Our' title2='Founders'/> 

        <div className="our-founders-data mt-8 grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 sm:gap-14">

          <OutFoundersBox img={ziad} name='Ziad Essa' title='Project Team lead | FrontEnd Developer' link='https://www.linkedin.com/in/ziad-essa/'  />
          <OutFoundersBox img={mitwaly} name='Ahmed Mitwally' title='Front-End Developer' link='https://www.linkedin.com/in/ahmed-mitwally?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'  />
          <OutFoundersBox img={hanya} name='Hanya Hisham' title='UI / UX Developer' link='http://linkedin.com/in/hanya-hisham-39b211284'  />
          <OutFoundersBox img={shebr} name='Abdalrahman Shabrawy' title='Back-End Developer' link='https://www.linkedin.com/in/abdalrahman-shabrawy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'  />
          <OutFoundersBox img={nabil} name='Ahmed Nabil' title='Back-End Developer' link='https://www.linkedin.com/in/ahmed-nabil-b0lb0l/'  />
          {/* <OutFoundersBox img={mustafa} name='Mustafa Mahmoud' title='Back-End Developer' link='https://www.linkedin.com/in/mustafa-mahmoud-55965826b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'  /> */}

        </div>
      </div>
      
    </section>
    </>
  )
}
