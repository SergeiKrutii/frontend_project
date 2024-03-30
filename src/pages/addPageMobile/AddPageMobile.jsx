import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { StyledAddPageMobile } from "./StyledAddPageMobile";
import FormAddBook from "components/common/formAddBook";
import MainModal from "components/common/mainModal";
import EmptySteps from "components/emptySteps";
import booksSelectors from "redux/book/booksSelectors";

const AddPageMobile = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const allBooks = useSelector(booksSelectors.selectAllBooks);

  const book = false;

  useEffect(() => {
    if (!book) {
      setOpen(true);
    }
  }, [book]);

  return (
    <StyledAddPageMobile
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <FormAddBook />
      {book && <FormAddBook />}
      {allBooks.length === 0 && (
        <MainModal
          component={<EmptySteps handleClose={handleClose} />}
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
        />
      )}
    </StyledAddPageMobile>
  );
};

export default AddPageMobile;
