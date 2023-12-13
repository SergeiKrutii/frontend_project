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
} from "./StyledAddResult";
import { useEffect, useState } from "react";

const tmpData = [
  { date: "10.10.2019", time: "08:10:23", numberOfPage: "32 стор" },
  { date: "12.10.2019", time: "23:50:15", numberOfPage: "164 стор" },
  { date: "12.10.2019", time: "13:10:05", numberOfPage: "137 стор" },
  { date: "13.10.2019", time: "18:46:19", numberOfPage: "164 стор" },
  { date: "15.10.2019", time: "19:52:48", numberOfPage: "29 стор" },
];

const AddResult = (props) => {
  const [onShow, setOnShow] = useState(false);
  const [calendarDate, setCalendarDate] = useState("");

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
    setCalendarDate(formattedDate);
    formik.setValues((prevValues) => ({ ...prevValues, date: formattedDate }));

    handleToggleCalendar();
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      pageCount: "",
    },
    onSubmit: (values) => {
      // if (isResultPicked) {
      //   toast("Ви не обрали дату чи кількість сторінок");
      // }
    },
  });

  const { date, pageCount } = formik.values;

  const isResultPicked = date === "" || pageCount === "";

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
            <StyledResultLabel htmlFor="pageCount">
              Кількість сторінок
            </StyledResultLabel>
            <StyledResultInput
              type="text"
              name="pageCount"
              id="pageCount"
              value={formik.values.pageCount}
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

        {tmpData.map(({ date, time, numberOfPage }) => (
          <StyledResultResultsWrapper key={time}>
            <StyledResultResults>{date}</StyledResultResults>
            <StyledResultResults>{time}</StyledResultResults>
            <StyledResultResults>{numberOfPage}</StyledResultResults>
          </StyledResultResultsWrapper>
        ))}
      </StyledStatisticResult>
    </StyledResultWrapper>
  );
};

AddResult.propTypes = {};

export default AddResult;
