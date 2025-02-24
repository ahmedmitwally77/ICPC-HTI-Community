import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AddLevels = () => {
  const { userToken } = useContext(AuthContext);
  const location = useLocation();
  const levelId = location.state?.levelId || null; // استلام ID إذا كان تحديث
  const [title, setTitle] = useState(location.state?.title || "");
  const [description, setDescription] = useState(location.state?.description || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = levelId
        ? `https://icpc-hti.vercel.app/api/level/${levelId}` // تحديث
        : "https://icpc-hti.vercel.app/api/level"; // إضافة جديدة

      const method = levelId ? "patch" : "post"; // تحديد نوع الطلب

      const response = await axios[method](
        url,
        { title, description },
        { headers: { token: userToken } }
      );

      alert(levelId ? "تم تحديث البيانات بنجاح!" : "تم إضافة المستوى بنجاح!");
      console.log("الاستجابة:", response.data);
    } catch (error) {
      console.error("خطأ أثناء إرسال البيانات:", error);
    }
  };

  
  return (
    <div className="addLevels">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center m-auto w-75 mt-5 p-4"
      >
        <h2 className="text-center mb-5">{levelId ? "Update Level" : "Add Level"}</h2>
        <input
          type="text"
          className="my-2 form-control borderinput"
          placeholder="العنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control"
          id="content"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <div className="flex align-middle justify-center mt-4">
          <button
            type="submit"
            className="bg-[#305593] rounded-lg hover:bg-[#40559b] text-center py-3 px-12 text-light font-bold"
          >
            {levelId ? "Update Level" : "Add Level"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLevels;
