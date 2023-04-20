import {goToProductsPage} from "./navigation";
import {NavigateFunction} from "react-router-dom";

export function addProductToBasket(props: { id: number; name: string; price: number }, basket: any) {
    basket.setBasket([...basket.basket, {id: props.id, name: props.name, price: props.price}])
    console.log("Adding product " + props.name + " to basket");
}

export function getProductsFromBasket(basket: any) {
    return basket.basket;
}

export function clearBasket(basket: any, navigate: NavigateFunction) {
    basket.setBasket([])
    console.log("Clearing basket")
    goToProductsPage(navigate);
}