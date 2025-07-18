import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";

const BookingForm = () => {
  return (
    <Paper elevation={1} sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Book your campervan now
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Stay connected! We are always ready to help you.
      </Typography>

      <Stack spacing={2}>
        <TextField label="Name*" fullWidth size="small" />
        <TextField label="Email*" fullWidth size="small" />
        <TextField
          label="Booking date*"
          type="date"
          fullWidth
          size="small"
          InputLabelProps={{ shrink: true }}
        />
        <TextField label="Comment" fullWidth size="small" multiline rows={3} />
        <Button variant="contained" color="error" size="large">
          Send
        </Button>
      </Stack>
    </Paper>
  );
};

export default BookingForm;
