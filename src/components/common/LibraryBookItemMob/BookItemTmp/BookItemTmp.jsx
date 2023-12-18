import PropTypes from "prop-types";
import SpriteIcon from "components/common/spriteIcon";
import {
  StyledBookItem,
  StyledItemTitleBook,
  StyledNameBook,
  StyledTableMobile,
  StyledTableChapter,
  StyledTableMeaning,
  StyledTableLine,
} from "./StyledBookItemTmp";

const BookItemTmp = ({ books }) => {
  return (
    <>
      <StyledBookItem>
        <StyledItemTitleBook>
          <SpriteIcon width="22" height="17" name={"icon-Flat1"} />
          <StyledNameBook>...</StyledNameBook>
        </StyledItemTitleBook>
        <StyledTableMobile>
          <tbody>
            <StyledTableLine>
              <StyledTableChapter>Автор:</StyledTableChapter>
              <StyledTableMeaning>...</StyledTableMeaning>
            </StyledTableLine>
            <StyledTableLine>
              <StyledTableChapter>Рік:</StyledTableChapter>
              <StyledTableMeaning>...</StyledTableMeaning>
            </StyledTableLine>
            <StyledTableLine>
              <StyledTableChapter>Стор.</StyledTableChapter>
              <StyledTableMeaning>...</StyledTableMeaning>
            </StyledTableLine>
          </tbody>
        </StyledTableMobile>
      </StyledBookItem>
      <SpriteIcon name={"icon_traningLine"} />
    </>
  );
};

BookItemTmp.propTypes = {};

export default BookItemTmp;
