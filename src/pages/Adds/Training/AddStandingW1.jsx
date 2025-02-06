import React, { useState } from 'react'


const AddStandingW1 = () => {
    const [err , setErr] = useState(false)

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const title = e.target[0].value;
        const url = e.target[1].value;

        // try {
      
        //   const articleData = {
        //     title,
        //     url
        //   };
      
        //   const docRef = await addDoc(collection(db, "standingW1"), articleData);
      
        //   console.log("Document successfully written with ID: ", docRef.id);
        //   alert("تمت اضافه اللينك ");
         
        // } catch (error) {
        //   setErr(true);
        //   console.error("Error uploading images: ", error);
        //   alert( "فى مشكله لو المشكله اتكررت كلم حد من الادمن");
        // }
        
      }

  return (
    <div className='addLevels my-40'>
         <form onSubmit={handleSubmit} className=' d-flex flex-column align-items-center m-auto w-75 mt-5 p-4' >
          <h3 className='h1 pb-2 text-dark'>Add Standing URL</h3>
                    
                    <input type="text" className='mb-1 form-control borderinput' placeholder=' العنوان' />
                    <input type="text" className='mb-1 form-control borderinput' placeholder=' url' />
                    
                    <button className='mt-3 mb-3 btn ylyBlueBg btn-primary w-100 text-white '>اضافه</button>
        </form>
    </div>
  )
}

export default AddStandingW1