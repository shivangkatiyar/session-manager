import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import AddSession from "./AddSession";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import InternalGridActions from "./InternalGridActions";


function InternalGrid({ sessions, setSessions},props) {

    const columns = [
        { field: "Contribution_Type", headerName: "Contribution Type" },
        { field: "Date", headerName: "Date" },
        { field: "Topic_Item_Activity", headerName: "Topic/Item/Activity" },
        { field: "No_Of_Participants", headerName: "No. of participants" },
        { field: "Duration", headerName: "Duration" },
        { field: "Contributor_Email_Id", headerName: "Contributor Email Id" },
        { field: "EmpID", headerName: "Employee Id" },
        { field: "SessionID", headerName: "Session Id" },
        { field: "Description", headerName: "Description" },
        {field: "Actions", headerName:"Actions", width: 150,
        renderCell: (params) => <InternalGridActions {...{params}} onClick={console.log(props.key)}/>
      },
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
                        <div className="color-overlay d-flex justify-content-center align-items-center">
                            <Popup trigger={<button className="btn btn-danger" style={{ "padding": "1rem 2rem 1rem 2rem", "float":"right" }} onClick={handleTogglePopup}> Add New Session</button>} position="right center" modal
                                nested>{
                                    close =>
                                    (
                                        <AddSession sessions={sessions} setSessions={setSessions} handleTogglePopup = {handleTogglePopup}/>
                                    )
                                }
                            </Popup>
                        </div>
                    </div>
                    <div style={{ height: 300, width: "100%" }}>
                        <DataGrid columns={columns} rows={sessions} />
                    </div>
                </div>
            </div>
        </>
    );

}
export default InternalGrid;


