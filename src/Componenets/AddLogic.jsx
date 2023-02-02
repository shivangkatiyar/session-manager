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
                        <td><div class="align"><span>Training Type</span><input type="text" name="Training_Type" required="required" placeholder="Enter training type" onChange={handleAddFormChange} /></div></td>
                        <td><div class="align"><span>Training Area</span><input type="text" name="Training_Area" required="required" placeholder="Enter training area" onChange={handleAddFormChange} /></div></td>
                    </tr>
                    <tr>
                        <td colspan="10" align="right"><button class="btn btn-outline-danger m-3" type="submit" >Cancel</button><button class="btn btn-danger" type="submit" onClick={handleAddFormSubmit}>Save</button></td>

                        {/* <td colspan="6" align="right"><div class="btn btn-outline-danger m-3" >Cancel</div><div class="btn btn-danger">Save</div></td> */}

                    </tr>
                </table>
            </form>
        </div>
    </div>
</div>
  )
}

export default AddLogic