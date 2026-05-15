import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';
import { useState } from "react";

const App = () => {
  const [name,setName]=useState("")
  function handleName(e)
  {
    setName(e.target.value)
  }
  return (
    <div>
    <input type="text" onChange={handleName} />
    <Welcome name={name} />
    </div>
  )
}


export default App;
