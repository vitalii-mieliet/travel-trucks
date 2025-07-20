import {
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  Stack,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { enUS } from "date-fns/locale";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const BookingForm = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <Box paddingX={7.25} paddingY={5.5}>
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
          date: "",
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
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <Form>
            <Stack mb={1}>
              <TextField
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

              {/* <LocalizationProvider
                dateAdapter={AdapterDateFns}
                adapterLocale={enUS}
              >
                <DatePicker
                  name="date"
                  label="Booking date*"
                  value={values.date}
                  onChange={(newValue) => setFieldValue(newValue)}
                />
              </LocalizationProvider> */}

              <TextField
                fullWidth
                name="date"
                placeholder="Booking date*"
                type="date"
                value={values.date}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.date && Boolean(errors.date)}
                helperText={(touched.date && errors.date) || " "}
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
                Form submitted successfully!
              </Alert>
            </Snackbar>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default BookingForm;
