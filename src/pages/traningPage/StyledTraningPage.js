import styled from "styled-components";

const StyledTraningPage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  min-height: 910px;

  background-color: #f6f7fb;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    min-height: 830px;
    margin-bottom: 50px;
  }
`;

const StyledTraningPageWrapper = styled.div`
  display: flex;
`;
const StyledTraningTimerWrapper = styled.div`
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;

    margin-bottom: 35px;
    margin-top: 0;
    padding-top: ${(props) => (props.$timer ? "0px" : "15px")};
  }
  @media screen and (min-width: 1280px) {
    margin-top: 15px;
    padding-top: 0;
  }
`;

export {
  StyledTraningPage,
  StyledTraningPageWrapper,
  StyledTraningTimerWrapper,
};
