import React, {FC, useEffect, useState} from 'react';
import {ProductList} from "./ProductList";
import {Product} from "../../model/Product";
import {Order} from "../../model/Order";
import Button from '@material-ui/core/Button';
import {Badge, Drawer} from "@material-ui/core";
import Cart from '../cart/Cart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {useFetch, useSecureJSONPost} from "../../hooks/secureFetch";
import {JustifyEndDiv, MarginWrapperDiv} from "../../styles/CommonStyles";
import ToastComponent from "../ToastComponent";
import {addItemToCart, getTotalItems, removeItemFromCart} from "../cart/CarttUtil";

const ProductComponent: FC = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [showToast, setShowToast] = useState(false);
    const [toastText, setToastText] = useState("");
    const getProducts = useFetch<Product[]>();
    const postProducts = useSecureJSONPost<Order[]>();

    useEffect(() => {
        getProducts(`/product?page=0&size=10`)
            .then(r => setProducts(r))
            .catch(() => {
                throw new Error("Unable to fetch products")
            })
    }, []);

    const handleCartAdd = (selectedItem: Product) => {
        setCartItems(products => addItemToCart(products, selectedItem));
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItems(products => removeItemFromCart(id, products));
    };

    const handleBuyItems = () => {
        postProducts("/items", cartItems.map(i => {
            i.id, "address"
        }))
            .then(() => {
                    setCartItems([]);
                    setToastText("Woohoo, you just bought item")
                    setShowToast(true);
                    setCartOpen(false);
                }
            ).catch(() => {
            setToastText("Something went wrong!")
        })
    }

    return (
        <>
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart
                    cartItems={cartItems}
                    addToCart={handleCartAdd}
                    removeFromCart={handleRemoveFromCart}
                    buyHandler={handleBuyItems}
                />
            </Drawer>
            <JustifyEndDiv>
                <Button onClick={() => setCartOpen(true)}>
                    <Badge badgeContent={getTotalItems(cartItems)} data-testid="cartCounter" color='error'>
                        <AddShoppingCartIcon data-testid="cart"/>
                    </Badge>
                </Button>
            </JustifyEndDiv>
            <MarginWrapperDiv all={"10px"}>
                <ProductList products={products} handleCartAdd={handleCartAdd}/>
            </MarginWrapperDiv>
            <MarginWrapperDiv left={"auto"}>
                <ToastComponent onToastClose={() => setShowToast(false)} isDisplayed={showToast} toastText={toastText}/>
            </MarginWrapperDiv>
        </>
    );
};

export default ProductComponent;
