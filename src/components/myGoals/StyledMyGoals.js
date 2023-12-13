import styled from "styled-components";

const StyledGoalsWrapper = styled.div`
  position: relative;
  width: 270px;
  height: ${({ theme: { quantity } }) => (quantity > 0 ? "215px" : "318px")};

  margin-bottom: ${({ theme: { quantity } }) =>
    quantity > 0 ? "30px" : "30px"};
  margin-top: 30px;

  background: #fff;

  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: space-between;

    width: ${({ theme: { quantity } }) => (quantity > 0 ? "618px" : "588px")};
    height: ${({ theme: { quantity } }) => (quantity > 0 ? "90px" : "85px")};
    margin: 30px 0px 40px 0px;

    padding: ${({ theme: { quantity } }) =>
      quantity > 0 ? "20px 30px 15px 30px" : "20px 45px 0px 45px"};

    box-shadow: none;
  }

  @media screen and (min-width: 1280px) {
    height: 318px;

    margin: 50px 0px 0px 0px;
  }
`;

const StyledGoalsCountWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: ${({ theme: { quantity } }) => (quantity > 0 ? "30px" : "55px")};
  margin-bottom: ${({ theme: { quantity } }) =>
    quantity > 0 ? "0px" : "55px"};

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: ${({ theme: { quantity } }) =>
      quantity > 0 ? "15px" : "0px"};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const StyledGoalsTitle = styled.p`
  padding: 11px 25px;

  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 38px;
  background: #b1b5c2;
  box-shadow: 0px 2px 3px 0px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 275px;
    height: 60px;
    padding: 0px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: ${({ theme: { quantity } }) =>
      quantity > 0 ? "72px" : "55px"};
  }
`;

const StyledGoalsContainer = styled.div`
  width: ${({ theme: { quantity } }) => (quantity > 0 ? "63px" : "100px")};

  &:not(:last-child) {
    margin-right: ${({ theme: { quantity } }) =>
      quantity > 0 ? "12px" : "20px"};
  }

  @media screen and (min-width: 768px) {
    width: ${({ theme: { quantity } }) => quantity > 0 && "100px"};
    height: ${({ theme: { quantity } }) => (quantity > 0 ? "60px" : "100px")};
    &:not(:last-child) {
      margin-right: ${({ theme: { quantity } }) =>
        quantity > 0 ? "12px" : "35px"};
    }
  }

  @media screen and (min-width: 1280px) {
    width: ${({ theme: { quantity } }) => quantity > 0 && "66px"};

    &:not(:last-child) {
      margin-right: ${({ theme: { quantity } }) =>
        quantity > 0 ? "12px" : "35px"};
    }
  }
`;

const StyledGoalsCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme: { quantity } }) => (quantity > 0 ? "63px" : "100px")};
  /* padding: ${({ theme: { quantity } }) =>
    quantity > 0 ? "22px 13px" : "31px 37px"}; */

  margin-bottom: 14px;

  color: #091e3f;

  text-align: center;
  font-family: Open Sans;
  font-size: 45px;
  font-weight: 700;
  line-height: 38px;

  background: #f5f7fa;
  box-shadow: 4px 4px 8px 0px rgba(36, 42, 55, 0.15);

  color: ${({ className }) => className && "#FF6B08"};

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 60px;
    /* padding: 11px 39px; */
    /* padding: ${({ theme: { quantity } }) =>
      quantity > 0 ? "22px 13px" : "11px 39px"}; */
    margin-bottom: 4px;

    font-size: 40px;
  }
  @media screen and (min-width: 1280px) {
    height: 60px;

    margin-bottom: 14px;

    font-size: 36px;
    font-weight: 700;
    line-height: 38px;
  }
`;

const StyledGoalsText = styled.p`
  display: flex;
  justify-content: center;

  color: #898f9f;
  text-align: center;
  font-family: Montserrat;
  font-size: ${({ theme: { quantity } }) => (quantity > 0 ? "11px" : "14px")};
  font-weight: 500;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: ${({ theme: { quantity } }) =>
      quantity > 0 ? "0px" : "8px"};

    font-size: 11px;
    justify-content: ${({ theme: { quantity } }) =>
      quantity > 0 ? "center" : "start"};
  }
`;

export {
  StyledGoalsWrapper,
  StyledGoalsTitle,
  StyledGoalsCountWrapper,
  StyledGoalsContainer,
  StyledGoalsCount,
  StyledGoalsText,
};
