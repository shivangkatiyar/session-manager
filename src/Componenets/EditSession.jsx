import React, { useState } from "react";
import data from "./mock-data.json";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"

function EditSession(props) {
    const [contacts, setContacts] = useState(data);
    const navigate = useNavigate();
    const [addFormData, setAddFormData] = useState({
        ID:"",
        Event_Name: "",
        Start_Date: "",
        End_Date: "",
        Owners: "",
        Event_Name: "",
        Start_Date: ""
    })
    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);

    }; 

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            ID: addFormData.ID,
            Event_Name: addFormData.Event_Name,
            Start_Date: addFormData.Start_Date,
            End_Date: addFormData.End_Date,
            Owners: addFormData.Owners,
            Event_Name: addFormData.Event_Name,
            Start_Date: addFormData.Start_Date,
        };
        console.log(newContact);
        props.setContacts(prevContacts => [...prevContacts, newContact]);
    };
    return (
        <div class="flex flex-column">
            <nav className="GoBack">
                <Link to="/" style={{ "color": "black", "text-decoration": "none" }}>
                    <FaArrowLeft size={20} />
                </Link>
                <h3 style={{"margin-bottom": "0"}}>Edit Event</h3>
            </nav>

            <div className="EditClass">
                <div class="container-fluid shadow rounded bg-light box-1">
                    <form onSubmit={handleAddFormSubmit} action="">
                        <table cellpadding="24px" >
                            <tr>
                                <td><div class="align"><span>ID</span><input type="text" name="ID" required="required" placeholder="Enter unique ID" onChange={handleAddFormChange} />{ }</div></td>
                                <td><div class="align"><span>Event Name</span><input type="text" name="Event_Name" required="required" placeholder="Enter evemt name" onChange={handleAddFormChange} />{ }</div></td>
                                <td><div class="align"><span>Start Date</span><input type="date" name="Start_Date" required="required" placeholder="Enter start date" onChange={handleAddFormChange} /></div></td>
                                <td><div class="align"><span>End Date</span><input type="date" name="End_Date" required="required" placeholder="Enter end date" onChange={handleAddFormChange} /></div></td>
                                <td><div class="align"><span>Owners</span><input type="text" name="Owners" required="required" placeholder="Enter owner name" onChange={handleAddFormChange} /></div></td>
                                <td><div class="align"><span>Event Name</span><input type="text" name="Event_Name" required="required" placeholder="Enter event name" onChange={handleAddFormChange} /></div></td>
                                <td><div class="align"><span>Start Date</span><input type="date" name="Start_Date" required="required" placeholder="Enter start date" onChange={handleAddFormChange} /></div></td>
                            </tr>
                            <tr>
                                <td colspan="10" align="right"><button class="btn btn-outline-danger m-3" type="submit" >Cancel</button><button class="btn btn-danger" type="submit">Save</button></td>

                                {/* <td colspan="6" align="right"><div class="btn btn-outline-danger m-3" >Cancel</div><div class="btn btn-danger">Save</div></td> */}

                            </tr>
                        </table>
                    </form>
                </div>
            </div>
        </div>

    );
}
export default EditSession;