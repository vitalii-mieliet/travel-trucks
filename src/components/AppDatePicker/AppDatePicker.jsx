import { DatePicker } from "@mui/x-date-pickers";
import { useRef, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AppDatePicker = ({
  values,
  errors,
  touched,

  handleBlur,
  setFieldValue,
}) => {
  const [open, setOpen] = useState(false);
  const dateFieldRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          fullWidth
          label="Date"
          value={values.date}
          onChange={(newValue) => setFieldValue("date", newValue, true)}
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          enableAccessibleFieldDOMStructure={false}
          format="DD.MM.YYYY"
          slotProps={{
            popper: {
              anchorEl: dateFieldRef.current,
              placement: "bottom",
            },
            textField: {
              ref: dateFieldRef,
              name: "date",
              error: touched.date && Boolean(errors.date),
              helperText: (touched.date && errors.date) || " ",
              onClick: () => setOpen(true),
              onKeyDown: handleKeyDown,
              onBlur: handleBlur,
              slotProps: {
                input: {
                  placeholder: "Booking date*",
                },
                formHelperText: {
                  sx: {
                    minHeight: "14px",
                    marginTop: 0,
                  },
                },

                inputLabel: {
                  shrink: true,
                  style: { display: "none" },
                },
              },
            },
          }}
        />
      </LocalizationProvider>
    </>
  );
};

export default AppDatePicker;
