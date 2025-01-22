import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import logo from '../../Images/Colored V2.webp';
import style from './Navbar.module.css';

const Navbar = () => {
  const { currentUser, userData, flagAdmin, setFlagAdmin, setFlag, flag } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  // تحقق من حالة المستخدم عند التحميل أو تغيير currentUser
  useEffect(() => {
    if (currentUser) {
      setFlag(true);
      setFlagAdmin(currentUser.uid === process.env.REACT_APP_Admin_Id);
    } else {
      setFlag(false);
      setFlagAdmin(false);
    }
  }, [currentUser, setFlag, setFlagAdmin]);

  // تبديل حالة القائمة المنسدلة (للأجهزة المحمولة)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // روابط التنقل الرئيسية
  const NAV_LINKS = [
    { to: '/', title: 'Home' },
    { to: '/about', title: 'About' },
    { to: '/training', title: 'Training' },
    { to: '/committees', title: 'Committees' },
    { to: '/ecpc', title: 'ECPC' },
  ];

  // روابط الأدمن
  const ADMIN_LINKS = [
    { to: '/addnews', title: 'Add News' },
    { to: '/addtalented', title: 'Add Talented' },
    { to: '/addevent', title: 'Add Latest Event' },
    { to: '/addAchievemnts', title: 'Add Achievements' },
    { to: '/addgallary', title: 'Add Gallery' },
    { to: '/addlevels', title: 'Add Levels' },
    { to: '/addwaves', title: 'Add Waves' },
    { to: '/addsession', title: 'Add Session' },
  ];

  // مكون الرابط المخصص
  const CustomLink = ({ to, title, className = "", onClick }) => {
    const location = useLocation();

    return (
      <Link
        to={to}
        className={`${className} relative end-0 group hover:text-blue-500 ${
          location.pathname === to ? 'border-b-2 border-blue-500' : ''
        }`}
        onClick={onClick}
      >
        {title}
      </Link>
    );
  };

  return (
    <header
      className={`${style.header} relative z-10 lg:px-16 md:px-12 sm:px-8 w-full px-32 py-8 font-medium flex items-center justify-between fixed-top`}
    >
      {/* زر القائمة المنسدلة (للأجهزة المحمولة) */}
      <button className="hidden lg:flex flex-col justify-center items-center" onClick={toggleMenu}>
        <span
          className={`grade dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`grade dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`grade dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      {/* التنقل لسطح المكتب */}
      <div className="container flex justify-between items-center lg:hidden">
        {/* الشعار */}
        <Link to="/" className="w-[110px] md:w-[120px] top-1">
          <img className="w-100" src={logo} alt="icpc hti logo" loading="lazy" />
        </Link>

        {/* الروابط */}
        <nav className="flex justify-center align-center">
          {NAV_LINKS.map((link) => (
            <CustomLink
              key={link.to}
              to={link.to}
              title={link.title}
              className="mx-3 text-decoration-none text-dark"
            />
          ))}
          {flag && flagAdmin && (
            <div className="dropdown-center">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin Access
              </button>
              <ul className="dropdown-menu">
                {ADMIN_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="dropdown-item">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        {/* قسم المستخدم */}
        {currentUser ? (
          <nav>
            <Link to="/profile" className="fw-bold">
              Hello {userData?.Fname}
            </Link>
          </nav>
        ) : (
          <nav className="flex items-center justify-center">
            <Link to="/signup" className={style.btn2}>
              SignUp
            </Link>
            <Link to="/login" className={style.btn}>
              SignIn
            </Link>
          </nav>
        )}
      </div>

      {/* القائمة المنسدلة (للأجهزة المحمولة) */}
      {isOpen && (
        <div className="z-30 login rounded-lg backdrop-blur-md bg-dark/50 py-[70px] min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav className="flex items-center flex-col justify-center">
            {NAV_LINKS.map((link) => (
              <CustomLink
                key={link.to}
                to={link.to}
                title={link.title}
                className="mx-3 text-decoration-none text-light"
                onClick={toggleMenu}
              />
            ))}
            {flag && flagAdmin && (
              <div className="dropdown-center">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin Access
                </button>
                <ul className="dropdown-menu">
                  {ADMIN_LINKS.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="dropdown-item">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </nav>

          {currentUser ? (
            <nav>
              <Link to="/profile" className="fw-bold">
                Hello {currentUser?.displayName}
              </Link>
            </nav>
          ) : (
            <nav className="flex items-center justify-center">
              <Link to="/signup" className={style.btn2}>
                SignUp
              </Link>
              <Link to="/login" className={style.btn}>
                SignIn
              </Link>
            </nav>
          )}
        </div>
      )}

      {/* الشعار (للأجهزة المحمولة) */}
      <img className="hidden lg:flex w-25" src={logo} alt="icpc hti logo" loading="lazy" />
    </header>
  );
};

export default Navbar;