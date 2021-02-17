import React from 'react';
import {Typography, Card, CardContent, CardMedia, Button, CardActions } from '@material-ui/core';
import useStyles from './styles'

function CartItem({item,onUpdateCartQty,onRemoveFromCart}) {
    const classes =  useStyles();
    console.log(item);
    return (
        <Card>
            <CardMedia className={classes.media} image={item.media.source} alt={item.name}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={()=> onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button type="button" color="secondary" size="small" variant="contained" onClick={()=> onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
