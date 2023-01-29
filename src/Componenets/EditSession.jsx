import React from "react";
function EditSession() {
    return (
        <div className="EditClass">
        <div class="container-fluid shadow rounded bg-light box-1">
        <form action="">
            <table cellpadding="24px" >
                <tr>
                    <td><div class="align"><span>Session Name</span><input type="text"/></div></td>
                    <td><div class="align"><span>Start Date</span><input type="date"/></div></td>
                    <td><div class="align"><span>End date</span><input type="date"/></div></td>
                    <td><div class="align"><span>Owners</span><input type="text"/></div></td>
                    <td><div class="align"><span>Session Name</span><input type="text"/></div></td>
                    <td><div class="align"><span>Start Date</span><input type="date"/></div></td>
                </tr>
                {/* <tr>
                    <td><div class="align"><span>Session Name</span><input type="text"/></div></td>
                    <td><div class="align"><span>Start Date</span><input type="date"/></div></td>
                    <td><div class="align"><span>End date</span><input type="date"/></div></td>
                    <td><div class="align"><span>Owners</span><input type="text"/></div></td>
                    <td><div class="align"><span>Session Name</span><input type="text"/></div></td>
                    <td><div class="align"><span>Start Date</span><input type="date"/></div></td>
                </tr> */}
                <tr>
                    <td colspan="6" align="right"><div class="btn btn-outline-danger m-3" >Cancel</div><div class="btn btn-danger">Save</div></td>
    
                </tr>
            </table>
        </form>
    </div>
    </div>

    );
}
export default EditSession;