import React, {useContext, useEffect, useState} from 'react';
import {FiShoppingCart} from 'react-icons/fi'
import {useNavigate} from "react-router-dom";
import {goToCheckout} from "../../functions/navigation";
import {basket} from "../../model/productType";
import {fetchBasketProducts} from "../../api/fetchProducts";
import UserContext from "../../context/UserContext";
import {getUser} from "../../functions/login";

function CheckoutOption() {

    const user = useContext(UserContext);
    let userName = getUser(user.setContext);
    const navigate = useNavigate();

    const url = 'http://localhost:8080/api/v1/basket';

    const [basket, setBasket] = useState<basket>({id: 0, username: "", totalProducts: 0, basketProducts: []});

    useEffect(() => {
        fetchBasketProducts(url + `/${userName}`, setBasket, navigate, user.setContext);
    }, []);

    return (
        <div className="basket">
            <FiShoppingCart onClick={() => goToCheckout(navigate)}/>
            <label className={"number-of-checkout-items"}>{basket.totalProducts}</label>
        </div>
    );
}

export default CheckoutOption;