import styled from "styled-components";

const StyleForModalWrapper = `
width: 210px;
padding: 50px 30px;
`;
const StyleForModalContent = `
margin-bottom: 21px;

color: #242a37;
text-align: center;
font-family: Montserrat;
font-size: 16px;
font-weight: 500;
line-height: 22px;
`;

const StyledWarningWrapper = styled.div`
  ${StyleForModalWrapper}
`;
const StyledWarningText = styled.p`
  ${StyleForModalContent}
`;
const StyledWarningButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledNiceJobWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  ${StyleForModalWrapper}
`;

const StyledNiceJobText = styled.p`
  ${StyleForModalContent}
`;

export {
  StyledWarningWrapper,
  StyledWarningText,
  StyledWarningButtonWrapper,
  StyledNiceJobWrapper,
  StyledNiceJobText,
};
