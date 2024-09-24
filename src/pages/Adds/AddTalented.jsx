import React, { useContext, useState } from 'react'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth , db, storage} from '../../firebase'
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';

const AddTalented = () => {

    const [err , setErr] = useState(false)

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const coverImage = e.target[0].files[0];
        const title = e.target[1].value;
        
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
      
          const coverImageUrl = await uploadImage(coverImage, `coverImages/${title}`);
        
          const articleData = {
            coverImageUrl,
            title,
          };
      
          const docRef = await addDoc(collection(db, "talented"), articleData);
      
          console.log("Document successfully written with ID: ", docRef.id);
          alert("تمت اضافه الخبر بنجاح");

          console.log(
            coverImageUrl
          );
         
        } catch (error) {
          setErr(true);
          console.error("Error uploading images: ", error);
          alert( "فى مشكله لو المشكله اتكررت كلم حد من الادمن");
        }}



  return (
    <div className='addTalented'>
        <form onSubmit={handleSubmit} className=' d-flex flex-column align-items-center m-auto w-75 mt-5 p-4' >
          <h3 className='h1 pb-2 text-white'>Add new</h3>
                    <div class="input-group mt-3 mb-3">
                      <label class="input-group-text" for="file1">صوره الغلاف</label>
                      <input type="file" class="form-control" id="file1" />
                    </div>
                    <input type="text" className='mb-1 form-control borderinput' placeholder=' العنوان' />
                    
                    <button className='mt-3 mb-3 btn ylyBlueBg btn-primary w-100 text-white '>اضافه</button>
        </form>
    </div>
  )
}

export default AddTalented