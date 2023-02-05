import React, { useState } from "react";
import { nanoid } from "nanoid";

function AddSession({ sessions, setSessions }, { handleTogglePopup }) {
    const [addFormData, setAddFormData] = useState({
        id: "",
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
        setSessions([...sessions, newSession]);
        console.log(sessions)
    };
    return (
        <div>
            <form>
                <div class="form-group" id="form-group-1">
                    <h2>Add Session</h2>
                    <hr />
                    <div class="form-control">
                        <label>Contribution type</label>
                        <select name="Contribution_Type" id="field1" onChange={handleAddFormChange}>
                            <option value="1">Create/update content</option>
                            <option value="2">Deliver/Mentor session</option>
                            <option value="3">Review assignments</option>
                            <option value="4">Coordinate training</option>
                            <option value="5">Support user requests</option>
                            <option value="6">Maintain Tool/System</option>
                            <option value="7">Onboard content</option>
                        </select>
                    </div>
                    <div class="form-control">
                        <label>Date</label>
                        <input name="Date" required="required" id="field2" type="Date" placeholder="Date" onChange={handleAddFormChange} />
                    </div>
                    <div class="form-control">
                        <label for="field3">Duration</label>
                        <input name="Duration" type="text" required="required" placeholder="Duration" id="field3" onChange={handleAddFormChange} />
                    </div>
                </div>
                <div class="form-group" id="form-group-2">
                    <div class="form-control">
                        <label>EmpID</label>
                        <input type="text" name="EmpID" required="required" id="field4" placeholder="Employee Id" onChange={handleAddFormChange} />
                    </div>
                    <div class="form-control">
                        <label>SessionID</label>
                        <input type="text" name="SessionID" required="required" id="field5" placeholder="Session Id" onChange={handleAddFormChange} />
                    </div>
                    <div class="form-control">
                        <label>Contributor Email Id</label>
                        <input type="text" name="Contributor_Email_Id" required="required" id="field6" placeholder="Contributor Email Id" onChange={handleAddFormChange} />
                    </div>
                    <div class="form-control">
                        <label>No. of participants</label>
                        <input type="text" name="No_Of_Participants" required="required" id="field7" placeholder="No Of Participants" onChange={handleAddFormChange} />
                    </div>
                </div>
                <div class="form-group" id="form-group-3">
                    <div class="form-control">
                        <label>Topic/Item/Activity</label>
                        <textarea name="Topic_Item_Activity" type="text" required="required" placeholder="Topic_Item_Activity" id="field8" onChange={handleAddFormChange} ></textarea>
                    </div>
                    <div class="form-control">
                        <label>Description</label>
                        <textarea name="Description" type="text" required="required" id="field9" onChange={handleAddFormChange} ></textarea>
                    </div>
                </div>
                <div class="form-group" id="form-group-4">
                    <div class="form-control">
                        <input type="submit" value="OK" onClick={handleAddFormSubmit} />
                    </div>
                    <div class="form-control">
                        <input type="button" value="CANCEL" onClick={handleTogglePopup} />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddSession