import React, { useContext, useEffect, useState } from "react";
import AnimatedText from "../AnimatedText";
import TransitionEffect from "../TransitionEffect";
import { Link, useParams } from "react-router-dom";
import { db } from '../../firebase';
import { collection, deleteDoc, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

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
          console.log(linksList);
          
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
    };

    fetchWave();
    fetchSessions();
}, [id]);
console.log(sheetLinks);



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
            <AnimatedText
                text={wave.title}
                ClassName="text-center !text-6xl !text-blue-500 my-5"
            />
            <div className="text flex align-items-center justify-center">
                <p className="w-[75%] md:w-[100%] mb-5 text-center text-dark/75">{wave.description}</p>
            </div>

            {/* <div className="shadow p-4 rounded">
                <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setOpen(!open)}
                >
                <h3 className="text-dark/75">Sessions</h3>
                <span>{open ? "▲" : "▼"}</span>
                </div>

                <div
                className={`transition-all duration-300 overflow-hidden ${
                    open ? "max-h-96" : "max-h-0"
                }`}
                >
                <div className="mt-4 space-y-2">
                    {titles.map((item) => (
                    <div key={item.id} className="p-2 bg-gray-100 rounded">
                        <Link>
                            <h4 className="font-bold">{item.title}</h4>
                        </Link>
                    </div>
                    ))}
                </div>
                </div>
            </div> */}
            <div className="shadow p-4 rounded">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setOpen(!open)}
                        >
                            <h3 className="text-dark/75">Sessions</h3>
                            <span>{open ? "▲" : "▼"}</span>
                        </div>

                        <div
                            className={`transition-all duration-300 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}
                        >
                            <div className="mt-4 space-y-2">
                                {sessions.map((session) => (
                                    <div key={session.id} className="p-2 bg-gray-100 rounded">
                                        <Link to={`/session/${session.id}`}>
                                            <h4 className="font-bold">{session.title}</h4>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

            <AnimatedText
                text="Standing"
                ClassName="text-start !text-5xl !text-blue-900 my-5"
            />
            <iframe 
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQNxfnw5XmXe4EqnjpOKRlqcM2HAOyB8QovkTeaHo6P1s3JOIMbF-N0fDcAFzI1XJlgQ8JsV3rLdEbo/pubhtml?gid=467328511&amp;single=true&amp;widget=true&amp;headers=false"
                width="100%"
                height="600"
                title="standing"
                frameborder="0">
            </iframe>

        </div>
      </div>
    </>
  );
};

export default Wave;
