import styled from "styled-components";

const StyledChartContainer = styled.div`
  position: relative;
  width: 227px;
  height: 237px;

  padding: 14px 21px 39px 22px;

  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.25);

  &::after {
    content: "Час";
    position: absolute;
    bottom: 20px;
    right: 42px;

    color: #091e3f;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 600;
    line-height: 38px;
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 606px;
    height: auto;
    margin-top: 0;

    padding: 25px 36px 50px 36px;

    &::after {
      content: "Час";
      position: absolute;
      bottom: 25px;
      right: 55px;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 816px;
    height: 265px;
    padding: 25px 37px 50px 33px;

    &::after {
      content: "Час";
      position: absolute;
      bottom: 15px;
      right: 55px;
    }
  }
`;
const StyledChartParagraph = styled.div`
  color: #242a37;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 38px;
`;

export { StyledChartContainer, StyledChartParagraph };
