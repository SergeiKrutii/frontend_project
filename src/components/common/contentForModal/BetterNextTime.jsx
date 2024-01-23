import SpriteIcon from "../spriteIcon/SpriteIcon";
import MainButton from "../mainButton/MainButton";
import {
  StyledNiceJobWrapper,
  StyledNiceJobText,
} from "./StyledContentForModal";

const BetterNextTime = ({ handleToggle }) => {
  return (
    <StyledNiceJobWrapper>
      <SpriteIcon name={"icon_goodJob"} />
      <StyledNiceJobText>
        Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться)
      </StyledNiceJobText>
      <MainButton text={"OK"} typeBtn={"button"} btnAtion={handleToggle} />
    </StyledNiceJobWrapper>
  );
};

export default BetterNextTime;
