import SpriteIcon from "../spriteIcon/SpriteIcon";
import {
  StyledQuoteWrapper,
  StyledParagraph,
  StyledSpan,
  StyledAuthor,
} from "./StyledAuthorQuote";

const AuthorQuote = (props) => {
  return (
    <StyledQuoteWrapper>
      <SpriteIcon name={"icon_quotes"} />
      <StyledParagraph>
        Книги — это корабли мысли, странствующие по волнам времени и бережно
        несущие свой драгоценный груз от поколения к поколению.
      </StyledParagraph>
      <StyledSpan>
        <StyledAuthor>Бэкон Ф.</StyledAuthor>
      </StyledSpan>
    </StyledQuoteWrapper>
  );
};

export default AuthorQuote;
