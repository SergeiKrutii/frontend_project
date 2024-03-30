import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { StyledContainer } from "./StyledContainer";

const Container = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <StyledContainer $page={pathname}>{children}</StyledContainer>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
