import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { useLogoutMutation } from "redux/auth/authApiSlice";
import MainButton from "../mainButton";
import {
  StyledWarningWrapper,
  StyledWarningText,
  StyledWarningButtonWrapper,
} from "./StyledContentForModal";
import { clearBooksState } from "redux/book/booksSlice";

const Warning = ({ handleToggle = () => {} }) => {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const handleLogout = () => {
    logout();
    dispatch(clearBooksState());
  };

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
        <MainButton text={"Вийти"} typeBtn={"button"} btnAtion={handleLogout} />
      </StyledWarningButtonWrapper>
    </StyledWarningWrapper>
  );
};

Warning.propTypes = {
  handleToggle: PropTypes.func,
};

export default Warning;
