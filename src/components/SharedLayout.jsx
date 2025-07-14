import React from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
