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

    &:hover {
      color: rgb(255, 107, 8);
    }
  }
`;

const StyledNavItemLink = styled.a`
  color: #242a37;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 300;
  text-decoration-line: none;
  fill: #a6abb9;

  &:hover {
    fill: rgb(255, 107, 8);
  }
`;

const StyledNavItemButton = styled.button`
  color: #242a37;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 300;
  text-decoration-line: none;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: rgb(255, 107, 8);
  }
`;

export {
  StyledUserNav,
  StyledNavList,
  StyledNavListItemMob,
  StyledNavItemLink,
  StyledNavItemButton,
};
