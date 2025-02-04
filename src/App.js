import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom' ;
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
import Training from './pages/Training/Training';
import Level from './Components/Level/Level';
import Wave from './Components/Wave/Wave';
import Session from './Components/Session/Session';
import Committees from './pages/Committees/Committees';
import DashBoard from './pages/DashBoard/DashBoard';
import Admin from './pages/Admin/Admin';
import AddNews from './pages/Adds/AddNews';
import AddTalented from './pages/Adds/AddTalented';
import AddLatestEvents from './pages/Adds/AddLatestEvents';
import AddAchievements from './pages/Adds/AddAchievements';
import AddLevels from './pages/Adds/Training/AddLevels';
import AddWave from './pages/Adds/Training/AddWave';
import Form from './pages/Form-wave/Form';
import AddSessions from './pages/Adds/Training/AddSessions';
import ProtectedRoute from './Components/ProtectedRoute';
import ProtectedAdmin from './Components/ProtectedAdmin';
import AddStandingW1 from './pages/Adds/Training/AddStandingW1';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import ProfileDash from './Components/DashBoardPages/generalPages/ProfileDash';
import StandingData from './Components/DashBoardPages/generalPages/StandingData';
import WaveDataDash from './Components/DashBoardPages/generalPages/WaveDataDash';
import MentorAccess from './Components/DashBoardPages/mentorPages/MentorAccess';
import Sheets_Contest from './Components/DashBoardPages/generalPages/Sheets_Contest';
import Trainees from './Components/DashBoardPages/generalPages/Trainees';
import Attendance from './Components/DashBoardPages/generalPages/Attendance';
import Warning from './Components/DashBoardPages/generalPages/Warning';
import WarningAttendance from './Components/DashBoardPages/generalPages/WarningAttendance';
import SessionsDash from './Components/DashBoardPages/generalPages/SessionsDash';
import CoreMembers from './Components/DashBoardPages/LeaderPages/CoreMembers';
import AddCoreMember from './pages/Adds/AddCoreMember';
import Events from './Components/DashBoardPages/LeaderPages/Events';
import News from './Components/News/News';
import NewsDash from './Components/DashBoardPages/LeaderPages/NewsDash';
import AchievementsDash from './Components/DashBoardPages/LeaderPages/AchievementsDash';
import LevelsDach from './Components/DashBoardPages/LeaderPages/LevelsDach';
import WaveDash from './Components/DashBoardPages/LeaderPages/WaveDash';
import Requests from './Components/DashBoardPages/LeaderPages/Requests';
import Archive from './Components/DashBoardPages/LeaderPages/Archive';


let routers = createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:"login" , element:<Login/>},
    {path:"signup" , element:<SignUp/>},
    {path:"ecpc" , element:<ECPC/>},
    {path:"about" , element:<About/>},
    {path:"committees" , element:<Committees/>},
    {path:"training" , element:<Training/>},
    {path:"level/:id" , element:<Level/>},
    {path:"wave/:id" , element:<Wave/>},
    // {path:"level/:id" , element:<ProtectedRoute><Level/></ProtectedRoute>},
    // {path:"wave/:id" , element:<ProtectedRoute><Wave/></ProtectedRoute>},
    {path:"session/:sessionId" , element:<ProtectedRoute><Session/></ProtectedRoute>},
    {
      path: "dashboard",
      element: <ProtectedRoute><DashBoard /></ProtectedRoute>,
      children: [
        { index: true, element: <ProfileDash /> }, // الصفحة الافتراضية
        { path: "profile", element: <ProfileDash /> }, // صفحة البروفايل
        { path: "standing", element: <StandingData /> }, 
        { path: "waveData", element: <WaveDataDash /> }, 
        
        { path: "sheet_contest", element: <Sheets_Contest /> }, 
        { path: "trainees", element: <Trainees /> }, 

        //  Hr access 
        { path: "attendance", element: <Attendance /> }, 
        { path: "warning", element: <Warning /> }, 
        { path: "warning_attendance", element: <WarningAttendance /> }, 

        // admin and instructor access 
        { path: "sessions", element: <SessionsDash /> }, 
        { path: "sessions/addsession", element: <ProtectedAdmin><AddSessions /></ProtectedAdmin> }, 

        // admin access 
        { path: "request", element: <Requests /> }, 
        { path: "archive", element: <Archive /> }, 
        { path: "coremembers", element: <CoreMembers /> }, 
        { path: "coremembers/addcoremember", element: <AddCoreMember /> }, 
        { path: "events", element: <Events /> }, 
        { path: "events/addevent", element: <AddLatestEvents /> }, 
        { path: "newsDash", element: <NewsDash /> }, 
        { path: "newsDash/addnews", element: <AddNews /> }, 
        { path: "achievementsDash", element: <AchievementsDash /> }, 
        { path: "achievementsDash/addachievement", element: <AddAchievements /> }, 
        { path: "levels", element: <LevelsDach /> }, 
        { path: "levels/addlevel", element: <AddLevels /> }, 
        { path: "waves", element: <WaveDash /> }, 
        { path: "waves/addwave", element: <AddWave /> }, 
        {path:'*',element:<NotFound/>},
      ],
    },

    // {path:"admin" , element:<ProtectedAdmin><Admin/></ProtectedAdmin>},
    // {path:"addnews" , element:<ProtectedAdmin><AddNews/></ProtectedAdmin>},
    // {path:"addevent" , element:<ProtectedAdmin><AddLatestEvents/></ProtectedAdmin>},
    // {path:"addtalented" , element:<ProtectedAdmin><AddTalented/></ProtectedAdmin>},
    // {path:"addAchievemnts" , element:<ProtectedAdmin><AddAchievements/></ProtectedAdmin>},
    // {path:"addlevels" , element:<ProtectedAdmin><AddLevels/></ProtectedAdmin>},
    // {path:"addwaves" , element:<ProtectedAdmin><AddWave/></ProtectedAdmin>},
    // {path:"addsession" , element:<ProtectedAdmin><AddSessions/></ProtectedAdmin>},
    // {path:"addStandingW1" , element:<ProtectedAdmin><AddStandingW1/></ProtectedAdmin>},
    {path:"form" , element:<Form/>},
    {path:'*',element:<NotFound/>},

    // {path:'/dashboard' , element:<DashBoard/>, children:[
    //   {index:true , element:<ProfileDash/>},
    //   {path:"profile" , element:<ProfileDash/>},

    // ]}
  ]},
    
    {path:"resetpassword" , element:<ResetPassword/>},
    {path:"otp" , element:<OTPVer/>},
    {path:"resetnewpass" , element:<ResetNewPass/>},

])


function App() {


  // for google analytics
  useEffect(() => {
    ReactGA.initialize('G-LBVS9BVBNB');
    // Track the current page view
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);


  return  <RouterProvider router={routers}></RouterProvider>

}

export default App;
