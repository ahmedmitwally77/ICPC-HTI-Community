import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";

const AddSessions = () => {
  const { userToken } = useContext(AuthContext);
  const location = useLocation();
  const [err, setErr] = useState(null);


  const sessionId = location.state?.sessionId || "";
  const [title, setTitle] = useState(location.state?.title || "");
  const [description, setDescription] = useState(
    location.state?.description || ""
  );
  const [sessionLink, setSessionLink] = useState(
    location.state?.sessionLink || ""
  );
  const [sessionSlides, setSessionSlides] = useState(
    location.state?.sessionSlides || null
  );
  // const [content, setContent] = useState("");
  const [levelId, setLevelId] = useState(location.state?.levelId || "");
  const [campId, setCampId] = useState(location.state?.campId || "");
  const [sheetUpsolveLink, setSheetUpsolveLink] = useState(location.state?.sheetUpsolveLink || "");
  const [sessionSheetLink, setSessionSheetLink] = useState(
    location.state?.sessionSheetLink || ""
  );
  const [contestUpsolveLink, setContestUpsolveLink] = useState(
    location.state?.contestUpsolveLink || ""
  );
  const [sessionContestLink, setSessionContestLink] = useState(
    location.state?.sessionContestLink || ""
  );
  const [attendance, setAttendance] = useState(
    location.state?.attendance || false
  );

  //for get all , when add session
  const [levels, setLevels] = useState([]);
  const [waves, setWaves] = useState([]);

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
        console.log(response.data.data);
        
      } catch (error) {
        console.error("Error fetching levels:", error);
      }
    };

    if (!levels.length) fetchLevels();
  }, [userToken, levels.length]);

  useEffect(() => {
    if (levelId) {
      const fetchWaves = async () => {
        try {
          const response = await axios.get(
            `https://icpc-hti.vercel.app/api/camp/level/${levelId}`,
            {
              headers: { token: userToken },
            }
          );
          setWaves(response.data.data);
          console.log(response.data.data);
        } catch (error) {
          console.error("Error fetching waves:", error);
        }
      };
      fetchWaves();
    }
  }, [levelId, userToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      title,
      sessionSlides,
      levelId,
      campId,
      description,
      sessionLink,
      sheetUpsolveLink,
      sessionSheetLink,
      contestUpsolveLink,
      sessionContestLink,
      attendance
    );
  
    try {
      const url = sessionId
        ? `https://icpc-hti.vercel.app/api/session/${sessionId}`
        : "https://icpc-hti.vercel.app/api/session";
  
      const method = sessionId ? "patch" : "post";
  
      // إنشاء FormData فقط بالقيم غير الفارغة
      const formData = new FormData();
      formData.append("title", title);
      formData.append("levelId", levelId);
      formData.append("campId", campId);
  
      // إضافة sessionSlides إذا كان موجودًا
      if (sessionSlides) {
        formData.append("sessionSlides", sessionSlides);
      }
  
      // إضافة باقي القيم فقط إذا لم تكن فارغة
      if (description) formData.append("description", description);
      if (sessionLink) formData.append("sessionLink", sessionLink);
      if (sheetUpsolveLink) formData.append("sheetUpsolveLink", sheetUpsolveLink);
      if (sessionSheetLink) formData.append("sessionSheetLink", sessionSheetLink);
      if (contestUpsolveLink) formData.append("contestUpsolveLink", contestUpsolveLink);
      if (sessionContestLink) formData.append("sessionContestLink", sessionContestLink);
  
      // إضافة attendance فقط إذا كان `true`
      formData.append("attendance", attendance);
  
      const response = await axios[method](url, formData, {
        headers: {
          token: userToken,
          "Content-Type": "multipart/form-data",
        },
      });
  
      // alert(sessionId ? "تم تحديث البيانات بنجاح!" : "تم إضافة المستوى بنجاح!");
      toast.success(sessionId ? "wave updated successfully" : "wave added successfully", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
      console.log("الاستجابة:", response.data);
    } catch (error) {
      // console.error("خطأ أثناء إرسال البيانات:", error.response.data.message);
      setErr(error.response.data.message);
      toast.error(error.response.data.message, {
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

  return (
    <div className="">
      <div className="container py-20">
      <ToastContainer />
        <h2 className="text-center font-semibold mb-4">Add New Session</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label font-medium">
              Session Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sessionLink" className="form-label font-medium">
              Session Vid Link
            </label>
            <input
              type="text"
              className="form-control"
              id="sessionLink"
              value={sessionLink}
              onChange={(e) => setSessionLink(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="sessionSlides" className="form-label font-medium">
              Session PDF file
            </label>
            <input
              type="file"
              className="form-control"
              id="sessionSlides"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setSessionSlides(e.target.files[0])}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label font-medium">
              Content
            </label>
            <textarea
              className="form-control"
              id="content"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="levelWave flex ">
            <div className="mb-3 me-5 w-50">
              <label htmlFor="levelId" className="form-label font-medium">
                Select Level
              </label>
              <select
                className="form-control"
                id="levelId"
                value={levelId}
                onChange={(e) => {
                  setLevelId(e.target.value);
                  setCampId(""); // Reset selected wave when level changes
                }}
              >
                <option value="" disabled>
                  Select a Level
                </option>
                {levels.map((level) => (
                  <option key={level._id} value={level._id}>
                    {level.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3 w-50">
              <label htmlFor="waveId" className="form-label font-medium">
                Select Wave
              </label>
              <select
                className="form-control"
                id="waveId"
                value={campId}
                onChange={(e) => setCampId(e.target.value)}
                disabled={waves.length === 0} // Disable if no waves available
              >
                <option value="" disabled>
                  Select a Wave
                </option>
                {waves.map((wave) => (
                  <option key={wave._id} value={wave._id}>
                    {wave.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="sheetLink" className="form-label font-medium">
              sheet link
            </label>
            <input
              type="text"
              className="form-control"
              id="sheetLink"
              value={sheetUpsolveLink}
              onChange={(e) => setSheetUpsolveLink(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sessionSheetLink" className="form-label font-medium">
              Upsolve sheet vid{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="sessionSheetLink"
              value={sessionSheetLink}
              onChange={(e) => setSessionSheetLink(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="contestUpsolveLink"
              className="form-label font-medium"
            >
              contest sheet link
            </label>
            <input
              type="text"
              className="form-control"
              id="contestUpsolveLink"
              value={contestUpsolveLink}
              onChange={(e) => setContestUpsolveLink(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="sessionContestLink"
              className="form-label font-medium"
            >
              Upsolve Contest Vid{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="sessionContestLink"
              value={sessionContestLink}
              onChange={(e) => setSessionContestLink(e.target.value)}
            />
          </div>

          <div className="mt-3">
            <h5 className="form-label mb-2 font-thin">Attendance </h5>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={attendance} // جعل قيمة الـ input تعتمد على state
                onChange={() => setAttendance(!attendance)}
                className="sr-only peer"
              />
              <div
                className={`group peer ring-0 bg-gradient-to-bl 
      ${
        attendance
          ? "from-green-500 via-green-600 to-green-700"
          : "from-neutral-800 via-neutral-700 to-neutral-600"
      }
      rounded-full outline-none duration-1000 after:duration-300 w-24 h-10 shadow-md peer-focus:outline-none 
      after:content-[''] after:rounded-full after:absolute after:h-8 after:w-8 after:top-1 after:left-1
      ${
        attendance
          ? "after:bg-green-300 peer-checked:after:translate-x-12"
          : "after:bg-gray-400"
      }
      peer-hover:after:scale-95
    `}
              ></div>
            </label>
          </div>

          <div className="flex align-middle justify-center mt-4">
            <button
              type="submit"
              className=" bg-[#305593] rounded-lg hover:bg-[#40559b] text-center py-3 px-12 text-light font-bold"
            >
              {sessionId ? "Update Session" : "Add Session"}
            </button>
          </div>
            {err ? <><p className="alert alert-danger">{err}</p></> : <></>}
        </form>
      </div>
    </div>
  );
};

export default AddSessions;
