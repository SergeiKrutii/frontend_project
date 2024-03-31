import styled from "styled-components";

const StyledEmptyStepsContainer = styled.div({
  "@media screen and (min-width: 768px)": {
    display: "flex",
    justifyContent: "center",
  },
});

const StyledEmptySteps = styled.div({
  width: 270,
  height: 425,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 31,

  "@media screen and (min-width: 768px)": {
    display: "block",
    width: 510,
    height: 225,
    background: "#fff",
    marginTop: 40,
    padding: "15px 30px 30px 30px",
  },

  "@media screen and (min-width: 1280px)": {
    marginTop: 42,
  },
});

const StyledStepText = styled.p({
  color: "#242A37",
  fontSize: 14,
  fontWeight: 600,
  lineHeight: "38px",

  "@media screen and (min-width: 768px)": {
    fontSize: 19,
    marginBottom: 10,
  },
});

const StyledStepBox = styled.div({
  marginLeft: 15,

  "@media screen and (min-width: 768px)": {
    marginLeft: 0,
    "&:not:(last-child)": {
      marginTop: 15,
    },
  },
});

const StyledStepOne = styled.div({
  display: "flex",
});

const StyledStepTwo = styled.div({
  display: "flex",
  marginLeft: 37,
  marginTop: 8,
  marginBottom: 20,
});

const StyledStepText2 = styled.p({
  color: "#242A37",
  fontSize: 14,
  fontWeight: 600,
  marginLeft: 10,
  "@media screen and (min-width: 768px)": {
    fontSize: 16,
  },
});

const StyledStepText3 = styled.p({
  color: "#898F9F",
  width: 190,
  fontSize: 14,
  fontWeight: 40,
  marginLeft: 5,

  "@media screen and (min-width: 768px)": {
    width: 372,
  },
});

const StyledStepBtn = styled.button({
  width: 127,
  height: 40,
  background: "#D15807",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
  marginTop: 10,
  border: "none",
});

export {
  StyledEmptyStepsContainer,
  StyledEmptySteps,
  StyledStepText,
  StyledStepBox,
  StyledStepOne,
  StyledStepTwo,
  StyledStepText2,
  StyledStepText3,
  StyledStepBtn,
};
