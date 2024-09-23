import React from 'react'
import AnimatedText from '../AnimatedText'
import logo from '../../Images/Colored Icon.png'
import { Link } from 'react-router-dom'
import TransitionEffect from '../TransitionEffect'
const Level = () => {
    <TransitionEffect/>
  return (
    <div className='level'>
        <div className="container py-24 ">
            <AnimatedText text="Level 0" ClassName='text-center !text-6xl !text-blue-500 my-5'/>
            <div className="text flex align-items-center justify-center">
                <p className='w-[75%] md:w-[100%] mb-5 text-center text-dark/75'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
                    numquam esse tempora sequi voluptate enim labore veritatis hic, ipsam 
                    voluptas exercitationem saepe magni omnis. Accusantium atque blanditiis temporibus culpa explicabo?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
                    numquam esse tempora sequi voluptate enim labore veritatis hic, ipsam 
                    voluptas exercitationem saepe magni omnis. Accusantium atque blanditiis temporibus culpa explicabo?
                </p>
            </div>
            
            <div className="row py-16 !mt-20">
                <div className="col-md-4">
                    <div className="box p-16 rounded-full relative bg-blue-900">
                        <img className='absolute left-[40%] -top-[50%] w-20' src={logo} alt="icpc logo" />
                        <h2 className='text-light text-center !text-5xl'>Wave1</h2>
                        <div className="btn absolute bottom-0 right-11 pb-2">
                            <Link to={'/wave'} className=' btn bg-white !rounded-full !text-blue-900 fw-bold px-4  text-end'>Join</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box md:my-24 p-16 rounded-full relative bg-red-900">
                        <img className='absolute left-[40%] -top-[50%] w-20' src={logo} alt="icpc logo" />
                        <h2 className='text-light text-center !text-5xl'>Wave2</h2>
                        <div className="btn absolute bottom-0 right-11 pb-2">
                            <Link to={'/wave'} className=' btn bg-white !rounded-full !text-red-900 fw-bold px-4  text-end'>Join</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="box p-16 rounded-full relative bgyello">
                        <img className='absolute left-[40%] -top-[50%] w-20' src={logo} alt="icpc logo" />
                        <h2 className='text-light text-center !text-5xl'>Wave3</h2>
                        <div className="btn absolute bottom-0 right-11 pb-2">
                            <Link to={'/wave'} className=' btn bg-white !rounded-full yello fw-bold px-4  text-end'>Join</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Level