import { useState } from 'react'
import './App.css'
import { db } from './database/firebase'
import { addDoc, collection, } from "firebase/firestore";
import { Button, Input } from 'antd';

function App() {
  const [count, setCount] = useState(0)


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
      <Button onClick={(e) => test()} >Test</Button>
      <Button href='/schedule' >Test</Button>
      <Input placeholder="Basic usage" />
    </>
  )
}

export default App
