import styled from "styled-components";

const StyledUserNav = styled.nav`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
`;

const StyledNavListItemMob = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 14px;

  &:nth-child(2) {
    width: 20px;
    height: 20px;
  }
  &:nth-child(3) {
    width: auto;
    height: auto;
  }

  &:last-child {
    margin-right: 0px;
    border-bottom: 1px solid;
  }
`;

const StyledNavItemLink = styled.a`
  color: #242a37;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 300;
  text-decoration-line: none;
`;

export {
  StyledUserNav,
  StyledNavList,
  StyledNavListItemMob,
  StyledNavItemLink,
};
