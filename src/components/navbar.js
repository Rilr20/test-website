import Links from "./links";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Container, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import Headerimg from "./headerimg";

export default function Navbar(props) {
    // console.log("props");
    // console.log(props.img);
    const [open, setState] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };
    return (
        <AppBar position="static">

            <Headerimg src={`/img/${props.img}.avif`} alt="header" width="100%" height="350" display={true} ></Headerimg>

            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, mx: { xs: 1, md: 3 }, fontSize: { xs: "1.25rem", md: "1.6em" } }}>
                    Website
                </Typography>
                <Box sx={{ mr: { xs: 1, md: 3 }, display: { xs: 'none', sm: 'block' } }}>
                    <Links />
                </Box>
                {/* hamburger icon shows the drawer on click */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer(true)}
                    sx={{ mr: 0, display: { xs: 'inline-flex', sm: 'none', }, mx: { xs: 1, md: 3 } }}>
                    <MenuIcon />
                </IconButton>

                {/* The outside of the drawer */}
                <Drawer
                    anchor="right" //from which side the drawer slides in
                    variant="temporary" //if and how easily the drawer can be closed
                    open={open} //if open is true, drawer is shown
                    onClose={toggleDrawer(false)} //function that is called when the drawer should close
                    onOpen={toggleDrawer(true)} //function that is called when the drawer should open
                >

                    <Container sx={{ width: "80vw", height: "100vh", pt: "2vh", backgroundColor: theme => `${theme.palette.secondary.light}` }}>
                        <Box sx={{ mx: "0.5em", height: "100%" }}>
                            {/* The inside of the drawer */}
                            <Links />
                        </Box>
                    </Container>
                </Drawer>

            </Toolbar>
        </AppBar>
    )
}
