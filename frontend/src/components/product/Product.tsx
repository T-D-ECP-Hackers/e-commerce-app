import React, {useContext} from 'react';
import {addProductToBasket, removeProductFromBasket} from "../../functions/checkout";
import UserContext from "../../context/UserContext";
import {getUser} from "../../functions/login";

function Product(props: { id: number; name: string; description: string; price: number; }) {

    const user = useContext(UserContext);
    let userName = getUser(user.setContext);

    const {id, name, description, price} = props
    return (
        <div className="product">
            <div className="product-id">{id}</div>
            <div className="product-name">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-price">£{price}</div>
            <button className="add-to-basket" onClick={() => addProductToBasket(id, userName)}>Add to basket</button>
            <button className="remove-from-basket" onClick={() => removeProductFromBasket(id, userName)}>Remove from basket</button>
        </div>
    );
}

export default Product;