import React, { useState } from "react";
import logo from "../../Images/Colored Icon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");

  async function Forgetpass(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    try {
      const { data } = await axios.post(
        `https://icpc-hti.vercel.app/api/auth/forgot-password`,
        { email }
      );

      if (data.success) {
        sessionStorage.setItem("resetToken", data.token); // حفظ التوكن
        navigate("/otp"); // الانتقال إلى صفحة إدخال الكود
      }
    } catch (err) {
      console.error(err.response?.data?.message || "حدث خطأ أثناء إرسال الطلب");
    }
  }

  return (
    <div className="overflow-x-hidden py-32">
      <div className="container">
        <div className="row top-20 position-relative justify-content-around align-items-center">
          <div className="col-md-6 w-25">
            <img className="w-100" src={logo} alt="icpc hti logo" />
          </div>
          <div className="col-md-6">
            <form className="mt-5 text-center" onSubmit={Forgetpass}>
              <p className="text-blue-500 h4">
                Enter your email <br /> to reset your password
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="mb-2 bg-gray-50 border text-gray-900 text-sm rounded-lg focus:border-yellow-50 block w-full p-3"
                placeholder="ex@gmail.com"
                required
              />
              <div className="text-center w-100">
                <button type="submit" className="btnnew">
                  Send Code
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
