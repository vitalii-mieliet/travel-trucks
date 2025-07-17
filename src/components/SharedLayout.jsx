import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "./common/Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
