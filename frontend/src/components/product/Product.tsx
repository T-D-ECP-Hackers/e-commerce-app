import React, {useContext} from 'react';
import BasketContext from "../../context/BasketContext";
import {addProductToBasket} from "../../functions/checkout";

function Product(props: { id: number; name: string; price: number; }) {

    const basket = useContext(BasketContext);
    const {id, name, price} = props
    return (
        <div className="product">
            <div className="product-id">{id}</div>
            <div className="product-name">{name}</div>
            <div className="product-price">£{price}</div>
            <button className="buy-button" onClick={() => addProductToBasket(props, basket)}>Buy</button>
        </div>
    );
}

export default Product;