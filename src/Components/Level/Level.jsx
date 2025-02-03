import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../AnimatedText'
import logo from '../../Images/Colored Icon.png'
import { Link, useParams } from 'react-router-dom'
import TransitionEffect from '../TransitionEffect'
import { db } from '../../firebase';
import { doc, getDoc, collection, query, where, getDocs, deleteDoc } from 'firebase/firestore';
import { AuthContext } from '../../Context/AuthContext'

const Level = () => {

    const { id } = useParams();
    const [level, setLevel] = useState(null);
    const [loading, setLoading] = useState(true); // Add a loading state
    const [waves, setWaves] = useState([]); // لحفظ الويفز المرتبطة بالمستوى
    // const {flagAdmin} = useContext(AuthContext)


    useEffect(() => {
        const fetchlevel = async () => {
            const docRef = doc(db, 'levels', id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setLevel(docSnap.data());
            } else {
                console.log('No such document!');
            }
            setLoading(false); // Stop loading once the data is fetched
        };
        fetchlevel();
    }, [id]);

    useEffect(() => {
        const fetchWaves = async () => {
            const wavesRef = collection(db, 'waves');
            const q = query(wavesRef, where('levelId', '==', id)); // جلب الويفز التي تحتوي على نفس levelId
            const querySnapshot = await getDocs(q);
            const wavesArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setWaves(wavesArray);
        };

        if (id) {
            fetchWaves();
        }
    }, [id]);


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
    
    if (!level) {
        return <p>No level found.</p>;
    }

    // const handleDelete = async (id) => {
    //     const docRef = doc(db, 'waves', id);
    
    //     await deleteDoc(docRef)
    //       .then(() => {
    //           setWaves(waves.filter(wave => wave.id !== id)); // إزالة المقالة من الحالة بعد الحذف
    //         alert("تم حذف الوثيقة بنجاح!");
    //       })
    //       .catch((error) => {
    //         alert("حدث خطأ أثناء محاولة حذف الوثيقة:", error);
    //       });
    //   }

    return <>
    <TransitionEffect/>
    <div className='level'>
        <div className="container py-24 ">
            <AnimatedText text={level.title} ClassName='text-center !text-6xl !text-blue-500 my-5'/>
            <div className="text flex align-items-center justify-center">
                <p className='w-[75%] md:w-[100%] mb-5 text-center text-dark/75'>{level.Paragraph}</p>
            </div>

            
            
            <div className="row py-16 !mt-20">
            {waves.length > 0 ? (
                            waves.map((wave) => (
                                <div key={wave.id} className="col-md-4">
                                    {/* {flagAdmin?<button className='btn btn-danger' onClick={() => handleDelete(waves.id)}>Delete</button>:<></>} */}
                                    <div className="box p-16 rounded-full relative bg-blue-900">
                                        <img className="absolute left-[40%] -top-[50%] w-20" src={logo} alt="icpc logo" />
                                        <h2 className="text-light text-center !text-5xl">{wave.title}</h2>
                                        {/* <p className="text-light text-center mt-2">{wave.description}</p> */}
                                        <div className="btn absolute bottom-0 right-11 pb-2">
                                            <Link
                                                to={`/wave/${wave.id}`}
                                                className="btn bg-white !rounded-full !text-blue-900 fw-bold px-4 text-end"
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
        </div>
    </div>
  </>
}

export default Level