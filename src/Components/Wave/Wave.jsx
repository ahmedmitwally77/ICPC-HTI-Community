import React, { useContext, useEffect, useState } from "react";
import AnimatedText from "../AnimatedText";
import TransitionEffect from "../TransitionEffect";
import { Link, useParams } from "react-router-dom";
import MainHeading from "../MainHeading/MainHeading";
import { FaGraduationCap } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { useQuery } from "react-query";
import StandingWaveData from "../standingWaveData/StandingWaveData";


const Wave = () => {

    const { id } = useParams();
  const { userToken } = useContext(AuthContext); // استدعاء التوكن من الكونتكست

  function getWave() {
    return axios.get(`https://icpc-hti.vercel.app/api/camp/leader/${id}`, {
      headers: { token: userToken },
    });
  }

  const { data, isLoading, isError, refetch } = useQuery("getWave", getWave, {
    enabled: false, // لا يتم جلب البيانات تلقائيًا
    refetchOnWindowFocus: false, // لا يعيد الجلب عند التنقل بين التبويبات
  });

  console.log(data.data.data);
  
  
  // دالة لاستدعاء البيانات مرة واحدة عند الحاجة
  useEffect(() => {
    function fetchWaveData() {
      refetch(); // استدعاء الطلب يدويًا فقط
    }
  
    fetchWaveData()
  }, [])

//   useEffect(() => {
//     const fetchWave = async () => {
//         const docRef = doc(db, 'waves', id);
//         const docSnap = await getDoc(docRef);
//         if (docSnap.exists()) {
//             setWave(docSnap.data());
//         } else {
//             console.log('No such document!');
//         }
//         setLoading(false); // Stop loading once the data is fetched
//     };
      
//     const fetchLinks = async () => {
//         try {
//           const linksCollection = collection(db, "standingW1"); // اسم مجموعة الروابط في Firebase
//           const linksSnapshot = await getDocs(linksCollection);
//           const linksList = linksSnapshot.docs.map((doc) => doc.data().url); // استخراج الروابط فقط
//           setSheetLinks(linksList);
          
//         } catch (err) {
//           console.error("Error fetching links: ", err);
//         }
//       };
  
//       fetchLinks();


//     const fetchSessions = async () => {
//         const sessionsQuery = query(collection(db, 'sessions'), where('waveId', '==', id));
//         const sessionsSnapshot = await getDocs(sessionsQuery);
//         const sessionsList = sessionsSnapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//         }));
//         setSessions(sessionsList);
//         console.log(sessions)
//     };

//     fetchWave();
//     fetchSessions();
// }, [id]);

// Function to render a session box
    

function formatDate(isoString) {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
}

function sessionBox(session){ 
        return (
                <div key={session._id} className="box bgSession text-white p-4 rounded-xl w-1/5 sm:w-full md:w-full lg:w-1/3 ">
                    <h4 className="text-xl font-bold mb-4">{session.title}</h4>
                    <p className="flex text-md items-center gap-2"> <FaGraduationCap /> Beginer level</p>
                    <p className="flex text-md items-center gap-2">
                        <IoMdTime /> Published on: {formatDate(session.createdAt)} 
                    </p>
                    <Link to={`/session/${session._id}`}>
                        <button className="flex items-center gap-2 bg-white text-black p-2  rounded-full ml-auto"><FaPlay /></button>
                    </Link>
                </div>
        )
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
  if (isError) return <h2 className=" text-center text-danger py-32">"No Available session at the time"</h2>;


return (
    <>
    <TransitionEffect />
    <div className="wave">
        <div className="container py-20">
            <div className="py-12 pb-6 sm:pl-4">
            <MainHeading title2="Wave" />
            </div>

            <div className="text flex flex-wrap justify-between items-start pb-8">
                <p className='text-xl md:w-[100%] text-[#2E2E2E] relative before:w-[8px] before:bg-[#FEBA12] before:h-full before:absolute before:top-0 pl-5 before:left-0'>
                    {data?.data.data.description.length < 10 ?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur delectus necessitatibus, excepturi amet repellendus molestias soluta voluptates quo accusantium voluptas? Vitae, placeat nisi eum consectetur praesentium quasi ex quis blanditiis voluptas ipsam nihil accusamus, deserunt ut eaque cum error fuga natus possimus molestiae sed eos? Itaque facilis ipsam consectetur ipsa." : data?.data.data.description}
                </p>
            </div>


            <div className="sm:pl-4">
            <MainHeading title1="Sessions" />
            </div>

            <div className="mt-4 flex flex-wrap gap-4 justify-center">
                {data?.data.data.sessions.map((session) => (
                    sessionBox(session)
                ))}
            </div>
            
            <div className="my-16">
                <StandingWaveData />
            </div>

        </div>
      </div>
    </>
  );


};

export default Wave;
