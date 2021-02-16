import React from 'react';
import {Typography, Card, CardContent, CardMedia, Button, CardActions } from '@material-ui/core';
import useStyles from './styles'

function CartItem({item}) {
    const classes =  useStyles();
    console.log(item);
    return (
        <Card>
            <CardMedia className={classes.media} image={item.media.source} alt={item.name}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h6">{item.price.formatted_with_symbol}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
                <Button type="button" color="secondary" size="small" variant="contained">Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
