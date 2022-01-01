import React, {FC} from "react";
import {CartWrapper} from '../../styles/CartStyles';
import {Product} from "../../model/Product";
import {CartItem} from "./CartItem";
import {MarginWrapperDiv} from "../../styles/CommonStyles"
import {Button} from "@material-ui/core";
import {CartProps} from "../../interfaces/CartProps";

const Cart: FC<CartProps> = ({cartItems, addToCart, removeFromCart, buyHandler}) => {
    const calculateTotal = (items: Product[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <CartWrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p data-testid="no-items">No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2  data-testid="total-value">Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            {cartItems.length > 0 &&
                <MarginWrapperDiv left={"80%"}>
                    <Button  data-testid="buy-button" onClick={buyHandler} color={"secondary"} size='large' disableElevation
                            variant='contained'>Buy</Button>
                </MarginWrapperDiv>
            }
        </CartWrapper>
    );
};

export default Cart;
