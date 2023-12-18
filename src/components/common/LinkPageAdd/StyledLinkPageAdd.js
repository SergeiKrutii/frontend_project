import styled from "styled-components";

const StyledLinkPageAdd = styled.div(({ $page }) => ({
  position: $page === "/addtraningform" ? "absolute" : "fixed",
  bottom: $page === "/addtraningform" ? -30 : 0,
  left: $page === "/addtraningform" ? "39%" : "40%",
  width: 52,
  height: 52,
}));

export { StyledLinkPageAdd };
