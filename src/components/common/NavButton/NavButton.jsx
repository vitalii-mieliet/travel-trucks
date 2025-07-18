import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavButton = ({ to, children }) => (
  <NavLink to={to}>
    {({ isActive }) => (
      <Button
        variant="text"
        sx={(theme) => ({
          color: isActive
            ? theme.palette.button.hover
            : theme.palette.primary.main,

          textTransform: "none",
          textDecoration: "none",
        })}
      >
        {children}
      </Button>
    )}
  </NavLink>
);

export default NavButton;
