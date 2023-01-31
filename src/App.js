import React from "react";
import Header from "./Componenets/Header";
import Parent from "./Componenets/Parent";
import EditSession from "./Componenets/EditSession";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Internal from "./Componenets/internal";
// import AddTableRows from "./Componenets/AddTableRows";
import Second from "./Screens/Second";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <>


      <div className="App">
        <Header />
        <Routes>
          <Route path="/EditSession" element={<Second />} />
          <Route path="/" element={<HomeScreen />} ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
