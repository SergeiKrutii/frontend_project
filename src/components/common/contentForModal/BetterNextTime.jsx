import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import SpriteIcon from "../spriteIcon";
import MainButton from "../mainButton";
import {
  StyledNiceJobWrapper,
  StyledNiceJobText,
} from "./StyledContentForModal";
import { clearGoal } from "redux/goal/goalsSlice";

const BetterNextTime = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClearGoal = () => {
    dispatch(clearGoal());
    navigate("/library");
  };

  return (
    <StyledNiceJobWrapper>
      <SpriteIcon name={"icon_goodJob"} />
      <StyledNiceJobText>
        Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться)
      </StyledNiceJobText>
      <MainButton text={"OK"} typeBtn={"button"} btnAtion={handleClearGoal} />
    </StyledNiceJobWrapper>
  );
};

export default BetterNextTime;
