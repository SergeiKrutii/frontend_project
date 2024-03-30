import styled from "styled-components";

const StyledBookItemTmp = styled.div({
  width: 678,
  height: 62,
  display: "flex",
  alignItems: "center",
  background: "transparent",

  "@media screen and (min-width: 768px)": {
    borderTop: "2px solid rgba(224, 229, 235, 1)",
    borderBottom: "2px solid rgba(224, 229, 235, 1)",
    marginBottom: "50px",
  },

  "@media screen and (min-width: 1280px)": {
    width: "100%",
  },
});

const StyledBookTitleTmp = styled.p((props) => ({
  fontSize: 19,
  color: "#242A37",
  fontWeight: 500,
  textAlign: "left",
  minWidth: props.ifrestrue ? 170 : 273,
  maxWidth: props.ifrestrue ? 170 : 273,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  marginLeft: 15,
}));

const StyledBookAuthorTmp = styled.p({
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

const StyledBookYearTmp = styled.p((props) => ({
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
  width: 40,
  maxWidth: 40,

  marginLeft: props.ifrestrue ? 0 : 60,
}));

const StyledBookPageTmp = styled.p((props) => ({
  fontSize: 12,
  fontWeight: 500,
  textAlign: "left",
  width: 50,
  maxWidth: 50,

  marginLeft: props.ifrestrue ? 0 : 20,
}));
const StyledChapterLibraryTableDesk = styled.table({
  width: 678,
});

const StyledTextTmp = styled.p({
  fontSize: 14,
  color: "#898F9F",
  fontWeight: 500,
});
const StyledPillarTitleTmp = styled.td({
  width: 237,
});
const StyledPillarAuthorTmp = styled.td({
  width: 140,
});
const StyledPillarDateTmp = styled.td({
  width: 35,
});
const StyledPillarPageTmp = styled.td((props) => ({
  width: 50,
}));

export {
  StyledBookItemTmp,
  StyledBookTitleTmp,
  StyledBookAuthorTmp,
  StyledBookYearTmp,
  StyledBookPageTmp,
  StyledChapterLibraryTableDesk,
  StyledTextTmp,
  StyledPillarTitleTmp,
  StyledPillarAuthorTmp,
  StyledPillarDateTmp,
  StyledPillarPageTmp,
};
