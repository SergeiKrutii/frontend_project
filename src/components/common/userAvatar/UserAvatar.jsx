import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import Avatar from "@mui/material/Avatar";

import {
  StyledNavListItemTablet,
  StyledNavListTablet,
  StyledNavParagraphTablet,
} from "./StyledUserAvatar";

const avatarStyles = {
  color: "#242A37",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "38px",
  width: 33,
  height: 33,
};

const UserAvatar = (props) => {
  const userName = useSelector(authSelectors.selectName);

  let firstLetter = userName.slice(0, 1).toUpperCase();

  return (
    <StyledNavListTablet>
      <StyledNavListItemTablet>
        <Avatar sx={{ bgcolor: "#F5F7FA", ...avatarStyles }} style={{}}>
          {firstLetter}
        </Avatar>
      </StyledNavListItemTablet>
      <StyledNavListItemTablet>
        <StyledNavParagraphTablet>{userName}</StyledNavParagraphTablet>
      </StyledNavListItemTablet>
    </StyledNavListTablet>
  );
};

UserAvatar.propTypes = {};

export default UserAvatar;
