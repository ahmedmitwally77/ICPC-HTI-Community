import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../../Components/AnimatedText'
import TransitionEffect from '../../Components/TransitionEffect'
import HomeImg from '../../Images/IMG_3229 full.webp'
import { Link, Outlet } from 'react-router-dom'

import Sidebar from '../../Components/Sidebar'


const DashBoard = () => {
  // const { setFlagAdmin , setFlag} = useContext(AuthContext)
  // const {  userData ,currentUser } = useContext(AuthContext)
  const [articles, setArticles] = useState(null);


  // useEffect(() => {
  //   const user = auth.currentUser; // الحصول على المستخدم الحالي من Firebase Authentication
  //   if (user) {
  //     setArticles({
  //       displayName: user.displayName,
  //       photoURL: user.photoURL, // رابط الصورة من Firebase Authentication
  //     });
  //   }
  // }, []);

  // const handleSignOut = () => {
  //   setFlagAdmin(false);
  //   setFlag(false);
  // };

  return (
    <>
    <div className="mt-16">
      <div className="flex">
        {/* السايد بار */}
        <div
          className={` md:relative z-40 w-64 h-screen bg-light/70 sha border-r `}
        >
          <Sidebar />
        </div>

        {/* المحتوى الرئيسي */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  </>
  );
}

export default DashBoard