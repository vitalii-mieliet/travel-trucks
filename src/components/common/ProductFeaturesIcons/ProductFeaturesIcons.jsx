import React from "react";
import { Stack, Chip } from "@mui/material";
import AppIcon from "@/components/common/AppIcon/AppIcon";
import productFeatureMap from "@/config/productFeatureMap";

const ProductFeaturesIcons = ({ product }) => {
  const visibleFeatures = [];

  for (const [key, config] of Object.entries(productFeatureMap)) {
    const value = product[key];

    if (config.type === "boolean" && value === true) {
      visibleFeatures.push({
        key,
        label: config.label,
      });
    }

    if (config.type === "select" && typeof value === "string") {
      const label = config.options?.[value];
      if (label) {
        visibleFeatures.push({
          key,
          label,
        });
      }
    }
  }

  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {visibleFeatures.map(({ key, label }) => (
        <Chip
          key={key}
          icon={<AppIcon name={key} />}
          label={label}
          variant="outlined"
          sx={{ mb: 1 }}
        />
      ))}
    </Stack>
  );
};

export default ProductFeaturesIcons;
