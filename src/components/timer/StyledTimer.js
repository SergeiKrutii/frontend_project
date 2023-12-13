import styled from "styled-components";

const StyledTimerWrapper = styled.div`
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

const StyledTimerText = styled.span`
  color: #898f9f;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 38px;
`;

const StyledTimerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 270px;
  height: 60px;

  background: #fff;
  box-shadow: 4px 4px 8px 0px rgba(36, 42, 55, 0.15);

  @media screen and (min-width: 768px) {
    width: 290px;
  }
`;

const StyledTimerElement = styled.div`
  position: relative;

  &:not(:last-child) {
    ::after {
      position: absolute;
      content: ":";
      display: block;
      width: 1px;
      height: 1px;
      top: -3px;
      right: -17px;
      color: #091e3f;
      font-family: Open Sans;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: 38px;
    }
  }
`;

const StyledTimerTime = styled.span`
  color: #091e3f;
  font-family: Open Sans;
  font-size: 25px;

  font-weight: 700;
`;

const StyledTimerUnitPeriod = styled.p`
  color: #898f9f;
  text-align: center;
  font-family: Montserrat;
  font-size: 10px;

  font-weight: 500;
`;

export {
  StyledTimerWrapper,
  StyledTimerText,
  StyledTimerContainer,
  StyledTimerElement,
  StyledTimerTime,
  StyledTimerUnitPeriod,
};
