import PropTypes from "prop-types";
import { useLogoutMutation } from "redux/auth/authApiSlice";
import MainButton from "../mainButton";
import {
  StyledWarningWrapper,
  StyledWarningText,
  StyledWarningButtonWrapper,
} from "./StyledContentForModal";

const Warning = ({ handleToggle }) => {
  const [logout] = useLogoutMutation();

  return (
    <StyledWarningWrapper>
      <StyledWarningText>
        Якщо Ви вийдете з програми незбережені дані будуть втрачені
      </StyledWarningText>
      <StyledWarningButtonWrapper>
        <MainButton
          text={"Відміна"}
          typeBtn={"button"}
          btnAtion={handleToggle}
        />
        <MainButton text={"Вийти"} typeBtn={"button"} btnAtion={logout} />
      </StyledWarningButtonWrapper>
    </StyledWarningWrapper>
  );
};

Warning.propTypes = {};

export default Warning;
