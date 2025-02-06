import React, {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdArrowBackIos } from 'react-icons/md';
const AddAchievements = () => {

    const [err , setErr] = useState(false)

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const coverImage = e.target[0].files[0];
        const title = e.target[1].value;
        const Paragraph = e.target[2].value;
        

        // try {
        //   const uploadImage = async (image, refPath) => {
        //     if (image) {
        //       const imageRef = ref(storage, refPath);
        //       const uploadTask = uploadBytesResumable(imageRef, image);
        //       await new Promise((resolve, reject) => {
        //         uploadTask.on(
        //           "state_changed",
        //           null,
        //           (error) => reject(error),
        //           () => resolve()
        //         );
        //       });
        //       return await getDownloadURL(imageRef);
        //     }
        //     return null;
        //   };
      
        //   const coverImageUrl = await uploadImage(coverImage, `coverImages/${title}`);
       
      
        //   const articleData = {
        //     coverImageUrl,
        //     title,
        //     Paragraph,
        //   };
      
        //   const docRef = await addDoc(collection(db, "achievements"), articleData);
      
        //   console.log("Document successfully written with ID: ", docRef.id);
        //   alert("تمت اضافه الخبر بنجاح");

        //   console.log(
        //     coverImageUrl
        //   );
         
        // } catch (error) {
        //   setErr(true);
        //   console.error("Error uploading images: ", error);
        //   alert( "فى مشكله لو المشكله اتكررت كلم حد من الادمن");
        // }
        
      }

  return (
    <div className='AddAchievements'>
 
 <form onSubmit={handleSubmit} className=' d-flex flex-column align-items-center m-auto w-75 mt-5 p-4' >
          <h2 className='text-center mb-5'>Add Achievements</h2>
          <div class="input-group my-2">
                      <label class="input-group-text" for="file1">صوره الغلاف</label>
                      <input type="file" class="form-control" id="file1" />
                    </div>
                    <input type="text" className='my-2 form-control borderinput' placeholder=' العنوان' />
                    <input type="text" className='my-2 form-control borderinput' placeholder=' اكتب الكلام ' />
                    
                    <div className='flex align-middle justify-center mt-4'>
                      <button type="submit" className=" bg-[#305593] rounded-lg hover:bg-[#40559b] text-center py-3 px-12 text-light font-bold">Add Achievements</button>
                    </div>  
              </form>
    </div>
  )
}

export default AddAchievements