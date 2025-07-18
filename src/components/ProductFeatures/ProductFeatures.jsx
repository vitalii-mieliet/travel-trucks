import React from "react";
import { useOutletContext } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import ProductFeaturesIcons from "@/components/common/ProductFeaturesIcons/ProductFeaturesIcons";

const ProductFeatures = () => {
  const product = useOutletContext();

  return (
    <Box>
      {/* Иконки/фичи */}
      <ProductFeaturesIcons product={product} />

      <Divider sx={{ my: 3 }} />

      {/* Vehicle Details */}
      <Box>
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Vehicle details
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Form: <strong>{product.form}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Length: <strong>{product.length}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Width: <strong>{product.width}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Height: <strong>{product.height}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Tank: <strong>{product.tank}</strong>
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Consumption: <strong>{product.consumption}</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductFeatures;
