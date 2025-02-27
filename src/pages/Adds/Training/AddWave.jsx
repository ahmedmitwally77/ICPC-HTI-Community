import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { Bounce, toast, ToastContainer } from "react-toastify";

const AddWave = () => {
  const { userToken } = useContext(AuthContext);
  const location = useLocation();
  const [error, setError] = useState(false);

  const campId = location.state?.campId || null; // ID التحديث إذا كان موجودًا
  const [title, setTitle] = useState(location.state?.title || "");
  const [description, setDescription] = useState(
    location.state?.description || ""
  );
  const [registration, setRegistration] = useState(
    location.state?.registration || false
  );
  const [levelId, setLevelId] = useState(location.state?.levelId || "");
  const [instructorId, setInstructorId] = useState(
    location.state?.instructorId || ""
  );
  const [mentorsId, setMentorsId] = useState(location.state?.mentorsId || []);
  const [hrIds, setHrIds] = useState(location.state?.hrIds || []);
  const [startDate, setStartDate] = useState(location.state?.startDate || "");
  const [endDate, setEndDate] = useState(location.state?.endDate || "");

  const [users, setUsers] = useState([]);
  const [levels, setLevels] = useState([]);

  // جلب جميع المستخدمين لاختيار المدربين والموجهين والـ HR
  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://icpc-hti.vercel.app/api/user?size=1000",
        {
          headers: { token: userToken },
        }
      );
      setUsers(response.data.data);
      console.log("Fetched Data:", response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    // Fetch levels and waves if needed
    const fetchLevels = async () => {
      try {
        const response = await axios.get(
          "https://icpc-hti.vercel.app/api/level",
          {
            headers: { token: userToken },
          }
        );
        console.log(response.data.data);
        setLevels(response.data.data);
      } catch (error) {
        console.error("Error fetching levels:", error);
      }
    };

    if (!levels.length) fetchLevels();
  }, [userToken, levels.length]);

  const handleSubmit = async (e) => {
    console.log(title,
      description,
      registration,
      levelId,
      instructorId,
      mentorsId,
      hrIds,
      startDate,
      endDate,);
    
    e.preventDefault();
    try {
      const url = campId
        ? `https://icpc-hti.vercel.app/api/camp/${campId}`
        : "https://icpc-hti.vercel.app/api/camp";
      const method = campId ? "patch" : "post";
      await axios[method](
        url,
        {
          title,
          description,
          registration,
          levelId,
          instructorId,
          mentorsId,
          hrIds,
          startDate,
          endDate,
        },
        { headers: { token: userToken } }
      );

      // alert(campId ? "تم تحديث البيانات بنجاح!" : "تم إضافة المستوى بنجاح!");
      toast.success(campId ? "wave updated successfully" : "wave added successfully", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } catch (err) {
      // console.error("خطأ أثناء إرسال البيانات:", err);
      const errorMessage = err.response?.data?.message || "There is an error";
      setError(errorMessage);
  
      toast.error(errorMessage, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  useEffect(() => {
    if (location.state) {
      setStartDate(location.state.startDate || "");
      setEndDate(location.state.endDate || "");
    }
  }, [location.state]); // يتم استدعاء useEffect عند تغيير location.state


  return (
    <div className="container py-20">
      <ToastContainer />
      <h2 className="text-center mb-5">
        {campId ? "Update Wave" : "Add Wave"}
      </h2>
      <form onSubmit={handleSubmit}>
        {/* العنوان والوصف */}
        <div className="form-group my-3">
          <label className="font-medium" htmlFor="waveTitle">
            Wave Name:
          </label>
          <input
            type="text"
            id="waveTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group my-3">
          <label className="font-medium" htmlFor="waveDescription">
            Wave Description:
          </label>
          <textarea
            id="waveDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          ></textarea>
        </div>

        {/* التواريخ */}
        <div className="form-group my-3 flex">
          <div className="w-50">
            <label className="font-medium" htmlFor="Started">
              Start Date:
            </label>
            <input
              type="date"
              id="Started"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="w-50 ms-5">
            <label className="font-medium" htmlFor="Ended">
              End Date:
            </label>
            <input
              type="date"
              id="Ended"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group  mb-3 me-5">
          <label className="font-medium" htmlFor="Instructor">
            Select Instructor:
          </label>
          <select
            id="Instructor"
            value={instructorId}
            onChange={(e) => setInstructorId(e.target.value)}
            className="form-control"
          >
            <option value="">-- Select Instructor --</option>
            {users
              .filter((user) => user.role === "instructor")
              .map((user) => (
                <option key={user._id} value={user._id}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
          </select>
        </div>

        <div className=" flex">
          {/* اختيار الموجهين */}
          <div className="form-group  mb-3 me-5 w-50">
            <label className="font-medium" htmlFor="mentor">
              Select Mentors:
            </label>
            <select
              id="mentor"
              multiple
              value={mentorsId}
              onChange={(e) =>
                setMentorsId([...e.target.selectedOptions].map((o) => o.value))
              }
              className="form-control"
            >
              {users
                .filter((user) => user.role === "mentor") // تصفية الموجهين فقط
                .map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
            </select>
          </div>

          {/* اختيار HRs */}
          <div className="form-group mb-3 me-5 w-50">
            <label className="font-medium" htmlFor="hr">
              Select HRs:
            </label>
            <select
              id="hr"
              multiple
              value={hrIds}
              onChange={(e) =>
                setHrIds([...e.target.selectedOptions].map((o) => o.value))
              }
              className="form-control"
            >
              {users
                .filter((user) => user.role === "hr") // تصفية الـ HR فقط
                .map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.firstName} {user.lastName}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* اختيار المستوى */}
        <div className="form-group my-3">
          <label className="font-medium" htmlFor="level">
            Select Level:
          </label>
          <select
            id="level"
            value={levelId}
            onChange={(e) => setLevelId(e.target.value)}
            className="form-control"
          >
            <option value="">-- Select Level --</option>
            {levels.map((level) => (
              <option key={level._id} value={level._id}>
                {level.title}
              </option>
            ))}
          </select>
        </div>

        {/* التسجيل */}
        <div className="mt-3">
          <h5 className="form-label mb-2 font-thin">Registration </h5>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={registration} // جعل قيمة الـ input تعتمد على state
              onChange={() => setRegistration(!registration)}
              className="sr-only peer"
            />
            <div
              className={`group peer ring-0 bg-gradient-to-bl 
      ${
        registration
          ? "from-green-500 via-green-600 to-green-700"
          : "from-neutral-800 via-neutral-700 to-neutral-600"
      }
      rounded-full outline-none duration-1000 after:duration-300 w-24 h-10 shadow-md peer-focus:outline-none 
      after:content-[''] after:rounded-full after:absolute after:h-8 after:w-8 after:top-1 after:left-1
      ${
        registration
          ? "after:bg-green-300 peer-checked:after:translate-x-12"
          : "after:bg-gray-400"
      }
      peer-hover:after:scale-95
    `}
            ></div>
          </label>
        </div>

        {/* زر الإرسال */}
        <div className="flex align-middle justify-center mt-4">
          <button
            type="submit"
            className="bg-[#305593] rounded-lg hover:bg-[#40559b] text-center py-3 px-12 text-light font-bold"
          >
            {campId ? "Update Wave" : "Add Wave"}
          </button>
          <div className="alert alert-error">
            {error ? <>{error}</> : <></>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddWave;
