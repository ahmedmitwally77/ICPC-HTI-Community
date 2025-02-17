import React, { useState } from 'react'
import logo from '../../Images/Colored Icon.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TransitionEffect from '../TransitionEffect'

const OTPVer = () => {

  let navigate = useNavigate()
  const [resetCode , setresetCode] = useState('')
  const [newPass , setnewPass] = useState('')

  async function ResetCode(resetCode , newPass){
  let response =  await axios.post(`https://icpc-hti.vercel.app/api/auth/reset-password` ,{
    otp:resetCode,
    newPassword:newPass
    })
    .then((res)=>res)
    .catch((err)=>err)
    console.log(response);
    
      if(response.data.status === 'Success'){
        navigate('/login')
      }else{
        // if(response.response.data.statusMsg == "fail"){
        //   alert(response.response.data.message)
        // }
        alert('incorrect code')
      }
      
  }


  return <>
  <TransitionEffect/>

<div className='login overflow-x-hidden py-32'>
  <div className="container">
    <div className="row mt-5 justify-content-around align-items-center">
      <div className="col-md-6 w-25">
        <img className='w-100' src={logo} alt="icpc hti logo" />
      </div>
      <div className="col-md-6  ">
          <label for="otp" class="block  text-sm font-medium text-gray-900 dark:text-white">OTP Code</label>
          <input onChange={(e)=>setresetCode(e.target.value)} type="text" id="otp" class="mb-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:border-yellow-50  block w-full p-3 " placeholder="OTP Code" required />


          <label for="password" class="block mt-4 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
          <input onChange={(e)=>setnewPass(e.target.value)} type="text" id="password" class="mb-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:border-yellow-50  block w-full p-3 " placeholder="******" required />


          <div className="text-center w-100">
            <button className='btnnew' onClick={()=>ResetCode(resetCode , newPass) }  type="submit" >Reset Password</button>
            
          </div>

      </div>
    </div>
  </div>
</div>
</>

}

export default OTPVer