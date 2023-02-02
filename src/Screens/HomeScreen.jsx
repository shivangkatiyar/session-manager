import React from 'react'
import MainGrid from '../Componenets/MainGrid'

function HomeScreen({contacts, setContacts}) {
  return (
    <>
    <MainGrid contacts={contacts} setContacts={setContacts}/>
    </>
  )
}

export default HomeScreen