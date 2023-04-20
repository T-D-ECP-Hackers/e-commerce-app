import React, {useEffect, useState} from 'react';
import Products from "./Products";
import {fetchProducts} from "../../api/fetchProducts";
import {product} from "../../model/productType";

function ProductBody() {

    const [products, setProducts] = useState<product[]>([]);

    useEffect(() => {
        fetchProducts(setProducts);
    }, []);

    return (
        <div className="products-body">
            <Products products={products}/>
        </div>
    );
}

export default ProductBody;