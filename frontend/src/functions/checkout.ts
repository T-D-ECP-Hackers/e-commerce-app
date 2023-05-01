import {goToProductsPage} from "./navigation";
import {NavigateFunction} from "react-router-dom";
import axios from "axios";

const url = 'http://localhost:8080/api/v1/basket';

export function addProductToBasket(productId: any, userName: string | null) {

    axios.post(url + `/${userName}`, null, {
        params: {
            productId: productId
        }
    }).then(response => {
        console.log(response.data)
    }).catch(error => {
        console.log("Error fetching data: " + error)
    })

}

export function removeProductFromBasket(id: number, userName: string | null) {

    axios.delete(url + `/${userName}`, {
        params: {
            productId: id
        }
    }).then(response => {
        console.log(response.data)
    }).catch(error => {
        console.log("Error fetching data: " + error)
    })
}

export function clearBasket(navigate: NavigateFunction) {
    console.log("Clearing basket")
    goToProductsPage(navigate);
}