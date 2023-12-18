import React from "react";
import PropTypes from "prop-types";
import StarRating from "components/common/starRating/StarRating";
import ModalBtn from "components/common/modalBtn/ModalBtn";
import SpriteIcon from "components/common/spriteIcon/SpriteIcon";
import FormSummaryModal from "components/common/formSummaryModal/FormSummaryModal";

import {
  StyledBookItem,
  StyledBookTitle,
  StyledBookAuthor,
  StyledBookYear,
  StyledBookPage,
} from "./StyledLibraryBookItemDesk";

const LibraryBookItemDesk = ({
  book,
  handleClose,
  handleOpen,
  open,
  ifrestrue,
}) => {
  const dateStringFromServer = book.publicztion_date;
  // const yearFromString = new Date(dateStringFromServer.replace(/(\d{2}).(\d{2}).(\d{4})/, "$3-$2-$1")).getFullYear();

  return (
    <StyledBookItem>
      <SpriteIcon
        style={{ marginLeft: 20 }}
        width="22"
        height="17"
        name={"icon-Flat1"}
      />
      <StyledBookTitle ifrestrue={ifrestrue}>{book.title}</StyledBookTitle>
      <StyledBookAuthor ifrestrue={ifrestrue}>{book.author}</StyledBookAuthor>
      <StyledBookYear ifrestrue={ifrestrue}>
        {book.publication_date}
      </StyledBookYear>
      <StyledBookPage ifrestrue={ifrestrue}>{book.amount_page}</StyledBookPage>

      {book.rating === "Вже прочитано" ? (
        <>
          <StarRating />
          <ModalBtn
            style={{
              marginLeft: "15px",
              marginTop: "0px",
              marginBottom: "0px",
            }}
            text="Резюме"
            handleClose={handleClose}
            handleOpen={handleOpen}
            component={<FormSummaryModal />}
            open={open}
          />
        </>
      ) : null}
    </StyledBookItem>
  );
};

LibraryBookItemDesk.propTypes = {};

export default LibraryBookItemDesk;
