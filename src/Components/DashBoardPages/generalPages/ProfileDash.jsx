import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { Bounce, toast, ToastContainer } from 'react-toastify';


const ProfileDash = () => {
  const { userToken } = useContext(AuthContext); // استدعاء التوكن من الكونتكست

  // دالة لجلب بيانات المستخدم
  function getUserData() {
    return axios.get("https://icpc-hti.vercel.app/api/user/me", {
      headers: { token: userToken },
    });
  }

  const { data, isLoading, isError, refetch } = useQuery("getUserData", getUserData, {
    enabled: false, // لا يتم جلب البيانات تلقائيًا
    refetchOnWindowFocus: false, // لا يعيد الجلب عند التنقل بين التبويبات
  });
  
  // دالة لاستدعاء البيانات مرة واحدة عند الحاجة
  useEffect(() => {
    function fetchWaveData() {
      refetch(); // استدعاء الطلب يدويًا فقط
    }
  
    fetchWaveData()
  }, [])
  
 
  // حالة لتخزين البيانات بعد جلبها
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    nationalId: "",
    codeforces_handle: "",
    image: "",
  });

  // تحديث البيانات عند تحميلها
  useEffect(() => {
    if (data?.data.data) {
      setUserData(data.data.data);
    }
  }, [data]);

  // تحديث القيم عند الكتابة
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // حالة التعديل (true = يمكن التعديل, false = عرض فقط)
  const [isEditing, setIsEditing] = useState(false);

  // دالة تبديل وضع التعديل
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  // تحديث بيانات المستخدم
  const updateUserMutation = useMutation(
    async () => {
      // إنشاء نسخة جديدة من البيانات بدون الحقول غير المسموحة
      const allowedFields = ["firstName", "lastName", "phone", "email", "codeforces_handle"];
      const filteredData = Object.keys(userData)
        .filter((key) => allowedFields.includes(key))
        .reduce((obj, key) => {
          obj[key] = userData[key];
          return obj;
        }, {});
  
      return axios.patch("https://icpc-hti.vercel.app/api/user/me", filteredData, {
        headers: { token: userToken },
      });
    },
    {
      onSuccess: () => {
        setIsEditing(false);
        toast.success("updated seccufuly 🎉", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
        refetch(); // تحديث البيانات بعد التعديل
      },
      onError: (error) => {
        console.error("خطأ أثناء التحديث:", error);
        toast.error("there is an error please try again", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        });
      },
    }
  );
  

  // حالة لتخزين الصورة الجديدة
  const [selectedImage, setSelectedImage] = useState(null);

  // دالة اختيار الصورة الجديدة
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // دالة تحديث الصورة في السيرفر
  const updateImageMutation = useMutation(
    async () => {
      const formData = new FormData();
      formData.append("image", selectedImage);

      return axios.patch("https://icpc-hti.vercel.app/api/user/me/image", formData, {
        headers: { 
          token: userToken,
          "Content-Type": "multipart/form-data"
        },
      });
    },
    {
      onSuccess: () => {
        alert("تم تحديث الصورة بنجاح! 🎉");
        setSelectedImage(null);
        refetch(); // تحديث البيانات بعد رفع الصورة
      },
      onError: (error) => {
        console.error("خطأ أثناء رفع الصورة:", error);
        alert("حدث خطأ أثناء رفع الصورة. حاول مرة أخرى.");
      },
    }
  );

  // التحقق من حالة التحميل أو الخطأ
  if (isLoading) return <>
  <div className="flex align-middle pt-16 justify-center">
    <div class="animate-pulse flex flex-col items-center gap-4 w-100">
      <div>
        <div class="w-48 h-6 bg-slate-400 rounded-md"></div>
        <div class="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
      </div>
      <div class="h-7 bg-slate-400 w-full rounded-md"></div>
      <div class="h-7 bg-slate-400 w-full rounded-md"></div>
      <div class="h-7 bg-slate-400 w-full rounded-md"></div>
      <div class="h-7 bg-slate-400 w-1/2 rounded-md"></div>
    </div>
  </div>
  </>;
  if (isError) return <p>حدث خطأ أثناء تحميل البيانات.</p>;

  return (
    <div className="DashBoard mt-10 relative">
      <ToastContainer />
      <div className="profDetails bg-white rounded-3xl relative sm:top-0">
        <div className="container">
          <div className="box m-auto p-10 bg-white w-100 rounded-3xl relative">
            <div className="row justify-center align-items-center">
              <div className="col-md-12">
                {/* صورة المستخدم */}
                <div className="image text-center">
                  <img
                    className="rounded-full w-[126px] mb-6"
                    src={data?.data.data.image.secure_url}
                    alt={userData.firstName}
                  />
                </div>

                {/* رفع صورة جديدة */}
                {isEditing && (
                  <div className="mb-4">
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {selectedImage && (
                      <button
                        className="btn btn-success ml-2"
                        onClick={() => updateImageMutation.mutate()}
                      >
                        رفع الصورة الجديدة
                      </button>
                    )}
                  </div>
                )}

                {/* First & Last Name */}
                <div className="name d-flex justify-between w-100">
                  <div className="w-75 me-2">
                    <label className="block text-sm font-medium">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="mb-2 border rounded-lg block w-full p-2.5"
                      value={userData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="w-75">
                    <label className="block text-sm font-medium">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="mb-2 border rounded-lg block w-full p-2.5"
                      value={userData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                {/* ID & Phone */}
                <div className="idGender d-flex justify-between w-100">
                  <div className="w-100 me-2">
                    <label className="block text-sm font-medium">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      className="mb-2 border rounded-lg block w-full p-2.5"
                      value={userData.phone}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                {/* Email */}
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="mb-2 border rounded-lg block w-full p-2.5"
                  value={userData.email}
                  disabled
                />

                {/* Codeforces Handle */}
                <label className="block text-sm font-medium">Codeforces Handle</label>
                <input
                  type="text"
                  name="codeforces_handle"
                  className="mb-2 border rounded-lg block w-full p-2.5"
                  value={userData.codeforces_handle}
                  onChange={handleChange}
                  disabled={!isEditing}
                />

                {/* زر التعديل والحفظ */}
                <div className="mt-4">
                  <button onClick={toggleEditing} className="btn btn-primary mx-2">
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </button>
                  {isEditing && (
                    <button
                      onClick={() => updateUserMutation.mutate()}
                      className="btn btn-success mx-2"
                    >
                      Save Changes
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDash;
