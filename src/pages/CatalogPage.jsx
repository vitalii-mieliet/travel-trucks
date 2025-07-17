import ProductList from "@/components/ProductList/ProductList";
import SidebarFilter from "@/components/SidebarFilter/SidebarFilter";
import { fetchProducts } from "@/redux/products/productsOps";
import { selectProducts } from "@/redux/products/productsSelectors";
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
      <div style={{ display: "flex" }}>
        <SidebarFilter />
        <ProductList products={productList} />
      </div>
    </>
  );
};

export default CatalogPage;
