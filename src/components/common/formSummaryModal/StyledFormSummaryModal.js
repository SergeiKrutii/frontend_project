import styled from "styled-components";

const StyledFormSummaryModal = styled.div({
  width: 270,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@media screen and (min-width: 768px)": {
    width: 570,
    alignItems: "flex-start",
  },
});

const StyledFormSummaryModalBox = styled.div({
  padding: "17px 30px 35px 29px",

  "@media screen and (min-width: 768px)": {
    padding: "7px 30px 50px 30px",
  },
});

const StyledTextSummaryModal = styled.p({
  color: "#242A37",
  fontSize: 16,
  fontWeight: 500,
  marginBottom: 10,

  "@media screen and (min-width: 768px)": {
    marginTop: 10,
  },
});

const StyledInputSummaryModal = styled.textarea({
  width: 210,
  height: 170,
  border: "1px solid #A6ABB9",
  padding: 0,

  "@media screen and (min-width: 768px)": {
    width: 509,
    justifyContent: "center",
  },
});

const StyledStarRating = styled.div({
  marginBottom: 12,
});

const StyledButtonBox = styled.div({
  marginTop: 25,

  "@media screen and (min-width: 768px)": {
    display: "flex",
    justifyContent: "center",
  },
});

export {
  StyledFormSummaryModal,
  StyledTextSummaryModal,
  StyledInputSummaryModal,
  StyledStarRating,
  StyledButtonBox,
  StyledFormSummaryModalBox,
};
