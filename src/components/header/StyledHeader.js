import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  /* justify-content: space-around; */
  justify-content: ${(props) =>
    props.$location === true ? "space-between" : "center"};
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  width: auto;

  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: 768px) {
    justify-content: ${(props) =>
      props.$location === true ? "space-between" : "flex-start"};
    /* display: block; */
    /* margin-left: 25px;
    padding-left: 0px; */
    /* justify-content: flex-start; */
    /* min-width: 767px; */
  }
  @media screen and (min-width: 1280px) {
    /* display: block; */
    /* margin-left: auto;
    margin-right: auto; */
    /* margin-left: 25px; */
    /* min-width: 1200px; */
  }
`;

const StyledTitle = styled.h1`
  padding-top: 16px;
  padding-bottom: 16px;

  color: #242a37;

  font-family: Abril Fatface;
  font-size: 20px;
`;

export { StyledHeader, StyledTitle };
