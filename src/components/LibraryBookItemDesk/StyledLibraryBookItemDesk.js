import styled from "styled-components";

const StyledBookItem = styled.div(({ $page }) => ({
  width: 678,
  height: 62,
  display: "flex",
  alignItems: "center",
  background: $page === "/traning" ? "transparent" : "#fff",
  marginBottom: 10,
  boxShadow:
    $page === "/traning" ? "" : "0px 2px 3px 0px rgba(9, 30, 63, 0.10)",
}));

const StyledBookTitle = styled.p((props) => ({
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
  minWidth: props.ifrestrue ? 170 : 273,
  maxWidth: props.ifrestrue ? 170 : 273,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  marginLeft: 15,
}));

const StyledBookAuthor = styled.p({
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
  width: 145,
  maxWidth: 145,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  marginLeft: 15,
});

const StyledBookYear = styled.p((props) => ({
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
  width: 40,
  maxWidth: 40,

  marginLeft: props.ifrestrue ? 0 : 60,
}));

const StyledBookPage = styled.p((props) => ({
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
  width: 50,
  maxWidth: 50,

  marginLeft: props.ifrestrue ? 0 : 20,
}));

const StyledBookButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    margin-left: 0;
  }
`;

export {
  StyledBookItem,
  StyledBookTitle,
  StyledBookAuthor,
  StyledBookYear,
  StyledBookPage,
  StyledBookButton,
};
