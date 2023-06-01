package org.global.ecp.hackathon.app.product;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.global.ecp.hackathon.app.product.model.Product;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {

    private final Map<Long, Product> products;

    public ProductRepository() {
        products = new HashMap<>();

        // TODO - Task 14: remove this method
        populateProductsMap();
    }

    // TODO - Task 14: remove this method
    private void populateProductsMap() {

        Product product1 = new Product(1, "T-Rex's Raw Carnivore Crunch", "Unleash the beast within with T-Rex's Raw Carnivore Crunch! Made with naturally sourced, free-range meats and bones, this paw-some dog food will have your furry friend howling for joy. Give them a taste of the wild and watch them go from ruff to fierce!", 10.99);
        Product product2 = new Product(2, "Bronto Herbivore Farm-Fresh Feast", "Treat your dog to a veggie-filled adventure with Bronto Herbivore Farm-Fresh Feast! Packed with organic goodness straight from the fields, this delightful dog food will have your pup wagging their tail in pure plant-powered bliss. Let them graze through the greenery and unleash their inner veggie lover!", 7.99);
        Product product3 = new Product(3, "Stego's Paleo Stew", "Serve up happiness in a bowl with Stego's Paleo Stew. Made from 100% organic, locally sourced vegetables and herbs, this dog food guarantees a joyful mealtime experience for your pup, supporting their overall well-being and keeping their tail wagging.", 8.99);
        Product product4 = new Product(4, "Pterodactyl Free-Range Protein Powerhouse", "Fuel your dog's adventures with Pterodactyl Free-Range Protein Powerhouse. Crafted from ethically sourced, free-range meats and poultry, this dog food provides high-quality proteins for strong muscles and a healthy coat, ensuring your furry companion leads a content and active life.", 13.99);
        Product product5 = new Product(5, "Veloci-Vitality Free-Range Feast", "Unlock your dog's natural vitality with our specially crafted Veloci-Vitality Free-Range Feast. Made from carefully selected organic ingredients, including free-range meats, antioxidant-rich fruits, and whole grains, this dog food promotes optimal health and happiness, helping your four-legged friend thrive in every wag-filled moment.", 9.99);


        products.put(product1.getId(), product1);
        products.put(product2.getId(), product2);
        products.put(product3.getId(), product3);
        products.put(product4.getId(), product4);
        products.put(product5.getId(), product5);

    }

    public List<Product> getAll() {

        return products.values().stream().toList();
    }

    public Product getById(final Long id) {

        return products.get(id);
    }

    public Product add(final Product product) {

        return products.put(product.getId(), product);
    }

    public void deleteById(final Long id) {

        products.remove(id);
    }
}
