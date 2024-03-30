import PropTypes from "prop-types";
import { useState } from "react";

import { useMatchMedia } from "helpers/mediaQuery";
import LibraryBookItemMob from "../libraryBookItemMob";
import LibraryBookItemDesk from "components/libraryBookItemDesk";

const LibraryBookItem = ({ book, handleDelete = () => {} }) => {
  const { isMobile } = useMatchMedia();
  const [toggleModal, setToggleModal] = useState(false);

  const handleToggle = () => {
    setToggleModal((prev) => !prev);
  };

  return isMobile ? (
    <LibraryBookItemMob
      open={toggleModal}
      handleToggle={handleToggle}
      book={book}
      handleDelete={handleDelete}
    />
  ) : (
    <LibraryBookItemDesk
      open={toggleModal}
      handleToggle={handleToggle}
      book={book}
      handleDelete={handleDelete}
    />
  );
};

LibraryBookItem.propTypes = {
  book: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default LibraryBookItem;
