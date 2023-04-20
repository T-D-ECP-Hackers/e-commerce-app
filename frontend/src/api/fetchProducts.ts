import axios from "axios";
import {product} from "../model/productType";

export function fetchProducts(setProducts: (value: (((prevState: product[]) => product[]) | product[])) => void) {
    axios('data.json').then(response => {
        setProducts(response.data)
    }).catch(error => {
        console.log("Error fetching data: " + error)
    })
}