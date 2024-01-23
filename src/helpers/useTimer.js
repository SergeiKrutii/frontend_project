import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import goalsSelectors from "redux/goal/goalsSelectors";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function useTimerEndYear(deadLine) {
  const interval = SECOND;

  const lastDate = useMemo(() => {
    return new Date(deadLine);
  }, [deadLine]);

  const [timeDif, setTimeDif] = useState(new Date(lastDate) - Date.now());

  useEffect(() => {
    const timeOut = setInterval(() => {
      setTimeDif((time) => {
        return time - interval;
      });
    }, interval);

    return () => {
      clearInterval(timeOut);
    };
  }, [deadLine, interval]);

  return {
    days: `${Math.floor(timeDif / DAY)}`.padStart(2, "0"),
    hours: `${Math.floor((timeDif / HOUR) % 24)}`.padStart(2, "0"),
    minutes: `${Math.floor((timeDif / MINUTE) % 60)}`.padStart(2, "0"),
    seconds: `${Math.floor((timeDif / SECOND) % 60)}`.padStart(2, "0"),
  };
}

function useTimerForGoal() {
  const beginDate = useSelector(goalsSelectors.selectBeginDate);
  const endDate = useSelector(goalsSelectors.selectEndDate);
  const isGoalTimeOut = useSelector(goalsSelectors.selectTimeOut);

  const interval = SECOND;

  const [timeForGoal, setTimeForGoal] = useState(
    new Date(endDate) - new Date(),
    new Date() - new Date(beginDate) || null
  );

  useEffect(() => {
    if (timeForGoal !== null) {
      const timeOut = setInterval(() => {
        setTimeForGoal((time) => {
          return time - interval;
        });
      }, interval);

      if (isGoalTimeOut) {
        return clearInterval(timeOut);
      }

      return () => {
        clearInterval(timeOut);
      };
    }
  }, [interval, isGoalTimeOut, timeForGoal]);

  return {
    gDays: `${Math.floor(timeForGoal / DAY)}`.padStart(2, "0"),
    gHours: `${Math.floor((timeForGoal / HOUR) % 24)}`.padStart(2, "0"),
    gMinutes: `${Math.floor((timeForGoal / MINUTE) % 60)}`.padStart(2, "0"),
    gSeconds: `${Math.floor((timeForGoal / SECOND) % 60)}`.padStart(2, "0"),
  };
}

export { useTimerEndYear, useTimerForGoal };
