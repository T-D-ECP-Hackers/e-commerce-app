import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import UserContext from "../../context/UserContext";
import {getUser, logout} from "../../functions/login";
import CheckoutOption from "../checkout/CheckoutOption";

function NavigationBar() {

    const user = useContext(UserContext);
    const navigate = useNavigate();

    function getLoginOptions() {
        return getUser(user.setContext) !== null ?
            <>
                <button className="logout" onClick={() => logout(user.setContext, navigate)}>Logout</button>
                <label className="user-name">{user.context}</label>
            </> :
            <Link to={`login`}>Login</Link>;
    }

    return (
        <div className="navigation-bar">
            <Link to={`products`}>Products</Link>
            {getLoginOptions()}
            <CheckoutOption/>
        </div>
    );
}

export default NavigationBar;