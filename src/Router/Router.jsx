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
        element: <AppointmentDetails></AppointmentDetails>
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
      ]
    }
  ]);