import React, { useState, useEffect } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listProducts } from './graphql/queries';

function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        try {
          const apiData = await API.graphql(graphqlOperation(listProducts));
          const products = apiData.data.listProducts.items;
          setProducts(products);
        }
        catch (err) {
            console.log('error fetching products', err);
        }
    }

    return (
        <div>
            <h2>Products</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>SKU</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map((product, index) => (
                        <tr key={product.id ? product.id : index}>
                            <td>{ product.sku }</td>
                            <td>{ product.name }</td>
                            <td>{ product.description }</td>
                            <td>$ { product.price.toFixed(2) }</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default ProductList;
