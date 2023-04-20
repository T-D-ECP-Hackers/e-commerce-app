import React, {useContext} from 'react';
import {FiShoppingCart} from 'react-icons/fi'
import BasketContext from "../../context/BasketContext";
import {useNavigate} from "react-router-dom";
import {goToCheckout} from "../../functions/navigation";

function CheckoutOption() {

    const basket = useContext(BasketContext);
    const navigate = useNavigate();

    return (
        <div className="basket">
            <FiShoppingCart onClick={() => goToCheckout(navigate)}/>
            <label className={"number-of-checkout-items"}>{basket.basket.length}</label>
        </div>
    );
}

export default CheckoutOption;