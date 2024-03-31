import styled from "styled-components";

const StyledFormMobileBox = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@media screen and (min-width: 1280px)": {
    flexDirection: "row",
    alignItems: "flex-start",

    marginBottom: 30,
  },
});

const StyledFormDestopBox = styled.div({
  "@media screen and (min-width: 1280px)": {
    minWidth: 594,
  },
});

const StyledForm = styled.form({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "15px",

  "@media screen and (min-width: 768px)": {
    marginTop: 20,
  },

  "@media screen and (min-width: 1280px)": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",

    marginTop: 40,
  },
});

const StyledConponentWrapper = styled.div`
  display: flex;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    margin-top: 15px;
    margin-bottom: 40px;
  }
`;

const StyledInputWrapper = styled.div({
  display: "flex",
  flexDirection: "column",

  "&:nth-child(-n + 3)": {
    marginBottom: 10,

    "@media screen and (min-width: 768px)": {
      marginBottom: 0,
    },

    "@media screen and (min-width: 1280px)": {
      marginBottom: 0,
      marginRight: 15,

      "&:last-child": {
        marginRight: 0,
      },
    },
  },

  "&:first-child": {
    // marginTop: 30,
    "@media screen and (min-width: 768px)": {
      marginTop: 0,
    },

    "@media screen and (min-width: 1280px)": {},
  },
});

const StyledInputWrapperBoxMobile = styled.div`
  display: flex;

  ${StyledInputWrapper}:nth-child(n + 2):nth-child(-n + 3) {
    @media screen and (min-width: 768px) {
      margin-left: 27px;
    }
  }
`;

const StyledLabel = styled.label({
  left: 0,
  bottom: 40,
  color: "#898F9F",
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "25px",
});

const StyledInputTitle = styled.input({
  background: "inherit",
  backgroundColor: " #fff",
  boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
  width: 255,
  paddingLeft: 13,
  height: 41,
  border: "1px solid #E5E5E5",

  "@media screen and (min-width: 768px)": {
    width: 581,
  },

  "@media screen and (min-width: 1280px)": {
    width: 331,
    marginTop: 0,
  },

  "&:focus": {
    background: "#FFF",
    outline: "none",
    boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
    border: "1px solid rgba(0, 102, 204, 0)",
  },
});

const StyledInputAuthor = styled.input({
  background: "inherit",
  boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
  width: 255,
  paddingLeft: 13,
  height: 41,
  border: "1px solid #A6ABB9",

  "@media screen and (min-width: 768px)": {
    width: 235,
    marginRight: 27,
  },
  "&:focus": {
    background: "#FFF",
    outline: "none",
    boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
    border: "1px solid rgba(0, 102, 204, 0)",
  },

  "@media screen and (min-width: 1280px)": {
    marginRight: 0,
  },
});

const StyledInputYear = styled.input({
  background: "inherit",
  boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
  width: 255,
  paddingLeft: 13,
  height: 41,
  border: "1px solid #A6ABB9",

  "@media screen and (min-width: 768px)": {
    width: 132,
    marginRight: 27,
  },

  "@media screen and (min-width: 1280px)": {
    width: 115,
    marginRight: 0,
  },
  "&:focus": {
    background: "#FFF",
    outline: "none",
    boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
    border: "1px solid rgba(0, 102, 204, 0)",
  },
});

const StyledInputPages = styled.input({
  background: "inherit",
  boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
  width: 255,
  paddingLeft: 13,
  height: 41,
  border: "1px solid #A6ABB9",

  "@media screen and (min-width: 768px)": {
    width: 132,
  },

  "@media screen and (min-width: 1280px)": {
    width: 119,
  },
  "&:focus": {
    background: "#FFF",
    outline: "none",
    boxShadow: "0px 1px 2px 0px rgba(29, 29, 27, 0.15) inset",
    border: "1px solid rgba(0, 102, 204, 0)",
  },
});

const StyledFormBtn = styled.button({
  width: 171,
  height: 41,
  border: "1px solid #242A37",
  background: "#F6F7FB",
  marginTop: 35,
  marginLeft: "auto",
  marginRight: "auto",
  cursor: "pointer",
  transition: "background-color 0.4s ease",

  "&:hover, :focus": {
    color: "#fff",
    backgroundColor: "#a6abb9",
  },

  "@media screen and (min-width: 768px)": {
    marginTop: 0,
    marginBottom: 40,
  },

  "@media screen and (min-width: 1280px)": {
    height: 42,
    marginLeft: 40,
    marginBottom: 0,
  },
});

export {
  StyledForm,
  StyledInputWrapper,
  StyledLabel,
  StyledFormBtn,
  StyledInputTitle,
  StyledInputAuthor,
  StyledInputYear,
  StyledInputPages,
  StyledFormMobileBox,
  StyledInputWrapperBoxMobile,
  StyledFormDestopBox,
  StyledConponentWrapper,
};
