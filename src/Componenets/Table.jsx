import React, {useState} from "react";
import { Link } from "react-router-dom";
import data from "./mock-data.json";
function Table() {
    const [contacts, setContacts] = useState(data);
    return (
        
        <div className = "FirstPage">
        <div className=" box-2 container-fluid shadow rounded bg-light">
            <div className="stk">
                <h2>Sessions</h2>
                <nav>
                    <Link to="/EditSession">
                        <div className="btn btn-danger">
                            + Add New Sessions
                        </div>
                    </Link>
                </nav>
            </div>

            <table cellpadding="10px">
                <thead style={{"background-color": "rgb(185, 8, 8)", "color": "white" }}>
                    <tr>
                        <th>ID</th>
                        <th>Session Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Owners</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr>
                            <td>{contact.ID}</td>
                            <td>{contact["Session Name"]}</td>
                            <td>{contact["Start Date"]}</td>
                            <td>{contact["End Date"]}</td>
                            <td>{contact.Owners}</td>
                            <td>{contact.Actions}</td>
                            
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
        </div>
    );
}
// export const contacts = true;
// export const setContacts = true;
export default Table;