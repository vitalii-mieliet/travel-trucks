import { selectFilter } from "@/redux/products/productsSelectors";
import { setFilter } from "@/redux/products/productsSlice";
import { useDispatch, useSelector } from "react-redux";

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

  // console.log(filter);

  return (
    <aside>
      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          value={filter.location || ""}
          onChange={handleLocation}
        />
      </div>

      <fieldset>
        <legend>Vehicle equipment</legend>
        {productOptions.map((opt) => (
          <label key={opt}>
            <input
              type="checkbox"
              value={opt}
              checked={filter.options.includes(opt)}
              onChange={handleOptions}
            />
            {opt}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Vehicle type</legend>
        <label>
          <input
            type="radio"
            name="type"
            value=""
            checked={filter.type === null}
            onChange={handleType}
          />
          All
        </label>
        {productTypes.map((type) => (
          <label key={type}>
            <input
              type="radio"
              name="type"
              value={type}
              checked={type === filter.type}
              onChange={handleType}
            />
            {type}
          </label>
        ))}
      </fieldset>
    </aside>
  );
};

export default SidebarFilter;
