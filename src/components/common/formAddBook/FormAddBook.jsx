import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";

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
import { StyledFormikError } from "components/form/StyledForm";

const FormAddBook = (props) => {
  const { isMobile } = useMatchMedia();
  const [addBook, { isSuccess }] = useAddBookMutation();

  const addBookSchema = Yup.object().shape({
    title: Yup.string()
      .required("Введіть назву книги")
      .max(50, "Назва книги повинна бути не більше 50 символів.")
      .required("Обов'язкове поле"),
    author: Yup.string()
      .required("Введіть дату")
      .max(25, "Не більше 25 символів.")
      .required("Обов'язкове поле"),
    publication_date: Yup.string()
      .required("Введіть дату")
      .min(4, "Не менше 4 символів")
      .max(4, "Не більше 4 символів"),
    amount_page: Yup.string()
      .required("Введіть кількість сторінок")
      .max(4, "Cорінок має бути не більше 4 символів.")
      .required("Обов'язкове поле"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publication_date: "",
      amount_page: "",
    },

    validationSchema: addBookSchema,

    onSubmit: async ({ title, author, publication_date, amount_page }) => {
      const isEmptyField =
        title === "" ||
        author === "" ||
        publication_date === "" ||
        amount_page === "";

      if (isEmptyField) {
        toast.warning("Ви не заповнили всі поля!", {
          theme: "colored",
          containerId: "mainContainer",
        });
        return;
      }

      const newBook = {
        title: title,
        author: author,
        publication_date: publication_date,
        amount_page: amount_page,
      };

      await addBook(newBook);

      if (isSuccess) {
        toast.success("Книгу додано!", {
          theme: "colored",
          containerId: "mainContainer",
        });
      }
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <StyledFormikError>{formik.errors.title}</StyledFormikError>
          )}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.author && formik.errors.author && (
            <StyledFormikError>{formik.errors.author}</StyledFormikError>
          )}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.publication_date &&
            formik.errors.publication_date && (
              <StyledFormikError>
                {formik.errors.publication_date}
              </StyledFormikError>
            )}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.amount_page && formik.errors.amount_page && (
            <StyledFormikError>{formik.errors.amount_page}</StyledFormikError>
          )}
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
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title && (
            <StyledFormikError>{formik.errors.title}</StyledFormikError>
          )}
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
              onBlur={formik.handleBlur}
            />
            {formik.touched.author && formik.errors.author && (
              <StyledFormikError>{formik.errors.author}</StyledFormikError>
            )}
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
              onBlur={formik.handleBlur}
            />
            {formik.touched.publication_date &&
              formik.errors.publication_date && (
                <StyledFormikError>
                  {formik.errors.publication_date}
                </StyledFormikError>
              )}
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
              onBlur={formik.handleBlur}
            />
            {formik.touched.amount_page && formik.errors.amount_page && (
              <StyledFormikError>{formik.errors.amount_page}</StyledFormikError>
            )}
          </StyledInputWrapper>
        </StyledConponentWrapper>
        <StyledFormBtn type="submit">Додати</StyledFormBtn>
      </StyledForm>
    </StyledFormMobileBox>
  );
};

export default FormAddBook;
