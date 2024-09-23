import React from 'react'
import line2 from '../../Images/line 2.jpeg'
import why1 from '../../Images/why1-removebg-preview.png'
import AnimatedText from '../AnimatedText';
import { Link } from 'react-router-dom';

const Levels = () => {
  return (
    <div className='levels bg-white rounded-3xl relative -top-14'>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>

        <div className="container py-20">
        <AnimatedText text="Levels" ClassName='text-start !text-5xl !text-blue-500 mb-20 z-10'/>
            <div className="row">
                <div className="col-md-4">
                    <div className="box border shadow-xl border-blue p-10 relative rounded-3xl ">
                        <img className='w-50 absolute  md:hidden -top-28 left-28 m-auto' src={why1} alt="" />
                        <h4 className='text-blue-900 fw-bold fs-2 text-center my-4 z-30'>Level 0</h4>
                        <p className='text-dark/75'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                            magni! Earum, facilis illum laboriosam corrupti, eligendi impedit qui 
                            non dolorum explicabo, sed iure odit reiciendis quam maiores optio rem temporibus.
                        </p>
                        <div className="btn d-flex justify-end">
                            <Link to={'/level'} className='btn grade2 rounded-3xl text-light px-4  text-end'>Join</Link>
                        </div>
                    </div>
                </div>
                <div  className="col-md-4">
                    <div className="box md:my-7 shadow-xl border border-blue p-10 relative rounded-3xl ">
                        <img className='w-50 absolute  md:hidden -top-28 left-28 m-auto' src={why1} alt="" />
                        <h4 className='text-blue-900 fw-bold fs-2 text-center my-4 z-30'>Level 1</h4>
                        <p className='text-dark/75'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                            magni! Earum, facilis illum laboriosam corrupti, eligendi impedit qui 
                            non dolorum explicabo, sed iure odit reiciendis quam maiores optio rem temporibus.
                        </p>
                        <div className="btn d-flex justify-end">
                            <Link to={'/level'} className='btn grade2 rounded-3xl text-light px-4  text-end'>Join</Link>
                        </div>
                    </div>
                </div>
                <div  className="col-md-4">
                    <div className="box border shadow-xl border-blue p-10 relative rounded-3xl ">
                        <img className='w-50 absolute  md:hidden -top-28 left-28 m-auto' src={why1} alt="" />
                        <h4 className='text-blue-900 fw-bold fs-2 text-center my-4 z-30'>Level 2</h4>
                        <p className='text-dark/75'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                            magni! Earum, facilis illum laboriosam corrupti, eligendi impedit qui 
                            non dolorum explicabo, sed iure odit reiciendis quam maiores optio rem temporibus.
                        </p>
                        <div className="btn d-flex justify-end">
                            <Link to={'/level'} className='btn grade2 rounded-3xl text-light px-4  text-end'>Join</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Levels