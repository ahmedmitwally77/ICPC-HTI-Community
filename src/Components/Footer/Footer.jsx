import React from 'react'
import style from './Footer.module.css'
import img1 from '../../Images/icpc core 2024.jpg'
import logo from '../../Images/Colored V2.png'
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
          <div className="col-md-3 pb-3 ">
            <div className="social text-center">
              <i class="fa-brands m-auto fa-facebook fs-5 ms-3 text-blue-700"><a href="https://www.facebook.com/icpchti"></a></i>
              <i class="fa-brands m-auto fa-linkedin fs-5 ms-3 text-blue-500"><a href="https://www.facebook.com/icpchti"></a></i>
              <i class="fa-brands m-auto fa-telegram fs-5 ms-3 text-blue-400"><a href="https://www.facebook.com/icpchti"></a></i>
              <i class="fa-brands m-auto fa-instagram fs-5 ms-3 "><a href="https://www.facebook.com/icpchti"></a></i>
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




     {/* <footer class={style.footer}>
       <div class={style.container}>
         <div class={style.box}>
           <div className="img w-100 d-flex justify-center align-middle">
             <img className='w-75 mb-3' src={logo} alt="icpc hti logo" />
           </div>
           <ul class={style.social}>
             <li>
               <a href="https:www.facebook.com/Ylyministryy" class={style.facebook}>
                 <i class="fab fa-facebook-f"></i>
               </a>
             </li>
             <li>
               <a href="https:www.instagram.com/ylyministry/" class={style.instagram}>
                 <i class="fa-brands fa-instagram"></i>
               </a>
             </li>
             <li>
               <a href="https:www.tiktok.com/@ylyministry?is_from_webapp=1&sender_device=pc" class={style.tiktok}>
                 <i class="fa-brands fa-tiktok"></i>
               </a>
             </li>
             <li>
               <a href="https:www.linkedin.com/company/ylyministry/" class={style.linkedIn}>
                 <i class="fa-brands fa-linkedin fs-5"></i>
               </a>
             </li>
           </ul>
           <p class={style.text}>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
           </p>
         </div>
         <div class={style.box}>
           <ul class={style.links}>
             <li><Link to={'/'}>Home</Link></li>
             <li><Link to={'/'}>Training</Link></li>
             <li><Link to={'/'}>Committees</Link></li>
             <li><Link to={'/'}>About</Link></li>
             <li><Link to={'/'}>Cantact Us</Link></li>
           </ul>
         </div>
         <div class={`${style.box} mt-4`}>
           <div class={style.line}>
             <i class="fas fa-map-marker-alt fa-fw"></i>
             <div class={style.info}>10th of Ramadan</div>
           </div>
           <div class={style.line}>
             <i class="fa-solid fa-envelope"></i>
             <div class={style.info}>Ourstudio@hello.com</div>
           </div>
           <div class={style.line}>
             <i class="fas fa-phone-volume fa-fw"></i>
             <div class={style.info}>
               <span>+20123456789</span>
             </div>
           </div>
         </div>
         <div class={`${style.footerGallery} `}>
           <img decoding="async"  src={img1} alt="icpc hti community" />
           <img decoding="async"  src={img1} alt="icpc hti community" />
           <img decoding="async"  src={img1} alt="icpc hti community" />
           <img decoding="async"  src={img1} alt="icpc hti community" />
           <img decoding="async"  src={img1} alt="icpc hti community" />
           <img decoding="async"  src={img1} alt="icpc hti community" />
         </div>
       </div>
       <p class={style.copyright}>copyright&copy; <span>{currentYear}</span></p>
     </footer> */}
  </>
}

export default Footer