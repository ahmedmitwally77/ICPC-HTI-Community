import { Link } from 'react-router-dom'
import TransitionEffect from '../../Components/TransitionEffect'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { useState } from 'react'

const AddCoreMember = () => {


  
  let navigate = useNavigate() // to let user to go to (home )
  const [error , setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
  
   const [levelId, setLevelId] = useState('');
  const [levels, setLevels] = useState([]);
  
  async function handleSubmit(values) {
    setIsLoading(true);

    try {
      const formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }

      let { data } = await axios.post(`https://icpc-hti.vercel.app/api/auth/signup`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.error(data);

      if (data.success) {
        setIsLoading(false);
        setShowDeletePopup(true);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.response?.data?.message || 'حدث خطأ أثناء التسجيل');
      console.error(err);
    }
  }

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      image: null,
      universityIdHti: '',
      phone: '',
      nationalId: '',
      codeforces_handle: '',
      university: '',
      collegeYear: '',
      levelId: '6792ad82828f98081ed36cc1',
      campId: '6792badf6eef0a555b579918',
      gender: 'male',
      DOB: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('الاسم مطلوب'),
      lastName: Yup.string().required('الاسم مطلوب'),
      phone: Yup.string().required('رقم الواتس مطلوب'),
      nationalId: Yup.string().matches(/^[0-9]{14}$/, 'الرقم القومي يجب أن يكون مكون من 14 رقم'),
      email: Yup.string().email('البريد الإلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
      password: Yup.string().required('كلمة المرور مطلوبة'),
      confirmPassword: Yup.string()
        .required('تأكيد كلمة المرور مطلوب')
        .oneOf([Yup.ref('password'), null], 'كلمة المرور غير متطابقة'),
      universityIdHti: Yup.string().required('ID مطلوب'),
      codeforces_handle: Yup.string().required('حساب Codeforces مطلوب'),
      university: Yup.string().required('اسم الجامعة مطلوب'),
      collegeYear: Yup.string().oneOf(['first', 'second', 'third', 'fourth'], 'يجب اختيار سنة دراسية صحيحة'),
      levelId: Yup.string().required('المستوى مطلوب'),
      campId: Yup.string().required('الموجة مطلوبة'),
      gender: Yup.string().oneOf(['male', 'female'], 'يجب اختيار الجنس الصحيح'),
      DOB: Yup.date().required('تاريخ الميلاد مطلوب'),
    }),
    onSubmit: handleSubmit,
  });



  return <>
  <TransitionEffect/>

