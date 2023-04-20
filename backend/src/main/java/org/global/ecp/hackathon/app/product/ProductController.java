package org.global.ecp.hackathon.app.product;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.global.ecp.hackathon.app.product.model.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(final ProductService productService) {this.productService = productService;}

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody final Product product) {

        return ResponseEntity.status(HttpStatus.CREATED).body(Optional.of(productService.createProduct(product)).get());
    }

    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {

        return ResponseEntity.ok(productService.getAllProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable final String id) {

        UUID productUUID = UUID.fromString(id);
        return ResponseEntity.ok(productService.getProductById(productUUID));
    }

    @PutMapping()
    public ResponseEntity<Product> replaceProductId(@RequestBody final Product newProduct) {

        return ResponseEntity.ok(productService.replaceProductById(newProduct));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProductId(@PathVariable final String id) {

        UUID productUUID = UUID.fromString(id);
        productService.deleteProductById(productUUID);
        return ResponseEntity.noContent().build();
    }
}
