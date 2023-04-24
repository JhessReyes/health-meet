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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='/schedule' element={<Schedule />} />
    </Route >
  )
)

function App() {
  // Add a new document in collection "cities"
  const test = async (params) => {
    await addDoc(collection(db, "cities",), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
    console.log('Successfully');
  }
  return (
    <>
      <RouterProvider router={router} >
      </RouterProvider>
    </>
  )

}

export default App
