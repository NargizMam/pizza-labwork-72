import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavLink, useLocation} from "react-router-dom";
import {Button} from "@mui/material";

const Navbar = () => {
    const location = useLocation();
    let titleText = 'Turtle Pizza';
    if(location.pathname === '/admin'){
        titleText = titleText.concat(' Admin');
    }
    return (
        <Box sx={{ display: 'flex', mb: 12 }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component={NavLink}
                        to='/'
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }}}
                        style={{ color: '#fff' }}
                    >
                        {titleText}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Button component={NavLink} to='/dishes' style={{ color: '#fff' }}>
                            Dishes
                        </Button>
                        <Button  component={NavLink} to='/' style={{ color: '#fff' }}>
                            Orders
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
export default Navbar;