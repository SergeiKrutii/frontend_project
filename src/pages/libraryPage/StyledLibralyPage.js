import styled from "styled-components";

const StyledLibralyPage = styled.div({
  display: "flex",
  justifyContent: "center",
  minHeight: 648,
  background: "#F6F7FB",
  padding: "0px 25px",
  "@media(min-width: 768px)": {
    display: "block",
    minHeight: 1025,
    padding: "0px",
  },
  "@media(min-width: 1280px)": {
    display: "block",
    minHeight: 850,
  },
});

export { StyledLibralyPage };