<div className='signUp overflow-x-hidden py-16'>
  <div className="container">
    <h3 className='text-center text-3xl'>Add New Member</h3>
    <div className="row mt-5 justify-content-around align-items-center">

      <div className="col-md-10 ">
      {error !== null? <div className="alert alert-danger">{error}</div> : ""}
        <form  onSubmit={formik.handleSubmit} className='mt-5 '>
          <div className="name d-flex justify-between w-100">
            <div className='w-100 me-2'>

              <label for="First_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">First name</label>
              <input name='firstName' value={formik.values.firstName} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id="First_name" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="ziad " required />
              {formik.touched.firstName && formik.errors.firstName ? <div className='text-danger fw-bold'>{formik.errors.firstName}</div> : null}

            </div>
            <div className='w-100'>
              <label for="Last_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
              <input name='lastName' value={formik.values.lastName} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id="Last_name" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder=" essa" required />
              {formik.touched.lastName && formik.errors.lastName ? <div className='text-danger fw-bold'>{formik.errors.lastName}</div> : null}
            </div>
            
          </div>
          
          <label for="email" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input name='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id="email" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="ex@gmail.com" required />
          {formik.touched.email && formik.errors.email ? <div className='text-danger fw-bold'>{formik.errors.email}</div> : null}
          
          <label for="password" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input name='password' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id="password" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="*******" required />
          {formik.touched.password && formik.errors.password ? <div className='text-danger fw-bold'>{formik.errors.password}</div> : null}
          
          <label for="confirmPassword" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">confirmPassword</label>
          <input name='confirmPassword' value={formik.values.confirmPassword} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id="confirmPassword" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="*******" required />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='text-danger fw-bold'>{formik.errors.confirmPassword}</div> : null}

         
          <label for="image" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Image (optional)</label>
          <input name='image' onChange={(e) => formik.setFieldValue("image", e.target.files[0])} onBlur={formik.handleBlur} type="file" id="image" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="add image"  />

          <div className="idGender d-flex justify-between w-100">
            <div className='w-100 me-2'>
              <label for="id" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Stu ID</label>
              <input name='universityIdHti' value={formik.values.universityIdHti} onBlur={formik.handleBlur} onChange={formik.handleChange}  type="number" id="id" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="2022011 " required />
              {formik.touched.universityIdHti && formik.errors.universityIdHti ? <div className='text-danger fw-bold'>{formik.errors.universityIdHti}</div> : null}

            </div>
            <div className='w-100 me-2'>
              <label for="phone" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
              <input name='phone' value={formik.values.phone} onBlur={formik.handleBlur} onChange={formik.handleChange} type="string" id="phone" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="01023234234 " required />
              {formik.touched.phone && formik.errors.phone ? <div className='text-danger fw-bold'>{formik.errors.phone}</div> : null}

            </div>
          </div>

          <div className="idGender d-flex justify-between w-100">
            <div className='w-100 me-2'>
              <label for="nationalID" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">National ID</label>
              <input name='nationalId' value={formik.values.nationalId} onBlur={formik.handleBlur} onChange={formik.handleChange} type="string" id="nationalID" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="4837563653487584" required />
              {formik.touched.nationalId && formik.errors.nationalId ? <div className='text-danger fw-bold'>{formik.errors.nationalId}</div> : null}

            </div>
            <div className='w-100 me-2'>
              <label for="codeforces_handle" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Codeforces codeforces_handle</label>
              <input name='codeforces_handle' value={formik.values.codeforces_handle} onBlur={formik.handleBlur} onChange={formik.handleChange}  type="text" id="codeforces_handle" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="your codeforces_handle " required />
              {formik.touched.codeforces_handle && formik.errors.codeforces_handle ? <div className='text-danger fw-bold'>{formik.errors.codeforces_handle}</div> : null}

            </div>
          </div>

          <div className="idGender d-flex justify-between w-100">
            <div className='w-100 me-2'>
              <label for="universityversity" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">university</label>
              <input name='university' value={formik.values.university} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id="universityversity" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="universityversity" required />
              {formik.touched.university && formik.errors.university ? <div className='text-danger fw-bold'>{formik.errors.university}</div> : null}
            </div>
            <div className='w-100 me-2'>
              <label for="collegeYear" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">What college Year?</label>
              <select name="collegeYear" {...formik.getFieldProps('collegeYear')} className="form-control mb-2">
              <option value="">--Choose Year--</option>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
              <option value="fourth">Fourth</option>
              </select>                  
            {formik.touched.collegeYear && formik.errors.collegeYear ? <div className='text-danger fw-bold'>{formik.errors.collegeYear}</div> : null}
            </div>
          </div>

          <div className="lvlcampId flex justify-between w-100">
              <div className="form-group w-100  me-2 ">
                    <label className='font-medium' htmlFor="levelId">level</label>
                    <select
                        name='levelId'
                        value={formik.values.levelId} // Use the correct field name here
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        id="levelId"
                        className="form-control"
                        required
                        
                    >
                        <option value="">--Choose level--</option>
                        <option value="6792ad82828f98081ed36cc1">Level 1</option>

                        {/* {levels.map((level) => (
                            <option key={level.id} value={level.id}>
                                {level.title}
                            </option>
                        ))} */}
                    </select>
                    {formik.touched.levelId && formik.errors.levelId ? <div className='text-danger fw-bold'>{formik.errors.levelId}</div> : null}
                </div>
                <div className="form-group w-100 ">
                <label className='font-medium' htmlFor="campId">campId</label>
                <select
                  name='campId'
                  value={formik.values.campId} // Use the correct field name here
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  id="campId"
                  className="form-control"
                  required
                >
                    <option value="">--Choose Wave--</option>
                    <option value="6792badf6eef0a555b579918">Wave 1</option>
                    {/* {levels.map((level) => (
                        <option key={level.id} value={level.id}>
                            {level.title}
                        </option>
                    ))} */} 
                </select>
                {formik.touched.campId && formik.errors.campId ? <div className='text-danger fw-bold'>{formik.errors.campId}</div> : null}
            </div>
          </div>

          <div className="genderBirth flex justify-between  w-100">
              <div className="form-group w-100 my-3 me-2 ">
              <label className="me-2">
                <input type="radio" name="gender" value="male" checked={formik.values.gender === "male"} onChange={formik.handleChange} />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" checked={formik.values.gender === "female"} onChange={formik.handleChange} />
                Female
              </label>
                    {formik.touched.gender && formik.errors.gender ? <div className='text-danger fw-bold'>{formik.errors.gender}</div> : null}

                </div>
                <div className="form-group w-100 ">
                <label className='font-medium' htmlFor="DOB">Birthday</label>
                <input name='DOB' value={formik.values.DOB} onBlur={formik.handleBlur} onChange={formik.handleChange} type="date" id="DOB" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder=" " required />
                {formik.touched.DOB && formik.errors.DOB ? <div className='text-danger fw-bold'>{formik.errors.DOB}</div> : null}
            </div>
          </div>

          <div className="text-center w-100">
            <button type="submit" className="btnnew" disabled={isLoading}>
                {isLoading ? "Adding..." : "Add Member"}
              </button>
          </div>
          {error && <span>somthing went wrong</span>}
        </form>        
        {showDeletePopup && (
      <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-16 rounded-lg">
          <p>Verify your email please</p>
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded mx-2"
              onClick={handleCancelDelete}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    )}    
      </div>
    </div>
  </div>
</div>
</>
}

export default AddCoreMember