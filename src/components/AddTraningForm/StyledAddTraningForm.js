import styled from "styled-components";

const StyledAddTraningContainer = styled.div`
  max-width: 270px;
  height: 588px;
  /* margin-top: 55px; */

  @media screen and (min-width: 768px) {
    max-width: 678px;
    height: auto;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 886px;
    margin-top: 50px;
  }
`;

const StyledAddTraningWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledTraningTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 60px;

  background: #b1b5c2;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
  margin-bottom: 20px;
  margin-top: 25px;

  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 38px;

  @media screen and (min-width: 768px) {
    width: 678px;

    margin-top: 0px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 886px;
    margin-bottom: 25px;
  }
`;
const StyledTraningDate = styled.span`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 244px;
  padding: 1px 13px;
  cursor: pointer;

  margin-bottom: 20px;

  border: 1px solid #a6abb9;
  background: #f6f7fb;
  color: #a6abb9;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 38px;

  /* &::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;

    background-image: url("");
  } */

  @media screen and (min-width: 768px) {
    width: 223px;

    margin-bottom: 0px;
    padding: 1px 13px;
  }
`;
const StyledTraningBooksSelect = styled.select`
  width: 270px;
  height: 42px;

  margin-bottom: 35px;
  padding: 2px 13px;
  cursor: pointer;

  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset;
  border: none;
  color: #a6abb9;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;

  @media screen and (min-width: 768px) {
    width: 482px;

    margin-bottom: 0px;
    margin-right: 25px;
  }
  @media screen and (min-width: 1280px) {
    width: 669px;

    margin-right: 46px;
  }
`;
const StyledAddTraningButton = styled.button`
  width: 171px;
  height: 42px;

  margin-right: auto;
  margin-left: auto;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: 1px solid #242a37;
  background: #f6f7fb;

  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 38px;

  transition: background-color 0.4s ease;

  &:hover,
  :focus {
    color: #fff;
    background-color: #d15807;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const StyledCalendarWrapper = styled.div`
  width: 270px;
  position: absolute;

  @media screen and (max-width: 767px) {
    top: 0px;
    position: absolute;
    left: 1px;
    max-width: 280px;
    z-index: 5;
  }

  @media screen and (min-width: 768px) {
    max-width: 250px;
    left: 0px;
    z-index: 5;
  }
`;

const StyledTraningDateWrapper = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    &:first-child {
      margin-right: 45px;
    }
    margin-bottom: 25px;
  }
`;

export {
  StyledAddTraningContainer,
  StyledTraningBooksSelect,
  StyledTraningDate,
  StyledTraningTitle,
  StyledAddTraningButton,
  StyledAddTraningWrapper,
  StyledCalendarWrapper,
  StyledTraningDateWrapper,
};
