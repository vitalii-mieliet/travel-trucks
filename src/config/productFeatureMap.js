const productFeatureMap = {
  transmission: {
    type: "select", // UI type: radio/select
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
};

export default productFeatureMap;
