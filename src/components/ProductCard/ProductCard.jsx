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

const ProductCard = ({ product }) => {
  const { id, name, price, location, rating, reviews, description, gallery } =
    product;
  return (
    <Card
      sx={{
        display: "flex",
        gap: 2,
        p: 2,
        borderRadius: 3,
        boxShadow: "0 0 0 1px #E0E0E0",
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        sx={{
          width: 274,
          height: 268,
          borderRadius: 2,
          objectFit: "cover",
        }}
        image={gallery[0]?.thumb}
        alt={name}
      />

      {/* Content */}
      <CardContent
        sx={{ flex: 1, p: 0, display: "flex", flexDirection: "column" }}
      >
        {/* Name, Price,  Favorites*/}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h6">€{price}</Typography>
            <IconButton>
              <AppIcon name="heart" stroke="black" />
            </IconButton>
          </Box>
        </Box>

        {/* Rating, location */}
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <AppIcon name="star" fill="#FFC531" stroke="non" />
          <Typography>
            {rating} ({reviews.length} Reviews)
          </Typography>
          <AppIcon name="map" />
          <Typography>{location}</Typography>
        </Stack>

        {/* Description */}
        <Typography>{description}</Typography>

        {/* Features */}

        {/* Show More Button */}
        <Box mt="auto">
          <Button variant="contained" component={Link} to={`/catalog/${id}`}>
            Show more
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
