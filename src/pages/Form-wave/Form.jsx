import React, { useState } from 'react'
import AnimatedText from '../../Components/AnimatedText'
import HomeImg from '../../Images/IMG_3229 full.webp'
import TransitionEffect from '../../Components/TransitionEffect'
import { db } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import * as XLSX from 'xlsx';

const Form = () => {


    const [err , setErr] = useState(false)

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const name = e.target[0].value;
        const id = e.target[1].value;
        const phone = e.target[2].value;
        const email = e.target[3].value;
        const selectedOption = e.target.flexRadioDefault.value; 

        

        try {
      
          const dataWave = {
            name,
            id,
            phone,
            email,
            selectedOption,
          };
      
          const docRef = await addDoc(collection(db, "dataWave1"), dataWave);
      
          console.log("Document successfully written with ID: ", docRef.id);
          alert("تمت اضافه الخبر بنجاح");

          const dataForExcel = [
            { Name: name, ID: id, Phone: phone, Email: email, SelectedOption: selectedOption },
             ];

             const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
             const workbook = XLSX.utils.book_new();
             XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
 
             // تحميل ملف Excel
             XLSX.writeFile(workbook, "dataWave.xlsx");
 

          console.log("Name:", name);
          console.log("ID:", id);
          console.log("Phone:", phone);
          console.log("Email:", email);
          console.log("Selected Option (Yes/No):", selectedOption);
         
        } catch (error) {
          setErr(true);
          console.error("Error uploading images: ", error);
          alert( "فى مشكله لو المشكله اتكررت كلم حد من الادمن");
        }}


  return <>
  <TransitionEffect/>

   <div className='form relative'>
      <div className="hero bg-dark relative  -top-4">
          <AnimatedText text="Forms" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
          <div className='overlay absolute bg-dark/50 w-100 h-[97.5%]'></div>
          <img src={HomeImg} alt="hti comunity in ecpc" />
      </div>

        <div className="form bg-white rounded-3xl relative -top-14">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                {/* <img className='rounded-2xl w-[20%]' src={line2} alt="line" /> */}
            </div>


            <div className="container">
                <div className="box m-auto p-10 bg-white  w-100 !md:w-[100%] shadow-2xl rounded-3xl relative -top-14">
                    <div className="row   justify-center align-items-center">
                        <div className="col-md-8">
                            <form onSubmit={handleSubmit}>
                                <div className="name d-flex justify-between w-100">
                                    <div className='w-100 me-2'>
                                        <label for="Your-name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                        <input  type="text" id="Your-name" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"  required />

                                    </div>
                                    <div className='w-100'>
                                        <label for="id" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                                        <input  type="number" id="id" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"  required />
                                    </div>
                            
                                </div>
                    
                                <label for="phone-number" class="block mb-0 mt-3 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                <input  type="number" id="phone-number" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"  required />
                                
                                <label for="email" class="block mb-0 mt-3 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input  type="email" id="email" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"  required />

                                <h3 className='mt-3'>First time participating?</h3>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Yes"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  value="No"/>
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        No
                                    </label>
                                </div>

                                <div className="text-center w-100 mt-4">
                                    <button type="submit" className="btnnew" >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  </div>
  </>
}

export default Form