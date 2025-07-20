import {
  Box,
  Stack,
  TextField,
  Button,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormGroup,
  FormLabel,
  InputAdornment,
  Divider,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setFilter, resetFilter } from "@/redux/products/productsSlice";
import IconTile from "@/components/common/IconTile/IconTile";
import AppIcon from "../common/AppIcon/AppIcon";

const productTypes = ["alcove", "fullyIntegrated", "panelTruck"];
const productOptions = [
  "AC",
  "kitchen",
  "bathroom",
  "TV",
  "radio",
  "refrigerator",
  "microwave",
  "gas",
  "water",
];

const initialFilter = {
  location: "",
  options: [],
  type: null,
};

const SidebarFilter = () => {
  const dispatch = useDispatch();
  const [localFilter, setLocalFilter] = useState(initialFilter);

  const handleLocation = (e) => {
    setLocalFilter((prev) => ({ ...prev, location: e.target.value }));
  };

  const handleOptionChange = (e) => {
    const { value, checked } = e.target;
    setLocalFilter((prev) => ({
      ...prev,
      options: checked
        ? [...prev.options, value]
        : prev.options.filter((opt) => opt !== value),
    }));
  };

  const handleTypeChange = (e) => {
    setLocalFilter((prev) => ({
      ...prev,
      type: e.target.value || null,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setFilter({ ...localFilter, page: 1 }));
  };

  const handleReset = () => {
    setLocalFilter(initialFilter);
    dispatch(resetFilter());
  };

  return (
    <Box component="aside">
      <Box component="form" onSubmit={handleSearch}>
        <Stack spacing={4}>
          {/* Location */}
          <FormControl fullWidth>
            <FormLabel
              sx={{
                color: "var(--text)",
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "1.2",
                mb: 1,
              }}
            >
              Location
            </FormLabel>

            <TextField
              value={localFilter.location}
              onChange={handleLocation}
              placeholder="City"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AppIcon name="map" size={20} />
                  </InputAdornment>
                ),
                sx: {
                  fontWeight: 500,
                  color: "var(--main)",
                  height: "56px",
                  px: 2,
                },
              }}
              sx={{
                "& .MuiFilledInput-root": {
                  borderRadius: "20px",
                  backgroundColor: "var(--inputs)",
                  "&:hover": {
                    backgroundColor: "var(--inputs)",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "var(--inputs)",
                  },
                },
              }}
            />
          </FormControl>

          {/* Vehicle equipment */}
          <FormControl component="fieldset">
            <FormLabel>Vehicle equipment</FormLabel>
            <Divider sx={{ my: 3 }} />
            <FormGroup
              row
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              {productOptions.map((opt) => (
                <Checkbox
                  key={opt}
                  name="options"
                  value={opt}
                  checked={localFilter.options.includes(opt)}
                  onChange={handleOptionChange}
                  icon={<IconTile label={opt} name={opt} />}
                  checkedIcon={<IconTile label={opt} name={opt} active />}
                />
              ))}
            </FormGroup>
          </FormControl>

          {/* Vehicle type */}
          <FormControl component="fieldset">
            <FormLabel>Vehicle type</FormLabel>
            <Divider sx={{ my: 3 }} />
            <RadioGroup
              row
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "8px",
              }}
              name="type"
              value={localFilter.type ?? ""}
              onChange={handleTypeChange}
            >
              {productTypes.map((type) => (
                <Radio
                  key={type}
                  value={type}
                  icon={<IconTile label={type} name={type} />}
                  checkedIcon={<IconTile label={type} name={type} active />}
                />
              ))}
            </RadioGroup>
          </FormControl>

          {/* Buttons */}
          <Box display="flex" gap={2}>
            <Button type="submit" variant="contained">
              Search
            </Button>
            <Button type="button" onClick={handleReset} variant="outlined">
              Reset
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default SidebarFilter;
