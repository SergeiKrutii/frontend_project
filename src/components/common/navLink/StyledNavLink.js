import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 127px;
  height: 40px;
  border: 1px solid #000;
  padding: 0;
  cursor: pointer;
  text-decoration: none;

  background-color: ${(props) => (props.$reg === "true" ? "#FF6B08" : "#FFF")};

  color: #242a37;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 38px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    background-color: #d15807;
  }

  @media screen and (min-width: 768px) {
    border: none;
  }
`;

export { StyledLink };
