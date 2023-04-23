import { useState } from 'react'
import { db } from './database/firebase'
import { addDoc, collection, } from "firebase/firestore";
import { Button, Input } from 'antd';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './components/templates/AppLayout';

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
const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  }))
);

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
        <AppLayout>

        </AppLayout>
      </RouterProvider>
    </>
  )

}

export default App
