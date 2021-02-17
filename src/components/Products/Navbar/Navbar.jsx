import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../../assets/logo.svg';
import useStyles from './styles'
import { Link, useLocation } from 'react-router-dom';

function Navbar({totalItems}) {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
         <AppBar position="fixed" className={classes.appBar} color="inherit">
             <Toolbar>
                 <Typography component={Link} to="/"  variant="h6" className={classes.title} color="inherit">
                     <img src={logo} alt="crookzartwork.inc" height="50px" className={classes.image}/>
                    CrookzArtwork
                 </Typography>
                 <div className={classes.grow} />
                 {location.pathname==='/' && 
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" arial-label="Show Cart Item" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                 }
             </Toolbar>
        </AppBar>   
        </>
    )
}

export default Navbar
