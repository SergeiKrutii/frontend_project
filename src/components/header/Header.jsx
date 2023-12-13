import { useMatchMedia } from "helpers/mediaQuery";
import { StyledHeader, StyledTitle } from "./StyledHeader";
import { useLocation } from "react-router-dom";
import UserNav from "components/common/userNav";
import UserAvatar from "components/common/userAvatar/UserAvatar";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

const Header = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  const devSize = isDesktop || isTablet;
  const { pathname } = useLocation();
  const page =
    pathname === "/library" ||
    pathname === "/traning" ||
    pathname === "/addtraningform";

  return (
    <StyledHeader $location={page}>
      <StyledTitle>BR</StyledTitle>
      {devSize && isLoggedIn && <UserAvatar />}
      {page && <UserNav />}
    </StyledHeader>
  );
};

export default Header;
