import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import img1 from '../../Images/DR-yousria png.png'

export default function Appreciation() {
  return (
      <div className='Appreciation relative py-8 mb-16'>
        <div className="container">
        <MainHeading title1='' title2='Appreciation'/>
            <div  className='flex justify-center items-center mx-auto sm:flex-col md:flex-col lg:flex-col  w-[80%] mt-8 gap-5' >
                <div className="w-1/3 flex justify-center items-center  p-4  sm:w-full md:w-full lg:w-full">
                  <div className="image relative">
                    <img src={img1} className='w-[300px] z-20 relative h-[500px] rounded-2xl' alt="DR: Yousria Mohamed" />
                    <div className="layer w-[360px] h-[430px] 2xl:w-[290px]  rounded-2xl z-[1] border-4 border-[#FEBA12] absolute top-8 -left-8">
                    </div>
                  </div>
                </div>
                <div className="w-2/3 p-4 sm:w-full md:w-full lg:w-full">
                  <h5 className='text-4xl font-bold sm:text-2xl md:text-3xl'>DR: Yousria Mohamed</h5>
                  <p className='ms-1 text-2xl sm:text-xl md:text-xl text-[#7F7F7F] mt-4 relative before:w-[5px] before:bg-[#FEBA12] before:h-full before:absolute before:top-0 pl-4 before:left-0'>Lorem ipsum dolor sit amet consectetur. Laoreet id accumsan facilisis egestas viverra nisl mi ridiculus. </p>
                  <p className='ms-5 text-2xl sm:text-xl md:text-xl text-[#7F7F7F] mt-4 relative before:w-[5px] before:bg-[#FEBA12] before:h-full before:absolute before:top-0 pl-4 before:left-0'>Lorem ipsum dolor sit amet consectetur. Laoreet id accumsan facilisis egestas viverra nisl mi ridiculus. </p>
                  <p className='text-2xl sm:text-xl md:text-xl text-[#7F7F7F] mt-4 relative before:w-[5px] before:bg-[#FEBA12] before:h-full before:absolute before:top-0 pl-4 before:left-0'>Lorem ipsum dolor sit amet consectetur. Laoreet id accumsan facilisis egestas viverra nisl mi ridiculus. </p>
                </div>
            </div>
        </div>
    </div>
  )
}
