import React, { useState } from "react";
import logo from "../Images/Colored Icon.png"
import waves from "../Images/dashboard/waves.svg"
import standing from "../Images/dashboard/standing.svg"
import profile from "../Images/dashboard/profile.svg"
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // حالة فتح/إغلاق القائمة الفرعية

    const toggleDropdown = () => {
      setIsOpen(!isOpen); // تبديل حالة القائمة الفرعية
    };
  
    return (
      <>
        <div className="">
          <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
            <Link className="flex justify-center" to={'/dashboard'}>
              <img className="w-50" src={logo} alt="icpc hti logo" />
            </Link>
  
            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <Link
                  to={'/dashboard/profile'}
                  className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
                >
                  <div className="w-5 h-5" viewBox="0 0 24 24">
                    <img src={profile} alt="" />
                  </div>
  
                  <span className="mx-4 font-medium">Profile</span>
                </Link>
  
                <Link
                  to={'/dashboard/dashWaves'}
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5" viewBox="0 0 24 24">
                    <img src={waves} alt="" />
                  </div>
  
                  <span className="mx-4 font-medium">Waves</span>
                </Link>
  
                <Link
                  to={'/dashboard/standing'}
                  className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                >
                  <div className="w-5 h-5" viewBox="0 0 24 24">
                    <img src={standing} alt="" />
                  </div>
  
                  <span className="mx-4 font-medium">Standing</span>
                </Link>
  
                <hr className="my-6 border-gray-900 dark:border-gray-600" />
  
                <Link
                  to="/login"
                  title="Log Out"
                  className="mx-3 w-75 fw-bold mt-5 p-2 btn grade2 text-decoration-none text-white"
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