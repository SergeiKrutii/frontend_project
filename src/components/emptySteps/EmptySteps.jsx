import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import {
  StyledEmptyStepsContainer,
  StyledEmptySteps,
  StyledStepText,
  StyledStepBox,
  StyledStepOne,
  StyledStepTwo,
  StyledStepText2,
  StyledStepText3,
  StyledStepBtn,
} from "./StyledEmptySteps";
import SpriteIcon from "../common/spriteIcon";

const EmptySteps = ({ handleClose = () => {} }) => {
  const location = useLocation();

  return (
    <StyledEmptyStepsContainer>
      <StyledEmptySteps>
        <StyledStepBox>
          <StyledStepText>Крок 1.</StyledStepText>
          <StyledStepOne>
            <SpriteIcon name={"icon-Flat1"} />
            <StyledStepText2>Створіть особисту бібліотеку</StyledStepText2>
          </StyledStepOne>
          <StyledStepTwo>
            <SpriteIcon name={"icon-Vector"} />
            <StyledStepText3>
              Додайте до неї книжки, які маєте намір прочитати.
            </StyledStepText3>
          </StyledStepTwo>
        </StyledStepBox>
        <StyledStepBox>
          <StyledStepText>Крок 2.</StyledStepText>
          <StyledStepOne>
            <SpriteIcon name={"icon-flag"} />
            <StyledStepText2>Сформуйте своє перше тренування</StyledStepText2>
          </StyledStepOne>
          <StyledStepTwo>
            <SpriteIcon name={"icon-Vector"} />
            <StyledStepText3>
              Визначте ціль, оберіть період, розпочинайте тренування.
            </StyledStepText3>
          </StyledStepTwo>
        </StyledStepBox>
        {location.pathname === "/addbook" && (
          <StyledStepBtn type="button" onClick={handleClose}>
            Ok
          </StyledStepBtn>
        )}
      </StyledEmptySteps>
    </StyledEmptyStepsContainer>
  );
};

EmptySteps.propTypes = { handleClose: PropTypes.func };

export default EmptySteps;
