import React from 'react'
import logo from '../../Images/Colored Icon.png'
import style from './ResetPassword.module.css'

const ResetPassword = () => {
  return <>
    <div className='login overflow-x-hidden '>
      <div className="container">
        <div className="row top-20 position-relative justify-content-around align-items-center">
            <div className="col-md-6 w-25">
                <img className='w-100' src={logo} alt="icpc hti logo" />
            </div>
            <div className="col-md-6">
                <form className='mt-5 text-center '>
                    <p className='text-blue-500 h4'>Enter your email or phone number <br /> to rest your password</p>
                <input type="email" id="email" class="mb-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:border-yellow-50  block w-full p-3 " placeholder="ex@gmail.com" required />
                
                <div className="text-center w-100">
                    <button type="submit" className={style.btn} >Rest Password</button>
                </div>
                
                </form>
            </div>
        </div>
      </div>
    </div>
  </>
}

export default ResetPassword