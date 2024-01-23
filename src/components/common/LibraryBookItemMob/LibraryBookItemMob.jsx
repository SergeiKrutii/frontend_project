import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import StarRating from "../starRating/StarRating";
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

import ModalBtn from "../modalBtn/ModalBtn";
import FormSummaryModal from "../formSummaryModal/FormSummaryModal";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import goalsSelectors from "redux/goal/goalsSelectors";
import { useUpdateStatusBookMutation } from "redux/book/booksApiSlice";

const LibraryBookItemMob = ({
  book,
  handleClose,
  handleOpen,
  open,
  handleDelete = () => {},
}) => {
  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);
  const [updateBook] = useUpdateStatusBookMutation();
  const [isDisabled, setIsDisabled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // setIsDisabled(book.isRead);
  }, [book.isRead]);

  const handleChangeStatus = (e) => {
    if (e.target.checked) {
      updateBook(book?._id);
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
              disabled={isDisabled}
              defaultChecked={book?.isRead}
            />
          </StyledBookCheckboxContainer>
        ) : (
          <SpriteIcon name={"icon-Flat1"} />
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
      {pathname === "/traning" && <SpriteIcon name={"icon_traningLine"} />}

      {book?.rating === "Вже прочитано" ? (
        <StyledRatingBox>
          <StyledRatingStarsBox>
            <StyledRatingChapter>Рейтинг:</StyledRatingChapter>
            <StarRating readOnly />
          </StyledRatingStarsBox>
          <ModalBtn
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
            component={<FormSummaryModal handleOpen={handleClose} />}
            text="Резюме"
          />
        </StyledRatingBox>
      ) : null}
    </StyledBookItem>
  );
};

LibraryBookItemMob.propTypes = {};

export default LibraryBookItemMob;
