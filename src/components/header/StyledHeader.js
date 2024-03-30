import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  position: ${({ $location }) =>
    $location === "/library" ? "sticky" : "relative"};
  top: 0px;
  justify-content: ${(props) =>
    props.$login === true ? "space-between" : "center"};
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
  width: auto;
  z-index: 11;

  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: 768px) {
    justify-content: ${(props) =>
      props.$login === true ? "space-between" : "flex-start"};
    position: relative;
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
