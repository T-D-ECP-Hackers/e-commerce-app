import React, {useContext, useEffect, useState} from 'react';
import Products from "./Products";
import {fetchProducts} from "../../api/fetchProducts";
import {product} from "../../model/productType";
import UserContext from "../../context/UserContext";
import {useNavigate} from "react-router-dom";

function ProductBody() {

    const url = 'http://localhost:8080/api/v1/products';
    const [products, setProducts] = useState<product[]>([]);
    const user = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts(url, setProducts, navigate, user.setContext);
    }, []);

    return (
        <div className="products-body">
            <Products products={products}/>
        </div>
    );
}

export default ProductBody;