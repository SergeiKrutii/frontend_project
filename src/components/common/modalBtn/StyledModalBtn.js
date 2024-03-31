import styled from "styled-components";

const StyledModalBtn = styled.button({
  width: 127,
  height: 40,
  background: "#6D7A8D",
  color: "#ffffff",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
  marginTop: 10,
  marginBottom: 30,
  border: "none",
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  transition: "background-color 0.4s ease",

  "&:hover, :focus": {
    color: "#fff",
    backgroundColor: "#a6abb9",
  },

  "@media screen and (min-width: 768px)": {
    width: 80,
  },
});

export { StyledModalBtn };
