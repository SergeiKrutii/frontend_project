import PropTypes from "prop-types";
import SpriteIcon from "../spriteIcon/SpriteIcon";
import MainButton from "../mainButton/MainButton";
import {
  StyledNiceJobWrapper,
  StyledNiceJobText,
} from "./StyledContentForModal";

const NiceJob = ({ handleToggle }) => {
  return (
    <StyledNiceJobWrapper>
      <SpriteIcon name={"icon_goodJob"} />
      <StyledNiceJobText>Вітаєм! Ви досягли своєї мети!</StyledNiceJobText>
      <MainButton text={"OK"} typeBtn={"button"} btnAtion={handleToggle} />
    </StyledNiceJobWrapper>
  );
};

NiceJob.propTypes = {};

export default NiceJob;
