import React, {useContext} from 'react';
import ProductBody from '../product/ProductBody';
import UserContext from "../../context/UserContext";
import {getUser} from "../../functions/login";
import LoginPage from "./LoginPage";

function ProductsPage() {

    const user = useContext(UserContext);

    return (
        getUser(user.setContext) !== null ? (
            <div className="products-page">
                <ProductBody/>
            </div>
        ) : LoginPage()
    );
}

export default ProductsPage;