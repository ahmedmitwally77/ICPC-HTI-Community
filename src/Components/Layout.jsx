import React, { useContext } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from "react-router-dom";
import Footer from './Footer/Footer';
// import Notes from './Notes/Notes';

const Layout = () => {


  return <>
    <Navbar/>
    <Outlet></Outlet>
    {/* {currentUser ? <Notes /> : ""} */}
    <Footer/>
  </>
}

export default Layout