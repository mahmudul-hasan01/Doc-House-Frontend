import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from '../MainLayout/MainLayout'
import Home from '../Pages/Home/Home/Home'
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import AdminHome from "../Dashboard/Admin/AdminHome";
import AddDoctor from "../Dashboard/Admin/AddDoctor";
import Appointment from "../Pages/Appointment/Appointment";
import AppointmentDetails from "../Pages/Appointment/AppointmentDetails";
import Profile from "../Pages/Profile/Profile";
import AllUser from "../Dashboard/Admin/AllUser";
import AllDoctor from "../Dashboard/Admin/AllDoctor";
import UpdateDoctor from "../Dashboard/Admin/UpdateDoctor";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
       {
        path: '/',
        element: <Home></Home>
       },
       {
        path: '/appointment',
        element: <Appointment></Appointment>
       },
       {
        path: '/appointment/details/:id',
        element: <AppointmentDetails></AppointmentDetails>,
        // loader: ({params}) => fetch(`http://localhost:5000/doctor/${params?.id}`)
       },
       {
        path: '/profile',
        element: <Profile></Profile>
       },
      ]
    },
    // login-signUp
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'signUp',
      element: <SignUp></SignUp>
    },
    // dashboard
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'adminHome',
          element: <AdminHome></AdminHome>
        },
        {
          path: 'addDoctor',
          element: <AddDoctor></AddDoctor>
        },
        {
          path: 'allUser',
          element: <AllUser></AllUser>
        },
        {
          path: 'updateUser/:id',
          element: <UpdateDoctor></UpdateDoctor>
        },
        {
          path: 'allDoctor',
          element: <AllDoctor></AllDoctor>
        },
      ]
    }
  ]);