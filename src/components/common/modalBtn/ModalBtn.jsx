import PropTypes from "prop-types";
import { StyledModalBtn } from "./StyledModalBtn";
import MainModal from "../mainModal/MainModal";

const ModalBtn = ({ text, component, handleToggle, open, style }) => {
  return (
    <>
      <StyledModalBtn style={{ ...style }} type="button" onClick={handleToggle}>
        {text}
      </StyledModalBtn>
      <MainModal
        component={component}
        handleToggle={handleToggle}
        open={open}
      />
    </>
  );
};

ModalBtn.propTypes = {
  text: PropTypes.string.isRequired,
  component: PropTypes.element,
  handleToggle: PropTypes.func,
  open: PropTypes.bool,
  style: PropTypes.object,
};

export default ModalBtn;
