import React, {useState} from 'react';
import '../../style/App.scss';
import UserContext from "../../context/UserContext";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import Header from "./Header";
import {goToProductsPage} from "../../functions/navigation";
import BasketContext from "../../context/BasketContext";
import {product} from "../../model/productType";

function App() {

    const [context, setContext] = useState<string | null>(null)
    const [basket, setBasket] = useState<product[]>([])
    const navigate = useNavigate();
    const location = useLocation();

    function getRootPageContent() {
        return location.pathname === "/" && <div className="app-body">
            <div onClick={() => goToProductsPage(navigate)} className="products-block">
                <label>View all our products!</label>
            </div>
        </div>;
    }

    return (
        <UserContext.Provider value={{context, setContext}}>
            <BasketContext.Provider value={{basket, setBasket}}>
                <div className="app">
                    <Header/>
                    {getRootPageContent()}
                    <Outlet/>
                </div>
            </BasketContext.Provider>
        </UserContext.Provider>
    );
}

export default App;