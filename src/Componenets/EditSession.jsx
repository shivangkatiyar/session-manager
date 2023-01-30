import React, {useState} from "react";
import {nanoid} from "nanoid";
import data from "./mock-data.json";
import AddTableRows from "./AddTableRows";
// import {contacts, setContacts} from "./Table";
function EditSession() {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        Session_Name:"",
        Start_Date:"",
        End_Date:"",
        Owners:"",
        Session_Name:"",
        Start_Date:""
    })
    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);

    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            key: nanoid(),
            Session_Name: addFormData.Session_Name,
            Start_Date: addFormData.Start_Date,
            End_Date: addFormData.End_Date,
            Owners: addFormData.Owners,
            Session_Name: addFormData.Session_Name,
            Start_Date: addFormData.Start_Date,
        };
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);

    };
    return (
        <div className="EditClass">
        <div class="container-fluid shadow rounded bg-light box-1">
        <form onSubmit = {handleAddFormSubmit} action="">
            <table cellpadding="24px" >
                <tr>
                    <td><div class="align"><span>Session Name</span><input type="text" name="Session_Name" required="required" placeholder="Enter session name" onChange={handleAddFormChange} /></div></td>
                    <td><div class="align"><span>Start Date</span><input type="date" name = "Start_Date" required="required" placeholder="Enter start date" onChange={handleAddFormChange} /></div></td>
                    <td><div class="align"><span>End Date</span><input type="date" name="End_Date" required="required" placeholder="Enter end date" onChange={handleAddFormChange} /></div></td>
                    <td><div class="align"><span>Owners</span><input type="text" name="Owners" required="required" placeholder="Enter owner name" onChange={handleAddFormChange} /></div></td>
                    <td><div class="align"><span>Session Name</span><input type="text" name="Session_Name" required="required" placeholder="Enter session name" onChange={handleAddFormChange} /></div></td>
                    <td><div class="align"><span>Start Date</span><input type="date" name = "Start_Date" required="required" placeholder="Enter start date" onChange={handleAddFormChange} /></div></td>
                </tr>
                {/* <tr>
                    <td><div class="align"><span>Session Name</span><input type="text"/></div></td>
                    <td><div class="align"><span>Start Date</span><input type="date"/></div></td>
                    <td><div class="align"><span>End date</span><input type="date"/></div></td>
                    <td><div class="align"><span>Owners</span><input type="text"/></div></td>
                    <td><div class="align"><span>Session Name</span><input type="text"/></div></td>
                    <td><div class="align"><span>Start Date</span><input type="date"/></div></td>
                </tr> */}
                <tr>
                    <td colspan="6" align="right"><button class="btn btn-outline-danger m-3" type = "submit" >Cancel</button><button class="btn btn-danger" type="submit">Save</button></td>

                    {/* <td colspan="6" align="right"><div class="btn btn-outline-danger m-3" >Cancel</div><div class="btn btn-danger">Save</div></td> */}
    
                </tr>
            </table>
        </form>
    </div>
    </div>

    );
}
export default EditSession;