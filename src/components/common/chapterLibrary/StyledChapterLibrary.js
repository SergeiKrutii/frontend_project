import styled from "styled-components";

const StyledChapterLibrary = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

const StyledChapterLibraryTableDesk = styled.table({
  width: 678,
});

// const StyledPillarTitle = styled.td({});
const StyledText = styled.p({
  fontSize: 14,
  color: "#898F9F",
  fontWeight: 500,
});
const StyledPillarTitle = styled.td({
  width: 237,
});
const StyledPillarAuthor = styled.td({
  width: 140,
});
const StyledPillarDate = styled.td({
  width: 35,
});
const StyledPillarPage = styled.td((props) => ({
  width: 50,
}));
const StyledPillarRating = styled.td({
  width: 50,
});
const StyledPillarButton = styled.td({});

const StyledChapterButton = styled.button`
  width: 171px;
  height: 42px;

  border: none;
  margin-top: 35px;
  margin-bottom: 40px;

  background: #ff6b08;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
`;

export {
  StyledChapterLibrary,
  StyledChapterLibraryTableDesk,
  StyledPillarTitle,
  StyledPillarAuthor,
  StyledPillarDate,
  StyledPillarPage,
  StyledPillarRating,
  StyledPillarButton,
  StyledText,
  StyledChapterButton,
};
