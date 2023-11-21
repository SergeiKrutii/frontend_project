import PropTypes from "prop-types";
import { StyledLink } from "./StyledNavLink";

const NavLink = ({ text, redirect, ...props }) => {
  return (
    <StyledLink
      style={text === "Зареєструватись" ? { ...props } : props}
      to={redirect}
    >
      {text}
    </StyledLink>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default NavLink;
