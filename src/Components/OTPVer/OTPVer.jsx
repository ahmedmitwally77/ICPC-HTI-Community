import React from 'react'
import logo from '../../Images/Colored Icon.png'
import style from './OTPVer.module.css'

const OTPVer = () => {
  return (
    <div className='OTPVer h-100 '>
        <div className="container">
            <div className="row top-20 position-relative justify-content-center align-items-center text-center">
                <div className="col-md-8 d-flex flex-col justify-content-center align-items-center text-center">
                    <img  className='w-40' src={logo} alt="icpc hti logo" />
                    <h3 className='text-blue-500 my-4'>OTP Verification code </h3>
                    <input type="email" id="email" class="mb-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:border-yellow-50  block w-full p-3 " placeholder="ex@gmail.com" required />
                    <div className="text-center w-100">
                            <button type="submit" className={style.btn} >Verify</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OTPVer