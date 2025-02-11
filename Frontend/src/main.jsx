import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createRoutesFromElements, Route, Router } from 'react-router-dom'
import Layout from './components/Layout'
import { createBrowserRouter , RouterProvider } from'react-router-dom'
import Home from './pages/Home'






const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}> 
      <Route path="/home" element={<Home/>} />
     
    



     


    </Route>



  )   
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)














