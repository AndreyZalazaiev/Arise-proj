import {Product} from "../model/Product";
import {useEffect, useState} from "react";

export const productsData: Product[] = [
    {
        id: 1,
        name: "testItem1",
        amount: 2,
        description: "desc'",
        image: "",
        price: 10,
        category: "food",
        weight: 11.1
    },
    {
        id: 2,
        name: "testItem2",
        amount: 1,
        description: "desc2'",
        image: "",
        price: 11,
        category: "food2",
        weight: 2
    }
];
export const keycloakStub={
    initialized: true,
    keycloak: {

    },
}
