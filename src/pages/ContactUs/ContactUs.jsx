import React from 'react'
import AnimatedText from '../../Components/AnimatedText'
import HomeImg from '../../Images/IMG_3229 full.webp'
import TransitionEffect from '../../Components/TransitionEffect'
import line2 from '../../Images/line 2.jpeg'

const ContactUs = () => {
  return <>
    <TransitionEffect/>

    <div className='contactUs'>
        <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="Contact Us" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bg-dark/50 w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
        </div>
        <div className="contact bg-light rounded-3xl relative -top-14">
            <div className='line d-flex justify-center align-items-center relative top-7 '>
                <img className='rounded-2xl w-[20%]' src={line2} alt="line" />
            </div>
            <div class="container mx-auto py-16">
            <div class="mx-auto">
                <div class="max-w-3xl mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                <form>
                    <div class="mb-4">
                    <label class="block text-gray-800 mb-1" for="name">Your Name</label>
                    <input
                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                        placeholder="Enter your name"
                        type="text"
                    />
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-800 mb-1" for="email">Your phone</label>
                    <input
                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                        placeholder="Enter your phone number"
                        name="phone"
                        id="phone"
                        type="phone"
                    />
                    </div>
                    <div class="mb-4">
                    <label class="block text-gray-800 mb-1" for="message"
                        >Your Message</label
                    >
                    <textarea
                        class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                        rows="4"
                        placeholder="Enter your message"
                        name="message"
                        id="message"
                    ></textarea>
                    </div>
                    <button
                    class="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                    type="submit"
                    >
                    Send Message
                    </button>
                </form>
                </div>
            </div>
            </div>

        </div>
    </div>
  </>
}

export default ContactUs