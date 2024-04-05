import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Form from "components/form";
import { StyledRegisterWrapper } from "./StyledRegisterPage";
import GoogleButton from "components/common/googleButton";
import { useMatchMedia } from "helpers/mediaQuery";
import Info from "components/info";
import RegLogContainer from "components/common/container/regLogContainer";

const RegisterPage = () => {
  const { pathname } = useLocation();
  const { isMobile } = useMatchMedia();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isMobile ? (
        <RegLogContainer
          text={"Вже з нами?"}
          link={"/login"}
          textLink={"Увійти"}
        >
          <GoogleButton />
          <Form loc={pathname} btnText={"Зареєструватись"} />
        </RegLogContainer>
      ) : (
        <StyledRegisterWrapper>
          <RegLogContainer
            text={"Вже з нами?"}
            link={"/login"}
            textLink={"Увійти"}
          >
            <GoogleButton />
            <Form loc={pathname} btnText={"Зареєструватись"} />
          </RegLogContainer>
          <Info />
        </StyledRegisterWrapper>
      )}
    </motion.div>
  );
};

export default RegisterPage;
