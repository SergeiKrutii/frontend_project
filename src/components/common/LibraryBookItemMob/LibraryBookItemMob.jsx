import React from "react";
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
} from "./StyledLibraryBookItemMob";

import ModalBtn from "../modalBtn/ModalBtn";
import FormSummaryModal from "../formSummaryModal/FormSummaryModal";
import { useLocation } from "react-router-dom";

const LibraryBookItemMob = ({
  book,
  handleClose,
  handleOpen,
  open,
  handleDelete = () => {},
}) => {
  const { pathname } = useLocation();

  return (
    <StyledBookItem $page={pathname}>
      <StyledItemTitleBook $page={pathname}>
        <SpriteIcon name={"icon-Flat1"} />
        <StyledNameBook>{book.title}</StyledNameBook>
        {pathname === "/traning" && (
          <StyledBookButton onClick={handleDelete}>
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

      {book.rating === "Вже прочитано" ? (
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
