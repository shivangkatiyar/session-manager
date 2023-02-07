import React, {useState} from "react";
import Header from "./Componenets/Header";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Second from "./Screens/Second";
import HomeScreen from "./Screens/HomeScreen";
import data from './Componenets/mock-data.json'
import initial_session from './Componenets/mock-session.json'

function App() {
  const [contacts, setContacts] = useState(data);
  const [sessions, setSessions] = useState(initial_session)
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/AddLogic" element={<Second contacts={contacts} setContacts={setContacts} sessions={sessions} setSessions={setSessions} />} />
          <Route path="/" element={<HomeScreen contacts={contacts} setContacts={setContacts}/>} ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
