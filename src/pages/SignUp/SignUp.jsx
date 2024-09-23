import React, { useState } from 'react'
import logo from '../../Images/Colored Icon.png'
import style from './SignUp.module.css'
import { Link } from 'react-router-dom'
import TransitionEffect from '../../Components/TransitionEffect'
import {  createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth , db, storage} from '../../firebase'
import { doc, setDoc } from "firebase/firestore" 
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values)=>{
    const {Fname ,Lname , email , password  , stuId , phone , nationalId , handle  , profileImage } = values;
  
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
    
      const uploadImage = async (image, refPath) => {
        if (image) {
          const imageRef = ref(storage, refPath);
          const uploadTask = uploadBytesResumable(imageRef, image);
          await new Promise((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              null,
              (error) => reject(error),
              () => resolve()
            );
          });
          return await getDownloadURL(imageRef);
        }
        return null;
      };
    
      // ارفع صورة الملف الشخصي فقط هنا
      const downloadURL = await uploadImage(profileImage, `coverImages/${Fname}`);
    
      if (downloadURL) {
        // تحديث الملف الشخصي في Firebase Authentication
        await updateProfile(res.user, {
          displayName: Fname,
          photoURL: downloadURL,
        });
    
        // حفظ البيانات في Firestore
        await setDoc(doc(db, 'users', res.user.uid), {
          uid: res.user.uid,
          displayName: Fname,
          Fname,
          Lname,
          email,
          password,
          stuId,
          phone,
          nationalId,
          handle,
          photoURL: downloadURL,
        });
      }
      
      
  console.log("Navigating to home page");
  navigate('/');  // تأكد من التنقل هنا
      
    } catch (err) {
      console.error("Error during sign-up:", err); // لعرض تفاصيل الخطأ
      setErr(true);
    }

  }

  const formik = useFormik({
    initialValues: {
      Fname: '',
      Lname: '',
      email: '',
      password: '',
      stuId: '',
      phone: '',
      profileImage: null,
      nationalId: '',
      handle: '',
    },
    validationSchema: Yup.object({
      Fname: Yup.string().required('الاسم مطلوب'),
      Lname: Yup.string().required('الاسم مطلوب'),
      phone: Yup.string().required('رقم الواتس مطلوب'),
      nationalId: Yup.string()
        .matches(/^[0-9]{14}$/, 'الرقم القومي يجب أن يكون مكون من 14 رقم'),
      email: Yup.string().email('البريد الإلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
      password: Yup.string().required('كلمة المرور مطلوبة'),
      profileImage: Yup.mixed(),
      stuId:  Yup.string().required('id مطلوب'),
      handle:  Yup.string().required('codeforces handle ??'),
    }),
    onSubmit: handleSubmit,
  });


  return <>
      <TransitionEffect/>

    <div className='signUp overflow-x-hidden py-16'>
      <div className="container">
        <div className="row mt-5 justify-content-around align-items-center">
          <div className="col-md-6 w-25">
            <img className='w-100' src={logo} alt="icpc hti logo" />
          </div>
          <div className="col-md-6  ">
            <form  onSubmit={formik.handleSubmit} className='mt-5 '>
              <div className="name d-flex justify-between w-100">
                <div className='w-100 me-2'>
                  <label for="First_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                  <input {...formik.getFieldProps('Fname')} type="text" id="First_name" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="ziad " required />
                  {formik.touched.Fname && formik.errors.Fname ? <div className='text-danger fw-bold'>{formik.errors.Fname}</div> : null}

                </div>
                <div className='w-100'>
                  <label for="Last_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                  <input {...formik.getFieldProps('Lname')} type="text" id="Last_name" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder=" essa" required />
                  {formik.touched.Lname && formik.errors.Lname ? <div className='text-danger fw-bold'>{formik.errors.Lname}</div> : null}
                </div>
                
              </div>
              
              <label for="email" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input {...formik.getFieldProps('email')} type="email" id="email" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="ex@gmail.com" required />
              {formik.touched.email && formik.errors.email ? <div className='text-danger fw-bold'>{formik.errors.email}</div> : null}

              <label for="password" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input {...formik.getFieldProps('password')} type="text" id="password" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="*******" required />
              {formik.touched.password && formik.errors.password ? <div className='text-danger fw-bold'>{formik.errors.password}</div> : null}

              {/* <label for="confirm_pass" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input {...formik.getFieldProps('confirmPassword')} type="text" id="confirm_pass" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="*******" required />
              {formik.touched.email && formik.errors.email ? <div className='text-danger fw-bold'>{formik.errors.email}</div> : null} */}

              <div className="idGender d-flex justify-between w-100">
                <div className='w-100 me-2'>
                  <label for="id" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Stu ID</label>
                  <input {...formik.getFieldProps('stuId')} type="number" id="id" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="2022011 " required />
                  {formik.touched.stuId && formik.errors.stuId ? <div className='text-danger fw-bold'>{formik.errors.stuId}</div> : null}

                </div>
                <div className='w-100 me-2'>
                  <label for="phone" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                  <input {...formik.getFieldProps('phone')} type="number" id="phone" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="01023234234 " required />
                  {formik.touched.phone && formik.errors.phone ? <div className='text-danger fw-bold'>{formik.errors.phone}</div> : null}

                </div>
              </div>

              <div className="idGender d-flex justify-between w-100">
                <div className='w-100 me-2'>
                  <label for="nationalID" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">National ID</label>
                  <input {...formik.getFieldProps('nationalId')} type="number" id="nationalID" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="4837563653487584" required />
                  {formik.touched.nationalId && formik.errors.nationalId ? <div className='text-danger fw-bold'>{formik.errors.nationalId}</div> : null}

                </div>
                <div className='w-100 me-2'>
                  <label for="handle" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Codeforces Handle</label>
                  <input {...formik.getFieldProps('handle')}  type="text" id="handle" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="01023234234 " required />
                  {formik.touched.handle && formik.errors.handle ? <div className='text-danger fw-bold'>{formik.errors.handle}</div> : null}

                </div>
              </div>

              <label for="profile" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white"> Image Profile</label>
              <input {...formik.getFieldProps('profileImage')} type="file" id="profile" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="" required />
              {formik.touched.profileImage && formik.errors.profileImage ? <div className='text-danger fw-bold'>{formik.errors.profileImage}</div> : null}


              <div className="text-center w-100">
                <button type="submit" className={style.btn} >Sign Up</button>
                <p className='mt-4'>Already Have An Account? <Link to={'/login'}>Login</Link></p>
              </div>
              {err && <span>somthing went wrong</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
}


export default SignUp