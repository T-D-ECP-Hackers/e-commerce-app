package org.global.ecp.hackathon.app.product;

import java.util.List;
import java.util.UUID;

import org.global.ecp.hackathon.app.product.model.Product;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(final ProductRepository productRepository) {this.productRepository = productRepository;}

    public Product createProduct(final Product product) {

        // TODO: add to database
        UUID productId = generateProductId();
        Product newProduct = buildProduct(productId, product);
        productRepository.addToCache(newProduct);
        return newProduct;
    }

    public List<Product> getAllProducts() {

        return productRepository.getAllFromCache();
    }

    public Product getProductById(final UUID id) {

        return productRepository.getById(id);
    }

    public Product replaceProductById(final Product newProduct) {

        return productRepository.replaceById(newProduct);
    }

    public void deleteProductById(final UUID productUUID) {

        productRepository.deleteById(productUUID);
    }

    private Product buildProduct(final UUID productId, final Product product) {

        return Product.builder()
                      .id(productId)
                      .name(product.getName())
                      .description(product.getDescription())
                      .price(product.getPrice())
                      .imageUrl(product.getImageUrl()).build();
    }

    private UUID generateProductId() {

        return UUID.randomUUID();
    }
}
