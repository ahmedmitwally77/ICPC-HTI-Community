import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../../Components/AnimatedText'
import TransitionEffect from '../../Components/TransitionEffect'
import HomeImg from '../../Images/IMG_3229 full.webp'
import { AuthContext } from '../../Context/AuthContext'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth, db } from '../../firebase'
import img from '../../Images/me.webp'
import line2 from '../../Images/line 2.jpeg'
import { collection, getDocs, query, where } from 'firebase/firestore';


const Profile = () => {
  const { setFlagAdmin , setFlag} = useContext(AuthContext)
  const {  userData ,currentUser } = useContext(AuthContext)
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    console.log(userData);
    
    const fetchArticles = async () => {
      if (!currentUser || !currentUser.uid) {
        console.error('No user is currently logged in.');
        return; // Handle the case where no user is logged in
      }


      const articlesCollection = collection(db, 'users'); // Assuming 'articles' collection stores articles
      const userArticlesQuery = query(articlesCollection, where('uid', '==', currentUser.uid)); // Filter by user ID

      try {
        const articlesSnapshot = await getDocs(userArticlesQuery);
        const userArticlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setArticles(userArticlesList);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
      
      // const articlesCollection = collection(db, 'users');
      // const articlesSnapshot = await getDocs(articlesCollection);
      // const articlesList = articlesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      // setArticles(articlesList);
    };
    fetchArticles();
  }, [currentUser]);

  const handleSignOut =()=>{
    setFlagAdmin(false);
    setFlag(false)
  }
  return <>
    <TransitionEffect/>

    <div className='Profile mt-10 relative overflow-x-hidden'>
      <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="Profile" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bg-dark/50 w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
        </div>

        <div className='line d-flex justify-center align-items-center relative top-7 '>
              <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
          </div>
        <div className="container py-20">
          
          <div className="row">
            <div className="col-md-6">
                    <div className="card mx-3 w-25 relative d-flex justify-center align-items-center bg-dark border shadow-lg overflow-hidden">
                        <div className="content text-center bottom-0 text-light bg-dark/65 w-100 rounded-xl absolute">
                            <h3>change photo</h3>
                        </div>
                        <div className="">
                          <img className='w-100 hover:scale-105 transition-transform' src={userData?.downloadURL} alt="" />
                        </div>
                    </div>
            </div>
            <div className="col-md-6">
              <div className="box">
                <h3>name: {articles[0]?.Fname}</h3>
                <h3>email: {userData?.email}</h3>
                <h3>stuId: {userData?.stuId}</h3>
                <h3>phone: {userData?.phone}</h3>
                <h3>national ID: {userData?.nationalId}</h3>
                <h3>Handle: {userData?.handle}</h3>
                <h3>Total Problems: .......</h3>
                <img src={userData?.downloadURL} alt="" />
              </div>
            </div>
          </div>

          

          <Link to="/login" title="Log Out" className='mx-3 btn bg-dark text-decoration-none text-white' onClick={() => { signOut(auth); handleSignOut();}}>Log Out</Link>
        </div>


    </div>
  </>
}

export default Profile