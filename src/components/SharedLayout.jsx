import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "./common/Header/Header";
import Loader from "./common/Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsLoading } from "@/redux/products/productsSelectors";

const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Loader open={isLoading} />
      </main>
    </>
  );
};

export default SharedLayout;
