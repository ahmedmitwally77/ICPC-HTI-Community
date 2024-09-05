import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom' ;
import Layout from '../src/Components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import { NotFound } from './pages/NotFound';


let routers = createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {index:true , element:<Home/>},
    {path:"login" , element:<Login/>},


    {path:'*',element:<NotFound/>},
  ]}
])


function App() {

  return <RouterProvider router={routers}></RouterProvider>

}

export default App;
