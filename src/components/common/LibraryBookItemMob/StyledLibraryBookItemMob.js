import styled from "styled-components";

const StyledBookItem = styled.div(({ $page }) => ({
  width: "270px",
  minHeight: "120px",
  background: $page === "/traning" ? "transparent" : "white",
  marginTop: $page === "/traning" ? 0 : 10,
}));

const StyledItemTitleBook = styled.div(({ $page }) => ({
  // width: 175,
  display: "flex",
  alignItems: "end",
  marginLeft: $page === "/traning" ? 0 : 22,
  paddingTop: $page === "/traning" ? 0 : 13,
}));

const StyledBookButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-left: auto;
`;

const StyledNameBook = styled.p({
  marginLeft: 13,
  fontSize: 12,
  fontFamily: "Montserrat",
  fontWeight: 500,
  color: "#242A37",
});

const StyledTableMobile = styled.table(({ $page }) => ({
  marginLeft: $page === "/traning" ? 32 : 55,
}));

const StyledTableLine = styled.tr({
  textAlign: "center",
  height: 10,
});

const StyledTableChapter = styled.th({
  height: 20,
  width: 63,
  color: "#898F9F",
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
  lineHeight: "28px",
});

const StyledTableMeaning = styled.th({
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
  fontFamily: "Montserrat",
  color: "#242A37",
});

const StyledRatingBox = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 3,
});
const StyledRatingChapter = styled.div({
  height: 20,
  width: 65,
  color: "#898F9F",
  fontSize: 12,
  fontWeight: 500,
});
const StyledRatingStarsBox = styled.div({
  display: "flex",
});

export {
  StyledBookItem,
  StyledItemTitleBook,
  StyledNameBook,
  StyledTableMobile,
  StyledTableLine,
  StyledTableChapter,
  StyledTableMeaning,
  StyledRatingChapter,
  StyledRatingBox,
  StyledRatingStarsBox,
  StyledBookButton,
};
