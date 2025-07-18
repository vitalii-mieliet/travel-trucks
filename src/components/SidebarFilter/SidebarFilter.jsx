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
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setFilter, resetFilter } from "@/redux/products/productsSlice";
import IconTile from "@/components/common/IconTile/IconTile";

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
          <TextField
            label="Location"
            name="location"
            variant="outlined"
            size="small"
            fullWidth
            value={localFilter.location}
            onChange={handleLocation}
          />

          {/* Vehicle equipment */}
          <FormControl component="fieldset">
            <FormLabel>Vehicle equipment</FormLabel>
            <FormGroup row>
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
            <RadioGroup
              row
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
