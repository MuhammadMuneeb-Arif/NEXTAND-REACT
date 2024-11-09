import { useState } from 'react'

import './App.css'
import { Navbar } from './Components/Navbar'
import About from './Components/About/about'
import Contact from './Components/Contact/contact'
import Products from './Components/Products/Products'
import  {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './Components/home/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<><Navbar/><Home/></>
    },{
      path: "/Contact",
      element:<><Navbar/><Contact/></>
    }
    ,{
      path: "/about",
      element:<><Navbar/><About/></>
    } ,{
      path: "/Products",
      element:<><Navbar/><Products/></>
    }    ])

  return (
 <>
 
    <RouterProvider router={router} />
    </>  
     

  )
}

export default App
