import { useMatchMedia } from "helpers/mediaQuery";
import { StyledHeader, StyledTitle } from "./StyledHeader";
import { useLocation } from "react-router-dom";
import UserNav from "components/common/userNav";
import UserAvatar from "components/common/userAvatar/UserAvatar";

const Header = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const devSize = isDesktop || isTablet;
  const { pathname } = useLocation();
  const page = pathname === "/library" || pathname === "/traning";

  return (
    <StyledHeader $location={page}>
      <StyledTitle>BR</StyledTitle>
      {devSize && <UserAvatar />}
      {page && <UserNav />}
    </StyledHeader>
  );
};

export default Header;
