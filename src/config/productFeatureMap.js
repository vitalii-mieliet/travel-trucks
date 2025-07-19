const productFeatureMap = {
  transmission: {
    type: "select",
    options: {
      automatic: "Automatic",
      manual: "Manual",
    },
  },
  engine: {
    type: "select",
    options: {
      petrol: "Petrol",
      diesel: "Diesel",
      gas: "Gas",
      hybrid: "Hybrid",
    },
  },
  form: {
    type: "select",
    options: {
      alcove: "Alcove",
      fullyIntegrated: "Fully Integrated",
      panelTruck: "Van",
    },
  },
  AC: {
    type: "boolean",
    label: "AC",
  },
  kitchen: {
    type: "boolean",
    label: "Kitchen",
  },
  radio: {
    type: "boolean",
    label: "Radio",
  },
  TV: {
    type: "boolean",
    label: "TV",
  },
  refrigerator: {
    type: "boolean",
    label: "Fridge",
  },
  microwave: {
    type: "boolean",
    label: "Microwave",
  },
  bathroom: {
    type: "boolean",
    label: "Bathroom",
  },
  water: {
    type: "boolean",
    label: "Water",
  },
  gas: {
    type: "boolean",
    label: "Gas",
  },
};

export default productFeatureMap;
