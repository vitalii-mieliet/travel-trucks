import { fetchCampers } from "@/redux/campers/campersOps";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }),
    [dispatch];
  return <></>;
};

export default CatalogPage;
