import React, { useEffect, useState } from "react";
import AnimatedText from "../AnimatedText";
import line2 from "../../Images/line 2.jpeg";
import content from '../../Images/sessionContent.png'
import TransitionEffect from "../TransitionEffect";
import { useParams } from "react-router-dom";
import Sheet from "../Codeforces/sheet/Sheet";
import MainHeading from "../MainHeading/MainHeading";
import { RxDotFilled } from "react-icons/rx";

const Session = () => {

  const { sessionId } = useParams(); // استخرج معرف السيشن من URL
  const [sessionData, setSessionData] = useState(null); // حالة لتخزين بيانات السيشن
  const [loading, setLoading] = useState(false); // حالة للتحميل


  // useEffect(() => {
  //   console.log("Session ID:", sessionId); // تحقق من قيمة sessionId
  //   const fetchSessionData = async () => {
  //     const docRef = doc(db, 'sessions', sessionId);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setSessionData(docSnap.data());
  //     } else {
  //       console.log('No such document!');
  //     }
  //     setLoading(false); // أوقف حالة التحميل بعد الانتهاء من الجلب
  //   };

  //   fetchSessionData();
  // }, [sessionId]);

  // const link = sessionData.sheetLink ;
  // "https://codeforcesapi-b7fuhthjcncdbdax.canadacentral-01.azurewebsites.net/ac/g/WrIZm2zHiL/c/560740/p/1";
  // console.log(sessionData.sheetLink);
  

  if (loading) {
    return (
      <div id="loading">
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
      </div>
    );
  }


  if (!sessionData) {
    return <p>No session found.</p>;
  }

  return <>
    <TransitionEffect />

    <div className="session">
      <div className="container py-20">
        <div className="my-12 sm:pl-6">
          <MainHeading title2={sessionData.title} />
        </div>     

        <div className="vid  d-flex py-8 relative -top-4 w-[80%] sm:w-[100%] md:w-[100%] mx-auto justify-center align-items-center  d-md-flex ">
        {sessionData.link ? (
              <iframe
              
                width="100%"
                height="500"
                src={sessionData.link}
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
                  {sessionData.content ? sessionData.content.split('\n').map((item, index) => (
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
        
        {sessionData.sessionPdf ? <>



       <div className="my-20 sm:pl-6">
        <MainHeading title2="Session PDF" />
       </div>

        <div className=" d-flex relative w-[80%] sm:w-[100%] md:w-[100%] mx-auto -top-4 justify-center align-items-center  d-md-flex ">

              
            <iframe 
            src={`${sessionData.sessionPdf}/preview`} 
            width="100%" 
            height="600px"
            title="pdf session"
            className="rounded-3xl"
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
       
        <Sheet link={sessionData.sheetLink}/>

      </div>
    </div>
  </>
};

export default Session;


