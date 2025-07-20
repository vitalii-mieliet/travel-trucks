import { selectFavorites } from "@/redux/favorites/favoritesSelectors";
import { toggleFavorite } from "@/redux/favorites/favoritesSlice";

import { IconButton, useTheme } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppIcon from "../AppIcon/AppIcon";

const FavoriteButton = ({ productId }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(productId);

  const handleToggle = () => {
    dispatch(toggleFavorite(productId));
  };

  return (
    <IconButton onClick={handleToggle}>
      {isFavorite ? (
        <AppIcon
          name="heart"
          stroke={theme.palette.favoriteButton.active}
          size={24}
        />
      ) : (
        <AppIcon
          name="heart"
          stroke={theme.palette.favoriteButton.default}
          size={24}
        />
      )}
    </IconButton>
  );
};

export default FavoriteButton;
