import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import SummaryBtn from "../summaryBtn";
import {
  StyledFormSummaryModal,
  StyledTextSummaryModal,
  StyledInputSummaryModal,
  StyledButtonBox,
  StyledFormSummaryModalBox,
} from "./StyledFormSummaryModal";
import StarRating from "../starRating";
import { useUpdateStatusBookMutation } from "redux/book/booksApiSlice";

const FormSummaryModal = ({ handleToggle, bookId, stars, review }) => {
  const [bookReview, setBookReview] = useState("");
  const [bookRating, setBookRating] = useState(0);

  const [updateBook] = useUpdateStatusBookMutation();

  const shuldDisable =
    (bookReview === "" && bookRating === 0) ||
    (bookReview === review && bookRating === stars);

  const handleAddRating = () => {
    if (shuldDisable) {
      toast.warning("Ви нічого не змінили!", { theme: "colored" });
      return;
    }
    const rating = {
      stars: bookRating,
      resume: bookReview || "",
    };
    updateBook({ id: bookId, rating });
    handleToggle();
  };

  useEffect(() => {
    setBookReview(review || "");
  }, []);

  return (
    <StyledFormSummaryModal>
      <StyledFormSummaryModalBox>
        <StyledTextSummaryModal>Обрати рейтинг книги</StyledTextSummaryModal>
        <StarRating setBookRating={setBookRating} stars={stars} />
        <StyledTextSummaryModal>Резюме</StyledTextSummaryModal>
        <StyledInputSummaryModal
          type="text"
          onChange={(e) => {
            setBookReview(e.target.value);
          }}
          value={bookReview}
        />
        <StyledButtonBox>
          <SummaryBtn
            style={{ marginRight: "15px" }}
            text="Назад"
            btnAction={handleToggle}
          />
          <SummaryBtn
            style={{ background: "#FF6B08", color: "#fff" }}
            text="Зберегти"
            btnAction={handleAddRating}
          />
        </StyledButtonBox>
      </StyledFormSummaryModalBox>
    </StyledFormSummaryModal>
  );
};

FormSummaryModal.propTypes = {
  handleToggle: PropTypes.func,
  bookId: PropTypes.string,
  stars: PropTypes.number,
  review: PropTypes.string,
};

export default FormSummaryModal;
