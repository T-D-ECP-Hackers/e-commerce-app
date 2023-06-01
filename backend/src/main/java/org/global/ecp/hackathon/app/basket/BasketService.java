package org.global.ecp.hackathon.app.basket;

import lombok.extern.slf4j.Slf4j;
import org.global.ecp.hackathon.app.basket.model.Basket;
import org.global.ecp.hackathon.app.basket.model.BasketProduct;
import org.global.ecp.hackathon.app.basket.services.BasketProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class BasketService {

    @Autowired
    private BasketRepository basketRepository;

    @Autowired
    private BasketProductService basketProductService;

    public Basket getBasket() {

        return basketRepository.get();
    }

    // TODO - Task 3: add basketProduct to basket using the basketRepository
    // Hint: basketRepository.someMethod(variableToPassIntoMethod);
public Basket addToBasket(final Long productId) {
    Basket basket = getBasket();
    BasketProduct basketProduct = basketProductService.createBasketProduct(basket, productId);
    basketProduct.increaseQuantity();

    // Add the basketProduct to the basket
    basket.getProducts().add(basketProduct);

    // Save the updated basket using the basketRepository
    basketRepository.save(basket);

    return basket;
}

    // TODO - Task 5: remove basketProduct from the basket using the basketRepository
public Basket removeFromBasket(final Long productId) {
    Basket basket = getBasket();

    // Retrieve the BasketProduct from the Basket using the productId
    BasketProduct basketProduct = basketProductService.createBasketProduct(basket, productId);

    // Decrease the quantity of the BasketProduct
    basketProduct.decreaseQuantity();

    // Remove the BasketProduct from the Basket's product list
    basket.getProducts().remove(basketProduct);

    // Save the updated basket using the basketRepository
    basketRepository.save(basket);

    return basket;
}

    // TODO - Task 8: implement checkout method
public Basket checkout() {
    Basket basket = getBasket();

    // Create an order or transaction object
    Order order = createOrderFromBasket(basket); // You need to define the createOrderFromBasket() method

    // Save the order or transaction to the database
    orderRepository.save(order); // Assuming you have an appropriate orderRepository

    // Clear the basket (remove all BasketProduct instances or reset to an empty state)
    basket.clearProducts();

    // Return the updated Basket or any other relevant information
    return basket;
}
