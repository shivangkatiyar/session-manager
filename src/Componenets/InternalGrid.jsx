import React, { useState } from "react";
import DataGrid from 'react-data-grid';

function InternalGrid(props) {
    const columns = [
        { key: 'Session_Name', name: 'Session Name' },
        { key: 'Owner', name: 'Owner' },
        { key: 'Start_Date', name: 'Start Date' },
        { key: 'End_Date', name: 'End Date' }
    ];

    const rows = [
        { Session_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
        { Session_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
        { Session_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
        { Session_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
        { Session_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
        { Session_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
        { Session_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
        { Session_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
        { Session_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },

    ];

    const [showPopup, setShowPopup] = useState(false);

    const handleTogglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        <>

            <div className="FirstPage">

                <div className=" box-2 container-fluid shadow rounded bg-light">
                    <div>
                        <button className="btn btn-danger" style={{ "padding": "1rem 2rem 1rem 2rem" }} onClick={handleTogglePopup}>+ Add new session </button>
                        {showPopup && (
                            <div className="popup-form">
                                <table cellpadding="24px" >
                                    <tr>
                                        <td><div class="align"><span>ID</span><input type="text" name="ID" required="required" placeholder="Enter unique ID" /></div></td>
                                        <td><div class="align"><span>Session Name</span><input type="text" name="Event_Name" required="required" placeholder="Enter Session name" /></div></td>
                                        <td><div class="align"><span>Start Date</span><input type="date" name="Start_Date" required="required" placeholder="Enter start date" /></div></td>
                                        <td><div class="align"><span>End Date</span><input type="date" name="End_Date" required="required" placeholder="Enter end date" /></div></td>
                                        <td><div class="align"><span>Owners</span><input type="text" name="Owners" required="required" placeholder="Enter owner name" /></div></td>
                                        <td><div class="align"><span>Event Name</span><input type="text" name="Event_Name" required="required" placeholder="Enter event name" /></div></td>
                                        <td><div class="align"><span>Start Date</span><input type="date" name="Start_Date" required="required" placeholder="Enter start date" /></div></td>
                                    </tr>
                                    <tr>
                                        <td colspan="10" align="right"><button class="btn btn-outline-danger m-3" type="submit" onClick={handleTogglePopup}>Cancel</button><button class="btn btn-danger" type="submit">Save</button></td>

                                        {/* <td colspan="6" align="right"><div class="btn btn-outline-danger m-3" >Cancel</div><div class="btn btn-danger">Save</div></td> */}

                                    </tr>
                                </table>
                            </div>
                        )}
                    </div>
                    <DataGrid className="grid" rowStyle={{ background: "white" }} columns={columns} rows={rows} />
                </div>
            </div>
        </>
    );

}
export default InternalGrid;


