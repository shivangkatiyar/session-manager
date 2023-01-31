import React from "react";
import Header from "./Componenets/Header";
import Parent from "./Componenets/Parent";
import EditSession from "./Componenets/EditSession";
import './App.css';
import {Route, Routes} from "react-router-dom";
// import AddTableRows from "./Componenets/AddTableRows";

function App() {
  return (                    
    <>
    
      
      <div className="App">
        <Header />
        <Routes>
        <Route path = "EditSession" element = {<Parent/>} />
      <Route path="/" element = {<Parent />} ></Route>
      </Routes>
      </div>
      </>
  );
}

export default App;
