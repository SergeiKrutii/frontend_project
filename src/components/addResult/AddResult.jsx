import PropTypes from "prop-types";
import { format } from "date-fns";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calendar from "react-calendar";
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
} from "./StyledAddResult";
import { useEffect, useState } from "react";
import { useAddResultMutation } from "redux/result/resultApiSlice";

const AddResult = ({ results = [] }) => {
  const [onShow, setOnShow] = useState(false);
  const [calendarDate, setCalendarDate] = useState("");

  const [addResult, { data }] = useAddResultMutation();

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

  const formik = useFormik({
    initialValues: {
      date: "",
      pageAmount: "",
    },
    onSubmit: (values) => {
      // if (isResultPicked) {
      //   toast("Ви не обрали дату чи кількість сторінок");
      // }
      addResult(values);
      formik.resetForm();
    },
  });

  const { date, pageAmount } = formik.values;

  const isResultPicked = date === "" || pageAmount === "";

  return (
    <StyledResultWrapper>
      <ToastContainer position="bottom-center" />
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
              <Calendar
                onChange={(date) => onChangeDate(date)}
                value={calendarDate}
              />
            </StyledCalendarWrapper>
          )}
          <StyledResultInputWrapper>
            <StyledResultLabel htmlFor="pageAmount">
              Кількість сторінок
            </StyledResultLabel>
            <StyledResultInput
              type="text"
              name="pageAmount"
              id="pageAmount"
              value={formik.values.pageAmount}
              onChange={formik.handleChange}
            ></StyledResultInput>
          </StyledResultInputWrapper>
        </StyledResultDate>
        <MainButton
          isDatePicked={isResultPicked}
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

AddResult.propTypes = {};

export default AddResult;
