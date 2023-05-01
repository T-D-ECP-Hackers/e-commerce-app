import axios from "axios";
import {basket, product} from "../model/productType";
import {goToLogin} from "../functions/navigation";
import {NavigateFunction} from "react-router-dom";
import {logout} from "../functions/login";
import React from "react";

export function fetchProducts(url: string,
                              setProducts: (value: (((prevState: product[]) => product[]) | product[])) => void,
                              navigate: NavigateFunction, setContext: React.Dispatch<React.SetStateAction<string | null>>) {
    axios(url).then(response => {
        setProducts(response.data)
    }).catch(error => {
        if (error.response.status === 401) {
            logout(setContext, navigate)
            goToLogin(navigate);
        }
        console.error(error.response.data.message)
    })
}

export function fetchBasketProducts(url: string,
                                    setBasketProducts: (value: (((prevState: basket) => basket) | basket)) => void,
                                    navigate: NavigateFunction,
                                    setContext: React.Dispatch<React.SetStateAction<string | null>>) {
    axios(url).then(response => {
        setBasketProducts(response.data)
    }).catch(error => {
        if (error.response.status === 401) {
            logout(setContext, navigate)
            goToLogin(navigate);
        }
        console.error(error.response.data.message)
    })
}