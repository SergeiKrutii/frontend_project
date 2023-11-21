import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return <>{!!isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
