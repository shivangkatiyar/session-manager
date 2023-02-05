import React, { useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Delete, Edit, Preview } from "@mui/icons-material";


function InternalGridActions(props) {

    return (
        <Box>
            <Tooltip title='view grid details'>
                <IconButton >
                    <Preview />
                </IconButton>
            </Tooltip>
            <Tooltip title='Edit grid'>
                <IconButton >
                    <Edit />
                </IconButton>
            </Tooltip>
            <Tooltip title='Delete row'>
                <IconButton >
                    <Delete />
                </IconButton>
            </Tooltip>
        </Box>
    )
}
export default InternalGridActions