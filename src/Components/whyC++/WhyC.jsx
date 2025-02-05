import React, { useState } from 'react'
import line2 from '../../Images/line 2.jpeg'
import why1 from '../../Images/why1-removebg-preview.png'
import what from '../../Images/what1-removebg-preview.png'
// import line2 from '../../Images/line 2.jpeg'
import AnimatedText from '../AnimatedText';
import { motion } from 'framer-motion'
import MainHeading from '../MainHeading/MainHeading';

const WhyC = () => {
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

        <div className="container sm:py-16 pt-32">
            {/* <AnimatedText text="Why C++" ClassName='text-start !text-5xl !text-blue-500 mb-20'/> */}
            <div className="mb-20 sm:mb-0 sm:pl-4">
                <MainHeading title1="" title2="Why C++"/>
            </div>

            <div className="row justify-center align-items-center">
                <motion.div className="col-md-6 p-4 !md:p-0 col-12 col-xl-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:0.5 }} className="box  h-[250px] 2xl:h-[280px] sm:h-[280px] hover:bg-yellow-500 transition-all duration-300 p-10 relative rounded-3xl bg-yellow-400">
                        <img className='w-50 absolute  md:hidden -top-28 xl:-top-28 lg:-top-20 2xl:-top-24 left-1/2 -translate-x-1/2 m-auto' src={why1} alt="" />
                        <h4 className='text-light/95 text-center text-2xl font-bold  my-3'>Strong foundation</h4>
                        <p className='text-white'>
                        C++ provides a solid foundation in programming concepts, such as memory management,
                        pointers, and object-oriented programming. This knowledge is transferable to other languages.
                        </p>
                    </motion.div>
                </motion.div>
                <div  className="col-md-6 p-4 !md:p-0 col-12 col-xl-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1 }} className="box  h-[280px] md:h-[250px] 2xl:h-[280px]  sm:h-[280px] hover:bg-blue-600 transition-all duration-300 p-10 relative rounded-3xl md:my-20 sm:my-0 bg-blue-500">
                        <img className='w-50 absolute md:hidden -top-28 xl:-top-28 lg:-top-20 2xl:-top-24 left-1/2 -translate-x-1/2 m-auto' src={why1} alt="" />
                        <h4 className='text-light/95 text-center text-2xl font-bold  my-3'>performance</h4>
                        <p className='text-white pb-4'>
                        C++ is a high-performance language, often used in applications that require speed and 
                        efficiency, such as game development and system programming.
                        </p>
                    </motion.div>
                </div>
                <div  className="col-md-6 p-4 !md:p-0 col-12 col-xl-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="box  h-[250px] 2xl:h-[280px] sm:h-[280px] hover:bg-yellow-500 transition-all duration-300 p-10 relative rounded-3xl bg-yellow-400">
                        <img className='w-50 absolute md:hidden -top-28 xl:-top-28 lg:-top-20 2xl:-top-24 left-1/2 -translate-x-1/2 m-auto' src={why1} alt="" />
                        <h4 className='text-light/95 text-center text-2xl font-bold  my-3'>Community and Resources</h4>
                        <p className='text-white'>
                        C++ has a large and active community with abundant resources, including tutorials, forums, and libraries, to support learners.
                        </p>
                    </motion.div>
                </div>
            </div>
            

            <div className="row pt-8 justify-center align-items-center">
                <div className="col-md-6">
                    <div className="space-y-4">
                        {dropdowns.map((dropdown, index) => (
                            <div key={index} className="shadow p-3 rounded">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleDropdown(index)}
                            >
                                <h3 className='text-dark text-2xl'>{dropdown.title}</h3>
                                <span className=" btnShadow text-[#1C1B1F] rounded-full p-2 w-8 h-8 flex justify-center items-center">{openIndex === index ? "▲" : "▼"}</span> 
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
                <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:1.5 }} className="col-md-6  flex justify-center">
                    <img className='' src={what} alt="Why C++ img" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default WhyC