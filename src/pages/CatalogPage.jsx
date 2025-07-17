import ProductList from "@/components/ProductList/ProductList";
import { fetchProducts } from "@/redux/poducts/productsOps";
import { selectProducts } from "@/redux/poducts/productsSelectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const productList = useSelector(selectProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <ProductList products={productList} />
    </>
  );
};

export default CatalogPage;
