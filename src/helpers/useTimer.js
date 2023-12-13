import { useState, useEffect, useMemo } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function useTimer(
  deadLine = new Date().getFullYear().toString(),
  interval = SECOND
) {
  const lastDate = useMemo(() => {
    return new Date(deadLine, 11, 31);
  }, [deadLine]);

  const [timeDif, setTimeDif] = useState(new Date(lastDate) - Date.now());

  useEffect(() => {
    // setTimeDif(new Date(deadLine) - Date.now());
    // console.log(Date.parse(new Date()));
    // console.log(new Date());

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
