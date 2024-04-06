import PropTypes from "prop-types";
import { format } from "date-fns";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import * as Yup from "yup";

import MainButton from "components/common/mainButton";
import {
  StyledResultWrapper,
  StyledResultTitle,
  StyledResultResultsWrapper,
  StyledResultResults,
  StyledResultInput,
  StyledResultLabel,
  StyledResultDate,
  StyledResultInputWrapper,
  StyledResultForm,
  StyledCalendarWrapper,
  StyledStatisticResult,
  StyledResultsContainer,
  StyledStatisticError,
} from "./StyledAddResult";
import { useAddResultMutation } from "redux/result/resultApiSlice";

const AddResult = ({ results = [] }) => {
  const [onShow, setOnShow] = useState(false);

  const [addResult] = useAddResultMutation();

  const handleToggleCalendar = (e) => {
    setOnShow((prev) => !prev);
  };

  useEffect(() => {
    if (onShow) {
      document.addEventListener("click", handleDocumentClick);
    }

    function handleDocumentClick(e) {
      if (onShow && e.target.nodeName === "DIV") {
        handleToggleCalendar();
      }
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [onShow]);

  const onChangeDate = (newDate) => {
    const formattedDate = format(newDate, "dd.MM.yyyy");

    formik.setValues((prevValues) => ({ ...prevValues, date: formattedDate }));

    handleToggleCalendar();
  };

  const addResultSchema = Yup.object().shape({
    pageAmount: Yup.string()
      .matches(/^\d+$/, "Тільки цифри")
      .max(3, "Не більше 3 цифр"),
  });

  const formik = useFormik({
    initialValues: {
      date: "",
      pageAmount: "",
    },

    validationSchema: addResultSchema,

    onSubmit: (values) => {
      if (isResultPicked) {
        toast.warning("Ви не обрали дату чи кількість сторінок", {
          theme: "colored",
          containerId: "mainContainer",
        });
        return;
      }
      addResult(values);
      toast.success("Результат додано!", {
        theme: "colored",
        containerId: "mainContainer",
      });
      formik.resetForm();
    },
  });

  const { date, pageAmount } = formik.values;

  const isResultPicked = date === "" || pageAmount === "";

  return (
    <StyledResultWrapper>
      <StyledResultTitle>Результати</StyledResultTitle>
      <StyledResultForm onSubmit={formik.handleSubmit}>
        <StyledResultDate>
          <StyledResultInputWrapper>
            <StyledResultLabel htmlFor="date">Дата</StyledResultLabel>
            <StyledResultInput
              type="text"
              name="date"
              id="date"
              autoComplete="off"
              value={formik.values.date}
              onChange={() => {}}
              onClick={handleToggleCalendar}
            />
          </StyledResultInputWrapper>
          {onShow && (
            <StyledCalendarWrapper>
              <Calendar onChange={(date) => onChangeDate(date)} />
            </StyledCalendarWrapper>
          )}
          <StyledResultInputWrapper>
            {formik.touched.pageAmount && formik.errors.pageAmount ? (
              <StyledStatisticError>
                {formik.errors.pageAmount}
              </StyledStatisticError>
            ) : (
              <StyledResultLabel htmlFor="pageAmount">
                Кількість сторінок
              </StyledResultLabel>
            )}

            <StyledResultInput
              type="text"
              name="pageAmount"
              id="pageAmount"
              value={formik.values.pageAmount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></StyledResultInput>
          </StyledResultInputWrapper>
        </StyledResultDate>
        <MainButton
          typeBtn="submit"
          text={"Додати результат"}
          register="true"
        />
      </StyledResultForm>
      <StyledStatisticResult>
        <StyledResultTitle>СТАТИСТИКА</StyledResultTitle>
        <StyledResultsContainer>
          {results?.map(({ date, time, pageAmount }, idx) => (
            <StyledResultResultsWrapper key={`${time}${idx}`}>
              <StyledResultResults>{date}</StyledResultResults>
              <StyledResultResults>{time}</StyledResultResults>
              <StyledResultResults>{pageAmount} стор.</StyledResultResults>
            </StyledResultResultsWrapper>
          ))}
        </StyledResultsContainer>
      </StyledStatisticResult>
    </StyledResultWrapper>
  );
};

AddResult.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
};

export default AddResult;
