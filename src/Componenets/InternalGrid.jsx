import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import AddSession from "./AddSession";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import InternalGridActions from "./InternalGridActions";


function InternalGrid({ sessions, setSessions},props) {

    const columns = [
        { field: "Contribution_Type", headerName: "Contribution Type",flex:1, headerClassName: 'super-app-theme--header'},
        { field: "Date", headerName: "Date",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "Topic_Item_Activity", headerName: "Topic/Item/Activity",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "No_Of_Participants", headerName: "No. of participants",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "Duration", headerName: "Duration",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "Contributor_Email_Id", headerName: "Contributor Email Id", flex:1, headerClassName: 'super-app-theme--header' },
        { field: "EmpID", headerName: "Employee Id",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "SessionID", headerName: "Session Id", flex:1,headerClassName: 'super-app-theme--header' },
        { field: "Description", headerName: "Description",flex:1, headerClassName: 'super-app-theme--header' },
        { field: "Actions", headerName:"Actions", flex:1, headerClassName: 'super-app-theme--header',
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
                <div className="box-2 container-fluid shadow rounded bg-light">
                    <div>
                        <div className="color-overlay d-flex justify-content-right align-items-center">
                            <Popup trigger={<button className="btn btn-danger" style={{"margin-top":"10px", "margin-bottom":"10px"}} onClick={handleTogglePopup}> Add New Session</button>} position="right center" modal
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
                        <DataGrid  columns={columns} rows={sessions} />
                    </div>
                </div>
            </div>
        </>
    );

}
export default InternalGrid;


