import React, { useContext, useEffect, useState } from "react";
import AnimatedText from "../AnimatedText";
import line2 from "../../Images/line 2.jpeg";
import content from '../../Images/sessionContent.png'
import TransitionEffect from "../TransitionEffect";
import { useParams } from "react-router-dom";
import Sheet from "../Codeforces/sheet/Sheet";
import MainHeading from "../MainHeading/MainHeading";
import { RxDotFilled } from "react-icons/rx";
import { AuthContext } from "../../Context/AuthContext";
import { useQuery } from "react-query";
import axios from "axios";

const Session = () => {

  const { id } = useParams();
  const { userToken } = useContext(AuthContext); // استدعاء التوكن من الكونتكست
  const { userData } = useContext(AuthContext); // استدعاء التوكن من الكونتكست
  console.log(id);

  function getSession() {
    console.log("Fetching session with ID:", id);
    return axios.get(`https://icpc-hti.vercel.app/api/session/leader/${id}`, {
      headers: { token: userToken },
    }).then(response => response.data.data) // إرجاع البيانات من الاستجابة
      .catch(error => {
        console.error("API Error:", error);
        throw error; // إعادة رمي الخطأ حتى يتمكن useQuery من التعامل معه
      });
  }
  
  const { data, isLoading, isError, refetch } = useQuery("getSession", getSession, {
    enabled: false, // لا يتم جلب البيانات تلقائيًا
    refetchOnWindowFocus: true, // لا يعيد الجلب عند التنقل بين التبويبات
  });
  
  console.log(data?.title);
  
  // دالة لاستدعاء البيانات مرة واحدة عند الحاجة
  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, refetch]);

  function handleSubmitSession(id) {
    try {
      axios.delete(`https://icpc-hti.vercel.app/api/session/attend/${id}`, {
        headers: { token: userToken },
      });

      alert("Attendance Submited ^-^");
    } catch (error) {
      console.error("خطأ أثناء إرسال البيانات:", error);
      alert("فى مشكله حصلت");
    }
  }


  if (isLoading) return <>
    <div className="flex align-middle py-32 justify-center">
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
  </>;
  if (isError) return <p className="py-32">حدث خطأ أثناء تحميل البيانات.</p>;

  return <>
    <TransitionEffect />

    <div className="session">

      <div className="container py-20">
        <div className="my-12 sm:pl-6">
          <MainHeading title2={data?.title} />
        </div>     

        <div className="attendanceB flex justify-center align-middle">
          <button className="btnnew" onClick={() => handleSubmitSession(userData.userId)}>submit attendance</button>
        </div>

        <div className="vid  d-flex py-8 relative -top-4 w-[80%] sm:w-[100%] md:w-[100%] mx-auto justify-center align-items-center  d-md-flex ">
        {data?.sessionLink ? (
              <iframe
                width="100%"
                height="500"
                src={data?.sessionLink}
                className="rounded-3xl"
                title="YouTube video player"
                frameborder="0" // تعديل هنا
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <p>No video available.</p> // عرض رسالة بدلاً من iframe إذا لم يكن هناك رابط
            )}
        </div>

        <div className="line d-flex justify-center align-items-center relative top-7 ">
            <img className="rounded-2xl w-[20%]" src={line2} alt="line" />
        </div>
        
        <div className="flex flex-wrap pb-16 mt-16 justify-center align-items-center">
            <div className="w-2/3 sm:w-full md:w-full lg:w-full">
                <div className="sm:pl-6">
                <MainHeading title2="Session Content" />
                </div>
                <ul className="fs-4 text-dark/75">
                  {data?.description ? data?.description.split('\n').map((item, index) => (
                    <li className="my-2 flex align-items-center gap-2" key={index} > <RxDotFilled /> {item}</li> // استخدم محتوى السيشن من البيانات
                  )) : <li>No content available</li>}
                </ul>
            </div>
            <div className="w-1/3 sm:w-full md:w-full lg:w-full flex justify-center align-items-center">
                <img className="w-3/4 sm:w-1/2 sm:mt-8 md:w-1/2 lg:w-1/2 object-cover" src={content} alt="" />
            </div>
        </div>

        <div className="line d-flex justify-center align-items-center relative top-7 ">
          <img className="rounded-2xl w-[20%]" src={line2} alt="line" />
        </div>
        
        {data?.sessionSlides ? <>
{/* 
        <div className="flex flex-wrap pb-16 mt-16 justify-center align-items-center">
          <div className="w-2/3 sm:w-full md:w-full lg:w-full">
            <div className="sm:pl-6">
              <MainHeading title2="Session Content" />
            </div>
            <ul className="fs-4 text-dark/75">
              {data?.data.data.description ? <li className="my-2 flex align-items-center gap-2" > <RxDotFilled /> {data.data.data.description}</li> : <li>No content available</li>}
            </ul>
          </div>
          <div className="w-1/3 sm:w-full md:w-full lg:w-full flex justify-center align-items-center">
            <img className="w-3/4 sm:w-1/2 sm:mt-8 md:w-1/2 lg:w-1/2 object-cover" src={content} alt="" />
          </div>
        </div>

        <div className="line d-flex justify-center align-items-center relative top-7 ">
          <img className="rounded-2xl w-[20%]" src={line2} alt="line" />
        </div>

        {data?.data.data.sessionPdf ? <>
>>>>>>> 39f0a80badee4b5b360dd31bad20e3856a5d2abe */}

          <div className="my-20 sm:pl-6">
            <MainHeading title2="Session PDF" />
          </div>

          <div className=" d-flex relative w-[80%] sm:w-[100%] md:w-[100%] mx-auto -top-4 justify-center align-items-center  d-md-flex ">

            <iframe 
            src={`${data?.sessionSlides}/preview`} 
            width="100%" 
            height="600px"
            title="pdf session"
            className="rounded-3xl"
// =======
//             <iframe
//               src={`${data?.data.data.sessionSlides.secure_url}/preview`}
//               width="100%"
//               height="600px"
//               title="pdf session"
//               className="rounded-3xl"
// >>>>>>> 39f0a80badee4b5b360dd31bad20e3856a5d2abe
            >
            </iframe>

          </div>
        </> : (
          <p>No pdf available.</p> // عرض رسالة بدلاً من iframe إذا لم يكن هناك رابط
        )}



        <div className="line d-flex justify-center align-items-center relative top-7 ">
          <img className="rounded-2xl w-[20%]" src={line2} alt="line" />
        </div>

        <div className="mt-20 sm:pl-6">
          <MainHeading title2="Sheet" />
        </div>
       
        {/* <Sheet link={data?.sheetLink}/> */}

{/* //         <Sheet link={data?.data.data.sessionSheet} />
// >>>>>>> 39f0a80badee4b5b360dd31bad20e3856a5d2abe */}

      </div>
    </div>
  </>
};

export default Session;


