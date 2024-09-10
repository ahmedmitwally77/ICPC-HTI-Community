import React from 'react'
import logo from '../../Images/Colored Icon.png'
import style from './ResetNewPass.module.css'

const ResetNewPass = () => {
  return (
    <div className='ResetNewPass'>
        <div className="container mt-5">
        <div className="row  position-relative top-20 justify-content-around align-items-center">
          <div className="col-md-6 w-25">
            <img className='w-100' src={logo} alt="icpc hti logo" />
          </div>
          <div className="col-md-6  ">
            <form className='mt-5 '>
              <label for="new_pass" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">New Passwoed</label>
              <input type="text" id="new_pass" class="mb-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:border-yellow-50  block w-full p-2.5 " placeholder="*********" required />
              
              <label for="confirm_password" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input type="text" id="confirm_password" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="*******" required />
              
              <div className="text-center w-100">
                <button type="submit" className={style.btn} >Reset Password</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetNewPass