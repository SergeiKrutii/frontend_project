import { useMatchMedia } from "helpers/mediaQuery";
import { StyledHeader, StyledTitle } from "./StyledHeader";
import UserNav from "components/common/userNav";
import UserAvatar from "components/common/userAvatar/UserAvatar";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

const Header = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  const devSize = isDesktop || isTablet;

  return (
    <StyledHeader $location={isLoggedIn}>
      <StyledTitle>BR</StyledTitle>
      {devSize && isLoggedIn && <UserAvatar />}
      {isLoggedIn && <UserNav />}
    </StyledHeader>
  );
};

export default Header;
