import React, { useState } from 'react'
import line2 from '../../Images/line 2.jpeg'
import why1 from '../../Images/why1-removebg-preview.png'
import what from '../../Images/what1-removebg-preview.png'
// import line2 from '../../Images/line 2.jpeg'
import AnimatedText from '../AnimatedText';
import { delay, motion } from 'framer-motion'

const WhyC = () => {

    const qoute = {
        initial:{
            x:-50,
        },
        animate:{
            x:0,
            transition:{
                delay:0.5,
                staggerChildren:0.08
            }
            
        }
    }

    const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const dropdowns = [
    { title: "What Is C++ Used For?", content: "Lorem ipsum dolor sit amet consectetur. Laoreet id accumsan facilisis egestas viverra nisl mi ridiculus. Lectus fames morbi est rhoncus tempor. Sapien aliquam urna a risus massa. Vestibulum sit congue interdum non.." },
    { title: "What Is C++ Used For?", content: "Lorem ipsum dolor sit amet consectetur. Laoreet id accumsan facilisis egestas viverra nisl mi ridiculus. Lectus fames morbi est rhoncus tempor. Sapien aliquam urna a risus massa. Vestibulum sit congue interdum non.." },
    { title: "What Is C++ Used For?", content: "Lorem ipsum dolor sit amet consectetur. Laoreet id accumsan facilisis egestas viverra nisl mi ridiculus. Lectus fames morbi est rhoncus tempor. Sapien aliquam urna a risus massa. Vestibulum sit congue interdum non.." }
  ];

  return (
    <div className='whyC bg-light rounded-3xl relative -top-14'>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>

        <div className="container py-32">
            <AnimatedText text="Why C++" ClassName='text-start !text-5xl !text-blue-500 mb-20'/>
            <div className="row">
                <motion.div variants={qoute} initial="initial" animate="animate" className="col-md-4">
                    <div className="box p-10 relative rounded-3xl bg-yellow-400">
                        <img className='w-50 absolute  md:hidden -top-28 left-28 m-auto' src={why1} alt="" />
                        <h4 className='text-light/95 text-center mt-3'>Lorem ipsum.</h4>
                        <p className='text-white'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                            magni! Earum, facilis illum laboriosam corrupti, eligendi impedit qui 
                            non dolorum explicabo, sed iure odit reiciendis quam maiores optio rem temporibus.
                        </p>
                    </div>
                </motion.div>
                <div  className="col-md-4">
                    <div className="box p-10 relative rounded-3xl md:my-20 bg-blue-500">
                        <img className='w-50 absolute md:hidden -top-28 left-28 m-auto' src={why1} alt="" />
                        <h4 className='text-light/95 text-center mt-3'>Lorem ipsum.</h4>
                        <p className='text-white pb-4'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                            magni! Earum, facilis illum laboriosam corrupti, eligendi impedit qui 
                            non dolorum explicabo, sed iure odit reiciendis quam maiores optio rem temporibus.
                        </p>
                    </div>
                </div>
                <div  className="col-md-4">
                    <div className="box p-10 relative rounded-3xl bg-yellow-400">
                        <img className='w-50 absolute md:hidden -top-28 left-28 m-auto' src={why1} alt="" />
                        <h4 className='text-light/95 text-center mt-3'>Lorem ipsum.</h4>
                        <p className='text-white'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
                            magni! Earum, facilis illum laboriosam corrupti, eligendi impedit qui 
                            non dolorum explicabo, sed iure odit reiciendis quam maiores optio rem temporibus.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row pt-16 justify-center align-items-center">
                <div className="col-md-6">
                    <div className="space-y-4">
                        {dropdowns.map((dropdown, index) => (
                            <div key={index} className="shadow p-3 rounded">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleDropdown(index)}
                            >
                                <h3 className='text-dark/75'>{dropdown.title}</h3>
                                <span>{openIndex === index ? "▲" : "▼"}</span> 
                            </div>
                            <div
                                className={`transition-all duration-300 overflow-hidden ${
                                openIndex === index ? "max-h-40" : "max-h-0"
                                }`}
                            >
                                <p className="mt-4">{dropdown.content}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='w-100' src={what} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyC