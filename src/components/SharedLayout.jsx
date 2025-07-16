import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header style={{ display: "flex", gap: "68px" }}>
        <Link>LOGO</Link>
        <nav style={{ display: "flex", gap: "24px" }}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/catalog"}>Catalog</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
