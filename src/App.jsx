import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import { lazy } from "react";
import withSuspense from "./utils/withSuspense";
import ProductFeatures from "./components/ProductFeatures/ProductFeatures";
import ProductReviews from "./components/ProductReviews/ProductReviews";

const HomePage = withSuspense(lazy(() => import("./pages/HomePage")));
const CatalogPage = withSuspense(lazy(() => import("./pages/CatalogPage")));
const ProductDetailsPage = withSuspense(
  lazy(() => import("./pages/ProductDetailsPage"))
);
const NotFoundPage = withSuspense(lazy(() => import("./pages/NotFoundPage")));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<ProductDetailsPage />}>
            <Route index element={<Navigate to={"features"} replace />} />
            <Route path={"features"} element={<ProductFeatures />} />
            <Route path={"reviews"} element={<ProductReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
