import ProductList from "@/components/ProductList/ProductList";
import { fetchCampers } from "@/redux/campers/campersOps";
import { selectCampers } from "@/redux/campers/campersSelectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const camperList = useSelector(selectCampers);
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  console.log(camperList);
  return (
    <>
      <ProductList products={camperList} />
    </>
  );
};

export default CatalogPage;
