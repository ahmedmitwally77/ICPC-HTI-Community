import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import OutFoundersBox from '../OurFoundersBox/OutFoundersBox'
import img2 from '../../Images/me2.jpeg'


export default function NewOurFounders() {
  return (
    <>
    <section className='our-founders pb-12 container'>
      <MainHeading title1='Our' title2='Founders'/> 

      <div className="our-founders-data mt-8 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 sm:gap-14">

        <OutFoundersBox img={img2} name='Ziad Essa' title='Front-End Developer' link='https://www.linkedin.com/in/mary-elsayed/'  />
        <OutFoundersBox img={img2} name='Ziad Essa' title='Front-End Developer' link='https://www.linkedin.com/in/mary-elsayed/'  />
        <OutFoundersBox img={img2} name='Ziad Essa' title='Front-End Developer' link='https://www.linkedin.com/in/mary-elsayed/'  />
        <OutFoundersBox img={img2} name='Ziad Essa' title='Front-End Developer' link='https://www.linkedin.com/in/mary-elsayed/'  />
        <OutFoundersBox img={img2} name='Ziad Essa' title='Front-End Developer' link='https://www.linkedin.com/in/mary-elsayed/'  />
        <OutFoundersBox img={img2} name='Ziad Essa' title='Front-End Developer' link='https://www.linkedin.com/in/mary-elsayed/'  />

      </div>
      
    </section>
    </>
  )
}
