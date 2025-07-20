import { Box, Typography } from "@mui/material";
import AppIcon from "@/components/common/AppIcon/AppIcon";
import productFeatureMap from "@/config/productFeatureMap";

const strokeIcons = new Set(["microwave", "water", "gas"]);

const IconTile = ({ name, active = false }) => {
  const isStroke = strokeIcons.has(name);

  const config = productFeatureMap[name];
  const label = config?.label || config?.options?.[name] || name;

  return (
    <Box
      sx={{
        width: "112px",
        height: "96px",
        border: "1px solid",
        borderColor: active ? "var(--button)" : "var(--gray-light)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxSizing: "border-box",
        userSelect: "none",
      }}
    >
      <AppIcon
        name={name}
        size={32}
        fill={isStroke ? "none" : "black"}
        stroke={isStroke ? "black" : "none"}
      />
      <Typography variant="caption" color="text.primary" sx={{ mt: 1 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default IconTile;
