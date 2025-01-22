import React from 'react'
import logo from '../../Images/Colored V2.webp'
import { Link, useLocation } from 'react-router-dom'


const Footer = () => {

  const CustomLink = ({to , title , className=""}) => {
    const location = useLocation();
  
    return(
      <Link to={to} className={`${className} relative end-0 group hover:text-blue-500 ${location.pathname === to ? 'border-b-2 border-blue-500' : ''} `}>
        {title}
        
      </Link>
    )
  }

  // let currentYear = new Date().getFullYear();

  return <>

    <footer className=' shadowTop overflow-x-hidden '>
      <div className="container">
        <div className="row  justify-content-between align-items-center">
          <div className="col-md-3">
            <img className='w-50 m-auto' src={logo} alt="" />
          </div>
          <div className="col-md-4 py-8 text-center">
            <CustomLink to='/'  title="Home"  className='mr-3 text-decoration-none text-dark'/>
            <CustomLink to="/about" title="About" className='mx-3 text-decoration-none text-dark'/>
            <CustomLink to="/training" title="Training" className='mx-2 text-decoration-none text-dark'/>
            <CustomLink to="/committees" title="Committees" className='mx-3 text-decoration-none text-dark'/>
            <CustomLink to="/ecpc" title="ECPC" className='me-3 text-decoration-none text-dark'/>
          </div>
          <div className="col-md-3 ">
            <div className="social text-center">
              <a href="https://www.facebook.com/icpchti" target='blank'><i class="fa-brands m-auto fa-facebook fs-5 ms-3 text-blue-700"></i></a>
              <a href="https://www.linkedin.com/company/icpc-hti" target='blank'><i class="fa-brands m-auto fa-linkedin fs-5 ms-3 text-blue-500"></i></a>
              <a href="https://www.facebook.com/icpchti" target='blank'><i class="fa-brands m-auto fa-telegram fs-5 ms-3 text-blue-400"></i></a>
            </div>
          </div>
        </div>


        <div className="row text-center m-auto py-4 border-t justify-content-center align-items-center">
          <div className="col-md-3">
          <span>Copyright:ICPC-HTI</span>
          </div>

          <div className="col-md-3">
          <div className="location">
            <i class="fa-solid fa-location-dot text-blue-500 me-2"></i>
            <span>10th of Ramadan</span>
          </div>
          </div>
          <div className="col-md-3">
          <div className="email">
            <i class="fa-regular fa-envelope text-blue-500 me-2"></i>
            <span>icpchti@gmail.com</span>
          </div>
          </div>
          
          
        </div>
      </div>
    </footer>
  </>
}

export default Footer