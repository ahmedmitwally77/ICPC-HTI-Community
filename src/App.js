import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom' ;
import Layout from '../src/Components/Layout'
import Home from './pages/Home/Home'
import { NotFound } from './pages/NotFound';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import OTPVer from './Components/OTPVer/OTPVer';
import ResetNewPass from './Components/ResetNewPass/ResetNewPass';
import ECPC from './pages/ECPC/ECPC';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Training from './pages/Training/Training';
import Level from './Components/Level/Level';
import Wave from './Components/Wave/Wave';
import Session from './Components/Session/Session';
import Committees from './pages/Committees/Committees';
import Profile from './pages/profile/Profile';


let routers = createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:"login" , element:<Login/>},
    {path:"signup" , element:<SignUp/>},
    {path:"ecpc" , element:<ECPC/>},
    {path:"about" , element:<About/>},
    {path:"contactUs" , element:<ContactUs/>},
    {path:"training" , element:<Training/>},
    {path:"level" , element:<Level/>},
    {path:"wave" , element:<Wave/>},
    {path:"session" , element:<Session/>},
    {path:"committees" , element:<Committees/>},
    {path:"profile" , element:<Profile/>},

    {path:'*',element:<NotFound/>},
  ]},
    
    {path:"resetpassword" , element:<ResetPassword/>},
    {path:"otp" , element:<OTPVer/>},
    {path:"resetnewpass" , element:<ResetNewPass/>},

])


function App() {

  return  <RouterProvider router={routers}></RouterProvider>

}

export default App;
