import React, { useState } from "react";
import DataGrid from 'react-data-grid';
import AddSession from "./AddSession";

function InternalGrid({sessions, setSessions}) {
    const columns = [
        { key: 'Session_Name', name: 'Session Name' },
        { key: 'Owner', name: 'Owner' },
        { key: 'Start_Date', name: 'Start Date' },
        { key: 'End_Date', name: 'End Date' }
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

                        {showPopup && <AddSession sessions={sessions} setSessions={setSessions} />}
                    </div>
                    <DataGrid className="grid" rowStyle={{ background: "white" }} columns={columns} rows={sessions} />
                </div>
            </div>
        </>
    );

}
export default InternalGrid;


