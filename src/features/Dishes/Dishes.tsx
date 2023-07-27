import React from 'react';
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import {Container} from 'react-bootstrap';


const Dishes = () => {
    return (
        <Container style={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'inline' } }}
            >
                Dishes
            </Typography>
            <Button variant='contained' component={NavLink} to='/new-dish'>Add new dish</Button>
        </Container>
    );
};

export default Dishes;