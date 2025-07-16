import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }) => {
  if (!products?.length) return <p>No products found</p>;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
