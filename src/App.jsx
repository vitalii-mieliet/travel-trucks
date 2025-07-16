import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import { lazy } from "react";
import withSuspense from "./utils/withSuspense";

const HomePage = withSuspense(lazy(() => import("./pages/HomePage")));
const CatalogPage = withSuspense(lazy(() => import("./pages/CatalogPage")));
const CamperDetailPage = withSuspense(
  lazy(() => import("./pages/CamperDetailPage"))
);
const NotFoundPage = withSuspense(lazy(() => import("./pages/NotFoundPage")));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CamperDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
