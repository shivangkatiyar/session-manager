import React, { useState } from "react";
import { Link} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa"
import {nanoid} from "nanoid";


function AddLogic({contacts, setContacts}) {
    const [addFormData, setAddFormData] = useState({
        id: "",
        Training_Type: "",
        Training_Area: "",
        Actions: "",
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
            id: nanoid(),
            Training_Type: addFormData.Training_Type,
            Training_Area: addFormData.Training_Area,
            Actions: "actions",
        }; 
        setContacts( [...contacts, newContact]);
        console.log(contacts)
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
                        <td>
                            <div class="align">
                                <label>Training Type</label>
                                <select name="Training_Type" onChange={handleAddFormChange} required= "required">
                                    <option hidden>Training Type</option>
                                    <option value="Bootcamp">Bootcamp</option>
                                    <option value="Extended Bootcamp">Extended Bootcamp</option>
                                    <option value="Weekly Talk">Weekly Talk</option>
                                    <option value="Study Group">Study Group</option>
                                    <option value="Pre Bootcamp">Pre Bootcamp</option>
                                    <option value="Domain Training">Domain Training</option>
                                    <option value="LDP">LDP</option>
                                </select>
                            </div>
                        </td>
                        <td>
                            <div class="align">
                            <label>Training Area</label>
                                <select name="Training_Area" onChange={handleAddFormChange} required= "required">
                                    <option hidden>Training Area</option>
                                    <option value="SQL">SQL</option>
                                    <option value="BI">BI</option>
                                    <option value="Azure">Azure</option>
                                    <option value="ML">ML</option>
                                    <option value="Dynamics">Dynamics</option>
                                    <option value="SSAS">SSAS</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Process">Process</option>
                                    <option value="Management">Management</option>
                                    <option value="Domain">Domain</option>
                                    <option value="Power-BI">Power-BI</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="10" align="right"><button class="btn btn-outline-danger m-3">Cancel</button><button class="btn btn-danger" type="submit" onClick={handleAddFormSubmit}>Save</button></td>
                    </tr>
                </table>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddLogic