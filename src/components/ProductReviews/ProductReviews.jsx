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
  useTheme,
} from "@mui/material";
import AppIcon from "../common/AppIcon/AppIcon";
import { visuallyHidden } from "@mui/utils";

const ProductReviews = () => {
  const theme = useTheme();
  const { reviews } = useOutletContext();

  return (
    <Box id="reviews" component={"section"}>
      <Typography variant="h3" component={"h3"} sx={visuallyHidden}>
        Reviews
      </Typography>

      <Stack component={"ul"} spacing={5.5}>
        {reviews.map((review, index) => (
          <ListItem key={index}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar>{review.reviewer_name[0]}</Avatar>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {review.reviewer_name}
                  </Typography>
                  <Rating
                    value={review.reviewer_rating}
                    readOnly
                    precision={0.5}
                    size="small"
                    icon={
                      <AppIcon
                        name="star"
                        fill={theme.palette.ratingStar.active} // ← цвет активной звезды
                        stroke="none"
                      />
                    }
                    emptyIcon={
                      <AppIcon
                        name="star"
                        fill={theme.palette.ratingStar.default} // ← цвет неактивной звезды
                        stroke="none"
                      />
                    }
                  />
                </Stack>
              </Stack>
              <Typography>{review.comment}</Typography>
            </Stack>

            {index < reviews.length - 1 && <Divider sx={{ mt: 3 }} />}
          </ListItem>
        ))}
      </Stack>
    </Box>
  );
};

export default ProductReviews;
