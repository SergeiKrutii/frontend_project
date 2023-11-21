import { StyledContainer } from "./StyledContainer";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <>
      <StyledContainer>{children}</StyledContainer>
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
