import PropTypes from "prop-types";
import StyledMainButton from "./StyledMainButton";
import { useMatchMedia } from "helpers/mediaQuery";

const MainButton = ({
  text,
  btnAtion,
  register,
  typeBtn,
  isDatePicked,
  ...props
}) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const deviceSize = isTablet || isDesktop;

  const logRegBtn = {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "38px",
    width: "270px",
    height: "60px",
    color: "#fff",
  };

  const addResult = {
    width: isMobile ? "171px" : "240px",
    height: "42px",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: isMobile ? "14px" : "16px",
    fontWeight: isMobile ? "500" : "600",
    lineHeight: "38px",
    border: "none",
  };

  const typeOfButton =
    text === "Зареєструватись" || text === "Увійти"
      ? { ...props, ...logRegBtn }
      : { ...props, ...addResult };

  return (
    <StyledMainButton
      disabled={isDatePicked}
      type={typeBtn}
      $reg={register}
      style={typeOfButton}
      onClick={btnAtion}
    >
      {text}
    </StyledMainButton>
  );
};

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  btnAtion: PropTypes.func,
  register: PropTypes.string,
  typeBtn: PropTypes.string.isRequired,
};

export default MainButton;
