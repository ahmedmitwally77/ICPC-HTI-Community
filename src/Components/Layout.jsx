import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from "react-router-dom";
import Footer from './Footer/Footer';
import Notes from './Notes/Notes';
import { auth } from '../firebase';
import { AuthContext } from '../Context/AuthContext';

const Layout = () => {
  const {currentUser } = useContext(AuthContext)


  return <>
    <Navbar/>
    <Outlet></Outlet>
    {currentUser ? <Notes /> : ""}
    <Footer/>
  </>
}

export default Layout