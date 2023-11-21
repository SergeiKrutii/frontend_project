import { useFormik } from "formik";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import {
  StyledInput,
  StyledForm,
  StyledLabel,
  StyledInputWrapper,
} from "./StyledForm";
import MainButton from "../common/mainButton/MainButton";
import { useSignupMutation, useLoginMutation } from "redux/auth/authApiSlice";

const Form = ({ loc, btnText }) => {
  const isRegisterPage = loc === "/register";
  const [setRegisterData, { isSuccess }] = useSignupMutation();
  const [setLoginData] = useLoginMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      equalPassword: "",
    },
    onSubmit: (values) => {
      const loginData = { email: values.email, password: values.password };
      if (isRegisterPage) {
        setRegisterData(values);
      } else {
        setLoginData(loginData);
      }
      formik.resetForm();
      setTimeout(() => {
        setLoginData(loginData);
      }, 500);
      if (isSuccess) {
        navigate("/library", { replace: true });
      }
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
            value={formik.values.name}
          />
        </StyledInputWrapper>
      )}

      <StyledInputWrapper>
        <StyledLabel htmlFor="email">Електронна адреса</StyledLabel>
        <StyledInput
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        <StyledLabel htmlFor="password">Пароль</StyledLabel>
        <StyledInput
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </StyledInputWrapper>
      {isRegisterPage && (
        <StyledInputWrapper>
          <StyledLabel htmlFor="equalPassword">Підтвердити пароль</StyledLabel>
          <StyledInput
            id="equalPassword"
            name="equalPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.equalPassword}
          />
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
