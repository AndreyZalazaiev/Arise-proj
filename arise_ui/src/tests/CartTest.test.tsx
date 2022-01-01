import React from 'react';
import {findByTestId, getByTestId, queryByText, render} from "@testing-library/react";
import {Product} from "../model/Product";
import {cloneDeep} from "lodash";
import {productsData} from "./TestUtil";
import {CartProps} from "../interfaces/CartProps";
import Cart from "../components/cart/Cart";

let products: Product[];
let addToCart = jest.fn((clickedItem: Product)=>{});
let removeFromCart = jest.fn((id: number)=>{});
let buyHandler = jest.fn(()=>{});
let props:CartProps;

beforeEach(() => {
    products = cloneDeep(productsData);
    props= {
        cartItems:products,
        addToCart,
        removeFromCart,
        buyHandler
    }
});
describe("Cart test",()=>{
    it('Should render cart correctly', async function () {
        let {findByTestId, queryByText} = render(<Cart cartItems={[]} addToCart={addToCart}
                                          removeFromCart={removeFromCart} buyHandler={buyHandler}/>);

        let buyBtn =  await queryByText("buy-button");
        let totalValue =  await queryByText("total-value");
        let item1 =  await queryByText("testItem1");
        let item2 = await queryByText("testItem2");

        let noItems =  await findByTestId("no-items");

        expect(item1).toBeNull();
        expect(item2).toBeNull();
        expect(totalValue).toBeNull();
        expect(buyBtn).toBeNull();

        expect(noItems).toBeInTheDocument();
    });

    it('cart should display items', async function () {
        let {findByTestId, queryByText, findByText} = render(<Cart {...props}/>);

        let item1 = await findByText("testItem1");
        let item2 = await findByText("testItem2");
        let buyBtn = await findByTestId("buy-button");
        let totalValue = await findByTestId("total-value");
        let noItems =  await queryByText("No items in cart.");

        expect(item1).toBeInTheDocument();
        expect(item2).toBeInTheDocument();
        expect(buyBtn).toBeInTheDocument();
        expect(totalValue).toHaveTextContent("Total: $31.00");

        expect(noItems).toBe(null);
    });

})

