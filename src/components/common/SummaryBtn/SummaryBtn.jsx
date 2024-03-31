import PropTypes from "prop-types";

import { StyledButton } from "./StyledSummaryButton";

const SummaryBtn = ({ text, style, btnAction, shuldDisable = false }) => {
  return (
    <StyledButton
      disabled={shuldDisable}
      type="button"
      style={{ ...style }}
      onClick={btnAction}
    >
      {text}
    </StyledButton>
  );
};

SummaryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  btnAction: PropTypes.func,
  shuldDisable: PropTypes.bool,
};

export default SummaryBtn;
