import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { StyledLinkPageAdd } from "./StyledLinkPageAdd";
import SpriteIcon from "../spriteIcon/SpriteIcon";

const LinkPageAdd = ({ page }) => {
  return (
    <StyledLinkPageAdd $page={page}>
      <Link to={page}>
        <SpriteIcon width="52" height="52" name={"icon-more"} />
      </Link>
    </StyledLinkPageAdd>
  );
};

LinkPageAdd.propTypes = {};

export default LinkPageAdd;
