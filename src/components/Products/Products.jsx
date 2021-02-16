import React from 'react';
import {Grid} from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './styles';

function Products() {
    const classes = useStyles();
    const products = [
        {id:1,name:"shoes",description:"Running Shoes",price:"$5",image:"https://techcrunch.com/wp-content/uploads/2020/11/2020-11-16-074520097.jpg?w=533"},
        {id:2,name:"MacBook",description:"Apple M1 MacBook",price:"$12",image:"https://cdn.mos.cms.futurecdn.net/bY3YssKRe8E4Zn2NGkFtkL-970-80.jpg.webp"},
    ]
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
