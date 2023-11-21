import PropTypes from "prop-types";
import {
  StyledRegLogContainer,
  StyledParagraph,
  StyledLink,
  StyledBackgroundContainer,
} from "./StyledRegLogContainer";
import { useMatchMedia } from "helpers/mediaQuery";
import { useLocation } from "react-router-dom";

const RegLogContainer = ({ text = "", link = "", textLink = "", children }) => {
  const { isTablet, isDesktop } = useMatchMedia();
  const devSize = isTablet || isDesktop;
  const { pathname } = useLocation();

  return devSize ? (
    <StyledBackgroundContainer $page={pathname}>
      <StyledRegLogContainer $page={pathname}>
        {children}
        <StyledParagraph $page={pathname}>
          {text}
          <StyledLink to={link}> {textLink}</StyledLink>
        </StyledParagraph>
      </StyledRegLogContainer>
    </StyledBackgroundContainer>
  ) : (
    <StyledBackgroundContainer $page={pathname}>
      {children}
      <StyledParagraph $page={pathname}>
        {text}
        <StyledLink to={link}> {textLink}</StyledLink>
      </StyledParagraph>
    </StyledBackgroundContainer>
  );
};

RegLogContainer.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
  textLink: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RegLogContainer;
