import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
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
  StyledInputWrapperBoxMobile,
  StyledFormDestopBox,
} from "./StyledFormAddBook";

import { useAddBookMutation } from "redux/book/booksApiSlice";

const FormAddBook = (props) => {
  const { isMobile, isDesktop } = useMatchMedia();
  const [setBooks] = useAddBookMutation();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publication_date: "",
      amount_page: "",
    },

    onSubmit: (values) => {
      const newBook = {
        title: values.title,
        author: values.author,
        publication_date: values.publication_date,
        amount_page: values.amount_page,
      };

      setTimeout(() => {
        setBooks(newBook);
      }, 500);

      // formik.resetForm();
    },
  });

  return isMobile ? (
    <StyledForm onSubmit={formik.handleSubmit}>
      <StyledInputWrapper>
        <StyledInputTitle
          id="title"
          name="title"
          type="text"
          placeholder="..."
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <StyledLabel htmlFor="title">Назва книги</StyledLabel>
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledInputAuthor
          id="author"
          name="author"
          type="text"
          placeholder="..."
          onChange={formik.handleChange}
          value={formik.values.author}
        />
        <StyledLabel htmlFor="author">Автор книги</StyledLabel>
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledInputYear
          id="publication_date"
          name="publication_date"
          type="text"
          placeholder="..."
          onChange={formik.handleChange}
          value={formik.values.publication_date}
        />
        <StyledLabel htmlFor="publication_date">Рік випуску</StyledLabel>
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledInputPages
          id="amount_page"
          name="amount_page"
          type="text"
          placeholder="..."
          onChange={formik.handleChange}
          value={formik.values.amount_page}
        />
        <StyledLabel htmlFor="amount_page">Кількість сторінок</StyledLabel>
      </StyledInputWrapper>
      <StyledFormBtn type="submit">Додати</StyledFormBtn>
    </StyledForm>
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
        {/* <StyledInputWrapperBoxMobile> */}
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
        {/* </StyledInputWrapperBoxMobile> */}
        <StyledFormBtn type="submit">Додати</StyledFormBtn>
      </StyledForm>
    </StyledFormMobileBox>
  );
};

FormAddBook.propTypes = {};

export default FormAddBook;
