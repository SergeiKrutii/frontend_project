import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

import authSelectors from "redux/auth/authSelectors";
import {
  StyledNavListItemTablet,
  StyledNavListTablet,
  StyledNavParagraphTablet,
  avatarStyles,
} from "./StyledUserAvatar";

const UserAvatar = (props) => {
  const userName = useSelector(authSelectors.selectName);

  let firstLetter = userName?.slice(0, 1).toUpperCase();

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

export default UserAvatar;
