import React from "react";
import {productsData} from "./TestUtil";
import {render} from "@testing-library/react";
import ProductComponent from "../components/product/ProductComponent";
import * as hooks from "../hooks/secureFetch";
import fetchMock, {enableFetchMocks} from 'jest-fetch-mock'

beforeAll(() => {
    enableFetchMocks();
});

test("should render product component correctly", async () => {
    let mockJsonPost = jest.fn();
    jest.spyOn(hooks, 'useSecureJSONPost').mockImplementation(mockJsonPost);
    fetchMock.mockOnce(JSON.stringify(productsData));

    let {findByText, findByTestId} = render(<ProductComponent/>);

    let item1 = await findByText("testItem1");
    let item2 = await findByText("testItem2");
    let cart = await findByTestId("cart");

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
});
