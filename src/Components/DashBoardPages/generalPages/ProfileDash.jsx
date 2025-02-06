import React, { useContext, useEffect, useState } from 'react'
import AnimatedText from '../../AnimatedText';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';
import img from '../../../Images/websiteFounders/ziad.jpeg'

const ProfileDash = () => {


      // const { setFlagAdmin , setFlag} = useContext(AuthContext)
      // const {  userData ,currentUser } = useContext(AuthContext)
      const [articles, setArticles] = useState(null);
    
      // useEffect(() => {
      //   const user = auth.currentUser; // الحصول على المستخدم الحالي من Firebase Authentication
      //   if (user) {
      //     setArticles({
      //       displayName: user.displayName,
      //       photoURL: user.photoURL,  // رابط الصورة من Firebase Authentication
      //     });
      //   }
      // }, []);

  return (
     <div className='DashBoard mt-10 relative '>
      <div className="profDetails bg-white rounded-3xl relative  sm:top-0">
          <div className="container">
            <div className="box m-auto p-10 bg-white  w-100 !md:w-[100%]  rounded-3xl relative">
              <div className="row justify-center align-items-center">
                
                <div className="col-md-12 ">
                  <div className="image ">
                    <img className='rounded-full w-[126px] mb-6' src={img} alt="" />
                    
                  </div>
                  <div className="name d-flex justify-between w-100">
                  <div className='w-75 me-2'>
                    <label for="First_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input  type="text" id="First_name" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="test" required disabled/>

                  </div>
                  <div className='w-75'>
                    <label for="Last_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input type="text" id="Last_name" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="test" required  disabled/>
                  </div>
                  
                  </div>

                  <div className="idGender d-flex justify-between w-100">
                    <div className='w-100 me-2'>
                      <label for="id" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Stu ID</label>
                      <input  type="number" id="id" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="test" required disabled/>

                    </div>
                    <div className='w-100 me-2'>
                      <label for="phone" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                      <input type="number" id="phone" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="test" required disabled/>

                    </div>
                  </div>
              
                  <label for="email" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" id="email" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="test" required  disabled/>

                    <div className='w-100 me-2'>
                      <label for="nationalID" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">National ID</label>
                      <input  type="number" id="nationalID" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="test" required disabled/>

                    </div>

                  <div className="idGender d-flex justify-between w-100">
                    <div className='w-100 me-2'>
                      <label for="handle" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Codeforces Handle</label>
                      <input  type="text" id="handle" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="test" required disabled/>

                    </div>

                    <div className='w-100 me-2'>
                      <label for="total" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Total Problems</label>
                      <input  type="number" id="total" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="0 " required disabled/>

                    </div>
                  </div>

                </div>
                {/* <Link to="/login" title="Log Out" className='mx-3 w-50  mt-5 p-2 btn grade2  text-decoration-none text-white'>Log Out</Link> */}
              </div>
            </div>
          </div>
      </div>

    </div> 
  )
}

export default ProfileDash