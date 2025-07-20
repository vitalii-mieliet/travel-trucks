import { Backdrop, CircularProgress } from "@mui/material";

const Loader = ({ open }) => {
  return (
    <Backdrop open={open}>
      <CircularProgress size={100} color="inherit" />
    </Backdrop>
  );
};

export default Loader;
