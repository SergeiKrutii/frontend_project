import { useLocation } from "react-router-dom";

import AuthorQuote from "components/common/authorQuote";
import RegLogContainer from "components/common/container/regLogContainer";
import GoogleButton from "components/common/googleButton";
import Form from "components/Form";
import { StyledLoginWrapper } from "./StyledLoginPage";
import { useMatchMedia } from "helpers/mediaQuery";

const LoginPage = () => {
  const { pathname } = useLocation();
  const { isDesktop } = useMatchMedia();

  return isDesktop ? (
    <StyledLoginWrapper>
      <RegLogContainer link={"/register"} textLink={"Реєстрація"}>
        <GoogleButton />
        <Form loc={pathname} btnText={"Увійти"} />
      </RegLogContainer>
      <AuthorQuote />
    </StyledLoginWrapper>
  ) : (
    <div>
      <RegLogContainer link={"/register"} textLink={"Реєстрація"}>
        <GoogleButton />
        <Form loc={pathname} btnText={"Увійти"} />
      </RegLogContainer>
      <AuthorQuote />
    </div>
  );
};

export default LoginPage;
