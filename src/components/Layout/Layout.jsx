import Header from "components/header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
