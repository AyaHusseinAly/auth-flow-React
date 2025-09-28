import {createBrowserRouter, Navigate, RouterProvider} from 'react-router-dom'
import SignInPage from './pages/signin'
import HomePage from './pages/home'
import SignUpPage from './pages/signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect } from 'react';
import AuthLayout from './components/AuthLayout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { PublicRoute } from './components/PublicRoute';

const App =  () => {
  const router = createBrowserRouter([
    {
      path:'/', 
      element: <AuthLayout/>,
      children:[
        {path:'signin', element:<PublicRoute> <SignInPage/> </PublicRoute> },
        {path:'signup', element: <PublicRoute> <SignUpPage/> </PublicRoute> },
        {path:'/', element: <Navigate to="home" replace />}
      ]
    },
    {path:'/home', 
      element:  (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      )},

  ]);
  useEffect(() => {getOrCreateDeviceId();} ,[]);

  return (
    <RouterProvider router={router}/>
  )
}

// generate or read unique device id - stored in BE with the refresh token
function getOrCreateDeviceId(): string {
  let deviceId = localStorage.getItem("deviceId");
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem("deviceId", deviceId);
  }
  return deviceId;
}

export default App
