import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Grid, List, ListItem } from "@mui/material";

const ProductList = ({ products }) => {
  return (
    <List direction={"column"} spacing={4}>
      {products.map((product) => (
        <ListItem key={product.id} sx={{ p: 0 }}>
          <ProductCard product={product} />
        </ListItem>
      ))}
    </List>
  );
};

export default ProductList;
