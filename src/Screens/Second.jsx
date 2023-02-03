import React from 'react'
import InternalGrid from '../Componenets/InternalGrid'
import AddLogic from '../Componenets/AddLogic'

function second({contacts, setContacts, sessions, setSessions}) {
  

  
  return (
    <>
    <AddLogic contacts={contacts} setContacts={setContacts}/>
    <InternalGrid sessions={sessions} setSessions={setSessions}/>
    
    </>
  )
}

export default second