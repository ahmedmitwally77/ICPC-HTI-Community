import React from 'react'
import { FaLinkedin } from "react-icons/fa";

export default function CommunityBox({img,name,title,link,mark}) {
  return (
    <div className={`community-box relative flex shadow-yellow-shadow justify-center items-center flex-col border-2 border-[#FFD876] rounded-2xl p-2 ${mark=='true' ? 'top-16 sm:top-0 md:top-0' : ''}`}>

      <div className="image relative -mt-16 w-[160px] h-[160px] rounded-full ">
        <img src={img} alt={`${name} ${title}`} className='w-full h-full object-cover rounded-full'/>
      </div>


      <div className="data text-center mt-2 ">

        <h5 className='text-3xl sm:text-1xl md:text-2xl lg:text-2xl flex items-center'>{name}
          <span className='mx-2 text-2xl'>|</span>
          <a href={link} className='pt-2' target="_blank" rel='noreferrer'  >
            <FaLinkedin />
          </a>
        </h5>
        <p className='text-lg text-[#424242]'>{title}</p>

        </div>


    </div>
  )
}
