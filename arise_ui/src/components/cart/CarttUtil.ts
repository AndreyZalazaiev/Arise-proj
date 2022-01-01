import {Product} from "../../model/Product";

export const getTotalItems = (items: Product[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

export const removeItemFromCart = (id: number, products: Product[]): Product[] => {
    return products.reduce((ack, item) => {
        if (item.id === id) {
            if (item.amount === 1)
                return ack;
            return [...ack, {...item, amount: item.amount - 1}];
        } else {
            return [...ack, item];
        }
    }, [] as Product[]);
};

export const addItemToCart = (prev: Product[], selectedItem: Product): Product[] => {
    const isItemInCart = prev.find(item => item.id === selectedItem.id);
    if (isItemInCart) {
        return prev.map(item =>
            item.id === selectedItem.id
                ? {...item, amount: item.amount + 1}
                : item
        );
    }
    return [...prev, {...selectedItem, amount: 1}];
}
