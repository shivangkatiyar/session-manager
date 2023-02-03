import React from "react";
import { Link } from "react-router-dom";
import {Box, IconButton, Tooltip} from "@mui/material";
import {Delete, Edit, Preview} from "@mui/icons-material";


function MainGridActions(props){
    return(
        <Box>
            <Link to ="/AddLogic">
            <Tooltip title ='view grid details'>
                <IconButton >
                    <Preview />
                </IconButton>
            </Tooltip>
            </Link>
            <Link to = "/AddLogic">
            <Tooltip title ='Edit grid'>
                <IconButton >
                    <Edit />
                </IconButton>
            </Tooltip>
            </Link>
            <Tooltip title ='Delete row'>
                <IconButton >
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    )
}
export default MainGridActions