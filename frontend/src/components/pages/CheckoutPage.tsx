import React, {useContext} from "react";
import CheckoutBody from "../checkout/CheckoutBody";
import {clearBasket} from "../../functions/checkout";
import BasketContext from "../../context/BasketContext";
import {useNavigate} from "react-router-dom";

function calculateTotalCostOfProducts(basket: any) {
    let total = 0;
    for (let i = 0; i < basket.basket.length; i++) {
        total += basket.basket[i].price;
    }
    return total;
}

function CheckoutPage() {

    const basket = useContext(BasketContext);
    const navigate = useNavigate();
    let totalCost = calculateTotalCostOfProducts(basket);

    return (
        <div className="checkout-page">
            <div className="header-container">
                <h1 onClick={() => clearBasket(basket, navigate)}>Checkout {basket.basket.length} items - Total: £{totalCost}</h1>
            </div>
            <CheckoutBody/>
        </div>
    );
}

export default CheckoutPage;