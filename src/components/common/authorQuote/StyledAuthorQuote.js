import styled from "styled-components";

const StyledQuoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 46px 10px 46px;

  @media screen and (min-width: 768px) {
    padding: 70px 121px;
  }
  @media screen and (min-width: 1280px) {
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyledParagraph = styled.p`
  margin-top: 10px;
  margin-bottom: 18px;

  color: #242a37;
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 38px;
    margin-bottom: 28px;
  }

  @media screen and (min-width: 1280px) {
    width: 397px;
  }
`;

const StyledSpan = styled.span`
  position: relative;
`;

const StyledAuthor = styled.h2`
  color: #898f9f;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 38px;

  &::before {
    content: "";
    display: block;
    top: 0;
    left: 0;
    width: 100px;
    height: 1px;
    background: rgba(36, 42, 55, 0.5);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;

    &::before {
      width: 150px;
    }
  }
`;

export { StyledQuoteWrapper, StyledParagraph, StyledSpan, StyledAuthor };
