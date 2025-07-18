import { Box, Typography } from "@mui/material";
import AppIcon from "@/components/common/AppIcon/AppIcon";

const IconTile = ({ label, name, active = false }) => {
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
      <AppIcon name={name} fill="none" stroke="black" size={32} />
      <Typography variant="caption" color="text.primary" sx={{ mt: 1 }}>
        {label}
      </Typography>
    </Box>
  );
};

export default IconTile;
