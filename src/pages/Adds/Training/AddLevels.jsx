import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

const AddLevels = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const coverImage = e.target[0].files[0];
    const title = e.target[1].value;
    const prefParagraph = e.target[2].value;
    const Paragraph = e.target[3].value;

    try {
      const uploadImage = async (image, refPath) => {
        if (image) {
          const imageRef = ref(storage, refPath);
          const uploadTask = uploadBytesResumable(imageRef, image);
          await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              null,
              (error) => reject(error),
              () => resolve()
            );
          });
          return await getDownloadURL(imageRef);
        }
        return null;
      };

      const coverImageUrl = await uploadImage(
        coverImage,
        `coverImages/${title}`
      );

      const articleData = {
        coverImageUrl,
        title,
        prefParagraph,
        Paragraph,
      };

      const docRef = await addDoc(collection(db, "levels"), articleData);

      console.log("Document successfully written with ID: ", docRef.id);
      alert("تمت اضافه الخبر بنجاح");

      console.log(coverImageUrl);
    } catch (error) {
      setErr(true);
      console.error("Error uploading images: ", error);
      alert("فى مشكله لو المشكله اتكررت كلم حد من الادمن");
    }
  };

  return (
    <div className="addLevels">
      <form
        onSubmit={handleSubmit}
        className=" d-flex flex-column align-items-center m-auto w-75 mt-5 p-4"
      >
        <h2 className="text-center mb-5">Add Level</h2>
        <input
          type="text"
          className="my-2 form-control borderinput"
          placeholder=" العنوان"
        />
        <textarea
          className="form-control"
          id="content"
          value=""
          required
        ></textarea>
        <div className="flex align-middle justify-center mt-4">
          <button
            type="submit"
            className=" bg-[#305593] rounded-lg hover:bg-[#40559b] text-center py-3 px-12 text-light font-bold"
          >
            Add Level
          </button>
        </div>{" "}
      </form>
    </div>
  );
};

export default AddLevels;
