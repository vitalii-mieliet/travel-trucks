import ProductList from "@/components/ProductList/ProductList";
import SidebarFilter from "@/components/SidebarFilter/SidebarFilter";
import { fetchProducts } from "@/redux/products/productsOps";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/redux/products/productsSlice";
import { Box, Button, Container, Grid } from "@mui/material";
import { useEffect } from "react";
import {
  selectCanLoadMore,
  selectError,
  selectFilter,
  selectProducts,
} from "@/redux/products/productsSelectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const products = useSelector(selectProducts.selectAll);
  const error = useSelector(selectError);
  const canLoadMore = useSelector(selectCanLoadMore);

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
              <ProductList products={products} />

              {/* Load more button */}
              {canLoadMore && (
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
