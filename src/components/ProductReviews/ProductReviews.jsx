import React from "react";
import { useOutletContext } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Stack,
  Divider,
  List,
  ListItem,
} from "@mui/material";

const ProductReviews = () => {
  const { reviews } = useOutletContext();

  return (
    <Box component={"section"}>
      <Typography variant="h6" gutterBottom>
        Reviews
      </Typography>

      <List spacing={3}>
        {reviews.map((review, index) => (
          <ListItem key={index}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
              <Avatar
                sx={{ bgcolor: "#f2f2f2", color: "#000", fontWeight: 600 }}
              >
                {review.reviewer_name[0]}
              </Avatar>
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {review.reviewer_name}
                </Typography>
                <Rating
                  value={review.reviewer_rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography mt={1}>{review.comment}</Typography>
              </Box>
            </Stack>

            {index < reviews.length - 1 && <Divider sx={{ mt: 3 }} />}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductReviews;
