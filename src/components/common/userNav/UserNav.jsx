import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

import Avatar from "@mui/material/Avatar";
import { useMatchMedia } from "helpers/mediaQuery";
import SpriteIcon from "components/common/spriteIcon";
import {
  StyledUserNav,
  StyledNavList,
  StyledNavListItemMob,
  StyledNavItemLink,
  StyledNavItemButton,
  StyledNavListItemTablet,
  StyledNavListTablet,
  StyledNavParagraphTablet,
} from "./StyledUserNav";
import { useLogoutMutation } from "redux/auth/authApiSlice";

const UserNav = ({ children }) => {
  const userName = useSelector(authSelectors.selectName);
  const [logout] = useLogoutMutation();

  let firstLetter = userName.slice(0, 1).toUpperCase();
  const { isMobile } = useMatchMedia();
  return (
    <StyledUserNav>
      {isMobile ? (
        <StyledNavList>
          <StyledNavListItemMob>
            <StyledNavItemLink href="/traning">
              <SpriteIcon name={"icon_book"} />
            </StyledNavItemLink>
          </StyledNavListItemMob>
          <StyledNavListItemMob>
            <StyledNavItemLink href="/library">
              <SpriteIcon name={"icon_home"} />
            </StyledNavItemLink>
          </StyledNavListItemMob>
          <StyledNavListItemMob>
            <SpriteIcon name={"icon_headerLine"} />
          </StyledNavListItemMob>
          <StyledNavListItemMob>
            <Avatar sx={{ bgcolor: "#F5F7FA", color: "#242A37" }}>
              {firstLetter}
            </Avatar>
          </StyledNavListItemMob>
          <StyledNavListItemMob>
            <StyledNavItemButton onClick={logout}>Вихід</StyledNavItemButton>
          </StyledNavListItemMob>
        </StyledNavList>
      ) : (
        <>
          <StyledNavList>
            <StyledNavListItemMob>
              <StyledNavItemLink href="/traning">
                <SpriteIcon name={"icon_book"} />
              </StyledNavItemLink>
            </StyledNavListItemMob>
            <StyledNavListItemMob>
              <StyledNavItemLink href="/library">
                <SpriteIcon name={"icon_home"} />
              </StyledNavItemLink>
            </StyledNavListItemMob>
            <StyledNavListItemMob>
              <SpriteIcon name={"icon_headerLine"} />
            </StyledNavListItemMob>
            <StyledNavListItemMob>
              <StyledNavItemButton onClick={logout}>Вихід</StyledNavItemButton>
            </StyledNavListItemMob>
          </StyledNavList>
        </>
      )}
    </StyledUserNav>
  );
};

UserNav.propTypes = {};

export default UserNav;
