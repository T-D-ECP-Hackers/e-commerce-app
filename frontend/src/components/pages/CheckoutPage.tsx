import React, {useContext, useEffect, useState} from "react";
import CheckoutBody from "../checkout/CheckoutBody";
import {clearBasket} from "../../functions/checkout";
import {useNavigate} from "react-router-dom";
import {getUser} from "../../functions/login";
import LoginPage from "./LoginPage";
import UserContext from "../../context/UserContext";
import {basket} from "../../model/productType";
import {fetchBasketProducts} from "../../api/fetchProducts";

function CheckoutPage() {

    const user = useContext(UserContext);
    let userName = getUser(user.setContext);
    const navigate = useNavigate();
    const url = 'http://localhost:8080/api/v1/basket';

    const [basket, setBasket] = useState<basket>({id: 0, username: "", totalProducts: 0, basketProducts: []});

    useEffect(() => {
        fetchBasketProducts(url + `/${userName}`, setBasket, navigate, user.setContext);
    }, []);

    return (
        getUser(user.setContext) !== null ? (
            <div className="checkout-page">
                <div className="header-container">
                    <h1 onClick={() => clearBasket(navigate)}>Checkout {basket.totalProducts}</h1>
                </div>
                <CheckoutBody basket={basket}/>
            </div>
        ) : LoginPage()
    );
}

export default CheckoutPage;