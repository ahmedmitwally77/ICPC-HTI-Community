import React, { useContext } from 'react'
import AnimatedText from '../../Components/AnimatedText'
import TransitionEffect from '../../Components/TransitionEffect'
import HomeImg from '../../Images/IMG_3229 full.webp'
import { AuthContext } from '../../Context/AuthContext'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const Profile = () => {
  const { setFlagAdmin , setFlag} = useContext(AuthContext)


  const handleSignOut =()=>{
    setFlagAdmin(false);
    setFlag(false)
  }
  return <>
    <TransitionEffect/>

    <div className='Profile  relative overflow-x-hidden'>
      <div className="hero bg-dark relative  -top-4">
            <AnimatedText text="Profile" ClassName='mt-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 text-light absolute xs:top-[10%] sm:top-[10%] top-[15%] z-20'/>
            <div className='overlay absolute bg-dark/50 w-100 h-[97.5%]'></div>
            <img src={HomeImg} alt="hti comunity in ecpc" />
        </div>


        <Link to="/login" title="Log Out" className='mx-3 text-decoration-none text-black' onClick={() => { signOut(auth); handleSignOut();}}>Log Out</Link>

    </div>
  </>
}

export default Profile