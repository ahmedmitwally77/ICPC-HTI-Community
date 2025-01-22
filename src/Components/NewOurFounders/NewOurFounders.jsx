import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import OutFoundersBox from '../OurFoundersBox/OutFoundersBox'
import img2 from '../../Images/websiteFounders/ziad.jpeg'
import ziad from '../../Images/websiteFounders/ziad.jpeg'
import hanya from '../../Images/websiteFounders/hanya.jpeg'
import shebr from '../../Images/websiteFounders/shebr.jpeg'
import line2 from '../../Images/line 2.jpeg'


export default function NewOurFounders() {
  return (
    <>
    <section className='our-founders pb-12  rounded-3xl relative -top-14 shadow-top-only'>

      <div className="container">

          <div className='line d-flex justify-center align-items-center relative top-7 mb-5'>
              <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
          </div>

        <MainHeading title1='Our' title2='Founders'/> 

        <div className="our-founders-data mt-8 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 sm:gap-14">

          <OutFoundersBox img={ziad} name='Ziad Essa' title='Project Team lead | FrontEnd Developer' link='https://www.linkedin.com/in/ziad-essa/'  />
          <OutFoundersBox img={hanya} name='Hanya Hisham' title='UI / UX Developer' link='http://linkedin.com/in/hanya-hisham-39b211284'  />
          <OutFoundersBox img={shebr} name='Abdalrahman Shabrawy' title='Back-End Developer' link='https://www.linkedin.com/in/abdalrahman-shabrawy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'  />
          <OutFoundersBox img={img2} name='Ziad Essa' title='Front-End Developer' link='https://www.linkedin.com/in/mary-elsayed/'  />
          <OutFoundersBox img={img2} name='Ziad Essa' title='Front-End Developer' link='https://www.linkedin.com/in/mary-elsayed/'  />
          <OutFoundersBox img={img2} name='Ziad Essa' title='Front-End Developer' link='https://www.linkedin.com/in/mary-elsayed/'  />

        </div>
      </div>
      
    </section>
    </>
  )
}
