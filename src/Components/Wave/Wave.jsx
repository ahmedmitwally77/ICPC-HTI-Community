import React, { useContext, useEffect, useState } from "react";
import AnimatedText from "../AnimatedText";
import TransitionEffect from "../TransitionEffect";
import { Link, useParams } from "react-router-dom";
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import MainHeading from "../MainHeading/MainHeading";
import { FaGraduationCap } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import StandingData from "../DashBoardPages/generalPages/StandingData";


const Wave = () => {
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const [wave, setWave] = useState(null);
  const [sessions, setSessions] = useState([]); // State to hold sessions
  const [sheetLinks, setSheetLinks] = useState([]); // State to hold sessions
  const [loading, setLoading] = useState(true); // Add a loading state


  useEffect(() => {
    const fetchWave = async () => {
        const docRef = doc(db, 'waves', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setWave(docSnap.data());
        } else {
            console.log('No such document!');
        }
        setLoading(false); // Stop loading once the data is fetched
    };
      
    const fetchLinks = async () => {
        try {
          const linksCollection = collection(db, "standingW1"); // اسم مجموعة الروابط في Firebase
          const linksSnapshot = await getDocs(linksCollection);
          const linksList = linksSnapshot.docs.map((doc) => doc.data().url); // استخراج الروابط فقط
          setSheetLinks(linksList);
          
        } catch (err) {
          console.error("Error fetching links: ", err);
        }
      };
  
      fetchLinks();


    const fetchSessions = async () => {
        const sessionsQuery = query(collection(db, 'sessions'), where('waveId', '==', id));
        const sessionsSnapshot = await getDocs(sessionsQuery);
        const sessionsList = sessionsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setSessions(sessionsList);
        console.log(sessions)
    };

    fetchWave();
    fetchSessions();
}, [id]);

// Function to render a session box
    function sessionBox(session){ 
        return (
                <div key={session.id} className="box bgSession text-white p-4 rounded-xl w-1/5 sm:w-full md:w-full lg:w-1/3 ">
                    <h4 className="text-xl font-bold mb-4">{session.title}</h4>
                    <p className="flex text-md items-center gap-2"> <FaGraduationCap /> Beginer level</p>
                    <p className="flex text-md items-center gap-2"><IoMdTime /> Published on: Oct 2024</p>
                    <Link to={`/session/${session.id}`}>
                        <button className="flex items-center gap-2 bg-white text-black p-2  rounded-full ml-auto"><FaPlay /></button>
                    </Link>
                </div>
        )
    }


if (loading ) {
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

if (!wave) {
    return <p>No level found.</p>;
}

return (
    <>
    <TransitionEffect />
    <div className="wave">
        <div className="container py-20">
            <div className="py-12 pb-6 sm:pl-4">
            <MainHeading title2={wave.title} />
            </div>

            <div className="text flex flex-wrap justify-between items-start pb-8">
                <p className='text-xl md:w-[100%] text-[#2E2E2E] relative before:w-[8px] before:bg-[#FEBA12] before:h-full before:absolute before:top-0 pl-5 before:left-0'>{wave.description.length < 10 ?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur delectus necessitatibus, excepturi amet repellendus molestias soluta voluptates quo accusantium voluptas? Vitae, placeat nisi eum consectetur praesentium quasi ex quis blanditiis voluptas ipsam nihil accusamus, deserunt ut eaque cum error fuga natus possimus molestiae sed eos? Itaque facilis ipsam consectetur ipsa." : wave.description}</p>
            </div>


            <div className="sm:pl-4">
            <MainHeading title1="Sessions" />
            </div>

            <div className="mt-4 flex flex-wrap gap-4 justify-center">
                {sessions.map((session) => (
                    sessionBox(session)
                ))}
            </div>
            
            <div className="my-16">
                <StandingData />
            </div>

        </div>
      </div>
    </>
  );
};

export default Wave;
