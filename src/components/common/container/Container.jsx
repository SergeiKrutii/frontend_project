import { StyledContainer } from "./StyledContainer";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

const Container = ({ children }) => {
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  return (
    <>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

Container.propTypes = {};

export default Container;
