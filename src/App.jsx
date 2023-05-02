import { useState } from 'react'
import { db } from './database/firebase'
import { addDoc, collection, } from "firebase/firestore";
import { Button, Input } from 'antd';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/templates/AppLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import Schedule from './pages/schedule/Schedule';
import { createRoutesFromElements } from 'react-router';
import Home from './pages/Home';
import Patients from './pages/Patients/Patients';
import Profile from './pages/profile/Profile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='/schedule' element={<Schedule />} />
      <Route path='/patients' element={<Patients />} />
      <Route path='/profile' element={<Profile />} />
    </Route >
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} >
      </RouterProvider>
    </>
  )

}

export default App
