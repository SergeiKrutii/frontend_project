import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import ModalBtn from "components/common/modalBtn";
import SpriteIcon from "components/common/spriteIcon";
import FormSummaryModal from "components/common/formSummaryModal";
import {
  StyledBookItem,
  StyledBookTitle,
  StyledBookAuthor,
  StyledBookYear,
  StyledBookPage,
  StyledBookButton,
  StyledTimedDiv,
} from "./StyledLibraryBookItemDesk";
import goalsSelectors from "redux/goal/goalsSelectors";
import { useUpdateStatusBookMutation } from "redux/book/booksApiSlice";
import {
  StyledBookCheckboxContainer,
  StyledBookCheckbox,
} from "components/common/libraryBookItemMob/StyledLibraryBookItemMob";
import BookRating from "components/common/starRating";
import { useMatchMedia } from "helpers/mediaQuery";

const LibraryBookItemDesk = ({
  book,
  handleToggle,
  open,
  handleDelete = () => {},
}) => {
  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);
  const [updateBook] = useUpdateStatusBookMutation();
  const [isDisabled, setIsDisabled] = useState(false);
  const { isDesktop } = useMatchMedia();
  const { pathname } = useLocation();
  console.log("🚀 ~ pathname:", pathname);

  const bookReadingStatus = book.status === "Читаю" && pathname === "/library";

  const bookIsRead = book.isRead === true && pathname === "/library";

  const buttonWidth = {
    marginLeft: isDesktop ? "43px" : "18px",
    width: isDesktop ? "130px" : "80px",
    marginTop: "0px",
    marginBottom: "0px",
  };

  useEffect(() => {
    setIsDisabled(book.isRead);
  }, [book.isRead]);

  const handleChangeStatus = (e) => {
    if (e.target.checked) {
      updateBook({ id: book?._id });
      setIsDisabled(true);
    }
  };

  return (
    book && (
      <ThemeProvider theme={{ isRead: bookIsRead, page: pathname }}>
        <StyledTimedDiv>
          <StyledBookItem>
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
              <SpriteIcon
                name={"icon-Flat1"}
                $shuldFill={bookReadingStatus}
                fill="currentColor"
              />
            )}
            <StyledBookTitle>{book?.title}</StyledBookTitle>
            <StyledBookAuthor>{book?.author}</StyledBookAuthor>
            <StyledBookYear>{book?.publication_date}</StyledBookYear>
            <StyledBookPage>{book?.amount_page}</StyledBookPage>
            {pathname === "/traning" && !isTraningBegin && (
              <StyledBookButton onClick={() => handleDelete(book._id)}>
                <SpriteIcon name={"icon_delete"} />
              </StyledBookButton>
            )}
            {bookIsRead && (
              <>
                <BookRating readOnly stars={book?.rating?.stars} />
                <ModalBtn
                  style={{
                    ...buttonWidth,
                  }}
                  text="Резюме"
                  handleToggle={handleToggle}
                  component={
                    <FormSummaryModal
                      handleToggle={handleToggle}
                      review={book?.rating?.resume}
                      bookId={book?._id}
                      stars={book?.rating?.stars}
                    />
                  }
                  open={open}
                />
              </>
            )}
          </StyledBookItem>
        </StyledTimedDiv>
      </ThemeProvider>
    )
  );
};

LibraryBookItemDesk.propTypes = {
  book: PropTypes.object,
  handleToggle: PropTypes.func,
  open: PropTypes.bool,
  handleDelete: PropTypes.func,
};

export default LibraryBookItemDesk;
