import React, {useState} from 'react';
import '../../style/App.scss';
import UserContext from "../../context/UserContext";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import Header from "./Header";
import {goToProductsPage} from "../../functions/navigation";

function App() {

    const [context, setContext] = useState<string | null>(null)
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
                <div className="app">
                    <Header/>
                    {getRootPageContent()}
                    <Outlet/>
                </div>
        </UserContext.Provider>
    );
}

export default App;