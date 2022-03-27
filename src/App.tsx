import './App.css';
import React from 'react';
import EyeScene from './components/EyeScene';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EyeScene />}/>
        <Route path="/cOne"/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
