import React from "react";
import {
  Box,
  Typography,
  Stack,
  Grid,
  Chip,
  Rating,
  ImageListItem,
  ListItem,
  List,
} from "@mui/material";
import AppIcon from "../common/AppIcon/AppIcon";
import theme from "@/theme";
import { Link } from "react-router-dom";

const ProductOverview = ({ product }) => {
  return (
    <Box component={"section"}>
      <Box mb={2}>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <AppIcon
              name="star"
              fill={theme.palette.ratingStar.active}
              stroke="none"
            />
            <Link to={`/catalog/${product.id}/reviews`}>
              <Typography>
                {product.rating} ({product.reviews.length} Reviews)
              </Typography>
            </Link>
          </Stack>

          <Stack direction="row" spacing={0.5} alignItems="center">
            <AppIcon name="map" />
            <Typography>{product.location}</Typography>
          </Stack>
        </Stack>

        <Typography variant="h2" mb={3.5}>
          €{product.price}
        </Typography>
      </Box>
      {/* Gallery */}
      <List
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "48px",
          padding: 0,
          marginBottom: 3.5,
        }}
      >
        {product.gallery.map((img, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              flexShrink: 0,
              width: 292,
              height: 312,
              borderRadius: "10px",
              overflow: "hidden",
              p: 0,
            }}
          >
            <img
              src={img.thumb}
              alt={`Product image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* Info */}

      <Typography>{product.description}</Typography>
    </Box>
  );
};

export default ProductOverview;
