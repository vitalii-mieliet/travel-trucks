import React from "react";
import { Stack, Chip } from "@mui/material";
import AppIcon from "@/components/common/AppIcon/AppIcon";
import productFeatureMap from "@/config/productFeatureMap";

const strokeIcons = new Set(["microwave", "water", "gas"]);

const ROW_HEIGHT = 48;
const GAP = 8;

const ProductFeaturesIcons = ({ product, maxRows = 2 }) => {
  const maxHeight = ROW_HEIGHT * maxRows + GAP * (maxRows - 1);
  const visibleFeatures = [];

  for (const [key, config] of Object.entries(productFeatureMap)) {
    const value = product[key];

    if (config.type === "boolean" && value === true) {
      visibleFeatures.push({
        label: config.label,
        iconName: key,
      });
    }

    if (config.type === "select" && typeof value === "string") {
      const label = config.options?.[value];
      if (label) {
        visibleFeatures.push({
          label,
          iconName: `${key}-${value}`,
        });
      }
    }
  }

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      useFlexGap
      sx={{
        gap: `${GAP}px`,
        maxHeight: `${maxHeight}px`,
        overflowY: "auto",
      }}
    >
      {visibleFeatures.map(({ label, iconName }) => {
        const strokeKey = iconName.includes("-")
          ? iconName.split("-").pop()
          : iconName;

        const isStroke = strokeIcons.has(strokeKey);

        return (
          <Chip
            key={iconName}
            icon={
              <AppIcon
                name={iconName}
                size={20}
                fill={isStroke ? "none" : "black"}
                stroke={isStroke ? "black" : "none"}
              />
            }
            label={label}
            variant="outlined"
            sx={{
              height: ROW_HEIGHT,
              flexShrink: 0,
            }}
          />
        );
      })}
    </Stack>
  );
};

export default ProductFeaturesIcons;
