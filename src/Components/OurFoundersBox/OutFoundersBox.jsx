import React from 'react'

export default function OutFoundersBox({img,name,title,link}) {
  return (
    <div className="card-box flex lg:flex-col justify-center items-center">
      
      <div className="image w-[200px] h-[200px] ">
        <img src={img} alt={`${name} ${title}`} className="w-full h-full object-cover rounded-full" />
      </div>

      <div className="data lg:mt-4 lg:pl-0 mt-0 pl-6">
      <h5 className='text-2xl flex items-center'>{name}
        <span className='mx-2 text-2xl'>|</span>
        <a href={link} target="_blank" >
          <i className="fa-brands fa-linkedin pt-2"></i>
        </a>
      </h5>
      <p className='text-lg'>{title}</p>
      </div>


    </div>
  )
}
