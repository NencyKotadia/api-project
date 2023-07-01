import logo from "./logo.svg";
import "./App.css";
// import React, { useEffect, useState } from "react";
import Api from './api/api.js';
import Api_section_2 from "./api_section_2/api_section_2";
import Api_section_3 from "./api_section_3/api_section_3";
function App() {


  return (
    <>
    <Api_section_2/>
   <Api/>
    <Api_section_3/>
   </>
  );
}

export default App;
