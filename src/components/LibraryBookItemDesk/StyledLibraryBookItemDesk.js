import styled from "styled-components";
const tableStyle = {
  color: "#242A37",
  fontSize: 12,
  fontWeight: 500,
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const StyledBookItem = styled.div(({ theme }) => ({
  width: theme.page === "/traning" ? "678px" : "638px",
  height: 60,
  display: "flex",
  alignItems: "center",
  background: theme.page === "/traning" ? "transparent" : "#fff",
  boxShadow:
    theme.page === "/traning" ? "" : "0px 2px 3px 0px rgba(9, 30, 63, 0.10)",
  padding: theme.page === "/traning" ? "" : "0px 20px",

  "@media screen and (min-width: 1280px)": {
    width: theme.page === "/traning" ? "856px" : "1097px",
    height: theme.page === "/traning" ? 40 : 62,
    marginBottom: 0,
    padding:
      theme.page === "/traning" ? "0px 25px 0px 0px" : "0px 85px 0px 20px",
  },
}));

const StyledTimedDiv = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    box-shadow: ${(props) =>
      props.theme.page === "/library" &&
      "0px 2px 3px 0px rgba(9, 30, 63, 0.10)"};

    &:first-child {
      border-top: ${(props) =>
        props.theme.page === "/traning" && "2px solid rgba(224, 229, 235, 1)"};
      border-bottom: ${(props) =>
        props.theme.page === "/traning" && "2px solid rgba(224, 229, 235, 1)"};
    }
    &:not(:first-child) {
      border-bottom: 2px solid rgba(224, 229, 235, 1);
    }
  }

  @media screen and (min-width: 1280px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const StyledBookTitle = styled.p(({ theme }) => ({
  ...tableStyle,
  width: theme.isRead ? 135 : theme.page !== "/library" ? 180 : 255,
  marginRight: theme.isRead ? 0 : theme.page !== "/library" ? 44 : 30,
  marginLeft: 20,

  "@media screen and (min-width: 768px) and (max-width: 1279px)": {
    maxHeight: 34,
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: 500,
  },
  "@media screen and (min-width: 1280px)": {
    width: theme.isRead ? 260 : theme.page !== "/library" ? 290 : 500,
    marginRight: theme.isRead ? 41 : theme.page !== "/library" ? 32 : 68,
    fontSize: "16px",
  },
}));

const StyledBookAuthor = styled.p(({ theme }) => ({
  ...tableStyle,
  width: theme.isRead ? 90 : 158,
  marginRight: theme.isRead ? 0 : 25,
  marginLeft: theme.isRead ? 23 : 0,

  "@media screen and (min-width: 768px)": {
    fontSize: "14px",
  },

  "@media screen and (min-width: 1280px)": {
    width: theme.isRead ? 167 : theme.page !== "/library" ? 200 : 300,
    marginLeft: 0,
    marginRight: theme.page === "/library" ? 52 : 25,
    fontSize: "16px",
  },
}));

const StyledBookYear = styled.p(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: "#242A37",
  width: theme.isRead ? 40 : 32,
  textAlign: "right",

  marginLeft: theme.isRead ? 5 : 0,
  marginRight: theme.isRead ? 0 : 66,

  "@media screen and (min-width: 1280px)": {
    width: 40,
    marginLeft: 0,
    textAlign: theme.isRead ? "end" : "start",
    marginRight: theme.isRead ? 74 : theme.page === "/traning" ? 118 : 64,
    fontSize: "16px",
  },
}));

const StyledBookPage = styled.p(({ theme }) => ({
  fontSize: "14px",
  textAlign: "right",

  fontWeight: 500,
  width: theme.isRead ? 50 : 30,
  color: "#242A37",

  marginLeft: theme.isRead ? 27 : 0,
  marginRight: theme.isRead ? 28 : 0,
  "@media screen and (min-width: 1280px)": {
    marginLeft: theme.isRead ? 0 : 0,
    width: theme.isRead ? 40 : 30,
    marginRight: theme.isRead ? 106 : 0,
    fontSize: "16px",
  },
}));

const StyledBookButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  fill: #a6abb9;
  margin-left: 48px;
  cursor: pointer;
  &:hover,
  :focus {
    color: #fff;
    fill: #d15807;
  }

  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-right: ${({ theme }) =>
      theme.page === "/traning" ? "0px" : "10px"};
  }
`;

export {
  StyledBookItem,
  StyledBookTitle,
  StyledBookAuthor,
  StyledBookYear,
  StyledBookPage,
  StyledBookButton,
  StyledTimedDiv,
};
