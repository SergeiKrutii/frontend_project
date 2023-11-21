import styled from "styled-components";

const StyledGoogleButton = styled.button`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-bottom: 16px;
  /* margin-top: 30px; */
  border: none;
  width: 150px;
  height: 40px;
  padding: 0;

  background-color: #f5f7fa;
  box-shadow: 0px 2px 2px 0px rgba(9, 30, 63, 0.15);

  color: #707375;

  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;

  &:hover,
  &:focus {
    background-color: #e3e1e1;
  }

  @media screen and (min-width: 767px) {
    margin-top: 40px;
  }
`;

export default StyledGoogleButton;
