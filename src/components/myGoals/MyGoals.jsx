import PropTypes from "prop-types";

import {
  StyledGoalsWrapper,
  StyledGoalsTitle,
  StyledGoalsCountWrapper,
  StyledGoalsContainer,
  StyledGoalsCount,
  StyledGoalsText,
} from "./StyledMyGoals";
import { GoalsProvider } from "./goalsContext";
import { ThemeProvider } from "styled-components";

const MyGoals = ({ books }) => {
  const booksQuantity = books?.length;

  return (
    <ThemeProvider theme={{ quantity: booksQuantity }}>
      <StyledGoalsWrapper>
        <StyledGoalsTitle>Моя мета прочитати</StyledGoalsTitle>
        <StyledGoalsCountWrapper>
          <StyledGoalsContainer>
            <StyledGoalsCount>0</StyledGoalsCount>
            <StyledGoalsText>Кількість книжок</StyledGoalsText>
          </StyledGoalsContainer>
          <StyledGoalsContainer>
            <StyledGoalsCount>0</StyledGoalsCount>
            <StyledGoalsText>Кількість днів</StyledGoalsText>
          </StyledGoalsContainer>
          {booksQuantity !== 0 && (
            <StyledGoalsContainer>
              <StyledGoalsCount className="booksCount">
                {booksQuantity}
              </StyledGoalsCount>
              <StyledGoalsText>Залишилось книжок</StyledGoalsText>
            </StyledGoalsContainer>
          )}
        </StyledGoalsCountWrapper>
      </StyledGoalsWrapper>
    </ThemeProvider>
  );
};

MyGoals.propTypes = {
  books: PropTypes.array,
};

export default MyGoals;
