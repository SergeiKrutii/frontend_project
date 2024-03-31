import { useFormik } from "formik";
import { toast } from "react-toastify";

import { useMatchMedia } from "helpers/mediaQuery";
import {
  StyledForm,
  StyledInputWrapper,
  StyledLabel,
  StyledFormBtn,
  StyledInputTitle,
  StyledInputAuthor,
  StyledInputYear,
  StyledInputPages,
  StyledFormMobileBox,
  StyledConponentWrapper,
} from "./StyledFormAddBook";
import GetBackButton from "components/common/getBackButton";
import { useAddBookMutation } from "redux/book/booksApiSlice";

const FormAddBook = (props) => {
  const { isMobile } = useMatchMedia();
  const [setBooks] = useAddBookMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publication_date: "",
      amount_page: "",
    },

    onSubmit: ({ title, author, publication_date, amount_page }) => {
      const isEmptyField =
        title === "" ||
        author === "" ||
        publication_date === "" ||
        amount_page === "";

      if (isEmptyField) {
        toast.warning("Ви не заповнили всі поля!", { theme: "colored" });
        return;
      }

      const newBook = {
        title: title,
        author: author,
        publication_date: publication_date,
        amount_page: amount_page,
      };

      setTimeout(() => {
        setBooks(newBook);
        toast.success("Книгу додано!", { theme: "colored" });
      }, 500);

      formik.resetForm();
    },
  });

  return isMobile ? (
    <div>
      <GetBackButton path={"/library"} />
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledInputWrapper>
          <StyledLabel htmlFor="title">Назва книги</StyledLabel>
          <StyledInputTitle
            id="title"
            name="title"
            type="text"
            placeholder="..."
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor="author">Автор книги</StyledLabel>
          <StyledInputAuthor
            id="author"
            name="author"
            type="text"
            placeholder="..."
            onChange={formik.handleChange}
            value={formik.values.author}
          />
        </StyledInputWrapper>

        <StyledInputWrapper>
          <StyledLabel htmlFor="publication_date">Рік випуску</StyledLabel>
          <StyledInputYear
            id="publication_date"
            name="publication_date"
            type="text"
            placeholder="..."
            onChange={formik.handleChange}
            value={formik.values.publication_date}
          />
        </StyledInputWrapper>

        <StyledInputWrapper>
          <StyledLabel htmlFor="amount_page">Кількість сторінок</StyledLabel>
          <StyledInputPages
            id="amount_page"
            name="amount_page"
            type="text"
            placeholder="..."
            onChange={formik.handleChange}
            value={formik.values.amount_page}
          />
        </StyledInputWrapper>
        <StyledFormBtn type="submit">Додати</StyledFormBtn>
      </StyledForm>
    </div>
  ) : (
    <StyledFormMobileBox>
      <StyledForm onSubmit={formik.handleSubmit}>
        <StyledInputWrapper>
          <StyledLabel htmlFor="title">Назва книги</StyledLabel>
          <StyledInputTitle
            id="title"
            name="title"
            type="text"
            placeholder="..."
            onChange={formik.handleChange}
            value={formik.values.title}
          />
        </StyledInputWrapper>
        <StyledConponentWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor="author">Автор книги</StyledLabel>
            <StyledInputAuthor
              id="author"
              name="author"
              type="text"
              placeholder="..."
              onChange={formik.handleChange}
              value={formik.values.author}
            />
          </StyledInputWrapper>
          <StyledInputWrapper>
            <StyledLabel htmlFor="publication_date">Рік випуску</StyledLabel>
            <StyledInputYear
              id="publication_date"
              name="publication_date"
              type="text"
              placeholder="..."
              onChange={formik.handleChange}
              value={formik.values.publication_date}
            />
          </StyledInputWrapper>

          <StyledInputWrapper>
            <StyledLabel htmlFor="amount_page">Кількість сторінок</StyledLabel>
            <StyledInputPages
              id="amount_page"
              name="amount_page"
              type="text"
              placeholder="..."
              onChange={formik.handleChange}
              value={formik.values.amount_page}
            />
          </StyledInputWrapper>
        </StyledConponentWrapper>
        <StyledFormBtn type="submit">Додати</StyledFormBtn>
      </StyledForm>
    </StyledFormMobileBox>
  );
};

export default FormAddBook;
