import React from "react";
import { useOutletContext } from "react-router-dom";
import {
  Box,
  Typography,
  Divider,
  useTheme,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import ProductFeaturesIcons from "@/components/common/ProductFeaturesIcons/ProductFeaturesIcons";
import vehicleDetails from "@/config/vehicleDetails";
const ProductFeatures = () => {
  const product = useOutletContext();
  const theme = useTheme();

  return (
    <Box
      height={588}
      px={5.5}
      py={6.5}
      borderRadius={1.25}
      bgcolor={theme.palette.aditional.inputs}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <ProductFeaturesIcons product={product} maxRows={3} />

      {/* Vehicle Details */}
      <Box mt="auto">
        <Typography variant="subtitle1" fontWeight={600} gutterBottom>
          Vehicle details
        </Typography>
        <Divider sx={{ my: 3 }} />

        <Table
          size="small"
          sx={{ borderCollapse: "separate", borderSpacing: "0 8px" }}
        >
          <TableBody>
            {vehicleDetails.map((item) => (
              <TableRow key={item.label}>
                <TableCell sx={{ border: 0, padding: 0 }}>
                  {item.label}
                </TableCell>
                <TableCell
                  sx={{
                    border: 0,
                    padding: 0,
                    textAlign: "right",
                  }}
                >
                  {product[item.field]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default ProductFeatures;
