package org.global.ecp.hackathon.app.product;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.global.ecp.hackathon.app.product.model.Product;
import org.springframework.stereotype.Repository;

@Repository
public class ProductRepository {

    // TODO: set up persisted cache and DB
    private final Map<UUID, Product> productsCache = new HashMap<>();

    public void addToCache(final Product newProduct) {

        productsCache.put(newProduct.getId(), newProduct);
        System.out.println("");
    }

    public List<Product> getAllFromCache() {

        return productsCache.values().stream().toList();
    }

    public Product getById(final UUID id) {

        return productsCache.get(id);
    }

    public Product replaceById(final Product newProduct) {

        UUID newProductId = newProduct.getId();
        productsCache.replace(newProductId, newProduct);
        return productsCache.get(newProductId);
    }

    public void deleteById(final UUID productUUID) {

        productsCache.remove(productUUID);
    }
}
