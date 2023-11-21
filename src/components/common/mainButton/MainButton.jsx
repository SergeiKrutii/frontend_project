import PropTypes from "prop-types";
import StyledMainButton from "./StyledMainButton";

const mainButton = ({ text, btnAtion, register, typeBtn, ...props }) => {
  const logRegBtn = {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "38px",
    width: "270px",
    height: "60px",
    color: "#fff",
  };

  return (
    <StyledMainButton
      type={typeBtn}
      $reg={register}
      style={
        text === "Зареєструватись" || text === "Увійти"
          ? { ...props, ...logRegBtn }
          : props
      }
      onClick={btnAtion}
    >
      {text}
    </StyledMainButton>
  );
};

mainButton.propTypes = {
  text: PropTypes.string.isRequired,
  btnAtion: PropTypes.func,
  register: PropTypes.string.isRequired,
  typeBtn: PropTypes.string.isRequired,
};

export default mainButton;
