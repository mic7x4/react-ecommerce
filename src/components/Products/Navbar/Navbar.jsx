import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Icon} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../../assets/logo.svg';
import useStyles from './styles'

function Navbar() {
    const classes = useStyles();
    return (
        <>
         <AppBar position="fixed" className={classes.appBar} color="inherit">
             <Toolbar>
                 <Typography variant="h6" className={classes.title} color="inherit">
                     <img src={logo} alt="crookzartwork.inc" height="50px" className={classes.image}/>
                    CrookzArtwork
                 </Typography>
                 <div className={classes.grow} />
                 <div className={classes.button}>
                     <IconButton arial-label="Show Cart Item" color="inherit">
                         <Badge badgeContent={2} color="secondary">
                            <ShoppingCart/>
                         </Badge>
                     </IconButton>
                 </div>
             </Toolbar>
        </AppBar>   
        </>
    )
}

export default Navbar
