import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import AddSession from "./AddSession";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import InternalGridActions from "./InternalGridActions";


function InternalGrid({ sessions, setSessions},props) {

    const columns = [
        { field: "Contribution_Type", headerName: "Contribution Type",width:170, headerClassName: 'super-app-theme--header'},
        { field: "Date", headerName: "Date",width:100, headerClassName: 'super-app-theme--header' },
        { field: "Topic_Item_Activity", headerName: "Topic/Item/Activity",width:150, headerClassName: 'super-app-theme--header' },
        { field: "No_Of_Participants", headerName: "No. of participants",width:150, headerClassName: 'super-app-theme--header' },
        { field: "Duration", headerName: "Duration",width:100, headerClassName: 'super-app-theme--header' },
        { field: "Contributor_Email_Id", headerName: "Contributor Email Id", width:150, headerClassName: 'super-app-theme--header' },
        { field: "EmpID", headerName: "Employee Id", width:125, headerClassName: 'super-app-theme--header' },
        { field: "SessionID", headerName: "Session Id", width:125,headerClassName: 'super-app-theme--header' },
        { field: "Description", headerName: "Description",width:161, headerClassName: 'super-app-theme--header' },
        {field: "Actions", headerName:"Actions", width: 150, headerClassName: 'super-app-theme--header',
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
                        <div className="color-overlay d-flex justify-content-right align-items-center" >
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


