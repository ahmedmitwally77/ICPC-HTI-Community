import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";

const AddSessions = () => {
  const { userToken } = useContext(AuthContext);
  const location = useLocation();

  const sessionId = location.state?.sessionId || "";
  const [title, setTitle] = useState(location.state?.title || "");
  const [description, setDescription] = useState(location.state?.description || "");
  const [sessionLink, setSessionLink] = useState(location.state?.sessionLink || "");
  const [sessionSlides, setSessionSlides] = useState(null);
  const [existingFileName, setExistingFileName] = useState(location.state?.sessionSlides || "");

  const [levelId, setLevelId] = useState(location.state?.levelId || "");
  const [campId, setCampId] = useState(location.state?.campId || "");
  const [sheetLink, setSheetLink] = useState(location.state?.sheetLink || "");
  const [upsolveSheetVid, setUpsolveSheetVid] = useState(location.state?.upsolveSheetVid || "");
  const [contestSheetLink, setContestSheetLink] = useState(location.state?.contestSheetLink || "");
  const [upsolveContestVid, setUpsolveContestVid] = useState(location.state?.upsolveContestVid || "");
  const [attendance, setAttendance] = useState(location.state?.attendance || false);

  const [levels, setLevels] = useState([]);
  const [waves, setWaves] = useState([]);

  useEffect(() => {
    setExistingFileName(location.state?.sessionSlides || "");
  }, [location.state?.sessionSlides]);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await axios.get("https://icpc-hti.vercel.app/api/level", {
          headers: { token: userToken },
        });
        setLevels(response.data.data);
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
          const response = await axios.get(`https://icpc-hti.vercel.app/api/camp/level/${levelId}`, {
            headers: { token: userToken },
          });
          setWaves(response.data.data);
        } catch (error) {
          console.error("Error fetching waves:", error);
        }
      };
      fetchWaves();
    }
  }, [levelId, userToken]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSessionSlides(file);
      setExistingFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = sessionId
        ? `https://icpc-hti.vercel.app/api/session/leader/${sessionId}`
        : "https://icpc-hti.vercel.app/api/session";
      const method = sessionId ? "patch" : "post";

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("sessionLink", sessionLink);
      if (sessionSlides) {
        formData.append("sessionSlides", sessionSlides);
      }
      formData.append("levelId", levelId);
      formData.append("campId", campId);
      formData.append("sheetLink", sheetLink);
      formData.append("upsolveSheetVid", upsolveSheetVid);
      formData.append("contestSheetLink", contestSheetLink);
      formData.append("upsolveContestVid", upsolveContestVid);
      formData.append("attendance", attendance);

      const response = await axios[method](url, formData, {
        headers: {
          token: userToken,
          "Content-Type": "multipart/form-data",
        },
      });

      alert(sessionId ? "تم تحديث البيانات بنجاح!" : "تم إضافة المستوى بنجاح!");
      console.log("الاستجابة:", response.data);
    } catch (error) {
      console.error("خطأ أثناء إرسال البيانات:", error.response.data.error);
    }
  };

  return (
    <div className="">
      <div className="container py-20">
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
        {existingFileName && (
          <div className="mb-2">
            <p>Current file: <a href={existingFileName} target="_blank" rel="noopener noreferrer">{existingFileName}</a></p>
          </div>
        )}
        <input
          type="file"
          className="form-control"
          id="sessionSlides"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
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
                  <option key={wave.id} value={wave.id}>
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
              value={sheetLink}
              onChange={(e) => setSheetLink(e.target.value)}
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="upsolveSheetVid" className="form-label font-medium">
              Upsolve sheet vid{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="upsolveSheetVid"
              value={upsolveSheetVid}
              onChange={(e) => setUpsolveSheetVid(e.target.value)}
              
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="contestSheetLink"
              className="form-label font-medium"
            >
              contest sheet link
            </label>
            <input
              type="text"
              className="form-control"
              id="contestSheetLink"
              value={contestSheetLink}
              onChange={(e) => setContestSheetLink(e.target.value)}
              
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="upsolveContestVid"
              className="form-label font-medium"
            >
              Upsolve Contest Vid{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="upsolveContestVid"
              value={upsolveContestVid}
              onChange={(e) => setUpsolveContestVid(e.target.value)}
              
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
        </form>
      </div>
    </div>
  );
};

export default AddSessions;
