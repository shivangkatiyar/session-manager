import 'react-data-grid/lib/styles.css';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import React from "react";
import Box from "@mui/material/Box";
import MainGridActions from './MainGridActions';


function MainGrid(props) {
  const columns = [
    { field: "Training_Type", headerName: "Training Type", headerClassName: 'super-app-theme--header', width: 472},
    { field: "Training_Area", headerName: "Training Area", headerClassName: 'super-app-theme--header',width:472 },
    {field: "Actions", headerName: "Actions", headerClassName:'super-app-theme--header', width: 470,
    renderCell: (params) => <MainGridActions {...{params}} onClick={console.log(props.key)}/>,
  },
  ];

  return (
    <>
      <div className="FirstPage">
        <div className=" box-2 container-fluid shadow rounded bg-light">
          <div className="stk">
            <h2>Events</h2>
            <nav>
              <Link to="/AddLogic">
                <div className="btn btn-danger">
                  + Add New Event
                </div>
              </Link>
            </nav>
          </div>
          <div>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid styles columns={columns} rows={props.contacts}/>
            </Box>
          </div>
        </div>
      </div>
    </>
  )
}
export default MainGrid;