import Form from "components/Form";
import { useLocation } from "react-router-dom";
import { StyledRegisterWrapper } from "./StyledRegisterPage";
import GoogleButton from "components/common/googleButton";
import { useMatchMedia } from "helpers/mediaQuery";
import Info from "components/info";
import RegLogContainer from "components/common/container/regLogContainer";

const RegisterPage = () => {
  const { pathname } = useLocation();
  const { isMobile } = useMatchMedia();

  return isMobile ? (
    <RegLogContainer text={"Вже з нами?"} link={"/login"} textLink={"Увійти"}>
      <GoogleButton />
      <Form loc={pathname} btnText={"Зареєструватись"} />
    </RegLogContainer>
  ) : (
    <StyledRegisterWrapper>
      <RegLogContainer text={"Вже з нами?"} link={"/login"} textLink={"Увійти"}>
        <GoogleButton />
        <Form loc={pathname} btnText={"Зареєструватись"} />
      </RegLogContainer>
      <Info />
    </StyledRegisterWrapper>
  );
};

export default RegisterPage;
