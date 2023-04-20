package org.global.ecp.hackathon.app.product;

import lombok.extern.slf4j.Slf4j;
import org.global.ecp.hackathon.app.product.model.Product;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Slf4j
@Component
@Profile("local")
class ProductsPopulator {

    private final ProductService productService;

    public ProductsPopulator(final ProductService productService) {

        this.productService = productService;
        prePopulateProductMap();
    }

    public void prePopulateProductMap() {

        Product product = productService.createProduct(Product.builder()
                                                              .name("product1")
                                                              .description("this is a product")
                                                              .price(10f)
                                                              .imageUrl("imageUrl").build());
        log.info("Adding product: {}", product);
    }
}
