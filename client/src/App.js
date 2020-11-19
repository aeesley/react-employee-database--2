import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import React, {useState, useEffect} from 'react';
import axios from "axios";

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
