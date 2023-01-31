import React, {useState} from  "react";
import data from "./mock-data.json"
import EditSession from "./EditSession";
import Table from "./Table";
import {useLocation} from "react-router-dom";

export default function Parent() {

    const [contacts, setContacts] = useState(data);
    const location = useLocation();
    console.log(location);

    return (
        <>
            {location.pathname === '/EditSession' && <EditSession contacts={contacts} setContacts={setContacts} />}
            <Table contacts={contacts} />
        </>
    )
}