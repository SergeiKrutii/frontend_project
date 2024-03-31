import PropTypes from "prop-types";
import SpriteIcon from "components/common/spriteIcon";
import { Link } from "react-router-dom";

const GetBackButton = ({ path }) => {
  return (
    <div>
      <Link to={path}>
        <SpriteIcon name={"icon_getBack"} />
      </Link>
    </div>
  );
};

GetBackButton.propTypes = {
  path: PropTypes.string.isRequired,
};

export default GetBackButton;
