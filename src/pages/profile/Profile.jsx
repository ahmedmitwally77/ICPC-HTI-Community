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
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';


const Profile = () => {
  const { setFlagAdmin , setFlag} = useContext(AuthContext)
  const {  userData ,currentUser } = useContext(AuthContext)
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const user = auth.currentUser; // الحصول على المستخدم الحالي من Firebase Authentication
    if (user) {
      setArticles({
        displayName: user.displayName,
        photoURL: user.photoURL,  // رابط الصورة من Firebase Authentication
      });
    }
  }, []);

  const handleSignOut =()=>{
    setFlagAdmin(false);
    setFlag(false)
  }
  return <>
    <TransitionEffect/>

    <div className='Profile mt-10 relative overflow-x-hidden'>
      <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="Profile" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bgWaves w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
      </div>

      <div className="profDetails bg-white rounded-3xl relative -top-14 sm:top-0">
          <div className="container">
            <div className="box m-auto p-10 bg-white  w-100 !md:w-[100%] shadow-2xl rounded-3xl relative -top-14">
              <div className="row justify-center align-items-center">
                <div className="col-md-3">
                  <img src={articles?.photoURL} alt="" />
                </div>
                <div className="col-md-9">
                  <div className="name d-flex justify-between w-100">
                  <div className='w-100 me-2'>
                    <label for="First_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input  type="text" id="First_name" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder={userData?.Fname} required disabled/>

                  </div>
                  <div className='w-100'>
                    <label for="Last_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input type="text" id="Last_name" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder={userData?.Lname} required  disabled/>
                  </div>
                  
                  </div>

                  <div className="idGender d-flex justify-between w-100">
                    <div className='w-100 me-2'>
                      <label for="id" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Stu ID</label>
                      <input  type="number" id="id" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder={userData?.stuId} required disabled/>

                    </div>
                    <div className='w-100 me-2'>
                      <label for="phone" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                      <input type="number" id="phone" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder={userData?.phone} required disabled/>

                    </div>
                  </div>
              
                  <label for="email" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" id="email" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder={userData?.email} required  disabled/>

                    <div className='w-100 me-2'>
                      <label for="nationalID" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">National ID</label>
                      <input  type="number" id="nationalID" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder={userData?.nationalId} required disabled/>

                    </div>

                  <div className="idGender d-flex justify-between w-100">
                    <div className='w-100 me-2'>
                      <label for="handle" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Codeforces Handle</label>
                      <input  type="text" id="handle" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder={userData?.handle} required disabled/>

                    </div>

                    <div className='w-100 me-2'>
                      <label for="total" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Total Problems</label>
                      <input  type="number" id="total" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="0 " required disabled/>

                    </div>
                  </div>

                </div>
                <Link to="/login" title="Log Out" className='mx-3 w-50  mt-5 p-2 btn grade2  text-decoration-none text-white' onClick={() => { signOut(auth); handleSignOut();}}>Log Out</Link>
              </div>
            </div>
          </div>
      </div>

    </div>
  </>
}

export default Profile