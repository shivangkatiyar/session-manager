import React, {useState} from 'react'
import InternalGrid from '../Componenets/InternalGrid'
import AddLogic from '../Componenets/AddLogic'
import AddSession from '../Componenets/AddSession';

function second({contacts, setContacts, sessions, setSessions}) {
  

  
  return (
    <>
    <AddLogic contacts={contacts} setContacts={setContacts}/>
    {/* {showPopup && <AddSession sessions={sessions} setSessions={setSessions} handleTogglePopup={handleTogglePopup}/>} */}
    <InternalGrid sessions={sessions} setSessions={setSessions}/>
    
    </>
  )
}

export default second