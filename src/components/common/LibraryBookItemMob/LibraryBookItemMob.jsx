import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import SpriteIcon from "../spriteIcon/SpriteIcon";
import {
  StyledBookItem,
  StyledItemTitleBook,
  StyledNameBook,
  StyledTableMobile,
  StyledTableChapter,
  StyledTableMeaning,
  StyledTableLine,
  StyledRatingChapter,
  StyledRatingBox,
  StyledRatingStarsBox,
  StyledBookButton,
  StyledBookCheckbox,
  StyledBookCheckboxContainer,
} from "./StyledLibraryBookItemMob";
import ModalBtn from "../modalBtn";
import FormSummaryModal from "../formSummaryModal";
import goalsSelectors from "redux/goal/goalsSelectors";
import { useUpdateStatusBookMutation } from "redux/book/booksApiSlice";
import BookRating from "../starRating";
import booksSelectors from "redux/book/booksSelectors";

const LibraryBookItemMob = ({
  book,
  handleToggle,
  open,
  handleDelete = () => {},
}) => {
  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);
  const [updateBook] = useUpdateStatusBookMutation();
  const { pathname } = useLocation();
  const { isRead } = useSelector(booksSelectors.findBookById(book._id));

  const bookStatus = book.status === "Читаю";
  const isShowReview =
    book?.status === "Вже прочитано" && pathname === "/library";

  const handleChangeStatus = (e) => {
    if (e.target.checked) {
      updateBook({ id: book?._id });
    }
  };

  return (
    <StyledBookItem $page={pathname}>
      <StyledItemTitleBook $page={pathname}>
        {isTraningBegin ? (
          <StyledBookCheckboxContainer>
            <StyledBookCheckbox
              type="checkbox"
              name="checkIsRead"
              onChange={handleChangeStatus}
              defaultChecked={book?.isRead}
              disabled={isRead}
            />
          </StyledBookCheckboxContainer>
        ) : (
          <SpriteIcon
            name={"icon-Flat1"}
            $shuldFill={bookStatus}
            fill="currentColor"
          />
        )}

        <StyledNameBook>{book.title}</StyledNameBook>
        {pathname === "/traning" && !isTraningBegin && (
          <StyledBookButton onClick={() => handleDelete(book._id)}>
            <SpriteIcon name={"icon_delete"} />
          </StyledBookButton>
        )}
      </StyledItemTitleBook>

      <StyledTableMobile $page={pathname}>
        <tbody>
          <StyledTableLine>
            <StyledTableChapter>Автор:</StyledTableChapter>
            <StyledTableMeaning>{book?.author}</StyledTableMeaning>
          </StyledTableLine>
          <StyledTableLine>
            <StyledTableChapter>Рік:</StyledTableChapter>
            <StyledTableMeaning>{book?.publication_date}</StyledTableMeaning>
          </StyledTableLine>
          <StyledTableLine>
            <StyledTableChapter>Стор.:</StyledTableChapter>
            <StyledTableMeaning>{book?.amount_page}</StyledTableMeaning>
          </StyledTableLine>
        </tbody>
      </StyledTableMobile>
      {isShowReview && (
        <StyledRatingStarsBox>
          <StyledRatingChapter>Рейтинг:</StyledRatingChapter>
          <BookRating readOnly stars={book?.rating?.stars} />
        </StyledRatingStarsBox>
      )}
      {pathname === "/traning" && <SpriteIcon name={"icon_traningLine"} />}

      {isShowReview && (
        <StyledRatingBox>
          <ModalBtn
            handleToggle={handleToggle}
            open={open}
            style={{ marginBottom: 0 }}
            component={
              <FormSummaryModal
                review={book?.rating?.resume}
                bookId={book?._id}
                stars={book?.rating?.stars}
                handleToggle={handleToggle}
              />
            }
            text="Резюме"
          />
        </StyledRatingBox>
      )}
    </StyledBookItem>
  );
};

LibraryBookItemMob.propTypes = {
  book: PropTypes.object.isRequired,
  handleToggle: PropTypes.func,
  open: PropTypes.bool,
  handleDelete: PropTypes.func,
};

export default LibraryBookItemMob;
