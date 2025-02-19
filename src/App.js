import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom' ;
import Layout from '../src/Components/Layout'
import Home from './pages/Home/Home'
import { NotFound } from './pages/NotFound';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
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
import ResetPassword from './Components/ForgetPasswordAndOTPVer/ResetPassword';
import OTPVer from './Components/ForgetPasswordAndOTPVer/OTPVer';


let routers = createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:"login" , element:<Login/>},
    {path:"signup" , element:<SignUp/>},
    {path:"ecpc" , element:<ECPC/>},
    {path:"about" , element:<About/>},
    {path:"committees" , element:<Committees/>},
    {path:"training" , element:<Training/>},
    {path:"level/:id" , element:<ProtectedRoute><Level/></ProtectedRoute>},
    {path:"wave/:id" , element:<ProtectedRoute><Wave/></ProtectedRoute>},
    {path:"session/:sessionId" , element:<ProtectedRoute><Session/></ProtectedRoute>},
    {path:"resetpassword" , element:<ResetPassword/>},
    {path:"otp" , element:<OTPVer/>},
    {
      path: "dashboard",
      element: <ProtectedRoute><DashBoard /></ProtectedRoute>,
      children: [
        { index: true, element: <ProfileDash /> }, // الصفحة الافتراضية
        { path: "profile", element: <ProfileDash /> }, // صفحة البروفايل
        { path: "standing", element: <StandingData /> }, 
        { path: "waveData", element: <WaveDataDash /> }, 
        
        { path: "sheet_contest", element:<ProtectedAdmin allowedRoles={['mentor', 'leader' , 'hr']}> <Sheets_Contest /> </ProtectedAdmin> }, 
        { path: "trainees", element: <ProtectedAdmin allowedRoles={['mentor', 'leader' , 'hr']}><Trainees /></ProtectedAdmin> }, 

        //  hr access 
        { path: "attendance", element: <ProtectedAdmin allowedRoles={['leader' , 'hr']}><Attendance /></ProtectedAdmin>  }, 
        { path: "warning", element: <ProtectedAdmin allowedRoles={['leader' , 'hr']}><Warning /></ProtectedAdmin> }, 
        { path: "warning_attendance", element: <ProtectedAdmin allowedRoles={['leader' , 'hr']}><WarningAttendance /> </ProtectedAdmin>}, 

        // admin and instructor access 
        { path: "sessions", element: <ProtectedAdmin allowedRoles={['instructor', 'leader']}><SessionsDash /></ProtectedAdmin> }, 
        { path: "sessions/addsession", element: <ProtectedAdmin allowedRoles={['instructor', 'leader']}><AddSessions /></ProtectedAdmin> }, 

        // admin access 
        { path: "request", element:<ProtectedAdmin allowedRoles={['leader']}><Requests /></ProtectedAdmin>  }, 
        { path: "archive", element: <ProtectedAdmin allowedRoles={['leader']}><Archive /></ProtectedAdmin> }, 
        { path: "coremembers", element: <ProtectedAdmin allowedRoles={['leader']}><CoreMembers /></ProtectedAdmin> }, 
        { path: "coremembers/addcoremember", element: <ProtectedAdmin allowedRoles={['leader']}><AddCoreMember /> </ProtectedAdmin>}, 
        { path: "events", element:<ProtectedAdmin allowedRoles={['leader']}><Events /> </ProtectedAdmin> }, 
        { path: "events/addevent", element: <ProtectedAdmin allowedRoles={['leader']}><AddLatestEvents /></ProtectedAdmin> }, 
        { path: "newsDash", element:<ProtectedAdmin allowedRoles={['leader']}><NewsDash /> </ProtectedAdmin> }, 
        { path: "newsDash/addnews", element:<ProtectedAdmin allowedRoles={['leader']}><AddNews /></ProtectedAdmin>  }, 
        { path: "achievementsDash", element: <ProtectedAdmin allowedRoles={['leader']}><AchievementsDash /></ProtectedAdmin> }, 
        { path: "achievementsDash/addachievement", element:<ProtectedAdmin allowedRoles={['leader']}><AddAchievements /> </ProtectedAdmin> }, 
        { path: "levels", element:<ProtectedAdmin allowedRoles={['leader']}><LevelsDach /></ProtectedAdmin>  }, 
        { path: "levels/addlevel", element:<ProtectedAdmin allowedRoles={['leader']}><AddLevels /></ProtectedAdmin>  }, 
        { path: "waves", element:<ProtectedAdmin allowedRoles={['leader']}><WaveDash /></ProtectedAdmin> }, 
        { path: "waves/addwave", element:<ProtectedAdmin allowedRoles={['leader']}><AddWave /></ProtectedAdmin>  }, 
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
