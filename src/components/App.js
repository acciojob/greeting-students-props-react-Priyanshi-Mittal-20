import React from "react";
import '../styles/App.css';
import Welcome from './Welcome';
import { useState } from "react";

const App = () => {
  return (
    <div>
      <Welcome name="John" />
    </div>
  )
}


export default App;
