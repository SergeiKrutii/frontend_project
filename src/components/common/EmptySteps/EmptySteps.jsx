import React from 'react'
import PropTypes from 'prop-types'
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
} from './StyledEmptySteps';
import SpriteIcon from '../spriteIcon';
import { useLocation } from 'react-router-dom';

const EmptySteps = ({ handleClose }) => {
  const location = useLocation();

  return (
    <StyledEmptyStepsContainer>
    <StyledEmptySteps>
          <StyledStepBox>
              <StyledStepText>Крок 1.</StyledStepText>
            <StyledStepOne>
               <SpriteIcon width="22" height="17" name={'icon-Flat1'} />
               <StyledStepText2>Створіть особисту бібліотеку</StyledStepText2>
            </StyledStepOne>
            <StyledStepTwo>
               <SpriteIcon width="10" height="12" name={'icon-Vector'} />
               <StyledStepText3>Додайте до неї книжки, які маєте намір прочитати.</StyledStepText3>
            </StyledStepTwo>
          </StyledStepBox>  
          <StyledStepBox>
              <StyledStepText>Крок 2.</StyledStepText>
            <StyledStepOne>
                <SpriteIcon width="22" height="17" name={'icon-flag'} />
                <StyledStepText2>Сформуйте своє перше тренування</StyledStepText2>
            </StyledStepOne>
            <StyledStepTwo>
                <SpriteIcon width="10" height="12" name={'icon-Vector'} />
                <StyledStepText3>Визначте ціль, оберіть період, розпочинайте тренування.</StyledStepText3>
            </StyledStepTwo>
      </StyledStepBox>
      {location.pathname === '/addbook' ? (<StyledStepBtn type='button' onClick={handleClose}>Ok</StyledStepBtn>) : (null)}
          
      </StyledEmptySteps>
      </StyledEmptyStepsContainer>
  )
}

EmptySteps.propTypes = {}

export default EmptySteps