import React, { useContext, useEffect, useState } from "react";
import AnimatedText from "../AnimatedText";
import logo from "../../Images/Colored Icon.png";
import { Link, useParams } from "react-router-dom";
import TransitionEffect from "../TransitionEffect";
import MainHeading from "../MainHeading/MainHeading";
import ideaImg from "../../Images/idea.png";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { useQuery } from "react-query";

const Level = () => {
  const { id } = useParams();

  const { userToken } = useContext(AuthContext); // استدعاء التوكن من الكونتكست

  function getLevel() {
    return axios.get(`https://icpc-hti.vercel.app/api/level/${id}`, {
      headers: { token: userToken },
    });
  }

  const { data, isLoading, isError, refetch } = useQuery("getLevel", getLevel, {
    enabled: false, // لا يتم جلب البيانات تلقائيًا
    refetchOnWindowFocus: false, // لا يعيد الجلب عند التنقل بين التبويبات
  });

  // دالة لاستدعاء البيانات مرة واحدة عند الحاجة
  useEffect(() => {
    function fetchWaveData() {
      refetch(); // استدعاء الطلب يدويًا فقط
    }

    fetchWaveData();
  }, []);


  if (isLoading)
    return (
      <>
        <div className="flex align-middle pt-16 justify-center">
          <div class="animate-pulse flex flex-col items-center gap-4 w-100">
            <div>
              <div class="w-48 h-6 bg-slate-400 rounded-md"></div>
              <div class="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
            </div>
            <div class="h-7 bg-slate-400 w-full rounded-md"></div>
            <div class="h-7 bg-slate-400 w-full rounded-md"></div>
            <div class="h-7 bg-slate-400 w-full rounded-md"></div>
            <div class="h-7 bg-slate-400 w-1/2 rounded-md"></div>
          </div>
        </div>
      </>
    );
  // if (isError) return <p className="py-32"> {data?.data.data.response.data.messege} حدث خطأ أثناء تحميل البيانات.</p>;

  
  

  return (
    <>
      <TransitionEffect />
      <div className="level">
        <div className="container py-24 sm:py-16 ">
          <div className="my-8 pl-6">
            <MainHeading title1="" title2={data?.data.data.title} />
          </div>
          <div className="text flex flex-wrap justify-between items-start">
            <p className="w-1/2 text-xl sm:w-[100%] lg:w-[100%] xl:w-[100%  text-[#7F7F7F] md:w-[100%] mb-5 text-dark/75 relative before:w-[8px] before:bg-[#FEBA12] before:h-full before:absolute before:top-0 pl-5 before:left-0">
              {data?.data.data.description}
            </p>
            <div className="w-1/2 flex justify-center items-start sm:hidden md:hidden lg:hidden xl:hidden ">
              <img
                src={ideaImg}
                className="w-[400px] relative -top-[80px] block object-cover md:w-[0%]"
                alt="idea img"
              />
            </div>
          </div>

          {isError ? <><p className="py-32"> حدث خطأ أثناء تحميل البيانات.</p></> : <>
          <div className="row py-16 !mt-12 justify-center">
            {data?.data.data.camps.length > 0 ? (
              data?.data.data.camps.map((wave) => (
                <div key={wave._id} className="col-md-6 col-lg-4 col-sm-12 p-3">
                  <div className="box p-10 relative bg-[#FBFBFB] boxBorder rounded-[80px]">
                    <img
                      className="absolute left-[40%] -top-[50%] w-20"
                      src={logo}
                      alt="icpc logo"
                    />
                    <h2 className="text-[#305593] text-center font-bold !text-5xl ">
                      {wave.title}
                    </h2>
                    {/* <p className="text-dark text-center mt-2">{wave.description}</p> */}
                    <div className="flex justify-center mt-8">
                      <Link
                        to={`/wave/${wave._id}`}
                        className="btn grade2 !rounded-full fw-bold px-4 text-end"
                      >
                        Join
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No waves available for this level.</p>
            )}
            {/* <div  className="col-md-4">
                    <div className="box p-16 rounded-full relative bg-blue-900">
                        <img className='absolute left-[40%] -top-[50%] w-20' src={logo} alt="icpc logo" />
                        <h2 className='text-light text-center !text-5xl'>wave 1</h2>
                        <div className="btn absolute bottom-0 right-11 pb-2">
                            <Link to={'/wave'} className=' btn bg-white !rounded-full !text-blue-900 fw-bold px-4  text-end'>Join</Link>
                        </div>
                    </div>
                    </div> */}
          </div>
          
          </>}
        </div>
      </div>
    </>
  );
};

export default Level;
