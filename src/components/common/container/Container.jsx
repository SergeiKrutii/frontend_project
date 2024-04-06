import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { StyledContainer } from "./StyledContainer";
import { useMatchMedia } from "helpers/mediaQuery";

const Container = ({ children, style }) => {
  const { pathname } = useLocation();
  const { isMobile } = useMatchMedia();

  return (
    <>
      <StyledContainer $page={pathname} $devise={isMobile}>
        {children}
      </StyledContainer>
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
