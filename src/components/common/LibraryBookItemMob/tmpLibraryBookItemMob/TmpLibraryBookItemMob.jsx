import SpriteIcon from "components/common/spriteIcon";
import { useLocation } from "react-router-dom";

import {
  StyledBookItem,
  StyledItemTitleBook,
  StyledNameBook,
  StyledTableMobile,
  StyledTableChapter,
  StyledTableMeaning,
  StyledTableLine,
} from "./StyledTmpLibraryBookItemMob";

const BookItemTmp = (props) => {
  const { pathname } = useLocation();

  return (
    <>
      <StyledBookItem $pathname={pathname}>
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

export default BookItemTmp;
