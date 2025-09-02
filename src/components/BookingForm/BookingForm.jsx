import {
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  Stack,
  Typography,
} from "@mui/material";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import AppDatePicker from "../AppDatePicker/AppDatePicker";

const BookingForm = ({ product }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Box
      px={{ xs: 2, lg: 5.5 }}
      py={{ xs: 2, lg: 5.5 }}
      sx={{
        border: "1px solid #dadde1",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h3" mb={1}>
        Book your campervan now
      </Typography>
      <Typography variant="body2" mb={3}>
        Stay connected! We are always ready to help you.
      </Typography>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: null,
          comment: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          date: Yup.date().required("Booking date is required"),
          comment: Yup.string(),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          setOpen(true);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form>
            <Stack mb={1}>
              <TextField
                label="Name"
                fullWidth
                name="name"
                placeholder="Name*"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={(touched.name && errors.name) || " "}
                FormHelperTextProps={{
                  sx: {
                    minHeight: "14px",
                    marginTop: 0,
                  },
                }}
                InputLabelProps={{ shrink: true, style: { display: "none" } }}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                placeholder="Email*"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={(touched.email && errors.email) || " "}
                FormHelperTextProps={{
                  sx: {
                    minHeight: "14px",
                    marginTop: 0,
                  },
                }}
                InputLabelProps={{ shrink: true, style: { display: "none" } }}
              />
              <AppDatePicker
                {...{
                  values,
                  errors,
                  touched,
                  handleBlur,
                  setFieldValue,
                }}
              />

              <TextField
                fullWidth
                label="Comment"
                name="comment"
                placeholder="Comment"
                multiline
                rows={4}
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={" "}
                FormHelperTextProps={{
                  sx: {
                    minHeight: "14px",
                    marginTop: 0,
                  },
                }}
                InputLabelProps={{ shrink: true, style: { display: "none" } }}
              />
            </Stack>
            <Button type="submit" variant="contained" color="error">
              Send
            </Button>

            <Snackbar
              open={open}
              autoHideDuration={3000}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Camper {product.name} were successfully booked!
              </Alert>
            </Snackbar>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default BookingForm;
