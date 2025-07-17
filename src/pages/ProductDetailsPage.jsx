import ProductOverview from "@/components/ProductOverview/ProductOverview";
import { fetchCamperById } from "@/redux/campers/campersOps";
import { selectCamperDetails } from "@/redux/campers/campersSelectors";
import { resetItemDetails } from "@/redux/campers/campersSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectCamperDetails);
  useEffect(() => {
    dispatch(resetItemDetails());
    dispatch(fetchCamperById(id));
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
