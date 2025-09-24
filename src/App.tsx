import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignInPage from './pages/signin'
import HomePage from './pages/home'
import SignUpPage from './pages/signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App =  () => {
  const router = createBrowserRouter([
    {path:'/', element: <HomePage/>},
    {path:'/signin', element: <SignInPage/>},
    {path:'/signup', element: <SignUpPage/>}
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
