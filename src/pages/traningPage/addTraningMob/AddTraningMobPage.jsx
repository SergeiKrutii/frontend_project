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
} from "./StyledAddTraningMobPage";
import SpriteIcon from "components/common/spriteIcon/SpriteIcon";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetBookQuery } from "redux/book/booksApiSlice";
import GetBackButton from "components/common/getBackButton/GetBackButton";
import Container from "components/common/container/Container";
import { useMatchMedia } from "helpers/mediaQuery";
import { useNavigate } from "react-router-dom";
import AddTraningForm from "components/AddTraningForm/AddTraningForm";

const AddTraningMobPage = ({ setGoalBooks, setDateDiff }) => {
  return (
    <AddTraningForm setGoalBooks={setGoalBooks} setDateDiff={setDateDiff} />
  );
};

AddTraningMobPage.propTypes = {};

export default AddTraningMobPage;
