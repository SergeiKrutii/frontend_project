import PropTypes from "prop-types";
import sprite from "components/images/icon_sprite.svg";
import { StyledSvg } from "./StyledSpriteIcon";

const SpriteIcon = ({ name, ...props }) => {
  let iconStyles = {};

  switch (name) {
    case "icon_greaterArrow":
      iconStyles = {
        marginRight: "11px",
        marginTop: "5px",
        maxHeight: "10px",
        maxWidth: "5px",
      };
      break;
    case "icon_google":
      iconStyles = {
        height: "18px",
        width: "18px",
        marginRight: "16px",
      };
      break;
    case "icon_quotes":
      iconStyles = {
        height: "30px",
        width: "30px",
      };
      break;
    case "icon_home":
      iconStyles = {
        height: "18px",
        width: "23px",
      };
      break;
    case "icon_book":
      iconStyles = {
        height: "29px",
        width: "32px",
      };
      break;
    case "icon_headerLine":
      iconStyles = {
        height: "33px",
        width: "1px",
      };
      break;
    case "icon_traningLine":
      iconStyles = {
        height: "1px",
        width: "270px",
        marginBottom: "25px",
      };
      break;
    case "icon_calendar":
      iconStyles = {
        height: "17px",
        width: "17px",
        marginRight: "17px",
      };
      break;
    case "icon_dateArrow":
      iconStyles = {
        height: "7px",
        width: "13px",
        marginLeft: "auto",
      };
      break;
    case "icon_getBack":
      iconStyles = {
        height: "12px",
        width: "24px",
        marginTop: "25px",
      };
      break;
    case "icon_delete":
      iconStyles = {
        height: "18px",
        width: "14px",
      };
      break;
    case "icon-Flat1":
      iconStyles = {
        height: "17px",
        width: "22px",
      };
      break;

    default:
      break;
  }

  return (
    <StyledSvg style={{ ...iconStyles }} {...props}>
      <use xlinkHref={`${sprite}#${name}`} />
    </StyledSvg>
  );
};

SpriteIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SpriteIcon;
