import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom' ;
import Layout from '../src/Components/Layout'
import Home from './pages/Home'
import { NotFound } from './pages/NotFound';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import OTPVer from './Components/OTPVer/OTPVer';
import ResetNewPass from './Components/ResetNewPass/ResetNewPass';


let routers = createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:"login" , element:<Login/>},
    {path:"signup" , element:<SignUp/>},

    {path:'*',element:<NotFound/>},
  ]},
    
    {path:"resetpassword" , element:<ResetPassword/>},
    {path:"otp" , element:<OTPVer/>},
    {path:"resetnewpass" , element:<ResetNewPass/>},

])


function App() {

  return <RouterProvider router={routers}></RouterProvider>

}

export default App;
