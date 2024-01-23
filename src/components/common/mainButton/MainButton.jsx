import PropTypes from "prop-types";
import StyledMainButton from "./StyledMainButton";
import { useMatchMedia } from "helpers/mediaQuery";
import { logRegBtn, addResult, modalBtn } from "./StyledMainButton";

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

  const typeOfButton =
    text === "Зареєструватись" || text === "Увійти"
      ? { ...props, ...logRegBtn }
      : text === "Вийти" || text === "Відміна" || text === "OK"
      ? { ...props, ...modalBtn(isMobile, text) }
      : { ...props, ...addResult(isMobile) };

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
