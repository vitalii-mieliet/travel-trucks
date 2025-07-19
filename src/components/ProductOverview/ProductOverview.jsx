import React from "react";
import { Box, Typography, Stack, Grid, Chip, Rating } from "@mui/material";
import AppIcon from "../common/AppIcon/AppIcon";

const ProductOverview = ({ product }) => {
  return (
    <Box component={"section"}>
      {/* Gallery */}
      <Stack direction="row" spacing={2} overflow="auto" mb={3}>
        {product.gallery.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img.thumb}
            alt={`Product image ${index + 1}`}
            sx={{
              width: 220,
              height: 160,
              objectFit: "cover",
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
        ))}
      </Stack>

      {/* Info */}
      <Box mb={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <AppIcon name="star" fill="var(--rating)" stroke="none" />
          <Typography>
            {product.rating} ({product.reviews.length} Reviews)
          </Typography>

          <AppIcon name="map" />
          <Typography>{product.location}</Typography>
        </Stack>

        <Typography mt={1}>€{product.price}</Typography>
        <Typography mt={1}>{product.description}</Typography>
      </Box>

      {/* <h2>Product Overview</h2>
      <p>{product.rating}</p>
      <p>{product.reviews.length}</p>
      <p>{product.location}</p>
      <p>{product.price}</p>
      {product.gallery.map((img, index) => (
        <img key={index} src={img.thumb} alt={`Product image ${index + 1}`} />
      ))}
      <p>{product.description}</p> */}
    </Box>
  );
};

export default ProductOverview;
