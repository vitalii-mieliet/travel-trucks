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
import FavoriteButton from "../common/FavoriteButton/FavoriteButton";
import { scrollToId } from "@/utils/scroll";

const ProductCard = ({ product }) => {
  const { id, name, price, location, rating, reviews, description, gallery } =
    product;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
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
          width: { xs: "100%", md: 292 },
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h2" component="h2" noWrap mr={1}>
            {name}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h2">€{price}.00</Typography>
            <FavoriteButton productId={product.id} />
          </Box>
        </Box>

        {/* Rating, location */}
        <Stack direction="row" spacing={1} alignItems="center" mb={3}>
          <AppIcon
            name="star"
            fill={theme.palette.ratingStar.active}
            stroke="none"
          />
          <Link
            to={`/catalog/${id}/reviews#reviews`}
            onClick={() => scrollToId("reviews")}
          >
            <Typography>
              {rating} ({reviews.length} Reviews)
            </Typography>
          </Link>

          <AppIcon name="map" />
          <Typography>{location}</Typography>
        </Stack>

        {/* Description */}
        <Typography variant="body-2" mb={3} noWrap mr={2}>
          {description}
        </Typography>

        {/* Features */}
        <ProductFeaturesIcons product={product} />

        {/* Show More Button */}
        <Box
          sx={{
            marginTop: { xs: 3, md: "auto" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Button variant="contained" component={Link} to={`/catalog/${id}`}>
            Show more
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
