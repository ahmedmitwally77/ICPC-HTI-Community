import React, { useContext, useState } from 'react'
import logo from '../../Images/Colored Icon.png'
import style from './Login.module.css'
import { Link } from 'react-router-dom'
import TransitionEffect from '../../Components/TransitionEffect'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


const Login = () => {

  let {setUserToken} = useContext(AuthContext)
  let {setUserData} = useContext(AuthContext)
  let navigate = useNavigate() // to let user to go to (home )
  const [error , seterror] = useState(null)
  const [isLoading , setisLoading] = useState(false)

  async function Loginsubmit(values) {
    setisLoading(true); // تشغيل اللودينج قبل بدء العملية
  
    try {
      // إرسال الطلب إلى الـ API
      const { data } = await axios.post(`https://icpc-hti.vercel.app/api/auth/login`, values);
  
      // التأكد من نجاح العملية
      if (data.success) {                
        localStorage.setItem("userToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUserToken(data.token);
        setUserData(data.user)
        navigate("/");
      }
    } catch (err) {
      // التعامل مع الأخطاء
      seterror(err.response?.data?.message || "حدث خطأ أثناء تسجيل الدخول");
      console.error(err);
    } finally {
      // إيقاف اللودينج بعد انتهاء العملية سواء كانت ناجحة أو فشلت
      setisLoading(false);
    }
  }


  let validateYup = Yup.object({
    email: Yup.string().email('email is invalid').required('email is requierd'),
    password:Yup.string().required('password is requierd'),
  })


  let formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema:validateYup
    ,
    onSubmit:Loginsubmit // دى لما بتشغل الفانكشن دى بتبعت معاها لوحدها كده الفاليوز البروح استقبلها ف الفنكشن
  })


  return <>
      <TransitionEffect/>

    <div className='login overflow-x-hidden py-32'>
      <div className="container">
        <div className="row mt-5 justify-content-around align-items-center">
          <div className="col-md-6 w-25">
            <img className='w-100' src={logo} alt="icpc hti logo" />
          </div>
          <div className="col-md-6  ">
          
          {error !== null? <div className="alert alert-danger">{error}</div> : ""}
            <form onSubmit={formik.handleSubmit} className='mt-5 '>
              <label for="email" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}  type="email" id='email' name='email' class="mb-2 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:border-yellow-50  block w-full p-2.5 " placeholder="ex@gmail.com" required />
              {formik.errors.email && formik.touched.email?<div className="alert mt-2 p-2 alert-danger">{formik.errors.email}</div> : ""}


              <label for="password" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='password' name='password' class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="*******" required />
              {formik.errors.password && formik.touched.password?<div className="alert mt-2 p-2 alert-danger">{formik.errors.password}</div> : ""}


              <div className="text-center w-100">
                <button disabled={!(formik.isValid && formik.dirty)} type="submit" className={style.btn} >{isLoading ? "loging in..." : "LogIn"}</button>
                <p className='mt-4'>Don't Have An Account? <Link to={'/signup'}>Signup</Link></p>
                <p className='mt-1'><Link className=' ' to={'/resetpassword'}>Forget Your password ?</Link></p>

              </div>
              {error && <span>somthing went wrong</span>}

            </form>
          </div>
          
        </div>
      </div>
    </div>
  </>
}

export default Login