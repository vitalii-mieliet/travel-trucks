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
    <Stack direction="row" flexWrap="wrap" useFlexGap sx={{ gap: "8px" }}>
      {visibleFeatures.map(({ key, label }) => (
        <Chip
          key={key}
          icon={<AppIcon name={key} size={20} />}
          label={label}
          variant="outlined"
        />
      ))}
    </Stack>
  );
};

export default ProductFeaturesIcons;
