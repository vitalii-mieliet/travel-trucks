import ProductList from "@/components/ProductList/ProductList";
import SidebarFilter from "@/components/SidebarFilter/SidebarFilter";
import { fetchProducts } from "@/redux/products/productsOps";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/redux/products/productsSlice";
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import {
  selectCanLoadMore,
  selectError,
  selectFilter,
  selectProducts,
} from "@/redux/products/productsSelectors";
import { mediaTo } from "@/theme/media";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const products = useSelector(selectProducts.selectAll);
  const error = useSelector(selectError);
  const canLoadMore = useSelector(selectCanLoadMore);
  const isMobile = useMediaQuery(mediaTo("md"));
  const [openFilters, setOpenFilters] = useState(false);

  const toggleFilters = (open) => () => setOpenFilters(open);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, filter]);

  const handleLoadMoreBtn = () => {
    dispatch(setFilter({ page: filter.page + 1 }));
  };

  return (
    <Container disableGutters>
      <Grid container spacing={8}>
        {/* Sidebar */}
        {!isMobile && (
          <Grid sx={{ width: "360px" }}>
            <SidebarFilter />
          </Grid>
        )}

        {/* Product List */}
        <Grid sx={{ flex: 1 }}>
          {isMobile && (
            <Box display="flex" justifyContent="flex-start  " mb={2}>
              <Button
                startIcon={<FilterListIcon />}
                variant="outlined"
                onClick={toggleFilters(true)}
                aria-label="Open filters"
              >
                Filter
              </Button>
            </Box>
          )}
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
      <Drawer
        anchor="left"
        open={openFilters}
        onClose={toggleFilters(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <IconButton
          onClick={toggleFilters(false)}
          aria-label="Close"
          sx={{
            width: "auto",
            minWidth: 0,
            alignSelf: "flex-end",
            p: 1,
            m: 1,
          }}
        >
          <CloseIcon />
        </IconButton>
        {openFilters && (
          <Box sx={{ p: 2 }}>
            <SidebarFilter toggleFilters={setOpenFilters} />
          </Box>
        )}
      </Drawer>
    </Container>
  );
};

export default CatalogPage;
