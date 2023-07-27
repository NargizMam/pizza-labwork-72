import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

const Dishes = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Dishes
                </Typography>
                <Button component={NavLink} to='/new-dish'>Add new dish</Button>
            </Box>
            </>
    );
};

export default Dishes;