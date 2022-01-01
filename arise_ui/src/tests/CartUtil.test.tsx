import React from 'react';
import {Product} from "../model/Product";
import {getTotalItems,removeItemFromCart,addItemToCart} from "../components/cart/CarttUtil"
import {cloneDeep} from "lodash"
import {productsData} from "./TestUtil"

let products: Product[];
beforeEach(() => {
    products = cloneDeep(productsData);
});
describe("CartUtil should process items correctly",()=>{
    it('should remove items from cart', () => {

        let res = removeItemFromCart(1,products);
        expect(res.length).toBe(2);
        expect(res[0].id).toBe(1);
        expect(res[0].amount).toBe(1);

        let res2 = removeItemFromCart(1,res);
        expect(res2.length).toBe(1);
        expect(res2[0].id).toBe(2);

        let res3 = removeItemFromCart(2,products);
        expect(res3.length).toBe(1);

        let res4 = removeItemFromCart(99999999,products);
        expect(res4).toEqual(products);

    });

    it('should count items in cart', () => {
        expect(getTotalItems(products)).toBe(3);

        products[0].amount = 1;
        expect(getTotalItems(products)).toBe(2);
    });

    it(`should add items in cart`,()=>{
        let products = cloneDeep(productsData);

        let res = addItemToCart(products,products[0]);
        expect(res[0].id).toBe(1);
        expect(res[0].amount).toBe(3);
        expect(res.length).toBe(2);

        let res1 = addItemToCart(res,products[0]);

        expect(res1[0].id).toBe(1);
        expect(res1[0].amount).toBe(4);
        expect(res1.length).toBe(2);
    });
});
