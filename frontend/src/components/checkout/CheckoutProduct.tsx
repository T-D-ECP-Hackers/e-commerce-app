import React from 'react';

function CheckoutProduct(props: { id: number; name: string; price: number; }) {

    const {id, name, price} = props
    return (
        <div className="checkout-product">
            <div className="product-id">{id}</div>
            <div className="product-name">{name}</div>
            <div className="product-price">£{price}</div>
        </div>
    );
}

export default CheckoutProduct;