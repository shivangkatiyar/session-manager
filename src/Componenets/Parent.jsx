import React, {useState} from  "react";
import data from "./mock-data.json"
import EditSession from "./EditSession";
import Table from "./Table";
import {useLocation} from "react-router-dom";
import AddLogic from "./AddLogic";

export default function Parent() {

    const [contacts, setContacts] = useState([data]);
    const location = useLocation();
    console.log("shivang katiyar");

    return (
        <>
            {/* {location.pathname === '/EditSession' && <EditSession contacts={contacts} setContacts={setContacts} />} */}
            {location.pathname === '/AddLogic' && <AddLogic contacts={contacts} setContacts={setContacts} />} 

            <Table contacts={contacts} />
        </>
    )
}