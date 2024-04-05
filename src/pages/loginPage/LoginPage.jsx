import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import AuthorQuote from "components/common/authorQuote";
import RegLogContainer from "components/common/container/regLogContainer";
import GoogleButton from "components/common/googleButton";
import Form from "components/form";
import { StyledLoginWrapper } from "./StyledLoginPage";

const LoginPage = () => {
  const { pathname } = useLocation();

  return (
    <StyledLoginWrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <RegLogContainer link={"/register"} textLink={"Реєстрація"}>
        <GoogleButton />
        <Form loc={pathname} btnText={"Увійти"} />
      </RegLogContainer>
      <AuthorQuote />
    </StyledLoginWrapper>
  );
};

export default LoginPage;
