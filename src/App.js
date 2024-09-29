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
// import ContactUs from './pages/ContactUs/ContactUs';
import Training from './pages/Training/Training';
import Level from './Components/Level/Level';
import Wave from './Components/Wave/Wave';
import Session from './Components/Session/Session';
import Committees from './pages/Committees/Committees';
import Profile from './pages/profile/Profile';
import Admin from './pages/Admin/Admin';
import AddNews from './pages/Adds/AddNews';
import AddTalented from './pages/Adds/AddTalented';
import AddLatestEvents from './pages/Adds/AddLatestEvents';
import AddAchievements from './pages/Adds/AddAchievements';
import AddLevels from './pages/Adds/Training/AddLevels';
import AddWave from './pages/Adds/Training/AddWave';
import AddSessions from './pages/Adds/Training/AddSessions';
import ProtectedRoute from './Components/ProtectedRoute';
import ProtectedAdmin from './Components/ProtectedAdmin';


let routers = createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:"login" , element:<Login/>},
    {path:"signup" , element:<SignUp/>},
    {path:"ecpc" , element:<ECPC/>},
    {path:"about" , element:<About/>},
    // {path:"contactUs" , element:<ContactUs/>},
    {path:"committees" , element:<Committees/>},
    {path:"training" , element:<Training/>},
    {path:"level/:id" , element:<ProtectedRoute><Level/></ProtectedRoute>},
    {path:"wave/:id" , element:<ProtectedRoute><Wave/></ProtectedRoute>},
    {path:"session/:sessionId" , element:<ProtectedRoute><Session/></ProtectedRoute>},
    {path:"profile" , element:<ProtectedRoute><Profile/></ProtectedRoute>},
    {path:"admin" , element:<ProtectedAdmin><Admin/></ProtectedAdmin>},
    {path:"addnews" , element:<ProtectedAdmin><AddNews/></ProtectedAdmin>},
    {path:"addevent" , element:<ProtectedAdmin><AddLatestEvents/></ProtectedAdmin>},
    {path:"addtalented" , element:<ProtectedAdmin><AddTalented/></ProtectedAdmin>},
    {path:"addAchievemnts" , element:<ProtectedAdmin><AddAchievements/></ProtectedAdmin>},
    {path:"addlevels" , element:<ProtectedAdmin><AddLevels/></ProtectedAdmin>},
    {path:"addwaves" , element:<ProtectedAdmin><AddWave/></ProtectedAdmin>},
    {path:"addsession" , element:<ProtectedAdmin><AddSessions/></ProtectedAdmin>},

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
