import PropTypes from "prop-types";
import { useEffect, useState } from "react";
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
} from "./StyledAddTraningMobPage";
import SpriteIcon from "components/common/spriteIcon/SpriteIcon";
import { format } from "date-fns";
import GetBackButton from "components/common/getBackButton/GetBackButton";
import Container from "components/common/container/Container";
import { useMatchMedia } from "helpers/mediaQuery";

const AddTraningMobPage = (props) => {
  const [book, setBook] = useState("Обрати книги з бібліотеки");
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [onShow, setOnShow] = useState({ dateStart: false, dateEnd: false });
  const { isMobile } = useMatchMedia();

  const isDatePicked =
    beginDate === "" || endDate === "" || book === "Обрати книги з бібліотеки";

  function handleClick() {
    console.log("click");
  }

  const books = [
    "Властелин колец",
    "Гордость и предубеждение",
    "Тёмные начала",
    "Автостопом по галактике",
  ];

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
      setBeginDate(format(newDate, "dd MM yyyy"));
      handleToggleCalendar({ currentTarget: { id: e } });
    } else {
      setEndDate(format(newDate, "dd MM yyyy"));
      handleToggleCalendar({ currentTarget: { id: e } });
    }
  };

  const handleChange = (e) => {
    setBook(e.target.value);
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
          <StyledTraningBooksSelect
            onChange={handleChange}
            defaultValue={"Обрати книги з бібліотеки"}
          >
            <option value={book} style={{ display: "none" }}>
              Обрати книги з бібліотеки
            </option>
            {books &&
              books.map((elem, idx) => (
                <option key={`${idx}${elem}`} value={`${elem}`}>
                  {elem}
                </option>
              ))}
          </StyledTraningBooksSelect>

          <StyledAddTraningButton type="submit">Додати</StyledAddTraningButton>
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
        <StyledTraningBooksSelect
          onChange={handleChange}
          defaultValue={"Обрати книги з бібліотеки"}
        >
          <option value={book} style={{ display: "none" }}>
            Обрати книги з бібліотеки
          </option>
          {books &&
            books.map((elem, idx) => (
              <option key={`${idx}${elem}`} value={`${elem}`}>
                {elem}
              </option>
            ))}
        </StyledTraningBooksSelect>

        <StyledAddTraningButton
          onClick={handleClick}
          type="button"
          disabled={isDatePicked}
        >
          Додати
        </StyledAddTraningButton>
      </StyledAddTraningWrapper>
    </StyledAddTraningContainer>
  );
};

AddTraningMobPage.propTypes = {};

export default AddTraningMobPage;
