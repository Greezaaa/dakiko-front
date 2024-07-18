import { useState, useEffect } from "react";
import {
  format,
  differenceInMinutes,
  addDays,
  isBefore,
  isAfter,
} from "date-fns";
import { toZonedTime } from "date-fns-tz";

interface OpenCloseStatus {
  text: string;
  isOpen: boolean;
}

const useOpenCloseStatus = (): OpenCloseStatus => {
  const [status, setStatus] = useState<OpenCloseStatus>({
    text: "",
    isOpen: false,
  });

  useEffect(() => {
    const checkStatus = () => {
      const timeZone = "Europe/Madrid";
      const now = toZonedTime(new Date(), timeZone);

      const closingHourStart = 8;
      const closingMinuteStart = 0;
      const closingHourEnd = 12;
      const closingMinuteEnd = 0;

      const closeTimeStartToday = new Date(now);
      closeTimeStartToday.setHours(closingHourStart, closingMinuteStart, 0, 0);

      const closeTimeEndToday = new Date(now);
      closeTimeEndToday.setHours(closingHourEnd, closingMinuteEnd, 0, 0);

      let statusMessage = "Open";
      let isOpen = true;

      if (
        isAfter(now, closeTimeStartToday) &&
        isBefore(now, closeTimeEndToday)
      ) {
        isOpen = false;
        const minutesUntilOpen = differenceInMinutes(closeTimeEndToday, now);

        if (minutesUntilOpen <= 30) {
          statusMessage = `Opening soon, in ${minutesUntilOpen} minutes`;
        } else if (minutesUntilOpen <= 60) {
          statusMessage = `Opening soon, at ${format(
            closeTimeEndToday,
            "HH:mm"
          )}`;
        } else {
          statusMessage = "Closed";
        }
      } else if (isBefore(now, closeTimeStartToday)) {
        const minutesUntilClose = differenceInMinutes(closeTimeStartToday, now);

        if (minutesUntilClose <= 30) {
          statusMessage = `Closing soon, in ${minutesUntilClose} minutes`;
        } else if (minutesUntilClose <= 60) {
          statusMessage = `Closing soon, at ${format(
            closeTimeStartToday,
            "HH:mm"
          )}`;
        } else {
          statusMessage = "Open";
        }
      } else {
        const nextCloseTimeStart = addDays(closeTimeStartToday, 1);
        const minutesUntilClose = differenceInMinutes(nextCloseTimeStart, now);

        if (minutesUntilClose <= 30) {
          statusMessage = `Closing soon, in ${minutesUntilClose} minutes`;
        } else if (minutesUntilClose <= 60) {
          statusMessage = `Closing soon, at ${format(
            nextCloseTimeStart,
            "HH:mm"
          )}`;
        } else {
          statusMessage = "Open";
        }
      }

      setStatus({ text: statusMessage, isOpen });
    };

    checkStatus();
    const intervalId = setInterval(checkStatus, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return status;
};

export default useOpenCloseStatus;
