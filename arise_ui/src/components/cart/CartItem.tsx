import React, {FC} from "react";
import {ItemWrapper} from "../../styles/CartStyles";
import {Button} from "@material-ui/core";
import {CartItemProps} from "../../interfaces/CartItemProps";

export const CartItem: FC<CartItemProps> = ({item, addToCart, removeFromCart}) => (
    <ItemWrapper>
        <div>
            <h3 data-testid="name">{item.name}</h3>
            <div className='information'>
                <p data-testid="price">Price: ${item.price * item.amount} </p>
            </div>
            <div className='buttons'>
                <Button
                    data-testid="removeFromCart"
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => removeFromCart(item.id)}
                >-</Button>
                <p data-testid="amount">{item.amount}</p>
                <Button
                    data-testid="addToCart"
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => addToCart(item)}
                >+</Button>
            </div>
        </div>
        <img data-testid="img" src={item.image} alt={item.name}/>
    </ItemWrapper>
);
