import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Grid } from "@mui/material";

const ProductList = ({ products }) => {
  if (!products?.length) return <p>No products found</p>; //! add messageComponent
  return (
    <Grid container direction={"column"} spacing={4}>
      {products.map((product) => (
        <Grid key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
