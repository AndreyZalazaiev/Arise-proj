import React from "react";
import {CartItemProps} from "../interfaces/CartItemProps";
import {cloneDeep} from "lodash";
import {productsData} from "./TestUtil";
import {Product} from "../model/Product";
import {fireEvent, render} from "@testing-library/react";
import {CartItem} from "../components/cart/CartItem";

let product: Product;
let props: CartItemProps;
let addToCartMock = jest.fn((clickedItem: Product) => {});
let removeFromCartMock = jest.fn((id: number) => {});

beforeEach(() => {
    product = cloneDeep(productsData[0]);
    props = {
        item: product,
        addToCart: addToCartMock,
        removeFromCart: removeFromCartMock
    };
});
it("Should render cart item", async () => {
    let {findByTestId} = render(<CartItem {...props}/>);
    let price = await findByTestId("price");
    let amount = await findByTestId("amount");
    let addToCart = await findByTestId("addToCart");
    let removeFromCart = await findByTestId("removeFromCart");
    let name = await findByTestId("name");
    let img = await findByTestId("img");

    expect(price).toHaveTextContent("Price: $20");
    expect(amount).toHaveTextContent("2");
    expect(name).toHaveTextContent("testItem1");
    expect(img).toBeEmptyDOMElement();

    fireEvent.click(addToCart);
    expect(addToCartMock).toHaveBeenCalledTimes(1);

    fireEvent.click(removeFromCart);
    expect(addToCartMock).toHaveBeenCalledTimes(1);

});
