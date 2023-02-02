import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import AddSession from "./AddSession";

function InternalGrid({sessions, setSessions}) {

    const columns = [ 
        {field: "Contribution_Type", headerName: "Contribution Type" },
        { field: "Date", headerName:"Date" },
        { field: "Topic_Item_Activity", headerName:"Topic/Item/Activity"},
        { field: "No_Of_Participants", headerName:"No. of participants" },
        { field: "Duration", headerName:"Duration" },
        { field: "Contributor_Email_Id", headerName:"Contributor Email Id" },
        { field: "EmpID", headerName:"Employee Id" },
        { field: "SessionID", headerName:"Session Id" },
        { field: "Description", headerName:"Description" },
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
                        {showPopup && <AddSession sessions={sessions} setSessions={setSessions} handleTogglePopup={handleTogglePopup}/>}
                    </div>
                    <div style = {{height:300, width: "100%" }}>
                        <DataGrid columns={columns} rows={sessions} />
                    </div>
                </div>
            </div>
        </>
    );

}
export default InternalGrid;


