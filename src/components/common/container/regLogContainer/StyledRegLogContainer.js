import styled from "styled-components";
import BackgrouundMob from "components/images/register_mob.png";
import { Link } from "react-router-dom";

const StyledRegLogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  margin-top: 60px;
  margin-top: ${({ $page }) => ($page === "/register" ? "60px" : "70px")};

  width: 400px;
  /* height: 610px; */
  height: ${({ $page }) => ($page === "/register" ? "610px" : "420px")};

  background-color: #fff;

  @media screen and (min-width: 1280px) {
    margin-top: ${({ $page }) => ($page === "/register" ? "90px" : "185px")};
  }
`;

const StyledBackgroundContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  padding-top: 30px;

  height: ${(props) => (props.$page === "/login" ? "370px" : "560px")};
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);
  background: rgba(9, 30, 63, 0.8);

  &::after {
    content: "";
    position: absolute;
    background: url(${BackgrouundMob}), lightgray -193px -198.557px no-repeat;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    /* min-width: 730px; */
    height: ${(props) => (props.$page === "/login" ? "560px" : "730px")};

    padding-top: 0px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 565px;
    height: 790px;
    padding-top: 0px;
  }
`;

const StyledParagraph = styled.div`
  color: #898f9f;
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;

  margin-top: ${(props) => (props.$page === "/login" ? "3px" : "10px")};
`;
const StyledLink = styled(Link)`
  color: #ff6b08;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  line-height: 38px;
  text-decoration-line: underline;
`;

const StyledRegisterWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    /* justify-content: center; */
  }
`;

export {
  StyledRegLogContainer,
  StyledParagraph,
  StyledLink,
  StyledBackgroundContainer,
  StyledRegisterWrapper,
};
