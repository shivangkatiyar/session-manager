import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';
import { Link, useLocation } from "react-router-dom";
import data from "./mock-data.json"
import { useState } from 'react';




const columns = [
  { key: 'Event_Name', name: 'Event Name' },
  { key: 'Owner', name: 'Owner' },
  { key: 'Start_Date', name: 'Start Date' },
  { key: 'End_Date', name: 'End Date' }
];

// const rows = [
//   { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
//   { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
//   { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
//   { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
//   { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
//   { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
//   { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
//   { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
//   { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },

// ];

const rows = data



function MainGrid(props) {
  const [contacts, setContacts] = useState([data]);
  const location = useLocation();
  
  return(
    <>
    <div className = "FirstPage">
     <div className=" box-2 container-fluid shadow rounded bg-light">
    <div className="stk">
                <h2>Events</h2>
                <nav>
                    <Link to="/EditSession">
                        <div className="btn btn-danger">
                            + Add New Event
                        </div>
                    </Link>
                </nav>
            </div>

     <DataGrid className = "grid" rowStyle = {{background: "white"}} columns={columns} rows={rows} />
     </div>
     </div>
     </>
  )
}
export default MainGrid;