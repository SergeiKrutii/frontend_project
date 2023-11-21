import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledContainerDiv = styled.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    margin-right: auto;
    margin-left: auto;
    padding-left: 25px;
    padding-right: 25px;
    width: 270px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 90px;
    width: 100%;
    height: 790px;
  }
`;

const StyledInfoWrapper = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 20px;
    margin-left: 100px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 90px;
  }
`;

const StyledH1 = styled.h1`
  display: flex;
  justify-content: center;

  margin-top: 30px;
  margin-bottom: 20px;

  color: #242a37;

  font-family: Abril Fatface;
  font-size: 34px;
  line-height: 38px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    font-weight: 400;

    margin-top: 60px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: flex-start;

    margin-top: 133px;
    margin-bottom: 52px;
    margin-left: 242px;

    font-weight: 400;
  }
`;

const StyledH2 = styled.h2`
  color: #242a37;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  line-height: 38px;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 4px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 20px;
  }
`;

const StyledParagraph = styled.p`
  display: flex;
  margin-top: 14px;
  margin-bottom: 14px;

  color: #898f9f;

  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1200px) {
    &:first-child {
      margin-top: 10px;
    }
  }
`;

const StyledContainerButton = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export {
  StyledH1,
  StyledContainerDiv,
  StyledH2,
  StyledParagraph,
  StyledInfoWrapper,
  StyledContainerButton,
};
