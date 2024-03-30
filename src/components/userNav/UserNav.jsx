import { useSelector } from "react-redux";
import { useState } from "react";

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
} from "./StyledUserNav";
import MainModal from "../common/mainModal";
import { Warning } from "../common/contentForModal";

const UserNav = (props) => {
  const userName = useSelector(authSelectors.selectName);
  const [toggleModal, setToggleModal] = useState(false);
  const { isMobile } = useMatchMedia();

  const handleToggleModal = () => {
    setToggleModal((prevState) => !prevState);
  };

  let firstLetter = userName?.slice(0, 1).toUpperCase();

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
            <StyledNavItemButton onClick={handleToggleModal}>
              Вихід
            </StyledNavItemButton>
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
              <StyledNavItemButton onClick={handleToggleModal}>
                Вихід
              </StyledNavItemButton>
            </StyledNavListItemMob>
          </StyledNavList>
        </>
      )}

      {toggleModal && (
        <MainModal
          open={toggleModal}
          handleClose={handleToggleModal}
          component={<Warning handleToggle={handleToggleModal} />}
        />
      )}
    </StyledUserNav>
  );
};

export default UserNav;
