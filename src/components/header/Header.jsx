import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useMatchMedia } from "helpers/mediaQuery";
import { StyledHeader, StyledTitle } from "./StyledHeader";
import UserNav from "components/userNav";
import UserAvatar from "components/userAvatar/UserAvatar";
import authSelectors from "redux/auth/authSelectors";

const Header = () => {
  const { isTablet, isDesktop } = useMatchMedia();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const { pathname } = useLocation();

  const devSize = isDesktop || isTablet;

  return (
    <StyledHeader $login={isLoggedIn} $location={pathname}>
      <StyledTitle>BR</StyledTitle>
      {devSize && isLoggedIn && <UserAvatar />}
      {isLoggedIn && <UserNav />}
    </StyledHeader>
  );
};

export default Header;
