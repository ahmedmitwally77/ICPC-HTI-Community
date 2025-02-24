import React, { useContext, useState } from "react";
import logo from "../Images/Colored Icon.png";
import waves from "../Images/dashboard/waves.svg";
import standing from "../Images/dashboard/standing.svg";
import profile from "../Images/dashboard/profile.svg";
import trainees from "../Images/dashboard/trainees.svg";
import sheetcontest from "../Images/dashboard/sheet&contest.svg";
import attendance from "../Images/dashboard/attendance.svg";
import warning from "../Images/dashboard/warning'.svg";
import addsession from "../Images/dashboard/addsession.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoMdPeople } from "react-icons/io";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";
import axios from 'axios'


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // حالة فتح/إغلاق القائمة الفرعية

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // تبديل حالة القائمة الفرعية
  };

  const [isVisible, setIsVisible] = useState(false); // حالة لإظهار/إخفاء الروابط
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // تبديل الحالة
  };

  let navigate = useNavigate()
  let {setUserToken} = useContext(AuthContext)
  let {setUserData , userData} = useContext(AuthContext)
  
   function Logout(){
    
        localStorage.removeItem('userToken');
        localStorage.removeItem('user');
        setUserToken(null);
        setUserData(null);
        navigate('/login')
  }


  return (
    <>
      <div className="">
        <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <Link className="flex justify-center" to={"/dashboard"}>
            <img className="w-50" src={logo} alt="icpc hti logo" />
          </Link>

          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <Link
                to={"/dashboard/profile"}
                className="flex items-center no-underline px-4 py-2 text-gray-700  rounded-md dark:bg-gray-800 dark:text-gray-200"
              >
                <div className="w-5 h-5" viewBox="0 0 24 24">
                  <img src={profile} alt="profile icon" />
                </div>

                <span className="mx-4 font-medium">Profile</span>
              </Link>

              <Link
                to={"/dashboard/waveData"}
                className="flex items-center no-underline px-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <div className="w-5 h-5" viewBox="0 0 24 24">
                  <img src={waves} alt="waves icon" />
                </div>

                <span className="mx-4 font-medium">Waves</span>
              </Link>

              <Link
                to={"/dashboard/standing"}
                className="flex items-center no-underline px-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <div className="w-5 h-5" viewBox="0 0 24 24">
                  <img src={standing} alt="standing icon" />
                </div>

                <span className="mx-4 font-medium">Standing</span>
              </Link>

              <hr className="my-6 border-gray-900 dark:border-gray-600" />

              {/* mentor access  */}
              {userData.userRole === 'mentor' ? <>
                <h3 className="text-center">Mentor</h3>
                <Link
                  to={'/dashboard/sheet_contest'}
                  className="flex items-center px-4 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5" viewBox="0 0 24 24">
                    <img src={trainees} alt="trainees icon" />
                  </div>
  
                  <span className="mx-4 font-medium">Trainees</span>
                </Link>
              </> : <></>}
              {/* end mentor access  */}

              {/* HR access  */}
              {userData.userRole === 'hr' ? <>
                <h3 className="text-center">HR</h3>
                <Link
                  to={'/dashboard/trainees'}
                  className="flex items-center px-4 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5" viewBox="0 0 24 24">
                    <img src={trainees} alt="trainees icon" />
                  </div>
  
                  <span className="mx-4 font-medium">Trainees</span>
                </Link>
                <Link
                  to={'/dashboard/sheet_contest'}
                  className="flex items-center px-2 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5 ms-3" >
                    <img src={sheetcontest} alt="sheet_contest icon" />
                  </div>
  
                  <span className="mx-2 font-medium">Sheet&Contest</span>
                </Link>
                <Link
                  to={'/dashboard/attendance'}
                  className="flex items-center px-3 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5 ms-2" viewBox="0 0 24 24">
                    <img src={attendance} alt="attendance icon" />
                  </div>
  
                  <span className="mx-2 font-medium">Attendance</span>
                </Link>
                <Link
                  to={'/dashboard/warning'}
                  className="flex items-center px-4 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5" viewBox="0 0 24 24">
                    <img src={warning} alt="warning icon" />
                  </div>
  
                  <span className="mx-4 font-medium">Warning</span>
                </Link>
              </> : <></>}
              {/* end HR access  */}

              {/* instructor access  */}
              {userData.userRole === 'instructor' ? <>
                <h3 className="text-center">Instructor</h3>
                <Link
                  to={'/dashboard/trainees'}
                  className="flex items-center px-4 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5" viewBox="0 0 24 24">
                    <img src={trainees} alt="trainees icon" />
                  </div>
  
                  <span className="mx-4 font-medium">Trainees</span>
                </Link>
                <Link
                  to={'/dashboard/sheet_contest'}
                  className="flex items-center px-2 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5 ms-3" >
                    <img src={sheetcontest} alt="sheet_contest icon" />
                  </div>
  
                  <span className="mx-2 font-medium">Sheet&Contest</span>
                </Link>
                <Link
                  to={'/dashboard/sessions'}
                  className="flex items-center px-3 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5 ms-2" viewBox="0 0 24 24">
                    <img src={addsession} alt="addsession icon" />
                  </div>
  
                  <span className="mx-2 font-medium">Sessions</span>
                </Link>
              </> : <></>}
              {/* end instructor access  */}

              {/* Leader access  */}
              {userData.userRole === 'leader' ? <>
                <h3 className="text-center">Leader</h3>
              <Link
                to={"/dashboard/trainees"}
                className="flex items-center px-4 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <div className="w-5 h-5" viewBox="0 0 24 24">
                  <img src={trainees} alt="trainees icon" />
                </div>

                <span className="mx-4 font-medium">Trainees</span>
              </Link>
              <Link
                to={"/dashboard/sheet_contest"}
                className="flex items-center px-2 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <div className="w-5 h-5 ms-3">
                  <img src={sheetcontest} alt="sheet_contest icon" />
                </div>

                <span className="mx-2 font-medium">Sheet&Contest</span>
              </Link>
              <Link
                to={"/dashboard/coremembers"}
                className="flex items-center px-2 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <div className="w-5 h-5 ms-3">
                  <IoMdPeople className="text-yellow-300 " />
                </div>

                <span className="mx-2 font-medium">Core Members</span>
              </Link>
              <Link
                to={"/dashboard/analysis"}
                className="flex items-center px-2 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <div className="w-5 h-5 ms-3">
                  <IoMdPeople className="text-yellow-300 " />
                </div>

                <span className="mx-2 font-medium">Analysis</span>
              </Link>

              <div className="addgroup">
                <h5
                  className="flex items-center justify-between px-3 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md  hover:bg-gray-100  hover:text-gray-700 cursor-pointer"
                  onClick={toggleVisibility} // عند النقر يتم تبديل الحالة
                >
                  <span className="mx-2  font-medium">Add</span>
                  {isVisible? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </h5>

                {/* الروابط تظهر أو تخفى بناءً على الحالة */}
                {isVisible && (
                  <>
                    <Link
                      to={"/dashboard/sessions"}
                      className="flex items-center px-3 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <span className="mx-2 font-medium">Session</span>
                    </Link>

                    <Link
                      to={"/dashboard/events"}
                      className="flex items-center px-3 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <span className="mx-2 font-medium">Events</span>
                    </Link>

                    <Link
                      to={"/dashboard/newsDash"}
                      className="flex items-center px-3 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <span className="mx-2 font-medium">News</span>
                    </Link>

                    <Link
                      to={"/dashboard/achievementsDash"}
                      className="flex items-center px-3 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <span className="mx-2 font-medium">Achievements</span>
                    </Link>

                    <Link
                      to={"/dashboard/levels"}
                      className="flex items-center px-3 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <span className="mx-2 font-medium">Levels</span>
                    </Link>

                    <Link
                      to={"/dashboard/waves"}
                      className="flex items-center px-3 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                    >
                      <span className="mx-2 font-medium">Waves</span>
                    </Link>
                  </>
                )}
              </div>

              <Link
                  to={'/dashboard/attendance'}
                  className="flex items-center px-3 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5 ms-2" viewBox="0 0 24 24">
                    <img src={attendance} alt="attendance icon" />
                  </div>
  
                  <span className="mx-2 font-medium">Attendance</span>
                </Link>
                <Link
                  to={'/dashboard/warning'}
                  className="flex items-center px-4 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5" viewBox="0 0 24 24">
                    <img src={warning} alt="warning icon" />
                  </div>
  
                  <span className="mx-4 font-medium">Warning</span>
                </Link>

              <Link
                to={"/dashboard/request"}
                className="flex items-center px-2 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <div className="w-5 h-5 ms-3">
                  <FaCodePullRequest className="text-yellow-300 " />
                </div>

                <span className="mx-2 font-medium">Requests</span>
              </Link>

              <Link
                to={"/dashboard/archive"}
                className="flex items-center px-2 py-2 mt-3 no-underline text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              >
                <div className="w-5 h-5 ms-3">
                  <FaArchive className="text-yellow-300 " />
                </div>

                <span className="mx-2 font-medium">Archive</span>
              </Link>
              </> : <></>}
              {/* end Leader access  */}

              <Link
                to="/login"
                title="Log Out"
                className="mx-3 w-75 fw-bold mt-5 p-2 btn grade2 text-decoration-none text-white"
                onClick={()=>Logout()}
              >
                Log Out
              </Link>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
