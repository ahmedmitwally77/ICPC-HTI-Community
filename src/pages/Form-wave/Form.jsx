import React from 'react'
import AnimatedText from '../../Components/AnimatedText'
import HomeImg from '../../Images/IMG_3229 full.webp'
import TransitionEffect from '../../Components/TransitionEffect'

const Form = () => {
  return <>
  <TransitionEffect/>

   <div className='form relative'>
      <div className="hero bg-dark relative  -top-4">
          <AnimatedText text="Forms" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
          <div className='overlay absolute bg-dark/50 w-100 h-[97.5%]'></div>
          <img src={HomeImg} alt="hti comunity in ecpc" />
      </div>

      <div className="container">
        <div className="box">
            <div className="row">
                <div className="col-md-8">
                    <form >
                        <div className="name d-flex justify-between w-100">
                            <div className='w-100 me-2'>
                                <label for="First_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input  type="text" id="First_name" class=" mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="ziad " required />

                            </div>
                            <div className='w-100'>
                                <label for="Last_name" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                <input  type="text" id="Last_name" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder=" essa" required />
                            </div>
                    
                        </div>
              
                        <label for="email" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input  type="email" id="email" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="ex@gmail.com" required />
                        
                        <label for="email" class="block mb-0 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input  type="email" id="email" class="mb-2 bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5" placeholder="ex@gmail.com" required />

                        <h3>First time participating?</h3>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Yes
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
                                No
                            </label>
                        </div>

                        <div className="text-center w-100">
                            <button type="submit" className="btnnew" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>

  </div>
  </>
}

export default Form