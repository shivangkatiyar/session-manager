import {useState} from "react";
// import {contacts} from "./Table";
function AddTableRows(){
    const [rowsData, setRowsData] = useState([]);

    const addRows = () =>{
        const rowsInput={
            Session_Name:"",
            Start_Date:"",
            End_Date:"",
            Owner:""

        }
        setRowsData([...rowsData, rowsInput])
    }
    const handleChange = (index, evnt)=>{
    
        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);
    }
}
export default AddTableRows;