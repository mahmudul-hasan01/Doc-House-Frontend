import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from '../MainLayout/MainLayout'
import Home from '../Pages/Home/Home/Home'
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
       {
        path: '/',
        element: <Home></Home>
       }
      ]
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'signUp',
      element: <SignUp></SignUp>
    },
  ]);