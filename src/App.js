import React from "react";
import Header from "./Componenets/Header";
import Table from "./Componenets/Table";
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
        <Route path = "/EditSession" element = {<EditSession />} />
      </Routes>
        <Table />
      </div>
      </>
  );
}

export default App;
