import React from 'react'
import logo from '../../Images/Colored Icon.png'
import style from './SignUp.module.css'
import { Link } from 'react-router-dom'
import TransitionEffect from '../../Components/TransitionEffect'

const SignUp = () => {
  return <>
      <TransitionEffect/>

    <div className='signUp overflow-x-hidden py-16'>
      <div className="container">
        <div className="row mt-5 justify-content-around align-items-center">
          <div className="col-md-6 w-25">
            <img className='w-100' src={logo} alt="icpc hti logo" />
          </div>
          <div className="col-md-6  ">
            <form className='mt-5 '>
              <div className="name d-flex justify-between w-100">
                <div className='w-100 me-2'>
                  <label for="First_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                  <input type="text" id="First_name" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="ziad " required />
                </div>
                <div className='w-100'>
                  <label for="Last_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                  <input type="text" id="Last_name" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder=" essa" required />
                </div>
                
              </div>
              
              <label for="email" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" id="email" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="ex@gmail.com" required />
              
              <label for="password" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="text" id="password" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="*******" required />
              
              <label for="confirm_pass" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input type="text" id="confirm_pass" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="*******" required />
              
              <div className="idGender d-flex justify-between w-100">
                <div className='w-100 me-2'>
                  <label for="id" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Stu ID</label>
                  <input type="number" id="id" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="2022011 " required />
                </div>
                <div className='w-100 me-2'>
                  <label for="phone" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                  <input type="number" id="phone" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="01023234234 " required />
                </div>
              </div>

              <div className="idGender d-flex justify-between w-100">
                <div className='w-100 me-2'>
                  <label for="nationalID" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">National ID</label>
                  <input type="number" id="nationalID" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="4837563653487584" required />
                </div>
                <div className='w-100 me-2'>
                  <label for="handle" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Codeforces Handle</label>
                  <input type="text" id="handle" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="01023234234 " required />
                </div>
              </div>

              
              <label for="nationalIDPh" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"> Upload Image National ID 'Front & Back' in pdf</label>
              <input type="file" id="nationalIDPh" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="" required />
             
              <label for="profile" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"> Image Profile</label>
              <input type="file" id="profile" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="" required />
              

              <div className="text-center w-100">
                <button type="submit" className={style.btn} >Sign Up</button>
                <p className='mt-4'>Already Have An Account? <Link to={'/login'}>Login</Link></p>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default SignUp