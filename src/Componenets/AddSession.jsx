import React, { useState } from "react";
import { Link} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import {nanoid} from "nanoid";



function AddSession({sessions, setSessions, handleTogglePopup}) {
    const [addFormData, setAddFormData] = useState({
        id:"",
        Contribution_Type: "",
        Date: "",
        Topic_Item_Activity: "",
        No_Of_Participants: "",
        Duration: "",
        Contributor_Email_Id: "",
        EmpID: "",
        SessionID: "",
        Description: "",
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

        const newSession = {
            id: nanoid(),
            Contribution_Type: addFormData.Contribution_Type,
            Date: addFormData.Date,
            Topic_Item_Activity: addFormData.Topic_Item_Activity,
            No_Of_Participants: addFormData.No_Of_Participants,
            Duration: addFormData.Duration,
            Contributor_Email_Id: addFormData.Contributor_Email_Id,
            EmpID: addFormData.EmpID,
            SessionID: addFormData.SessionID,
            Description: addFormData.Description,
        };
        setSessions( [...sessions, newSession]);
        console.log(sessions)
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
            <form action="">
                <table cellpadding="24px" >
                    <tr>
                        <td><div class="align"><span>Conrtibution Type</span><input type="text" name="Contribution_Type" required="required" placeholder="Contribution Type" onChange={handleAddFormChange} /></div></td><br/>
                        <td><div class="align"><span>Date</span><input type="date" name="Date" required="required" placeholder="Date" onChange={handleAddFormChange}/></div></td><br/>
                        <td><div class="align"><span>Topic/Item/Activity</span><input type="text" name="Topic_Item_Activity" required="required" placeholder="Topic_Item_Activity" onChange={handleAddFormChange} /></div></td><br/>
                        <td><div class="align"><span>No_Of_Participants</span><input type="text" name="No_Of_Participants" required="required" placeholder="No. of Participants" onChange={handleAddFormChange} /></div></td><br/>
                        <td><div class="align"><span>Duration</span><input type="text" name="Duration" required="required" placeholder="Duration" onChange={handleAddFormChange} /></div></td><br/>
                        <td><div class="align"><span>Contributor_Email_Id</span><input type="text" name="Contributor_Email_Id" required="required" placeholder="Contributor email id" onChange={handleAddFormChange} /></div></td><br/>
                        <td><div class="align"><span>EmpID</span><input type="text" name="EmpID" required="required" placeholder="Employee id" onChange={handleAddFormChange} /></div></td><br/>
                        <td><div class="align"><span>SessionID</span><input type="text" name="SessionID" required="required" placeholder="Session id" onChange={handleAddFormChange} /></div></td><br/>
                        <td><div class="align"><span>Description</span><input type="text" name="Description" required="required" placeholder="Description" onChange={handleAddFormChange} /></div></td><br/>
                    </tr>
                    <tr>
                        <td colspan="10" align="right"><button class="btn btn-outline-danger m-3" onClick={handleTogglePopup}>Cancel</button><button class="btn btn-danger" type="submit" onClick={handleAddFormSubmit}>Save</button></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddSession