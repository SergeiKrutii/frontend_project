import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../starRating/StarRating'
import SpriteIcon from '../spriteIcon/SpriteIcon'

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
} from './StyledLibraryBookItemMob'

import ModalBtn from '../modalBtn/ModalBtn'
import FormSummaryModal from '../formSummaryModal/FormSummaryModal'

const LibraryBookItemMob = ({book, handleClose, handleOpen, open }) => {
  return (
      <StyledBookItem>
        <StyledItemTitleBook>
              <SpriteIcon width="22" height="17" name={"icon-Flat1"} />
              <StyledNameBook>{book.title}</StyledNameBook>
        </StyledItemTitleBook>
      <StyledTableMobile>
        <tbody>
          <StyledTableLine>
              <StyledTableChapter>Автор:</StyledTableChapter>
              <StyledTableMeaning>{book.author}</StyledTableMeaning>
          </StyledTableLine>
          <StyledTableLine>
              <StyledTableChapter>Рік:</StyledTableChapter>
              <StyledTableMeaning>{book.publicztion_date}</StyledTableMeaning>
          </StyledTableLine>
          <StyledTableLine>
            <StyledTableChapter>Стор.</StyledTableChapter>
            <StyledTableMeaning>{book.amout_page}</StyledTableMeaning>
          </StyledTableLine>
        </tbody>
      </StyledTableMobile>

              {book.rating === "Вже прочитано" ?
        <StyledRatingBox>
          <StyledRatingStarsBox>
            <StyledRatingChapter>Рейтинг:</StyledRatingChapter>
            <StarRating readOnly />
          </StyledRatingStarsBox>
          <ModalBtn
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
            component={<FormSummaryModal
            handleOpen={handleClose} />}
            text='Резюме' />
        </StyledRatingBox>
        : null}
    </StyledBookItem>
  )
}

LibraryBookItemMob.propTypes = {}

export default LibraryBookItemMob