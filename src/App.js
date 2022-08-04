import React from "react";
import { Routes, Route } from 'react-router-dom';
import Deatail from "./page/Deatail";
import Form from "./Form";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/deatail/:id" element={<Deatail/>}/>
      </Routes>
    </div>
  );
}

export default App;
