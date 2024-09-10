import React from 'react'
import logo from '../../Images/Colored Icon.png'
import style from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return <>
    <div className='login overflow-x-hidden'>
      <div className="container">
        <div className="row mt-5 justify-content-around align-items-center">
          <div className="col-md-6 w-25">
            <img className='w-100' src={logo} alt="icpc hti logo" />
          </div>
          <div className="col-md-6  ">
            <form className='mt-5 '>
              <label for="email" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email" id="email" class="mb-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:border-yellow-50  block w-full p-2.5 " placeholder="ex@gmail.com" required />
              
              <label for="password" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="text" id="password" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="*******" required />
              
              <div className="text-center w-100">
                <button type="submit" className={style.btn} >login</button>
                <p className='mt-4'>Don't Have An Account? <Link to={'/signup'}>Signup</Link></p>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Login