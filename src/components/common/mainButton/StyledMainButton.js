import styled from "styled-components";

export const logRegBtn = {
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "38px",
  width: "270px",
  height: "60px",
  color: "#fff",
};

export const addResult = (isMobile) => ({
  width: isMobile ? "171px" : "240px",
  height: "42px",
  color: "#FFF",
  textAlign: "center",
  fontFamily: "Montserrat",
  fontSize: isMobile ? "14px" : "16px",
  fontWeight: isMobile ? "500" : "600",
  lineHeight: "38px",
  border: "none",
});

export const modalBtn = (isMobile, text) => ({
  width: "97px",
  height: "40px",
  background: text === "Вийти" || text === "OK" ? "#FF6B08" : "#fff",
  boxShadow:
    text === "Вийти" || text === "OK"
      ? "0px 2px 4px 0px rgba(0, 0, 0, 0.25)"
      : "",
  border: text === "Вийти" || text === "OK" ? "none" : "1px solid #242A37",
  color: text === "Вийти" || text === "OK" ? "#FFF" : "#242A37",
  textAlign: "center",
  fontFamily: "Montserrat",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "38px",
});

export const modalCancel = (isMobile) => ({});

const StyledMainButton = styled.button`
  width: 127px;
  height: 40px;
  border: 1px solid #000;
  padding: 0;
  cursor: pointer;

  background-color: ${(props) => (props.$reg === "true" ? "#FF6B08" : "#FFF")};

  color: #242a37;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 38px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  transition: background-color 0.4s ease;

  &:hover,
  &:focus {
    background-color: #d15807;
  }

  @media screen and (min-width: 768px) {
    border: none;
  }

  /* "& > *:not(:last-child)": {
    marginRight: 15,
  }, */
`;

export default StyledMainButton;
