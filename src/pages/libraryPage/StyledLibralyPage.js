import styled from "styled-components";

const StyledLibralyPage = styled.div({
  minHeight: 648,
  background: "#F6F7FB",
  padding: "0px 25px",
  "@media(min-width: 768px)": {
    minHeight: 1025,
    padding: "0px",
  },
  "@media(min-width: 1280px)": {
    minHeight: 850,
  },
});

export { StyledLibralyPage };
