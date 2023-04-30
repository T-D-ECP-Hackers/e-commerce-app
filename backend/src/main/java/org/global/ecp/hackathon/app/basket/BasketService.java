package org.global.ecp.hackathon.app.basket;

import java.util.ArrayList;

import lombok.extern.slf4j.Slf4j;
import org.global.ecp.hackathon.app.exception.BasketNotFoundException;
import org.global.ecp.hackathon.app.product.ProductService;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class BasketService {


    private final BasketRepository basketRepository;
    private final ProductService productService;

    public BasketService(final BasketRepository basketRepository,
                         final ProductService productService) {

        this.basketRepository = basketRepository;
        this.productService = productService;
    }

    public Basket getBasketByUsername(final String username) {

        final var optionalBasket = basketRepository.getBasketByUsername(username);

        if (optionalBasket.isEmpty()) {
            throw new BasketNotFoundException("Basket for username '" + username + "' not found");
        }
        return optionalBasket.get();
    }

    public Basket addToBasket(final String username, final Long productId) {

        final var optionalBasket = basketRepository.getBasketByUsername(username);
        if (optionalBasket.isEmpty()) {
            final var newBasket = createNewBasket(username);
            return addProductToBasket(productId, newBasket);
        }
        final var basket = optionalBasket.get();
        return addProductToBasket(productId, basket);
    }

    public Basket removeFromBasket(final String username, final Long productId) {

        final var basket = getBasketByUsername(username);
        final var productById = productService.getProductById(productId);
        final var optionalBasketProduct = basket.getBasketProducts()
                                                .stream()
                                                .filter(basketProduct -> basketProduct.getProduct()
                                                                                      .equals(productById))
                                                .findFirst();

        if (optionalBasketProduct.isPresent()) {
            final var basketProduct = optionalBasketProduct.get();
            if (basketProduct.getCount() == 1) {
                basket.getBasketProducts().remove(basketProduct);
            } else {
                basketProduct.setCount(basketProduct.getCount() - 1);
            }
        }
        return basketRepository.save(basket);
    }

    public Basket checkout(final String username) {

        final var basket = getBasketByUsername(username);
        basket.getBasketProducts().clear();
        return basketRepository.save(basket);
    }

    private Basket createNewBasket(final String username) {

        return Basket.builder().username(username).basketProducts(new ArrayList<>()).build();
    }

    private Basket addProductToBasket(final Long productId, final Basket basket) {

        final var productById = productService.getProductById(productId);
        final var optionalBasketProduct = basket.getBasketProducts()
                                                .stream()
                                                .filter(basketProduct -> basketProduct.getProduct()
                                                                                      .equals(productById))
                                                .findFirst();

        if (optionalBasketProduct.isPresent()) {
            final var basketProduct = optionalBasketProduct.get();
            basketProduct.setCount(basketProduct.getCount() + 1);

        } else {
            final var basketProduct = BasketProduct.builder().basket(basket).product(productById).count(1).build();
            basket.getBasketProducts().add(basketProduct);
        }

        return basketRepository.save(basket);
    }
}