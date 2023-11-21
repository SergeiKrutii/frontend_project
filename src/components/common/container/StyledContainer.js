import styled from "styled-components";

export const StyledContainer = styled.div(() => ({
  fontFamily: "Roboto",
  color: "#fff",
  minHeight: 648,
  margin: "0 auto",
  maxWidth: 320,
  paddingLeft: 25,
  paddingRight: 25,

  "@media screen  and (min-width: 768px)": {
    maxWidth: 768,
    paddingLeft: 45,
    paddingRight: 45,
    minHeight: 1025,
  },

  "@media screen  and (min-width: 1280px)": {
    maxWidth: 1280,
    minHeight: 790,
    // paddingLeft: 110,
    // paddingRight: 110,
    display: "flex",
    justifyContent: "center",
  },
}));
