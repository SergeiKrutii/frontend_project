import { motion } from "framer-motion";

import {
  StyledH1,
  StyledInfoWrapper,
  StyledContainerDiv,
  StyledH2,
  StyledParagraph,
  StyledContainerButton,
} from "./StyledInfo";
import SpriteIcon from "../common/spriteIcon";
import { useMatchMedia } from "helpers/mediaQuery";
import NavLink from "components/common/navLink";

const Info = (_) => {
  const { isMobile } = useMatchMedia();

  return (
    <StyledContainerDiv
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <StyledH1>Books Reading</StyledH1>
        <StyledInfoWrapper>
          <StyledH2>Допоможе вам</StyledH2>
          <div>
            <StyledParagraph>
              <SpriteIcon name={"icon_greaterArrow"} />
              Швидше сформулювати свою ціль і розпочати читати
            </StyledParagraph>
            <StyledParagraph>
              <SpriteIcon name={"icon_greaterArrow"} />
              Пропорційно розподілити навантаження на кожний день
            </StyledParagraph>
            <StyledParagraph>
              <SpriteIcon name={"icon_greaterArrow"} />
              Відстежувати особистий успіх
            </StyledParagraph>
          </div>
        </StyledInfoWrapper>
      </div>
      <StyledInfoWrapper>
        <StyledH2>Також ви зможете</StyledH2>
        <div>
          <StyledParagraph>
            <SpriteIcon name={"icon_greaterArrow"} />
            Формувати особисту думку незалежну від інших
          </StyledParagraph>
          <StyledParagraph>
            <SpriteIcon name={"icon_greaterArrow"} />
            Підвищити свої професійні якості опираючись на нові знання
          </StyledParagraph>
          <StyledParagraph>
            <SpriteIcon name={"icon_greaterArrow"} />
            Стати цікавим співрозмовником
          </StyledParagraph>
        </div>
      </StyledInfoWrapper>
      {isMobile && (
        <StyledContainerButton>
          <NavLink
            text={"Увійти"}
            color={"#242A37"}
            backgroundColor={"#fff"}
            redirect={"/login"}
          />
          <NavLink
            text={"Реєстрація"}
            backgroundColor={"#FF6B08"}
            color={"#fff"}
            border={"none"}
            redirect={"/register"}
          />
        </StyledContainerButton>
      )}
    </StyledContainerDiv>
  );
};

export default Info;
