import { useFormik } from "formik";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledInputWrapper,
  StyledFormikError,
} from "./StyledForm";
import MainButton from "../common/mainButton";
import { useSignupMutation, useLoginMutation } from "redux/auth/authApiSlice";
import { useMatchMedia } from "helpers/mediaQuery";

const Form = ({ loc, btnText }) => {
  const isRegisterPage = loc === "/register";
  const { isMobile } = useMatchMedia();

  const redirectPage = isMobile ? "/addbook" : "/library";

  const [setRegisterData] = useSignupMutation();

  const [setLoginData, { isSuccess: isLoginSuccess }] = useLoginMutation();

  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .max(10, "Ім'я повинно бути не більше 10 символів")
      .required("Обов'язкове поле"),
    email: Yup.string()
      .email("Не корректна почтова адресса")
      .required("Обов'язкове поле"),
    password: Yup.string()
      .required("Введіть пароль")
      .min(6, "Пароль має бути не меньше 6 символів")
      .max(12, "Пароль має бути не більше 12 символів"),
    equalPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Пароль повинен співпадати"
    ),
  });

  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email("Не корректна почтова адресса")
      .required("Обов'язкове поле"),
    password: Yup.string().required("Введіть пароль"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      equalPassword: "",
    },
    validationSchema: isRegisterPage ? SignupSchema : SigninSchema,
    onSubmit: async (values) => {
      const loginData = { email: values.email, password: values.password };

      try {
        if (isRegisterPage) {
          await setRegisterData(values);

          setTimeout(() => {
            setLoginData(loginData);
            if (isLoginSuccess) {
              navigate(redirectPage, { replace: true });
            }
          }, 500);
        } else {
          setTimeout(async () => {
            await setLoginData(loginData);
            if (isLoginSuccess) {
              navigate(redirectPage, { replace: true });
            }
          }, 1000);
        }
      } catch (error) {
        //error processed in api
      }

      formik.resetForm();
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {isRegisterPage && (
        <StyledInputWrapper>
          <StyledLabel htmlFor="name">Ім'я</StyledLabel>
          <StyledInput
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <StyledFormikError>{formik.errors.name}</StyledFormikError>
          ) : null}
        </StyledInputWrapper>
      )}
      <StyledInputWrapper>
        <StyledLabel htmlFor="email">Електронна адреса</StyledLabel>
        <StyledInput
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <StyledFormikError>{formik.errors.email}</StyledFormikError>
        ) : null}
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel htmlFor="password">Пароль</StyledLabel>
        <StyledInput
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <StyledFormikError>{formik.errors.password}</StyledFormikError>
        ) : null}
      </StyledInputWrapper>
      {isRegisterPage && (
        <StyledInputWrapper>
          <StyledLabel htmlFor="equalPassword">Підтвердити пароль</StyledLabel>
          <StyledInput
            id="equalPassword"
            name="equalPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.equalPassword}
          />
          {formik.touched.equalPassword && formik.errors.equalPassword ? (
            <StyledFormikError>{formik.errors.equalPassword}</StyledFormikError>
          ) : null}
        </StyledInputWrapper>
      )}

      <MainButton typeBtn="submit" text={btnText} register="true" />
    </StyledForm>
  );
};

Form.propTypes = {
  loc: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default Form;
