import styled from "styled-components";

const StyledNavListTablet = styled.ul`
  display: flex;
  align-items: center;
  /* margin-right: 151px; */

  @media screen and (min-width: 1280px) {
    /* margin-right: 470px; */
  }
`;

const StyledNavListItemTablet = styled.li`
  &:first-child {
    margin-right: 11px;
  }
`;
const StyledNavParagraphTablet = styled.p`
  color: #242a37;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 300;
  line-height: 38px;
`;

export {
  StyledNavListItemTablet,
  StyledNavListTablet,
  StyledNavParagraphTablet,
};
