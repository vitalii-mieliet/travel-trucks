import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AppIcon from "@/components/common/AppIcon/AppIcon";
import { selectFilter } from "@/redux/products/productsSelectors";
import { resetFilter, setFilter } from "@/redux/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import IconTile from "../common/IconTile/IconTile";

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

const SidebarFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleLocation = (e) => {
    dispatch(setFilter({ location: e.target.value || null }));
  };

  const handleOptions = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    const updated = checked
      ? [...filter.options, value]
      : filter.options.filter((item) => item !== value);

    dispatch(setFilter({ options: updated }));
  };

  const handleType = (e) => {
    dispatch(setFilter({ type: e.target.value || null }));
  };

  const handleReset = () => {
    dispatch(resetFilter());
  };

  return (
    <Box component="aside">
      <Stack spacing={4}>
        {/* Location input */}
        <TextField
          label="Location"
          variant="outlined"
          size="small"
          fullWidth
          value={filter.location || ""}
          onChange={handleLocation}
        />

        {/* Vehicle equipment */}
        <FormControl component="fieldset">
          <FormLabel>Vehicle equipment</FormLabel>
          <FormGroup row>
            {productOptions.map((opt) => (
              <Checkbox
                key={opt}
                checked={filter.options.includes(opt)}
                onChange={handleOptions}
                value={opt}
                icon={<IconTile label={opt} name={opt} />}
                checkedIcon={<IconTile label={opt} name={opt} active />}
              />
            ))}
          </FormGroup>
        </FormControl>

        {/* Vehicle type */}
        <FormControl component="fieldset">
          <FormLabel>Vehicle type</FormLabel>
          <RadioGroup row value={filter.type ?? ""} onChange={handleType}>
            {/* <FormControlLabel value="" control={<Radio />} label="All" /> */}
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

        {/* Reset button */}
        <Box>
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </Stack>
    </Box>

    // <aside>
    //   <div>
    //     <label htmlFor="location">Location</label>
    //     <input
    //       id="location"
    //       type="text"
    //       name="location"
    //       value={filter.location || ""}
    //       onChange={handleLocation}
    //     />
    //   </div>

    //   <fieldset>
    //     <legend>Vehicle equipment</legend>
    //     {productOptions.map((opt) => (
    //       <label key={opt}>
    //         <input
    //           type="checkbox"
    //           value={opt}
    //           checked={filter.options.includes(opt)}
    //           onChange={handleOptions}
    //         />
    //         {opt}
    //       </label>
    //     ))}
    //   </fieldset>

    //   <fieldset>
    //     <legend>Vehicle type</legend>
    //     <label>
    //       <input
    //         type="radio"
    //         name="type"
    //         value=""
    //         checked={filter.type === null}
    //         onChange={handleType}
    //       />
    //       All
    //     </label>
    //     {productTypes.map((type) => (
    //       <label key={type}>
    //         <input
    //           type="radio"
    //           name="type"
    //           value={type}
    //           checked={type === filter.type}
    //           onChange={handleType}
    //         />
    //         {type}
    //       </label>
    //     ))}
    //   </fieldset>
    //   <button type="button" onClick={handleReset}>
    //     Reset
    //   </button>
    // </aside>
  );
};

export default SidebarFilter;
