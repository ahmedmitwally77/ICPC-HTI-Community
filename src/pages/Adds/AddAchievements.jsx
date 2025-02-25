import React, { useState } from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const AddAchievements = () => {

  const [err, setErr] = useState(false)

  async function handleSubmit(values) {
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('coverImage', values.coverImage);

    const options = {
      url: 'https://icpc-hti.vercel.app/api/achievement',
      method: 'POST',
      headers: {
        token: localStorage.getItem('userToken'),
      },
      data: formData,
    };
    try {
      const res = await axios.request(options);
      console.log(res);
      

      if (res.status === 200) {
        alert('تم اضافة الخبر بنجاح');
      }
    } catch (err) {
      console.error(err.response);
      setErr(err.response.data.message);
      alert(err.response.data.message);
    }

  }

  const validationSchema = Yup.object({
    title: Yup.string().required('العنوان مطلوب'),
    description: Yup.string().required('المحتوى مطلوب'),
    coverImage: Yup.mixed().required('صورة الغلاف مطلوبة'),
  });


  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      coverImage: null,
    },
    onSubmit: handleSubmit,
    validationSchema,
  });
  return (
    <div className='AddAchievements'>

      <div className="addNews py-16">
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column align-items-center m-auto w-75 mt-5 p-4"
        >
          <h2 className="text-center mb-5">Add Achievements</h2>
          <div className="input-group my-2">
            <label className="input-group-text" htmlFor="file1">
              صوره الغلاف
            </label>
            <input
              name="coverImage"
              type="file"
              className="form-control"
              id="file1"
              onChange={(event) =>
                formik.setFieldValue('coverImage', event.currentTarget.files[0])
              }
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.coverImage && formik.errors.coverImage && (
            <div className="error text-danger my-2">{formik.errors.coverImage}</div>
          )}

          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="my-2 form-control borderinput"
            placeholder="العنوان"
          />

          {formik.touched.title && formik.errors.title && (
            <div className="error text-danger my-2">{formik.errors.title}</div>
          )}

          <input
            type="text"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="my-2 form-control borderinput"
            placeholder="اكتب الكلام"
          />

          {formik.touched.description && formik.errors.description && (
            <div className="error text-danger my-2">{formik.errors.description}</div>
          )}

          {err && <div className="error text-danger my-2">{err}</div>}

          <div className="flex align-middle justify-center mt-4">
            <button
              type="submit"
              className="bg-[#305593] rounded-lg hover:bg-[#40559b] text-center py-3 px-12 text-light font-bold"
            >
              Add Achievements
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddAchievements