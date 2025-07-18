import ProductList from "@/components/ProductList/ProductList";
import SidebarFilter from "@/components/SidebarFilter/SidebarFilter";
import { fetchProducts } from "@/redux/products/productsOps";
import {
  selectFilter,
  selectProducts,
} from "@/redux/products/productsSelectors";
import { setFilter } from "@/redux/products/productsSlice";
import { Box, Button, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const productList = useSelector(selectProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, filter]);

  const handleLoadMoreBtn = () => {
    dispatch(setFilter({ page: filter.page + 1 }));
  };
  // console.log(productList);

  return (
    // <>
    //   <div style={{ display: "flex" }}>
    //     <SidebarFilter />
    //     <ProductList products={productList} />
    //   </div>
    //   <button type="button" onClick={handleLoadMoreBtn}>
    //     Load more
    //   </button>
    // </>
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Sidebar */}
        <Grid size={4}>
          <SidebarFilter />
        </Grid>

        {/* Product List */}
        <Grid size={8}>
          <ProductList products={productList} />

          {/* Load more button */}
          <Box textAlign="center" mt={3}>
            <Button variant="contained" onClick={handleLoadMoreBtn}>
              Load more
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CatalogPage;
