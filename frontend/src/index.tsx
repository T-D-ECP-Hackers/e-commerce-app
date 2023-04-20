import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './components/app/App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import LoginPage from "./components/pages/LoginPage";
import ProductsPage from "./components/pages/ProductsPage";
import CheckoutPage from "./components/pages/CheckoutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "products",
                element: <ProductsPage />,
            },
            {
                path: "checkout",
                element: <CheckoutPage />,
            },
        ],
    },

]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
