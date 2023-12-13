import PropTypes from "prop-types";
import moment from "moment";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import useTimer from "helpers/useTimer";

import {
  StyledTimerWrapper,
  StyledTimerText,
  StyledTimerContainer,
  StyledTimerElement,
  StyledTimerTime,
  StyledTimerUnitPeriod,
} from "./StyledTimer";

const Timer = ({ title, deadline, ...props }) => {
  const { days, hours, minutes, seconds } = useTimer();

  return (
    <StyledTimerWrapper {...props}>
      <StyledTimerText>{title}</StyledTimerText>
      <StyledTimerContainer>
        {Object.entries({
          ДН: days,
          ГОД: hours,
          ХВ: minutes,
          СЕК: seconds,
        }).map(([label, value]) => (
          <StyledTimerElement key={label}>
            <StyledTimerTime>{value}</StyledTimerTime>
            <StyledTimerUnitPeriod>{label}</StyledTimerUnitPeriod>
          </StyledTimerElement>
        ))}
      </StyledTimerContainer>
    </StyledTimerWrapper>
  );
};

Timer.propTypes = { title: PropTypes.string.isRequired };

export default Timer;
