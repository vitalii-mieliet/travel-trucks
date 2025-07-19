import BookingForm from "@/components/BookingForm/BookingForm";
import ProductOverview from "@/components/ProductOverview/ProductOverview";
import { fetchProductById } from "@/redux/products/productsOps";
import { selectProductDetails } from "@/redux/products/productsSelectors";
import { resetItemDetails } from "@/redux/products/productsSlice";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectProductDetails);

  useEffect(() => {
    dispatch(resetItemDetails());
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (!product) return <p>Loading</p>;

  const currentPath = window.location.pathname;
  const currentTab = currentPath.endsWith("reviews") ? 1 : 0;

  return (
    <Container>
      <Typography>{product.name}</Typography>
      <ProductOverview product={product} />

      <Box mt={4}>
        <Tabs value={currentTab}>
          <Tab label="Features" component={Link} to="features" />
          <Tab label="Reviews" component={Link} to="reviews" />
        </Tabs>
      </Box>

      <Grid container spacing={4} columns={2}>
        <Grid size={1}>
          <Outlet context={product} />
        </Grid>
        <Grid size={1}>
          <BookingForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailsPage;
