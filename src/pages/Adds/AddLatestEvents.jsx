import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {auth , db, storage} from '../../firebase'
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom'

const AddLatestEvents = () => {
    const [err , setErr] = useState(false)


    const handleSubmit =async(e)=>{
        e.preventDefault();
        const eventCover = e.target[0].files[0];
        const title = e.target[1].value;
        const eventDetails = e.target[2].value;
        const date = e.target[3].value;
        if (!eventCover || !title || !eventDetails || !date ) {
            alert("Please fill out all fields and provide an image.");
            return;
        }
        console.log(eventCover);
        try {

            const storageRef = ref(storage, `eventCover/${title}`);

            // Upload the file and metadata
            const uploadTask = uploadBytesResumable(storageRef, eventCover);
    
            // Wait for the upload to complete and get the download URL
            const eventCoverUrl = await new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    null,
                    (error) => reject(error),
                    async () => {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve(downloadURL);
                    }
                );
            });
        
          const eventsData = {
            eventCoverUrl,
            title,
            eventDetails,
            date,
          };
      
          // إضافة البيانات إلى Firestore وإنشاء مستند بمعرف فريد
          const docRef = await addDoc(collection(db, "events"), eventsData);
      
          console.log("Document successfully written with ID: ", docRef.id);
          alert("تمت اضافه الايفنت بنجاح");


        } catch (err) {
          setErr(true);
          console.error("Error uploading images: ", err);
          alert( "فى مشكله لو المشكله اتكررت كلم حد من الادمن");
        }}


  return (
    <div className='AddLatestEvents'>
        <form onSubmit={handleSubmit} className=' d-flex flex-column align-items-center m-auto w-75 mt-5 p-4' >
          <h3 className='h1 pb-2 text-white'>Add event</h3>
                    <div class="input-group mt-3 mb-3">
                      <label class="input-group-text" for="file1">صوره الغلاف</label>
                      <input type="file" class="form-control" id="file1" />
                    </div>
                    <input type="text" className='mb-1 form-control borderinput' placeholder=' العنوان' />
                    <input type="text" className='mb-1 form-control borderinput' placeholder=' تفاصيل الايفنت' />
                    <input type="text" className='mb-1 form-control borderinput' placeholder='jul 31, 2024 22:30:20' />
                    <button className='mt-3 mb-3 btn ylyBlueBg btn-primary w-100 text-white'>اضافه</button>
        </form>
    </div>
  )
}

export default AddLatestEvents