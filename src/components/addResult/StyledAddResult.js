import styled from "styled-components";

const StyledResultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  width: 240px;

  padding: 15px 15px;
  /* margin: 30px 0px; */
  margin-top: 30px;

  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: block;
    width: 510px;

    padding: 21px 84px;
    margin-top: 40px;
  }
`;

const StyledResultTitle = styled.div`
  color: #242a37;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 600;
  line-height: 38px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    font-weight: 700;
  }
`;

const StyledResultsContainer = styled.div`
  height: 90px;
  overflow-y: scroll;
  margin-bottom: 10px;
`;

const StyledResultResultsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledResultResults = styled.div`
  color: #242a37;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

const StyledResultForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-bottom: 21px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-wrap: nowrap;
    align-items: end;

    margin-bottom: 14px;
  }
`;

const StyledResultInputWrapper = styled.div`
  position: relative;
  text-align: start;
  &:not(:last-child) {
    margin-right: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledResultLabel = styled.label`
  color: #898f9f;
  font-family: Montserrat;
  font-size: 11px;
  font-weight: 500;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 5px;
  }
`;

const StyledResultInput = styled.input`
  width: 78px;
  height: 41px;

  border: 1px solid #a6abb9;
  background: #f6f7fb;

  cursor: pointer;

  &:last-child {
    padding: 0px 15px;
  }
`;

const StyledResultDate = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    margin-right: 30px;
    margin-bottom: 0;
  }
`;

const StyledCalendarWrapper = styled.div`
  width: 270px;
  position: absolute;
  z-index: 5;

  @media screen and (max-width: 767px) {
    top: 0px;
    position: absolute;
    left: 0px;
    max-width: 240px;
    z-index: 5;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 250px;
    top: -60px;
    left: 0px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 240px;
    top: 60px;
    left: 0px;
  }
`;

const StyledStatisticResult = styled.div`
  width: 240px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    text-align: start;

    display: block;
  }
`;

const StyledStatisticError = styled.div`
  color: red;
  font-size: 12px;
  font-weight: 600;
`;

export {
  StyledResultWrapper,
  StyledResultTitle,
  StyledResultResultsWrapper,
  StyledResultResults,
  StyledResultInput,
  StyledResultDate,
  StyledResultLabel,
  StyledResultInputWrapper,
  StyledResultForm,
  StyledCalendarWrapper,
  StyledStatisticResult,
  StyledResultsContainer,
  StyledStatisticError,
};
