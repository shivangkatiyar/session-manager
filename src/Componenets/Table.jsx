import React, {useState} from "react";
import { Link } from "react-router-dom";
function Table(props) {
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
                        <th>Event Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Owners</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contacts.map((contact) => (
                        <tr>
                            <td>{contact.ID}</td>
                            <td>{contact["Event_Name"]}</td>
                            <td>{contact["Start_Date"]}</td>
                            <td>{contact["End_Date"]}</td>
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
export default Table;