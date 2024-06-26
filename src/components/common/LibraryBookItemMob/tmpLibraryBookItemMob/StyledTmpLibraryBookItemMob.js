import styled from "styled-components";

const StyledBookItem = styled.div`
  width: 270px;
  min-height: 120px;
  background: "#FFF";
  background-color: ${(props) =>
    props.$pathname === "/library" ? "#FFF" : "transparent"};
  padding: 10px 0px;
`;

const StyledItemTitleBook = styled.div({
  display: "flex",
  marginLeft: 22,
  paddingTop: 13,
  marginBottom: "15px",
});

const StyledNameBook = styled.p({
  marginLeft: 13,
  fontSize: 12,
  fontWeight: 500,
  color: "#242A37",
});

const StyledTableMobile = styled.table({
  marginLeft: 55,
});

const StyledTableLine = styled.tr({
  height: "30px",
});

const StyledTableChapter = styled.th({
  height: 20,
  width: 63,
  color: "#898F9F",
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
});

const StyledTableMeaning = styled.th({
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
  color: "#898F9F",
});

export {
  StyledBookItem,
  StyledItemTitleBook,
  StyledNameBook,
  StyledTableMobile,
  StyledTableLine,
  StyledTableChapter,
  StyledTableMeaning,
};
