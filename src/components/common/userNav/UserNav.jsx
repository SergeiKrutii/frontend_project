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
  StyledNavListItemTablet,
  StyledNavListTablet,
  StyledNavParagraphTablet,
} from "./StyledUserNav";

const avatarStyles = {
  color: "#242A37",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "38px",
  width: 25,
  height: 25,
};

const UserNav = ({ children }) => {
  const userName = useSelector(authSelectors.selectName);

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
            <Avatar sx={{ bgcolor: "#F5F7FA" }}>{firstLetter}</Avatar>
          </StyledNavListItemMob>
          <StyledNavListItemMob>
            <StyledNavItemLink href="/logout">Вихід</StyledNavItemLink>
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
              <StyledNavItemLink href="/logout">Вихід</StyledNavItemLink>
            </StyledNavListItemMob>
          </StyledNavList>
          {/* <StyledNavListTablet>
            <StyledNavListItemTablet>
              <Avatar sx={{ bgcolor: "#F5F7FA", ...avatarStyles }}>
                {firstLetter}
              </Avatar>
            </StyledNavListItemTablet>
            <StyledNavListItemTablet>
              <StyledNavParagraphTablet>{userName}</StyledNavParagraphTablet>
            </StyledNavListItemTablet>
          </StyledNavListTablet> */}
        </>
      )}
    </StyledUserNav>
  );
};

UserNav.propTypes = {};

export default UserNav;
