import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCategotyLibrary = styled.div({
  color: "#091e3f",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledCategoryLink = styled(Link)`
  display: grid;
  place-items: center;
  margin-bottom: 60px;

  width: 171px;
  height: 42px;

  color: #fff;
  background-color: #ff6b08;
  text-decoration: none;
  transition: background-color 0.4s ease;

  &:hover,
  :focus {
    color: #fff;
    background-color: #d15807;
  }
`;

const StyledCategoryItemBox = styled.div({
  "@media screen and (max-width: 768px)": {
    "&:first-child": {
      marginTop: 20,
    },
  },

  "&:last-child": {
    marginBottom: 65,
  },
});

const StyledCategoryTitle = styled.h1({
  fontWeight: "600",
  fontSize: "19px",
  lineHeight: "38px",
});

export {
  StyledCategotyLibrary,
  StyledCategoryTitle,
  StyledCategoryItemBox,
  StyledCategoryLink,
};
