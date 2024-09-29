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
    { title: "What Is C++ Used For?", content: "c++ is used in fields such as system software, game development, embedded systems, scientific computing and high-performance applications. The C++ standard library provides a range of coding utilities and functions, making it easy to develop complex software systems." },
    { title: "Is C++ very useful?", content: "all operating systems are built using C++, for example, Mac Os, Windows, Linux, etc. Browsers like Safari, Opera, Chrome, Firefox, etc., are written in C++ because it is a fast and efficient language that is why it is preferable." },
    { title: "Is C++ a dead language?", content: "They're less likely to be used for new projects, but old ones still use them. Just like how some projects still use COBOL today, C and C++ aren't going away." }
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
                        <h4 className='text-light/95 text-center mt-3'>Strong foundation</h4>
                        <p className='text-white'>
                        C++ provides a solid foundation in programming concepts, such as memory management,
                         pointers, and object-oriented programming. This knowledge is transferable to other languages.
                        </p>
                    </div>
                </motion.div>
                <div  className="col-md-4">
                    <div className="box p-10 relative rounded-3xl md:my-20 bg-blue-500">
                        <img className='w-50 absolute md:hidden -top-28 left-28 m-auto' src={why1} alt="" />
                        <h4 className='text-light/95 text-center mt-3'>performance</h4>
                        <p className='text-white pb-4'>
                        C++ is a high-performance language, often used in applications that require speed and 
                        efficiency, such as game development and system programming.
                        </p>
                    </div>
                </div>
                <div  className="col-md-4">
                    <div className="box p-10 relative rounded-3xl bg-yellow-400">
                        <img className='w-50 absolute md:hidden -top-28 left-28 m-auto' src={why1} alt="" />
                        <h4 className='text-light/95 text-center mt-3'>Community and Resources</h4>
                        <p className='text-white'>
                        C++ has a large and active community with abundant resources, including tutorials, forums, and libraries, to support learners.
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