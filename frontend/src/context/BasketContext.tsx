import React, {createContext} from "react";
import {product} from "../model/productType";

interface BasketContextType {
    basket: product[],
    setBasket: (data: product[]) => void
}

const initialBasket: BasketContextType = {
    basket: [
        {
            id: 0,
            name: "",
            price: 0
        }
    ],
    setBasket: (data) => {
    }
}

const BasketContext = createContext<BasketContextType>(initialBasket)

export default BasketContext