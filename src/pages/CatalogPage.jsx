import ProductList from "@/components/ProductList/ProductList";
import SidebarFilter from "@/components/SidebarFilter/SidebarFilter";
import { fetchProducts } from "@/redux/products/productsOps";
import {
  selectError,
  selectFilter,
  // selectIsLoading,
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
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, filter]);

  const handleLoadMoreBtn = () => {
    dispatch(setFilter({ page: filter.page + 1 }));
  };

  return (
    <Container maxWidth="1440px" disableGutters>
      <Grid container spacing={8}>
        {/* Sidebar */}
        <Grid sx={{ width: "360px" }}>
          <SidebarFilter />
        </Grid>

        {/* Product List */}
        <Grid sx={{ flex: 1 }}>
          {error ? (
            <Box p={4} textAlign="center">
              <strong>No results found. Try changing your filters.</strong>
            </Box>
          ) : (
            <>
              <ProductList products={productList} />

              {/* Load more button */}
              {productList.length > 0 && (
                <Box textAlign="center" mt={3}>
                  <Button variant="outlined" onClick={handleLoadMoreBtn}>
                    Load more
                  </Button>
                </Box>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CatalogPage;
