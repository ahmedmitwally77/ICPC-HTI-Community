import React, { useContext, useEffect, useState } from 'react'
import line2 from '../../Images/line 2.jpeg'
import why1 from '../../Images/why1-removebg-preview.png'
import AnimatedText from '../AnimatedText';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { motion } from 'framer-motion';
import MainHeading from '../MainHeading/MainHeading';
import axios from 'axios';
import { useQuery } from 'react-query';

const Levels = () => {
    
    const { userToken } = useContext(AuthContext); // استدعاء التوكن من الكونتكست
    let {userData} = useContext(AuthContext)
    console.log(userData);
    
    

    function getAllLevels() {
      return axios.get("https://icpc-hti.vercel.app/api/level", {
        headers: { token: userToken },
      });
    }
  
    const { data, isLoading, isError, refetch } = useQuery("getAllLevels", getAllLevels, {
      enabled: !!userToken, // يتم التفعيل فقط عند توفر userToken
      refetchOnWindowFocus: false,
    });
    
    useEffect(() => {
      if (userToken) {
        refetch();
      }
    }, [userToken]); // يتم تنفيذ useEffect عند تغيير userToken

    if (isLoading ) return <>
      <div className='row'>
        <div  className="col-md-6 col-12 col-xl-4">
          <div
            class="flex flex-col bg-neutral-300 w-100 h-64 animate-pulse rounded-xl p-4 gap-4"
          >
            <div class="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
        <div  className="col-md-6 col-12 col-xl-4">
          <div
            class="flex flex-col bg-neutral-300 w-100 h-64 animate-pulse rounded-xl p-4 gap-4"
          >
            <div class="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
        <div  className="col-md-6 col-12 col-xl-4">
          <div
            class="flex flex-col bg-neutral-300 w-100 h-64 animate-pulse rounded-xl p-4 gap-4"
          >
            <div class="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
            <div class="flex flex-col gap-2">
              <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
              <div class="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </>;
    if (isError) return <p>حدث خطأ أثناء تحميل البيانات.</p>;
  


  return (
    <div className='levels bg-white rounded-3xl relative -top-14'>
        <div className='line d-flex justify-center align-items-center relative top-7 '>
            <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
        </div>

        <div className="container py-20">
            <div className="sm:pl-6 mb-24 sm:mb-6">
              <MainHeading title1="" title2="Levels" />
            </div>

            <div className="row ">

                {userData?.userRole === 'user' || userData === null ? <>
              {userData?.userRole === 'user' ? <><h2 className='text-red-800 text-center py-5'>استنى الادمن يقبل الطلب </h2> </> : <> </> } 
              <div  className=" col-md-6 col-12 col-xl-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:0.7 , y:0}} transition={{duration:1 }} className="box pt-10 sm:top-0 md:top-0 lg:top-0 xl:top-0 -top-16 boxBorder h-[420px] lg:h-[470px] md:my-7 shadow-xl p-10 relative rounded-[80px] ">
                        <img className='w-40 absolute rounded-full  md:hidden -top-24 left-1/2 -translate-x-1/2 m-auto bg-white' src={why1} alt="" />
                        <h4 className='text-blue-900 font-bold text-4xl text-center my-4 z-30'>Level 0</h4>
                        <p className='text-dark/75'>
                        Level Zero builds on the foundations established in
                        Level Zero. You'll enhance your problem-solving skills by working on a variety 
                          of algorithmic challenges, learning essential data structures, and optimizing your code for 
                          efficiency. Are you ready to elevate your skills? Join Level One now!
                        </p>
                        <div className="d-flex justify-end">
                          <spam  className='btn !font-bold  grade2 text-center !rounded-full py-2 text-light mt-3 px-4 mx-auto disabled'>Closed <i class="fa-solid fa-lock"></i></spam>
                        </div>
                    </motion.div>
                </div>
              <div  className="col-md-6 col-12 col-xl-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:0.7 , y:0}} transition={{duration:1 }} className="box pt-10 sm:top-0 md:top-0 lg:top-0 xl:top-0 -top-16 boxBorder h-[420px] lg:h-[470px] md:my-7 shadow-xl p-10 relative rounded-[80px] ">
                        <img className='w-40 absolute rounded-full  md:hidden -top-24 left-1/2 -translate-x-1/2 m-auto bg-white' src={why1} alt="" />
                        <h4 className='text-blue-900 font-bold text-4xl text-center my-4 z-30'>Level 1</h4>
                        <p className='text-dark/75'>
                        Level One builds on the foundations established in
                        Level Zero. You'll enhance your problem-solving skills by working on a variety 
                          of algorithmic challenges, learning essential data structures, and optimizing your code for 
                          efficiency. Are you ready to elevate your skills? Join Level One now!
                        </p>
                        <div className="d-flex justify-end">
                          <spam  className='btn !font-bold  grade2 text-center !rounded-full py-2 text-light mt-3 px-4 mx-auto disabled'>Closed <i class="fa-solid fa-lock"></i></spam>
                        </div>
                    </motion.div>
                </div>
              <div  className="col-md-6 col-12 col-xl-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:0.7 , y:0}} transition={{duration:1 }} className="box pt-10 sm:top-0 md:top-0 lg:top-0 xl:top-0 -top-16 boxBorder h-[420px] lg:h-[470px] md:my-7 shadow-xl p-10 relative rounded-[80px] ">
                        <img className='w-40 absolute rounded-full  md:hidden -top-24 left-1/2 -translate-x-1/2 m-auto bg-white' src={why1} alt="" />
                        <h4 className='text-blue-900 font-bold text-4xl text-center my-4 z-30'>Level 2</h4>
                        <p className='text-dark/75'>
                        Level One builds on the foundations established in
                        Level Zero. You'll enhance your problem-solving skills by working on a variety 
                          of algorithmic challenges, learning essential data structures, and optimizing your code for 
                          efficiency. Are you ready to elevate your skills? Join Level One now!
                        </p>
                        <div className="d-flex justify-end">
                          <spam  className='btn !font-bold  grade2 text-center !rounded-full py-2 text-light mt-3 px-4 mx-auto disabled'>Closed <i class="fa-solid fa-lock"></i></spam>
                        </div>
                    </motion.div>
                </div>
              </>: <>
              {data?.data.data.map(lvl => (
                    <div key={lvl._id} className="col-md-6 col-12 col-xl-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:1 , y:0}} transition={{duration:0.5 }} className="box lg:mb-36 sm:mb-6 boxBorder h-[420px] lg:h-[470px]   shadow-xl border-blue p-10 relative rounded-[80px] ">
                        <img className='w-40 absolute rounded-full  md:hidden -top-24 left-1/2 -translate-x-1/2 m-auto bg-white' src={why1} alt={lvl.title} />
                        <h4 className='text-blue-900 font-bold text-4xl text-center my-4 z-30'>{lvl.title}</h4>
                        <p className='text-dark/75'>{lvl.description}</p>
                        <div className="d-flex justify-end">
                            <Link to={`/level/${lvl._id}`} className='btn !font-bold  grade2 text-center mt-7 mb-3 !rounded-full py-2 text-light px-4 mx-auto'>Join</Link>
                        </div>
                    </motion.div>
                    </div>
                ))}
              </>}
              
                
                {/* <div  className="col-md-6 col-12 col-xl-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:0.7 , y:0}} transition={{duration:1 }} className="box sm:top-0 md:top-0 lg:top-0 xl:top-0 -top-16 boxBorder h-[420px] lg:h-[470px] md:my-7 shadow-xl p-10 relative rounded-[80px] ">
                        <img className='w-40 absolute rounded-full  md:hidden -top-24 left-1/2 -translate-x-1/2 m-auto bg-white' src={why1} alt="" />
                        <h4 className='text-blue-900 font-bold text-4xl text-center my-4 z-30'>Level 1</h4>
                        <p className='text-dark/75'>
                        Level One builds on the foundations established in
                        Level Zero. You'll enhance your problem-solving skills by working on a variety 
                          of algorithmic challenges, learning essential data structures, and optimizing your code for 
                          efficiency. Are you ready to elevate your skills? Join Level One now!
                        </p>
                        <div className="d-flex justify-end">
                          <spam  className='btn !font-bold  grade2 text-center !rounded-full py-2 text-light mt-3 px-4 mx-auto disabled'>Closed <i class="fa-solid fa-lock"></i></spam>
                        </div>
                    </motion.div>
                </div>
                <div  className="col-md-6 col-12 col-xl-4">
                    <motion.div initial={{opacity:0 , y:50}} whileInView={{opacity:0.7 , y:0}} transition={{duration:1 }} className="box boxBorder  xl:mt-28 sm:mt-6 h-[420px] lg:h-[470px] shadow-xl p-10 relative rounded-[80px] ">
                        <img className='w-40 absolute rounded-full  md:hidden -top-24 left-1/2 -translate-x-1/2 m-auto bg-white' src={why1} alt="" />
                        <h4 className='text-blue-900 font-bold text-4xl text-center my-4 z-30'>Level 2</h4>
                        <p className='text-dark/75'>
                        Level Two takes your programming journey to the next 
                        level. At this stage, you'll explore advanced algorithms and data structures, such 
                        as dynamic programming, graphs, and advanced search techniques.  This level is ideal
                         for those who want to sharpen their skills and excel in  ECPC. Don't miss out on this 
                         opportunity Enroll in Level Two today!
                        </p>
                        <div className="d-flex justify-end">
                          <spam  className='btn !font-bold  grade2 text-center !rounded-full py-2 text-light px-4 mx-auto disabled'>Closed <i class="fa-solid fa-lock"></i></spam>
                        </div>
                    </motion.div>
                </div> */}
                
            </div>
        </div>
    </div>
  )
}

export default Levels