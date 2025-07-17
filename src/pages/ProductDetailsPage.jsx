import ProductOverview from "@/components/ProductOverview/ProductOverview";
import { fetchProductById } from "@/redux/poducts/productsOps";
import { selectProductDetails } from "@/redux/poducts/productsSelectors";
import { resetItemDetails } from "@/redux/poducts/productsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectProductDetails);
  useEffect(() => {
    dispatch(resetItemDetails());
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  if (!product) return <p>Loading</p>;

  return (
    <article>
      <h2>{product.name}</h2>
      <ProductOverview product={product} />

      <div>
        <nav>
          <Link to={"features"}>Features</Link>
          <Link to={"reviews"}>Reviews</Link>
        </nav>

        <Outlet context={product} />
      </div>
    </article>
  );
};

export default ProductDetailsPage;
