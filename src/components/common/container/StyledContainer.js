import styled from "styled-components";

export const StyledContainer = styled.div(() => ({
  fontFamily: "Roboto",
  color: "#fff",
  minHeight: 648,
  margin: "0 auto",
  maxWidth: 320,
  paddingLeft: 25,
  paddingRight: 25,

  background: "#f6f7fb",

  "@media screen  and (min-width: 768px)": {
    maxWidth: 768,
    paddingLeft: 45,
    paddingRight: 45,
    minHeight: 1025,
  },

  "@media screen  and (min-width: 1280px)": {
    maxWidth: 1280,
    minHeight: 790,
    padding: "0px 39px",
    // display: "flex",
    // justifyContent: "center",
  },
}));
