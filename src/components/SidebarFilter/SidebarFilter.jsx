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
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setFilter, resetFilter } from "@/redux/products/productsSlice";
import IconTile from "@/components/common/IconTile/IconTile";
import AppIcon from "../common/AppIcon/AppIcon";
import productFeatureMap from "@/config/productFeatureMap";

const productTypes = Object.keys(productFeatureMap.form.options);
const productOptions = Object.entries(productFeatureMap)
  .filter(([, config]) => config.type === "boolean")
  .map(([key]) => key);

const initialFilter = {
  location: "",
  options: [],
  type: null,
  transmission: null,
  engine: null,
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

  // const handleTypeChange = (e) => {
  //   setLocalFilter((prev) => ({
  //     ...prev,
  //     type: e.target.value || null,
  //   }));
  // };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setLocalFilter((prev) => ({
      ...prev,
      [name]: value || null,
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
        <Stack>
          {/* Location */}
          <FormControl fullWidth sx={{ mb: 5 }}>
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

          <Typography mb={4} variant="h5">
            Filter
          </Typography>

          {/* Vehicle equipment */}
          <FormControl component="fieldset" sx={{ mb: 4 }}>
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
                  icon={
                    <IconTile label={productFeatureMap[opt].label} name={opt} />
                  }
                  checkedIcon={
                    <IconTile
                      label={productFeatureMap[opt].label}
                      name={opt}
                      active
                    />
                  }
                />
              ))}
            </FormGroup>
          </FormControl>

          {/* Vehicle type */}
          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <FormLabel>Vehicle type</FormLabel>
            <Divider sx={{ my: 3 }} />
            <RadioGroup
              row
              name="type"
              value={localFilter.type ?? ""}
              onChange={handleSelectChange}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              {productTypes.map((type) => (
                <Radio
                  key={type}
                  value={type}
                  icon={
                    <IconTile
                      name={type}
                      label={productFeatureMap.form.options[type]} // <-- читаемое имя
                    />
                  }
                  checkedIcon={
                    <IconTile
                      name={type}
                      label={productFeatureMap.form.options[type]}
                      active
                    />
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <FormLabel>Transmission</FormLabel>
            <Divider sx={{ my: 3 }} />
            <RadioGroup
              row
              name="transmission"
              value={localFilter.transmission ?? ""}
              onChange={handleSelectChange}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              {Object.entries(productFeatureMap.transmission.options).map(
                ([value, label]) => (
                  <Radio
                    key={value}
                    value={value}
                    icon={<IconTile name={value} label={label} />}
                    checkedIcon={<IconTile name={value} label={label} active />}
                  />
                )
              )}
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <FormLabel>Engine</FormLabel>
            <Divider sx={{ my: 3 }} />
            <RadioGroup
              row
              name="engine"
              value={localFilter.engine ?? ""}
              onChange={handleSelectChange}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              {Object.entries(productFeatureMap.engine.options).map(
                ([value, label]) => (
                  <Radio
                    key={value}
                    value={value}
                    icon={<IconTile name={value} label={label} />}
                    checkedIcon={<IconTile name={value} label={label} active />}
                  />
                )
              )}
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
