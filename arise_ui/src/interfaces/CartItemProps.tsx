import {Product} from "../model/Product";

export interface CartItemProps {
    item: Product;
    addToCart: (clickedItem: Product) => void;
    removeFromCart: (id: number) => void;
}
