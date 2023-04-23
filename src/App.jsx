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
const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });
const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    continue;
  }
  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}
/* const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);
 */

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
