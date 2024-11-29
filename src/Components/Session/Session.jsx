import React, { useEffect, useState } from "react";
import AnimatedText from "../AnimatedText";
import line2 from "../../Images/line 2.jpeg";
import content from '../../Images/what1-removebg-preview.png'
import TransitionEffect from "../TransitionEffect";
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from "react-router-dom";
import Sheet from "../Codeforces/sheet/Sheet";

const Session = () => {

  const { sessionId } = useParams(); // استخرج معرف السيشن من URL
  const [sessionData, setSessionData] = useState(null); // حالة لتخزين بيانات السيشن
  const [loading, setLoading] = useState(true); // حالة للتحميل


  useEffect(() => {
    console.log("Session ID:", sessionId); // تحقق من قيمة sessionId
    const fetchSessionData = async () => {
      const docRef = doc(db, 'sessions', sessionId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSessionData(docSnap.data());
      } else {
        console.log('No such document!');
      }
      setLoading(false); // أوقف حالة التحميل بعد الانتهاء من الجلب
    };

    fetchSessionData();
  }, [sessionId]);

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
        <AnimatedText
          text={sessionData.title || "Session Title"}
          ClassName="mt-20 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark/75 z-20"
        />
        
        <div className="row pb-16 justify-center align-items-center">
            <div className="col-md-6">
                <AnimatedText text="Session Content" ClassName='text-start !text-5xl !text-blue-500 '/>
                <ul className="fs-4 text-dark/75">
                  {sessionData.content ? sessionData.content.split('\n').map((item, index) => (
                    <li key={index}>-{item}</li> // استخدم محتوى السيشن من البيانات
                  )) : <li>No content available</li>}
                </ul>
            </div>
            <div className="col-md-6">
                <img className="w-100" src={content} alt="" />
            </div>
        </div>

        <div className="line d-flex justify-center align-items-center relative top-7 ">
          <img className="rounded-2xl w-[20%]" src={line2} alt="line" />
        </div>
        
        <div className="vid d-flex relative -top-4 justify-center align-items-center  d-md-flex ">
        {sessionData.link ? (
              <iframe
                width="950"
                height="500"
                src={sessionData.link}
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



       
        {sessionData.sessionPdf ? <>

            <div className="line d-flex justify-center align-items-center relative top-7 ">
            <img className="rounded-2xl w-[20%]" src={line2} alt="line" />
            </div>

            <AnimatedText
            text="Presentation"
            ClassName="my-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark/75 z-20"
            />
        <div className=" d-flex relative -top-4 justify-center align-items-center  d-md-flex ">

              
             <iframe 
            src={`${sessionData.sessionPdf}/preview`} 
            width="100%" 
             height="600px"
             title="pdf session"
             >
              
           </iframe>
            
        </div>
           </> : (
              <p>No pdf available.</p> // عرض رسالة بدلاً من iframe إذا لم يكن هناك رابط
            )} 



        <div className="line d-flex justify-center align-items-center relative top-7 ">
          <img className="rounded-2xl w-[20%]" src={line2} alt="line" />
        </div>

        <AnimatedText
          text="Sheet"
          ClassName="my-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-dark/75 z-20"
        />
       
        <Sheet link={sessionData.sheetLink}/>

      </div>
    </div>
  </>
};

export default Session;


