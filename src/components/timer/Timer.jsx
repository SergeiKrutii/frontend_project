import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useTimerEndYear, useTimerForGoal } from "helpers/useTimer";
import {
  StyledTimerWrapper,
  StyledTimerText,
  StyledTimerContainer,
  StyledTimerElement,
  StyledTimerTime,
  StyledTimerUnitPeriod,
} from "./StyledTimer";
import { useAchievedGoalMutation } from "redux/goal/goalsApiSlice";
import goalsSelectors from "redux/goal/goalsSelectors";

const Timer = ({ title, deadline, ...props }) => {
  const { days, hours, minutes, seconds } = useTimerEndYear(deadline);
  const { gDays, gHours, gMinutes, gSeconds } = useTimerForGoal();

  const id = useSelector(goalsSelectors.selectGoalId);
  const isGoalTimeOut = useSelector(goalsSelectors.selectTimeOut);
  const isGoaAchive = useSelector(goalsSelectors.selectGoalAchiv);

  const shoulBreakTime = isGoalTimeOut || isGoaAchive;

  const [achievedGoal] = useAchievedGoalMutation();

  const allVariablesAreZero =
    gDays <= "00" && gHours <= "00" && gMinutes <= "00" && gSeconds <= "00";

  useEffect(() => {
    if (allVariablesAreZero) {
      achievedGoal({ goalId: id, result: { isGoalTimeOut: true } });
    }
  }, [achievedGoal, allVariablesAreZero, id]);

  return (
    <StyledTimerWrapper {...props}>
      <StyledTimerText>{title}</StyledTimerText>
      <StyledTimerContainer>
        {!shoulBreakTime
          ? Object.entries({
              ДН: deadline ? days : gDays,
              ГОД: deadline ? hours : gHours,
              ХВ: deadline ? minutes : gMinutes,
              СЕК: deadline ? seconds : gSeconds,
            }).map(([label, value]) => (
              <StyledTimerElement key={label}>
                <StyledTimerTime>{value}</StyledTimerTime>
                <StyledTimerUnitPeriod>{label}</StyledTimerUnitPeriod>
              </StyledTimerElement>
            ))
          : Object.entries({
              ДН: deadline ? days : "00",
              ГОД: deadline ? hours : "00",
              ХВ: deadline ? minutes : "00",
              СЕК: deadline ? seconds : "00",
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

Timer.propTypes = {
  title: PropTypes.string.isRequired,
  deadline: PropTypes.instanceOf(Date),
};

export default Timer;
