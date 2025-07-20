import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Grid, ListItem, Stack } from "@mui/material";

const ProductList = ({ products }) => {
  return (
    <Stack component={"ul"} direction={"column"} spacing={3} mb={5}>
      {products.map((product) => (
        <ListItem key={product.id} sx={{ p: 0 }}>
          <ProductCard product={product} />
        </ListItem>
      ))}
    </Stack>
  );
};

export default ProductList;
