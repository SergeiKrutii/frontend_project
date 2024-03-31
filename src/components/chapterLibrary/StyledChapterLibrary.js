import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledChapterLibrary = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: "40px",

  "@media screen and (min-width: 768px)": {
    marginBottom: 0,
  },
});

const StyledChapterLink = styled(Link)`
  display: grid;
  place-items: center;
  margin-top: 35px;
  margin-bottom: 60px;

  width: 171px;
  height: 42px;

  color: #fff;
  background-color: #ff6b08;
  text-decoration: none;
`;

const StyledChapterLibraryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const StyledBookItemWrapper = styled.div`
  @media screen and (min-width: 768px) {
    overflow-y: scroll;
    max-height: 190px;
  }

  @media screen and (min-width: 1280px) {
    border-bottom: 2px solid rgba(224, 229, 235, 1);
    margin-bottom: 0px;
    max-height: 248px;
  }
`;

const StyledChapterLibraryTableDesk = styled.table(({ theme }) => ({
  width: "678px",

  "@media screen and (min-width: 768px) ": {
    lineHeight: "38px",
    borderTop:
      theme.page === "/library" ? "" : "2px solid rgba(224, 229, 235, 1)",
  },

  "@media screen and (min-width: 1279px)": {
    width: "100%",
    borderBottom: "2px solid rgba(224, 229, 235, 1)",
  },
}));

const StyledText = styled.p({
  fontSize: 14,
  color: "#898F9F",
  fontWeight: 500,

  "@media screen and (min-width: 768px)": {
    fontSize: 16,
  },
  "@media screen and (min-width: 1279px)": {
    fontSize: 17,
  },
});

const StyledPillarTitle = styled.td(({ theme }) => ({
  width: theme.section
    ? "216px"
    : theme.page === "/traning"
    ? "263px"
    : "344px",

  "@media screen and (min-width: 1279px)": {
    width: theme.section
      ? "361px"
      : theme.page === "/library"
      ? "626px"
      : "361px",
  },
}));
const StyledPillarAuthor = styled.td(({ theme }) => ({
  width: theme.section
    ? "110px"
    : theme.page !== "/library"
    ? "191px"
    : "190px",

  "@media screen and (min-width: 1280px)": {
    width: theme.section
      ? "230px"
      : theme.page === "/library"
      ? "356px"
      : "229px",
  },
}));
const StyledPillarDate = styled.td(({ theme }) => ({
  width: theme.section ? "60px" : "78px",

  "@media screen and (min-width: 1280px)": {
    width: theme.section
      ? "96px"
      : theme.page === "/library"
      ? "87px"
      : "140px",
  },
}));
const StyledPillarPage = styled.td(({ theme }) => ({
  width: theme.section ? "70px" : "px",

  "@media screen and (min-width: 1280px)": {
    width: theme.section ? "150px" : "auto",
  },
}));
const StyledPillarRating = styled.td({
  // width: 50,
});

const StyledChapterButton = styled.button`
  width: 171px;
  height: 42px;

  border: none;
  margin-top: 35px;

  background: #ff6b08;
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.4s ease;

  &:hover,
  :focus {
    color: #fff;
    background-color: #d15807;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 40;
  }

  @media screen and (min-width: 1280px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0px;
  }
`;

export {
  StyledChapterLibrary,
  StyledChapterLibraryTableDesk,
  StyledPillarTitle,
  StyledPillarAuthor,
  StyledPillarDate,
  StyledPillarPage,
  StyledPillarRating,
  StyledText,
  StyledChapterButton,
  StyledChapterLibraryWrapper,
  StyledBookItemWrapper,
  StyledChapterLink,
};
