import React, {FC} from 'react';
import {Product} from "../../model/Product";
import {Card} from "react-bootstrap";
import {BuyButtonWrapper, CardWrapper} from "../../styles/ProductStyles";

interface ProductItemProps {
    product: Product,
    handleCartAdd: (item: Product) => void;
}

const ProductItem: FC<ProductItemProps> = ({product, handleCartAdd}) => {
    return (
        <CardWrapper>
            <Card.Img variant="top"/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {product.description || "No description available"}
                </Card.Text>
                <BuyButtonWrapper variant="primary" onClick={() => handleCartAdd(product)}>Add to cart</BuyButtonWrapper>
            </Card.Body>
        </CardWrapper>
    );
};

export default ProductItem;
