import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
  Chip,
} from "@mui/material";

import { Link } from "react-router-dom";
import AppIcon from "../common/AppIcon/AppIcon";
import ProductFeaturesIcons from "../common/ProductFeaturesIcons/ProductFeaturesIcons";
import theme from "@/theme";

const ProductCard = ({ product }) => {
  const { id, name, price, location, rating, reviews, description, gallery } =
    product;
  return (
    <Card
      sx={{
        display: "flex",
        gap: 2,
        overflow: "hidden",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        sx={{
          width: 292,
          height: 320,
          objectFit: "cover",
          flexShrink: 0,
        }}
        image={gallery[0]?.thumb}
        alt={name}
      />

      {/* Content */}
      <CardContent
        sx={{
          flex: 1,
          p: 0,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        {/* Name, Price,  Favorites*/}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography variant="h3" component="h3">
            {name}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h3">€{price}.00</Typography>
            <IconButton>
              <AppIcon name="heart" stroke="black" size={24} />
            </IconButton>
          </Box>
        </Box>

        {/* Rating, location */}
        <Stack direction="row" spacing={1} alignItems="center" mb={3}>
          <AppIcon
            name="star"
            fill={theme.palette.ratingStar.active}
            stroke="non"
          />
          <Link to={`/catalog/${id}/reviews`}>
            <Typography>
              {rating} ({reviews.length} Reviews)
            </Typography>
          </Link>

          <AppIcon name="map" />
          <Typography>{location}</Typography>
        </Stack>

        {/* Description */}
        <Typography
          variant="body-2"
          mb={3}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            minWidth: 0,
            maxWidth: "100%",
          }}
        >
          {description}
        </Typography>

        {/* Features */}
        <ProductFeaturesIcons product={product} />

        {/* Show More Button */}
        <Box mt="auto">
          <Button
            mt="auto"
            variant="contained"
            component={Link}
            to={`/catalog/${id}`}
          >
            Show more
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
