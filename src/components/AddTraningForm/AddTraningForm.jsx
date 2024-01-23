import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import {
  StyledAddTraningContainer,
  StyledTraningTitle,
  StyledTraningDate,
  StyledTraningBooksSelect,
  StyledAddTraningButton,
  StyledAddTraningWrapper,
  StyledCalendarWrapper,
  StyledTraningDateWrapper,
} from "./StyledAddTraningForm";
import SpriteIcon from "components/common/spriteIcon/SpriteIcon";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetBookQuery } from "redux/book/booksApiSlice";
import GetBackButton from "components/common/getBackButton/GetBackButton";
import Container from "components/common/container/Container";
import { useMatchMedia } from "helpers/mediaQuery";
import { useNavigate } from "react-router-dom";
import goalsSelectors from "redux/goal/goalsSelectors";
import { setTime } from "redux/goal/goalsSlice";

const AddTraningForm = ({
  setGoalBooks,
  books,
  setDateDiff,
  handleAddTraning,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [book, setBook] = useState("Обрати книги з бібліотеки");
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [onShow, setOnShow] = useState({ dateStart: false, dateEnd: false });
  const { isMobile } = useMatchMedia();

  const timeForGoalLeft =
    endDate && beginDate ? (endDate - beginDate) / (1000 * 60 * 60 * 24) : 0;

  const localStorValue = JSON.parse(localStorage.getItem("persist:goal"));
  const isDateSetStart = localStorValue?.beginDate.slice(1, -1);
  const isDateSetEnd = localStorValue?.endDate.slice(1, -1);

  const token = useSelector(authSelectors.selectToken);
  const isTraningBegin = useSelector(goalsSelectors.selectIsTraningBegin);
  // const haveBooks = false;
  // const { data } = useGetBookQuery(token ?? skipToken || !haveBooks && skip);
  const { data } = useGetBookQuery(token ?? skipToken);

  let isDatePicked =
    beginDate === "" || endDate === "" || book === "Обрати книги з бібліотеки";

  useEffect(() => {
    if (isTraningBegin === false && isDateSetStart && isDateSetEnd) {
      setBeginDate(new Date(isDateSetStart) || "");
      setEndDate(new Date(isDateSetEnd) || "");
    }
  }, [
    isDateSetEnd,
    isDateSetStart,
    isTraningBegin,
    localStorValue?.beginDate,
    localStorValue?.endDate,
  ]);

  const handleAddBook = (e) => {
    if (isMobile) {
      const bookForGoal = data?.find((elem) => elem.title === book);
      setGoalBooks((prevBooks) => [...prevBooks, bookForGoal]);
      // ТУТ ДОЛЖЕН БЫТЬ POST ЗАПРОС ДЛЯ СОЗДАНИЯ GOALS, И ПОСЛЕ УСПЕШНОГО ВЫПОЛНЕНИЯ
      //ПЕРЕКИНЕТ НА СТРАНИЦУ /TRANING ГДЕ ПРОИЗОЙДЕТ ПОВТОРНЫЙ ЗАПРОС GET /BOOKS
    }
    // const { _id } = books?.find((elem) => elem.title === book);
    // setGoalBooks((prevBooks) => ({
    //   booksId: [...prevBooks, _id],
    //   beginDate,
    //   endDate,
    // }));
    dispatch(
      setTime({ beginDate: beginDate.toString(), endDate: endDate.toString() })
    );
    handleChange(e);
    setDateDiff(timeForGoalLeft);
    if (isMobile) {
      navigate("/traning");
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////               А так можно?
  useEffect(() => {
    function handleDocumentClick(e) {
      const parent = onShow && e.target.nodeName === "DIV";

      if (parent && onShow.dateStart) {
        handleToggleCalendar({ currentTarget: { id: Object.keys(onShow)[0] } });
      }

      if (parent && onShow.dateEnd) {
        handleToggleCalendar({ currentTarget: { id: Object.keys(onShow)[1] } });
      }
    }
    if (onShow.dateStart || onShow.dateEnd) {
      document.addEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [onShow]);
  ////////////////////////////////////////////////////////////////////////////////////////////////
  function handleToggleCalendar(e) {
    const target = e.currentTarget?.id;

    setOnShow((prev) => {
      return {
        ...prev,
        [target]: !prev[target],
      };
    });
  }

  const onChangeDate = (newDate, e) => {
    if (e === "dateStart") {
      setBeginDate(newDate);
    } else {
      setEndDate(newDate);
    }
    handleToggleCalendar({ currentTarget: { id: e } });
  };

  const handleChange = (e) => {
    if (e.target.nodeName === "SELECT") {
      setBook(e.target.value);
    }
    if (e.target.nodeName === "BUTTON") {
      setBook("Обрати книги з бібліотеки");
    }
  };

  return isMobile ? (
    <Container>
      <StyledAddTraningContainer>
        {isMobile && <GetBackButton />}
        <StyledTraningTitle>Моє тренування</StyledTraningTitle>
        <StyledAddTraningWrapper>
          <StyledTraningDateWrapper>
            <StyledTraningDate
              onClick={handleToggleCalendar}
              name="dateStart"
              id="dateStart"
            >
              <SpriteIcon name={"icon_calendar"} />
              {beginDate ? format(beginDate, "dd.MM.yyyy") : "Початок"}
              <SpriteIcon name={"icon_dateArrow"} />
            </StyledTraningDate>

            {onShow.dateStart && (
              <StyledCalendarWrapper>
                <Calendar
                  onChange={(date) => onChangeDate(date, "dateStart")}
                  value={beginDate}
                />
              </StyledCalendarWrapper>
            )}
          </StyledTraningDateWrapper>
          <StyledTraningDateWrapper>
            <StyledTraningDate
              name="dateEnd"
              id="dateEnd"
              onClick={handleToggleCalendar}
            >
              <SpriteIcon name={"icon_calendar"} />
              {endDate ? format(endDate, "dd.MM.yyyy") : "Завершення"}
              <SpriteIcon name={"icon_dateArrow"} />
            </StyledTraningDate>

            {onShow.dateEnd && (
              <StyledCalendarWrapper>
                <Calendar
                  onChange={(date) => onChangeDate(date, "dateEnd")}
                  value={endDate}
                />
              </StyledCalendarWrapper>
            )}
          </StyledTraningDateWrapper>

          <StyledTraningBooksSelect onChange={handleChange} value={book}>
            <option style={{ display: "none" }}>
              Обрати книги з бібліотеки
            </option>
            {data &&
              data.map((elem, idx) => (
                <option key={`${idx}${elem.title}`} value={`${elem.title}`}>
                  {elem.title}
                </option>
              ))}
          </StyledTraningBooksSelect>
          <StyledAddTraningButton
            onClick={handleAddBook}
            type="button"
            disabled={isDatePicked}
          >
            Додати
          </StyledAddTraningButton>
        </StyledAddTraningWrapper>
      </StyledAddTraningContainer>
    </Container>
  ) : (
    <StyledAddTraningContainer>
      <StyledTraningTitle>Моє тренування</StyledTraningTitle>
      <StyledAddTraningWrapper>
        <StyledTraningDateWrapper>
          <StyledTraningDate
            onClick={handleToggleCalendar}
            name="dateStart"
            id="dateStart"
          >
            <SpriteIcon name={"icon_calendar"} />
            {beginDate ? beginDate.toString() : "Початок"}
            <SpriteIcon name={"icon_dateArrow"} />
          </StyledTraningDate>

          {onShow.dateStart && (
            <StyledCalendarWrapper>
              <Calendar
                onChange={(date) => onChangeDate(date, "dateStart")}
                value={beginDate}
              />
            </StyledCalendarWrapper>
          )}
        </StyledTraningDateWrapper>
        <StyledTraningDateWrapper>
          <StyledTraningDate
            name="dateEnd"
            id="dateEnd"
            onClick={handleToggleCalendar}
          >
            <SpriteIcon name={"icon_calendar"} />
            {endDate ? endDate.toString() : "Завершення"}
            <SpriteIcon name={"icon_dateArrow"} />
          </StyledTraningDate>

          {onShow.dateEnd && (
            <StyledCalendarWrapper>
              <Calendar
                onChange={(date) => onChangeDate(date, "dateEnd")}
                value={endDate}
              />
            </StyledCalendarWrapper>
          )}
        </StyledTraningDateWrapper>
        <StyledTraningBooksSelect onChange={handleChange} value={book}>
          <option style={{ display: "none" }}>Обрати книги з бібліотеки</option>
          {books &&
            books.map((elem, idx) => (
              <option key={`${idx}${elem.title}`} value={`${elem.title}`}>
                {elem.title}
              </option>
            ))}
        </StyledTraningBooksSelect>

        <StyledAddTraningButton
          onClick={handleAddBook}
          type="button"
          disabled={isDatePicked}
        >
          Додати
        </StyledAddTraningButton>
      </StyledAddTraningWrapper>
    </StyledAddTraningContainer>
  );
};

AddTraningForm.propTypes = {};

export default AddTraningForm;
