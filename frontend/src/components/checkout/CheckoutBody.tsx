import React, {useContext} from "react";
import BasketContext from "../../context/BasketContext";
import CheckoutProduct from "./CheckoutProduct";

function CheckoutBody() {

    const basket = useContext(BasketContext);

    return (
        <div className="checkout">
            <div className="checkout-title">
                <div>ID</div>
                <div>Name</div>
                <div>Price</div>
            </div>
            <div className="checkout-container">
                {basket.basket?.map((product, index) => {
                    return (<CheckoutProduct key={index} id={product.id} name={product.name} price={product.price}/>)
                })}
            </div>
        </div>
    );
}

export default CheckoutBody;