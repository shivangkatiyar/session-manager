import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

const columns = [
  { key: 'Event_Name', name: 'Event Name' },
  { key: 'Owner', name: 'Owner' },
  { key: 'Start_Date', name: 'Start Date' },
  { key: 'End_Date', name: 'End Date' }
];

const rows = [
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },
  { Event_Name: "Bootcamp", Owner: "tanay", Start_Date: "3232", End_Date: "rwrw" },

];

function GridInternal() {
  return <DataGrid className = "grid" rowStyle = {{background: "white"}} columns={columns} rows={rows} />;
}
export default GridInternal;