import {Product} from "../model/Product";

export interface CartProps {
    cartItems: Product[];
    addToCart: (clickedItem: Product) => void;
    removeFromCart: (id: number) => void;
    buyHandler: () => void;
}
