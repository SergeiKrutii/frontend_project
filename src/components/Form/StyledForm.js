import styled from "styled-components";

const StyledFormContainer = styled.div`
  /* width: 320px;
  height: 648px; */
  @media screen and (min-width: 768px) {
    background-color: #fff;
    color: #898f9f;
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;

    width: 4;
    height: 610px;
    z-index: 5;
  }
`;

const StyledInputWrapper = styled.div`
  margin-bottom: 10px;
  width: 270px;

  /* &:nth-child(4) {
    margin-bottom: 30px;

  } */

  &:last-of-type {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;

const StyledLabel = styled.label`
  position: relative;
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  line-height: 38px;

  &::after {
    content: " *";
    top: 0;
    right: 0;

    color: #f25137;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px;
  }

  @media screen and (min-width: 768px) {
    color: #898f9f;
    font-size: 14px;
    font-weight: 500;
    line-height: 38px;
  }
`;

const StyledInput = styled.input`
  z-index: 6;
  background-color: #fff;
  width: 270px;
  height: 42px;
  border: none;
  background: #f5f7fa;
  box-shadow: 0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset;

  color: #a6abb9;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 38px;

  &:nth-child(4) {
    margin-bottom: 30px;
    background-color: red;
  }
`;

const StyledFormButton = styled.button``;

export {
  StyledFormContainer,
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledInputWrapper,
};
