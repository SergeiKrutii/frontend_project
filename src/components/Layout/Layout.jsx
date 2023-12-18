import Header from "components/header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <Loader
            height={"461px"}
            width={"559px"}
            className="showcase-item__new-loader"
            viewBox="0 0 559 461"
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
