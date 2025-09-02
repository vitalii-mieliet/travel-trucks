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
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setFilter, resetFilter } from "@/redux/products/productsSlice";
import IconTile from "@/components/common/IconTile/IconTile";
import AppIcon from "../common/AppIcon/AppIcon";
import productFeatureMap from "@/config/productFeatureMap";
import { selectFilter } from "@/redux/products/productsSelectors";

const productTypes = Object.keys(productFeatureMap.form.options);
const productOptions = Object.entries(productFeatureMap)
  .filter(([, config]) => config.type === "boolean")
  .map(([key]) => key);

const SidebarFilter = ({ toggleFilters }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const [localFilter, setLocalFilter] = useState(filter);

  const handleChange = (name, value) => {
    setLocalFilter((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxToggle = (value, checked) => {
    setLocalFilter((prev) => ({
      ...prev,
      options: checked
        ? [...prev.options, value]
        : prev.options.filter((opt) => opt !== value),
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(
      setFilter({
        ...localFilter,
        location: localFilter.location.trim(),
        page: 1,
      })
    );
    toggleFilters?.(false);
  };

  const handleReset = () => {
    setLocalFilter(filter);
    dispatch(resetFilter());
    toggleFilters?.(false);
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
              onChange={(e) => handleChange("location", e.target.value)}
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
                columnGap: "12px",
                rowGap: "8px",
              }}
            >
              {productOptions.map((opt) => (
                <Checkbox
                  key={opt}
                  name="options"
                  value={opt}
                  checked={localFilter.options.includes(opt)}
                  onChange={(e) => handleCheckboxToggle(opt, e.target.checked)}
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
              onChange={(e) => handleChange("type", e.target.value)}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                columnGap: "12px",
                rowGap: "8px",
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
          {/* Vehicle ttransmission */}
          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <FormLabel>Transmission</FormLabel>
            <Divider sx={{ my: 3 }} />
            <RadioGroup
              row
              name="transmission"
              value={localFilter.transmission ?? ""}
              onChange={(e) => handleChange("transmission", e.target.value)}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                columnGap: "12px",
                rowGap: "8px",
              }}
            >
              {Object.entries(productFeatureMap.transmission.options).map(
                ([value, label]) => (
                  <Radio
                    key={value}
                    value={value}
                    icon={
                      <IconTile
                        iconName={`transmission-${value}`}
                        name={value}
                        label={label}
                      />
                    }
                    checkedIcon={
                      <IconTile
                        iconName={`transmission-${value}`}
                        name={value}
                        label={label}
                        active
                      />
                    }
                  />
                )
              )}
            </RadioGroup>
          </FormControl>
          {/* Vehicle engine */}
          <FormControl component="fieldset" sx={{ mb: 4 }}>
            <FormLabel>Engine</FormLabel>
            <Divider sx={{ my: 3 }} />
            <RadioGroup
              row
              name="engine"
              value={localFilter.engine ?? ""}
              onChange={(e) => handleChange("engine", e.target.value)}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                columnGap: "12px",
                rowGap: "8px",
              }}
            >
              {Object.entries(productFeatureMap.engine.options).map(
                ([value, label]) => (
                  <Radio
                    key={value}
                    value={value}
                    icon={
                      <IconTile
                        iconName={`engine-${value}`}
                        name={value}
                        label={label}
                      />
                    }
                    checkedIcon={
                      <IconTile
                        iconName={`engine-${value}`}
                        name={value}
                        label={label}
                        active
                      />
                    }
                  />
                )
              )}
            </RadioGroup>
          </FormControl>

          {/* Buttons */}
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              position: { xs: "sticky", md: "static" }, // sticky только на мобильных
              bottom: { xs: 0, md: "auto" }, // приклеено к низу экрана на мобилках

              marginInline: { xs: -2, md: "auto" },
              p: { xs: 2, md: 0 },
              bgcolor: { xs: "background.paper", md: "transparent" },
              boxShadow: { xs: "0 -4px 6px rgba(0,0,0,0.1)", md: "none" },
              gap: 2,

              zIndex: { xs: 10, md: "auto" }, // поверх контента на мобилке
            }}
          >
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
