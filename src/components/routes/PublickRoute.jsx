import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { Navigate, Outlet } from "react-router-dom";
import { useMatchMedia } from "helpers/mediaQuery";

const PublicRoute = () => {
  const { isMobile, isTablet } = useMatchMedia();
  const deviceSize = isMobile || isTablet;
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return <>{isLoggedIn ? <Navigate to={"/library"} /> : <Outlet />}</>;
};
export default PublicRoute;
