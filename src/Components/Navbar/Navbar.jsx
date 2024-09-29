import React, { useContext, useEffect, useState } from 'react'
import logo from '../../Images/Colored V2.png'
import { Link, useLocation } from 'react-router-dom'
import style from './Navbar.module.css'
import { AuthContext } from '../../Context/AuthContext'


const CustomLink = ({to , title , className=""}) => {
  const location = useLocation();

  return(
    <Link to={to} className={`${className} relative end-0 group hover:text-blue-500 ${location.pathname === to ? 'border-b-2 border-blue-500' : ''} `}>
      {title}
      {/* <span className={`absolute left-0 group-hover:w-full 
      transition-[width] ease  duration-1000
      -bottom-0.5  h-[1px] inline-block dark:bg-light bg-dark `}>&nbsp;</span> */}
    </Link>
  )
}

const CustomMobileLink = ({to , title , className="" , toggle , signOutClick}) => {

  const handelClick = ()=>{
    toggle()
    
  }
  
  const handleSignOut =()=>{
    signOutClick()
  }


  return(
    <Link to={to} className={`${className} relative group text-light dark:text-dark my-2 text-decoration-none `} onClick={() => {handelClick() ; handleSignOut();}}>
      {title}

      {/* <span className={`absolute left-0 group-hover:w-full 
      transition-[width] ease duration-300
      -bottom-0.5  h-[1px] inline-block dark:bg-dark bg-light `}>&nbsp;</span> */}
    </Link>
  )
}

const Navbar = () => {

  const {currentUser , userData , flagAdmin , setFlagAdmin , setFlag , flag} = useContext(AuthContext)
 

  useEffect(() => {
    console.log(currentUser);
    console.log(userData?.photoURL);
    if(currentUser){
      setFlag(true)
      if(currentUser.uid === "vpFEcaagXpabB5ulRTkHVp6RAAl2"){
              setFlagAdmin(true)
            }else{
                    setFlagAdmin(false)
                  }
    }else{
      setFlag(false)
    }
  }, [currentUser])

  const [isOpen , setIsOpen] = useState(false)

  const handelClick = ()=>{
    setIsOpen(!isOpen)
  }

  return <>
  <header className= {`${style.header} relative z-10 lg:px-16 md:px-12 sm:px-8  w-full px-32 py-8 font-medium flex items-center justify-between fixed-top`} >

  <button className='hidden lg:flex  flex-col justify-center items-center' onClick={handelClick}>
    <span className={`grade dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-0.5' : "-translate-y-0.5"}`}></span>
    <span className={`grade dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
    <span className={`grade dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1.5' : "translate-y-0.5"}`}></span>
  </button>

  
  <div 
  className='container flex justify-between items-center lg:hidden'> 

  <Link to='/' className='w-[110px] md:w-[120px]   top-1  '>
      <img className='w-100' src={logo} alt="icpc hti logo" />
  </Link>

  {/* links */}
  <nav className='flex justify-center align-center'>
    <CustomLink to='/'  title="Home"  className='mr-3 text-decoration-none text-dark'/>
    <CustomLink to="/about" title="About" className='mx-3 text-decoration-none text-dark'/>
    <CustomLink to="/training" title="Training" className='mx-3 text-decoration-none text-dark'/>
    <CustomLink to="/committees" title="Committees" className='mx-3 text-decoration-none text-dark'/>
    <CustomLink to="/ecpc" title="ECPC" className='mx-3 text-decoration-none text-dark'/>
    {/* <CustomLink to="/contactUs" title="Contact Us" className='mx-3 text-decoration-none text-dark'/> */}
    {flag && flagAdmin ?<>
      <div class="dropdown-center">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Admin Access
        </button>
        <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to={'/addnews'}>Add News</Link></li>
            <li><Link class="dropdown-item" to={'/addtalented'}>Add talented</Link></li>
            <li><Link class="dropdown-item" to={'/addevent'}>Add latest event</Link></li>
            <li><Link class="dropdown-item" to={'/addAchievemnts'}>Add Achievemnts</Link></li>
            <li><Link class="dropdown-item" to={'/addgallary'}>Add gallary</Link></li>
            <li><Link class="dropdown-item" to={'/addlevels'}>Add levels</Link></li>
            <li><Link class="dropdown-item" to={'/addwaves'}>Add waves</Link></li>
            <li><Link class="dropdown-item" to={'/addsession'}>Add session</Link></li>
        </ul>
      </div>
        </>:<></>}
  </nav>
  
  {/* auth */}
  {currentUser? <nav className=' '> 
    <Link to={'/profile'} className=' fw-bold' >Hello {currentUser?.displayName}</Link>
    <img src={userData?.photoURL} alt="" />
  </nav>: 
  <nav className='flex items-center justify-center '> 
    <Link to={'/signup'}  className={style.btn2} >SignUp</Link>
    <Link to={'/login'} className={style.btn} >SignIn</Link>
  </nav> 
  }
  

</div>

{
  isOpen ?
<div 
initial={{scale:0 , opacity:0 , x:"-50%" , y:"-50%"}}
animate={{scale:1 , opacity:1 }}
transition={{duration:1}}
className='z-30 login rounded-lg backdrop-blur-md bg-dark/50 py-[70px] min-w-[70vw] flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
  <nav className='flex items-center flex-col justify-center'>
    <CustomMobileLink to='/'  title="Home"  className='' toggle={handelClick}/>
    <CustomLink to="/about" title="About" className='mx-3 text-decoration-none text-light' toggle={handelClick}/>
    <CustomMobileLink to="/training" title="Training" className='' toggle={handelClick}/>
    <CustomMobileLink to="/committees" title="Committees" className='' toggle={handelClick}/>
    <CustomMobileLink to="/ecpc" title="ECPC" className='' toggle={handelClick}/>
    <CustomMobileLink to="/contactUs" title="Contact Us" className='' toggle={handelClick}/>
    {flag && flagAdmin ?<>
      <div class="dropdown-center">
        <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Admin Access
        </button>
        <ul class="dropdown-menu">
            <li><Link to={'/addnews'}>Add News</Link></li>
            <li><Link to={'/addtalend'}>Add talented</Link></li>
            <li><Link to={'/addevent'}>Add latest event</Link></li>
            <li><Link to={'/addAchievemnts'}>Add Achievemnts</Link></li>
            <li><Link to={'/addgallary'}>Add gallary</Link></li>
            <li><Link to={'/addlevels'}>Add levels</Link></li>
            <li><Link to={'/addwaves'}>Add waves</Link></li>
            <li><Link to={'/addsession'}>Add session</Link></li>
        </ul>

      </div>
        </>:<></>}


  </nav>
  
  {currentUser? <nav className=' '> 
    <Link to={'/profile'} className=' fw-bold' >Hello {currentUser?.displayName}</Link>
    {/* <img src={imageUrl} alt="" /> */}
  </nav>: 
  <nav className='flex items-center justify-center '> 
    <Link to={'/signup'}  className={style.btn2} >SignUp</Link>
    <Link to={'/login'} className={style.btn} >SignIn</Link>
  </nav> 
  }

</div>
  : null
}

    {/* <Link to='/' className='w-[160px] md:w-[120px] absolute left-[50%] top-1  translate-x-[-50%]'>
      <img className='w-100' src={logo} alt="icpc hti logo" />
    </Link> */}

    <img className='hidden lg:flex w-25' src={logo} alt="" />

  </header>
  </>
}

export default Navbar;
