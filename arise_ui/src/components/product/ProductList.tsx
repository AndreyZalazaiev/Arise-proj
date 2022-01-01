import React, {FC} from 'react';
import {Product} from "../../model/Product";
import ProductItem from "./ProductItem";
import Grid from '@material-ui/core/Grid';

interface ProductListProps{
    products:Product[],
    handleCartAdd:(item:Product)=>void;
}
export const ProductList: FC<ProductListProps> = ({handleCartAdd,products}) => {
    return (
        <Grid container spacing={3}>
            {
                products.map(value =>
                    <Grid item key={value.id} xs={12} sm={4}>
                        <ProductItem product={value} handleCartAdd={handleCartAdd}/>
                    </Grid>
                )
            }
        </Grid>
    );
}
